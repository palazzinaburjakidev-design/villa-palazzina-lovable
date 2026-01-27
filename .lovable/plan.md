
# Plan: Dodavanje vintage rudarskih ilustracija na sekcije

## Pregled

Implementacija tematskih rudarskih SVG ilustracija u vintage/retro stilu koje ce se prikazivati na donjim rubovima svih sekcija osim Hero sekcije. Ovo ce pojacati "Coal and Stone" vizualni identitet stranice i povezati ga s rudarskom povijescu Labina i Istarske regije.

---

## Vizualni koncept

Svaka sekcija ce imati jedinstvenu ilustraciju koja prica pricu:

```text
┌─────────────────────────────────────────────────────────────────┐
│                        GALLERY SEKCIJA                          │
│                         (sadrzaj)                               │
│                                                                 │
│    ╭────────────────────────────────────────────────────╮      │
│    │                    SRETNO                          │      │
│    ╰────────────────────────────────────────────────────╯      │
│          ╱▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔╲                │
│         ╱   (polukruzni ulaz u tunel rudnika)   ╲               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       AMENITIES SEKCIJA                         │
│                         (sadrzaj)                               │
│                                                                 │
│      ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲              │
│     /  🧑‍🏭    🧑‍🏭       🧑‍🏭    🧑‍🏭    🧑‍🏭    🧑‍🏭      🏔️  \             │
│    (siluete rudara s krampovima kako idu prema rudniku)         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       LOCATION SEKCIJA                          │
│                         (sadrzaj)                               │
│                                                                 │
│    ═══════════════════╗                                         │
│                       ║ ┌──────┐                                │
│    ═══════════════════╬═│ COAL │══════════════════════          │
│         (tracnice)      └──────┘ (kolica s ugljem)              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        ABOUT SEKCIJA                            │
│                         (sadrzaj)                               │
│                                                                 │
│         ⚒️        🪔        ⛏️        🔦        ⚒️               │
│    (dekorativni border s rudarskim alatima i lampama)           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Detalji implementacije

### 1. Nova komponenta: MiningIllustration

**Datoteka:** `src/components/MiningIllustration.tsx`

Centralna komponenta koja sadrzi sve SVG ilustracije:

- `type="tunnel-entrance"` - Polukruzni ulaz u tunel s natpisom "SRETNO"
- `type="miners-walking"` - Siluete rudara s krampovima
- `type="mine-cart"` - Rudarska kolica na tracnicama
- `type="mining-tools"` - Dekorativni border s alatima

Karakteristike:
- SVG ilustracije u vintage/retro stilu
- Boje iz postojece palete: `sandstone/20`, `terracotta/15`
- Responzivne velicine (manje na mobilnim uredajima)
- Suptilna animacija fade-in kada sekcija postane aktivna

### 2. Azuriranje sekcija

#### GallerySection.tsx
- Dodati `MiningIllustration type="tunnel-entrance"` na dnu sekcije
- Pozicioniranje: `absolute bottom-4 left-1/2 -translate-x-1/2`
- Velicina: sirina 200-300px, visina 60-80px

#### AmenitiesSection.tsx
- Dodati `MiningIllustration type="miners-walking"` na dnu
- Pozicioniranje: `absolute bottom-4 left-0 right-0`
- Velicina: puna sirina sekcije, visina 50-70px

#### LocationSection.tsx
- Dodati `MiningIllustration type="mine-cart"` na dnu
- Pozicioniranje: `absolute bottom-4 left-1/2 -translate-x-1/2`
- Velicina: sirina 250-350px, visina 40-60px

#### AboutSection.tsx
- Dodati `MiningIllustration type="mining-tools"` iznad footera
- Pozicioniranje: unutar content area, prije footer elementa
- Velicina: puna sirina, visina 30-50px

---

## SVG dizajn detalji

### Tunnel Entrance (Gallery)
```text
Elementi:
- Polukruzni luk (kao ulaz u tunel)
- Natpis "SRETNO" na vrhu luka (tradicijski rudarski pozdrav)
- Drvene grede koje podupiru tunel
- Suptilna tekstura kamena
```

### Miners Walking (Amenities)
```text
Elementi:
- 4-6 silueta rudara u razlicitim pozama
- Krampovi i lopate u rukama
- Rudarske kacige/lampe na glavama
- Hodaju prema desno (prema rudniku)
- Planinski/brdaski obris u pozadini
```

### Mine Cart (Location)
```text
Elementi:
- Rudarska kolica (vagonet) napunjena ugljem
- Tracnice ispod kolica
- Rudar koji gura kolica (silueta)
- Komadici ugljena koji ispadaju
```

### Mining Tools (About)
```text
Elementi:
- Horizontalni dekorativni border
- Ponavljajuci uzorak: kramp, lampa, lopata, sjekira
- Vintage ornamenti izmedu alata
- Suptilna linija iznad i ispod
```

---

## Stilske smjernice

### Boje
- Primarna: `sandstone` s 15-25% opacity za mekoci efekt
- Akcent: `terracotta` s 10-20% opacity za toplinu
- Stroke: `sandstone/30` za linije i obrube

### Vintage efekti
- Grubi/nepravilni rubovi (ne savrseno glatki)
- Minimalne sjene za dubinu
- Stil koji podsjeca na stare gravure ili drvoreze

### Responzivnost
- Desktop: Pune ilustracije s detaljima
- Tablet: Blago smanjene, manje detalja
- Mobile: Pojednostavljene verzije ili skrivene ako zauzimaju previse prostora

### Animacije
- `fade-in` animacija kada sekcija postane aktivna (0.5s delay)
- Suptilan `translateY` za "dizanje" efekt
- Opciono: blagi parallax efekt pri scrollanju

---

## Datoteke za kreiranje/izmjenu

1. **Kreirati:** `src/components/MiningIllustration.tsx`
   - Nova komponenta s SVG ilustracijama

2. **Azurirati:** `src/components/sections/GallerySection.tsx`
   - Dodati tunnel-entrance ilustraciju

3. **Azurirati:** `src/components/sections/AmenitiesSection.tsx`
   - Dodati miners-walking ilustraciju

4. **Azurirati:** `src/components/sections/LocationSection.tsx`
   - Dodati mine-cart ilustraciju

5. **Azurirati:** `src/components/sections/AboutSection.tsx`
   - Dodati mining-tools ilustraciju

---

## Napomena o "SRETNO"

"Sretno" (ili "Sretan put") je tradicionalni rudarski pozdrav koji su rudari koristili pri ulasku u rudnik. To je bio nacin zelenja srece i sigurnog povratka. Ovaj natpis na ulazu u tunel ce dodati autenticnost i povezati villu s lokalnom rudarskom bastinom Labina - grada koji je bio poznat po ugljenokopu.
