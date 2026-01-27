
# Plan: Pomakni vagone ispod teksta, tunel desno

## Problem
Ilustracija se preklapa s tekstom jer:
1. Lijevi SVG (vagoni) zauzima 60% širine (`w-3/5`) i prekriva centralni tekst
2. Desni SVG (tunel SRETNO) je ispravno pozicioniran desno

## Rješenje
Reorganizirati layout tako da:
1. **Vagoni budu samo na lijevom rubu** - smanjiti širinu i pomaknuti ih skroz lijevo
2. **Tunel SRETNO ostane desno** - već je ispravno
3. **Srednji dio ostane prazan** - za tekst iznad

## Tehnički detalji

### Izmjena u `MiningIllustration.tsx` - TunnelEntrance komponenta

Trenutno:
- Lijevi SVG: `w-3/5 sm:w-1/2` (60% / 50% širine)
- Desni SVG: `w-2/5 sm:w-1/3` (40% / 33% širine)

Novo:
- Lijevi SVG: `w-1/3 sm:w-1/4` (33% / 25% širine) - samo lijevi rub
- Desni SVG: `w-1/3 sm:w-1/4` (33% / 25% širine) - samo desni rub
- Sredina ostaje prazna za tekst

```text
┌────────────────────────────────────────────────────────────┐
│                       TEKST                                 │
│        "Svaka soba je pažljivo dizajnirana..."             │
├──────────────┼──────────────────────────┼──────────────────┤
│  🚃 🧑‍🏭 🚃    │       (prazan prostor)    │   ⛏️ SRETNO ⛏️   │
│   (25%)      │          (50%)            │      (25%)       │
└──────────────┴──────────────────────────┴──────────────────┘
```

### Datoteka za izmjenu

**`src/components/MiningIllustration.tsx`** - linija 81-83 i 156-158:

1. Lijevi SVG (vagoni):
   - Promijeniti `w-3/5 sm:w-1/2` u `w-1/3 sm:w-1/4`
   - Smanjiti viewBox ili ukloniti neke vagone da stanu u manji prostor

2. Desni SVG (tunel):
   - Promijeniti `w-2/5 sm:w-1/3` u `w-1/3 sm:w-1/4`
