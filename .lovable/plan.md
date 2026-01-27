
# Plan: Repositioniranje ilustracije tunela u Gallery sekciji

## Cilj
Povećati ilustraciju na prethodnu veličinu, ali pozicionirati ulaz "SRETNO" desno (gdje nema teksta), dok vagoni i tračnice mogu biti ispod teksta.

## Pristup

Umjesto jednog centriranog SVG-a, razdvojit ću ilustraciju na dvije komponente:
1. **Tračnice i vagoni** - puna širina, ispod teksta (lijevo-sredina)
2. **Tunel "SRETNO"** - pozicioniran desno

## Tehnički detalji

### Korak 1: Modificirati `TunnelEntrance` komponentu u `MiningIllustration.tsx`

Struktura će biti:
```
<div className="relative w-full">
  <!-- Tračnice - puna širina -->
  <svg>rails...</svg>
  
  <!-- Vagoni i rudari - lijeva strana -->
  <svg className="absolute left-0 bottom-0 w-2/3">
    wagons + miners...
  </svg>
  
  <!-- Tunel SRETNO - desna strana -->
  <svg className="absolute right-0 bottom-0 w-1/3">
    tunnel entrance...
  </svg>
</div>
```

### Korak 2: Ažurirati className u `GallerySection.tsx`

Vratiti punu širinu:
```jsx
className="absolute bottom-4 sm:bottom-6 left-0 right-0 mx-auto w-full max-w-3xl px-4 z-20"
```

### Korak 3: Detalji SVG rasporeda

**Lijevi dio (vagoni i rudari):**
- Wagon 1 - lijevo
- Miner 1 - gura wagon
- Wagon 2 
- Miner 2 - hoda
- Wagon 3

**Desni dio (tunel):**
- Kameni luk tunela
- "SRETNO" natpis
- Miner koji izlazi iz tunela

## Vizualni prikaz

```text
┌─────────────────────────────────────────────────────────┐
│                       TEKST                              │
│              "Svaka soba je pažljivo..."                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🚃──🧑‍🏭──🚃──🧑‍🏭──🚃 ─────────────────── ⛏️ SRETNO ⛏️ │
│  ═══════════════════════════════════════════════════════│
│  (vagoni ispod teksta)              (tunel desno)       │
└─────────────────────────────────────────────────────────┘
```

## Datoteke za izmjenu

1. **`src/components/MiningIllustration.tsx`**
   - Reorganizirati `TunnelEntrance` komponentu s odvojenim pozicioniranjem tunela i vagona

2. **`src/components/sections/GallerySection.tsx`**
   - Vratiti punu širinu: `w-full max-w-3xl`
