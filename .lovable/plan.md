
# Plan: Prebacivanje svih podataka u Supabase (API za web + APK)

## Pregled

Trenutno je sav sadrzaj (prijevodi, amenities, lokacije, galerija) hardkodiran u React komponentama. Plan je premjestiti sve podatke u Supabase tablice i kreirati edge funkcije kao REST API koji koriste i web stranica i buduca Android aplikacija.

## Faza 1: Kreiranje Supabase tablica

### Tablica `translations`
```
id (uuid, PK)
key (text) -- npr. 'hero.brand'
lang (text) -- 'en', 'hr', 'it', 'de'
value (text) -- prevedeni tekst
```
- RLS: Javni SELECT (svi mogu citati), bez INSERT/UPDATE/DELETE za anonimne korisnike
- Unosi: svih ~400 kljuceva x 4 jezika = ~1600 redova

### Tablica `amenities`
```
id (uuid, PK)
icon_name (text) -- npr. 'Waves', 'Sparkles'
sort_order (integer)
```
- Amenity nazivi i opisi idu kroz `translations` tablicu (kljucevi poput 'amenities.pool.title')
- 8 stavki

### Tablica `locations`
```
id (uuid, PK)
category (text) -- 'beaches', 'towns', 'transport', 'restaurants'
image_key (text) -- naziv slike npr. 'santa-marina'
distance_km (numeric)
google_maps_url (text, nullable)
photo_credit (text, nullable)
sort_order (integer)
```
- Nazivi, opisi i udaljenosti idu kroz `translations` tablicu
- ~15 stavki

### Tablica `gallery_albums`
```
id (uuid, PK)
album_key (text) -- npr. 'pool', 'terrace'
category (text) -- 'exterior', 'living', 'bedrooms', 'bathrooms'
sort_order (integer)
```

### Tablica `gallery_images`
```
id (uuid, PK)
album_id (uuid, FK -> gallery_albums.id)
image_url (text) -- URL iz Supabase Storage
sort_order (integer)
is_cover (boolean, default false)
```
- Slike se uploadaju u Supabase Storage bucket `gallery`
- ~75 slika ukupno

### Tablica `villa_info`
```
id (uuid, PK)
key (text) -- npr. 'name', 'address', 'latitude', 'longitude', 'airbnb_url', 'max_guests'
value (text)
```

## Faza 2: Supabase Storage

- Kreirati bucket `gallery` (public)
- Uploadati sve slike iz `src/assets/` u odgovarajuce foldere:
  - `gallery/pool/pool-1.avif`, `gallery/pool/pool-2.avif` itd.
  - `gallery/bedrooms/bedroom1-1.avif` itd.
  - `gallery/locations/santa-marina.webp` itd.
- Slike lokacija (plaže, gradovi) također u bucket

## Faza 3: Edge funkcije (REST API)

### `translations` edge funkcija
- `GET /translations?lang=hr` -- vraca sve prijevode za zadani jezik
- `GET /translations?lang=hr&prefix=hero` -- filtriranje po prefixu
- Odgovor: `{ "hero.brand": "Villa Palazzina Burjaki", "hero.title": "Autentični Istarski Bijeg", ... }`

### `amenities` edge funkcija
- `GET /amenities?lang=hr`
- Odgovor: niz amenity objekata s prevedenim nazivima i opisima

### `locations` edge funkcija
- `GET /locations?lang=hr`
- `GET /locations?lang=hr&category=beaches`
- Odgovor: niz lokacija s prevedenim nazivima, opisima, slikama i koordinatama

### `gallery` edge funkcija
- `GET /gallery` -- vraca sve albume s brojem slika i cover URL-om
- `GET /gallery?album=pool` -- vraca sve slike za odredeni album
- `GET /gallery?category=exterior` -- filtriranje po kategoriji

### `villa-info` edge funkcija
- `GET /villa-info` -- vraca sve podatke o vili (adresa, koordinate, Airbnb URL, itd.)

## Faza 4: Azuriranje React frontenda

### Novi hook: `useTranslations`
- Zamjenjuje hardkodirani `LanguageContext`
- Dohvaca prijevode iz Supabase tablice umjesto iz staticnog objekta
- Kešira prijevode u memoriji nakon prvog dohvata
- Fallback na engleski ako prijevod ne postoji

### Azuriranje komponenti
- `AmenitiesSection.tsx`: Dohvaca amenities podatke iz Supabase
- `LocationSection.tsx` + `LocationBanner.tsx`: Dohvaca lokacije iz Supabase
- `GallerySection.tsx`: Dohvaca albume i slike iz Supabase Storage
- `HeroSection.tsx`: Dohvaca villa info podatke
- Ukloniti sve hardkodirane importove slika iz `src/assets/`

### Loading stanja
- Dodati skeleton loadere dok se podaci ucitavaju
- Dodati error handling za slucaj da Supabase nije dostupan

## Faza 5: Migracija podataka

- SQL skripta za unos svih ~1600 prijevoda
- SQL skripta za unos 8 amenityja
- SQL skripta za unos ~15 lokacija
- SQL skripta za unos ~18 albuma i ~75 slika
- Upload slika u Storage bucket

## Redoslijed implementacije

1. Kreiranje tablica (migracija)
2. Kreiranje Storage bucketa i upload slika
3. Unos podataka u tablice
4. Kreiranje edge funkcija (5 komada)
5. Kreiranje `useTranslations` hooka
6. Azuriranje svake komponente redom
7. Testiranje web stranice
8. Dokumentiranje API-ja za APK razvoj

## Tehnicke napomene

- Sve tablice imaju RLS s javnim SELECT pravilom (podaci su javni)
- Edge funkcije ne zahtijevaju autentifikaciju (javni API)
- Prijevodi se kešieraju na klijentu nakon prvog dohvata da se smanji broj upita
- Slike iz Supabase Storage imaju javne URL-ove
- Stare slike iz `src/assets/` se mogu ukloniti nakon migracije (smanjuje bundle)

## Procjena opsega

Ovo je VELIK posao koji zahtijeva vise koraka:
- 5 tablica za kreirati
- ~1700+ redova podataka za unijeti
- ~75 slika za uploadati u Storage
- 5 edge funkcija za napisati
- 6+ komponenti za azurirati
- Novi hook za prijevode

Preporucam raditi u fazama, pocevsi od tablica i edge funkcija, pa zatim postupno azurirati komponente.
