

# Plan: Potpuna migracija na Supabase

## Sto se radi

Prebaciti SVE preostale podatke na Supabase i ukloniti hardkodirane prijevode iz koda. Nema novih funkcionalnosti -- samo cistenje.

## Koraci

### 1. Migrirati privacy/cookie prijevode u bazu (SQL migracija)

U bazi nedostaje ~70 translation kljuceva za Privacy Policy i Cookie Policy stranice (privacy.*, cookie.*). Ovi prijevodi postoje samo hardkodirani u LanguageContext.tsx.

Kreirati SQL migraciju koja ubacuje sve privacy.* i cookie.* kljuceve za sva 4 jezika (EN, HR, IT, DE) -- ukupno ~280 redova.

### 2. Ocistiti LanguageContext.tsx

Trenutno datoteka ima ~1715 linija od kojih je ~1600 hardkodirani objekt `translations`.

Promjene:
- Ukloniti cijeli `export const translations: Translations = { ... }` objekt (~1600 linija)
- Ukloniti `Translations` interface (vise nije potreban)
- Dodati loading state -- dok se prijevodi ucitavaju iz Supabase, `t()` vraca prazan string umjesto kljuca (izbjegava "trepanje" kljuceva na ekranu)
- `t()` funkcija koristi samo `supabaseTranslations` bez fallbacka na hardkodirane vrijednosti
- Zadrzati cache logiku i paginaciju (vec implementirano)

Rezultat: datoteka ce imati ~120 linija umjesto ~1715.

### 3. Provjera

- Provjeriti da sve 4 jezika rade korektno
- Provjeriti Privacy i Cookie Policy stranice
- Provjeriti da nema "trepanja" kljuceva

---

## Tehnicke napomene

- Komponente (LocationBanner, AmenitiesSection, GallerySection) OSTAJU kakve jesu -- koriste `t()` koji vec povlaci iz Supabase
- Slike ostaju lokalne (src/assets/) -- upload u Storage rucno
- Edge funkcije ostaju nepromijenjene
- Nakon ove promjene, jedini izvor prijevoda je Supabase `translations` tablica
- Ako Supabase bude nedostupan, stranica ce prikazivati kljuceve umjesto teksta (svjestan trade-off za cistiji kod)

