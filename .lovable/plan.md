
# Plan: Poboljšanje rudarskih ilustracija

## Pregled problema

Korisnik je identificirao nekoliko ključnih problema s trenutnim implementacijama:

1. Ilustracije izgledaju amaterski - previše jednostavne geometrijske forme
2. Tekst "SRETNO" u Gallery sekciji nije vidljiv
3. Rudari ne idu konzistentno s lijeva na desno
4. Gallery ilustracija treba biti poravnata desno
5. Amenities sadržaj treba bolje centriranje

---

## Rješenje

### 1. Profesionalniji vintage stil ilustracija

Trenutni problem: Ilustracije koriste jednostavne `ellipse`, `circle` i `line` elemente koji izgledaju dječje.

Promjena: Zamjena s detaljnijim SVG path elementima koji simuliraju vintage gravure:
- Korištenje hatching linija za sjene umjesto solid fillova
- Varijabilne debljine linija za simulaciju pritiska alata za graviranje
- Više anatomskih detalja na siluetama rudara
- Dodavanje teksturnih linija na alate i odjeću

### 2. Vidljivost "SRETNO" natpisa

Trenutni problem: Tekst ima `fill="hsl(35 25% 75% / 0.7)"` i pozadina bannera ima nizak kontrast.

Promjena u `TunnelEntrance` komponenti:
- Povećati opacity teksta na 1.0 (puna vidljivost)
- Dodati tamnu pozadinu banneru za bolji kontrast
- Povećati veličinu fonta s 12 na 14-16
- Dodati suptilnu sjenu teksta

### 3. Konzistentan smjer kretanja rudara (lijevo na desno)

Trenutni problem: Neki rudari gledaju/hodaju u različitim smjerovima.

Promjena u `MinersWalking` komponenti:
- Svi rudari hodaju prema desno (prema ulazu rudnika na desnoj strani)
- Krampovi i alati u desnoj ruci, usmjereni prema naprijed
- Ulaz u rudnik ostaje na desnoj strani kao odredište

### 4. Pozicioniranje Gallery ilustracije

Trenutni problem: Ilustracija je centrirana, ali ima više prostora desno.

Promjena u `GallerySection.tsx`:
- Umjesto `left-1/2 -translate-x-1/2` koristiti `right-4 sm:right-8`
- Ilustracija će biti poravnata uz desni rub gdje ima više slobodnog prostora

### 5. Centriranje Amenities sadržaja

Trenutni problem: Sadržaj izgleda pomaknut udesno.

Promjena u `AmenitiesSection.tsx`:
- Provjeriti i ukloniti bilo kakav padding/margin koji pomiče sadržaj
- Osigurati da je grid centriran unutar kontejnera

---

## Tehnički detalji

### Datoteka: `src/components/MiningIllustration.tsx`

**TunnelEntrance promjene:**
```text
Linija 96-108: SRETNO banner
- Promijeniti: fill="hsl(25 35% 50% / 0.25)" -> fill="hsl(25 35% 40% / 0.8)"
- Promijeniti: fill="hsl(35 25% 75% / 0.7)" -> fill="hsl(35 25% 85% / 1)"
- Dodati: fontSize="14" umjesto 12
- Dodati: text-shadow efekt kroz filter ili stroke
```

**MinersWalking promjene:**
```text
Linije 146-196: Svih 5 rudara
- Okrenuti sve figure da gledaju/hodaju udesno
- Uniformni smjer krampova i alata (u desnoj ruci, usmjereni naprijed-desno)
- Dodati više detalja na siluete (hatching linije na odjeći)
- Poboljšati proporcije tijela za profesionalniji izgled
```

**Općenito za sve ilustracije:**
- Povećati opacity na svim elementima (trenutno 0.15-0.25 -> 0.3-0.5)
- Dodati hatching linije za vintage gravura efekt
- Poboljšati proporcije figura

### Datoteka: `src/components/sections/GallerySection.tsx`

```text
Linija s MiningIllustration:
Trenutno: className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
Novo: className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-20"
```

### Datoteka: `src/components/sections/AmenitiesSection.tsx`

```text
Provjeriti container padding i osigurati centriranje:
- max-w-7xl ostaje
- Dodati mx-auto ako nedostaje
- Ukloniti asimetrični padding ako postoji
```

---

## Vizualni primjer poboljšanih rudara

Prije (jednostavne forme):
```text
  O      <- krug za glavu
 /|\     <- linije za tijelo
 / \     <- linije za noge
```

Poslije (vintage gravura stil):
```text
  ╭─╮    <- detaljna kaciga s lampom
  │●│    <- lice s detaljem
 ╱│ │╲   <- ramena s hatching linijama
 │ │ │   <- tijelo s teksturom
╱  │  ╲  <- noge u pokretu
     ⚒   <- detaljni kramp
```

---

## Promjene po datotekama

1. **`src/components/MiningIllustration.tsx`**
   - Redizajn svih 4 ilustracija s boljim SVG pathovima
   - Povećanje kontrasta i vidljivosti
   - Konzistentan smjer kretanja

2. **`src/components/sections/GallerySection.tsx`**
   - Poravnanje ilustracije udesno

3. **`src/components/sections/AmenitiesSection.tsx`**
   - Provjera i korekcija centriranja sadržaja
