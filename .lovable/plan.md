

# Plan: Prikazivanje slika plaža na mobilnim uređajima

## Problem

Slike plaža su trenutno skrivene na mobilnim uređajima pomoću CSS klase `hidden sm:block`. Ovo znači da se slike prikazuju samo na ekranima širim od 640px.

## Rješenje

Prikazati slike i na mobilnim uređajima, ali s prilagođenim rasporedom koji koristi vertikalni (kolumnski) layout umjesto horizontalnog kako bi se osigurala dobra čitljivost i estetika.

---

## Tehnički detalji

**Datoteka:** `src/components/sections/LocationBanner.tsx`

### Promjene:

1. **Linija 188** - Ukloniti `hidden sm:block` i omogućiti prikaz slike na svim veličinama:
   - Trenutno: `hidden sm:block flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52`
   - Novo: `flex-shrink-0 w-24 h-24 sm:w-44 sm:h-44 md:w-52 md:h-52`
   - Dodana manja veličina (`w-24 h-24` = 96px) za mobilne uređaje

2. **Linija 184** - Promijeniti layout u kolumnski na mobilnim uređajima:
   - Trenutno: `flex items-center justify-center gap-4 sm:gap-6`
   - Novo: `flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6`
   - Na mobilnim ekranima slika će biti iznad teksta

3. **Linija 176** - Povećati visinu kontejnera za mobilne uređaje zbog vertikalnog layouta:
   - Trenutno: `h-44 sm:h-52 md:h-60`
   - Novo: `h-56 sm:h-52 md:h-60`
   - Veća visina na mobilnim ekranima (224px) da stane slika + tekst ispod nje

4. **Linija 198** - Centrirati tekst na mobilnim uređajima:
   - Tekst ostaje centriran na svim veličinama (već je `text-center`)

### Vizualni prikaz promjene layouta:

**Desktop (sm+):** Horizontalni layout
```text
┌─────────────────────────────────────┐
│  [SLIKA]  │  Naslov plaže          │
│           │  Opis i udaljenost     │
└─────────────────────────────────────┘
```

**Mobilni:** Vertikalni layout
```text
┌─────────────────────┐
│       [SLIKA]       │
│    Naslov plaže     │
│  Opis i udaljenost  │
└─────────────────────┘
```

