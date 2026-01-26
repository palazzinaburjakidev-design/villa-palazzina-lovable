
# Plan: Popravak vidljivosti coal texture embossinga

## Identificirani problemi

### Problem 1: Z-index konflikt
Pseudo-elementi (`::before` i `::after`) nemaju definiran z-index, a sadržaj sekcije ima `z-10`, što znači da sadržaj potpuno prekriva teksturu.

### Problem 2: Preniska opacity
- `::before` ima `opacity: 0.04` (4%)
- `::after` ima `opacity: 0.03` (3%)
- Boje unutar gradijenata imaju dodatnu nisku opacity (0.2-0.3)
- Efektivna vidljivost: ~1% - praktički nevidljivo

## Rješenje

### Izmjena 1: `src/index.css` - Dodati z-index i povećati opacity

```css
.coal-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;           /* NOVO: Iznad pozadine */
  opacity: 0.15;        /* PROMJENA: S 0.04 na 0.15 */
  pointer-events: none;
  /* ... ostalo isto */
}

.coal-texture::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;           /* NOVO: Iznad ::before */
  opacity: 0.12;        /* PROMJENA: S 0.03 na 0.12 */
  pointer-events: none;
  /* ... ostalo isto */
}
```

### Izmjena 2: Povećati intenzitet boja u gradijentima

Trenutno:
```css
hsla(var(--sandstone), 0.3)  /* 30% opacity */
```

Novo:
```css
hsla(var(--sandstone), 0.6)  /* 60% opacity za vidljivije linije */
```

### Izmjena 3: Osigurati da sadržaj ostane čitljiv

Sadržaj već ima `z-10`, što je dovoljno visoko iznad teksture (`z-1` i `z-2`).

## Vizualni rezultat

```text
┌─────────────────────────────────────────────────────────┐
│  SLOJ STRUKTURA (z-index)                               │
│  ┌─────────────────────────────────────────────────────┐│
│  │  z-10: Sadržaj (tekst, kartice, gumbi)              ││
│  │  z-2:  ::after (terracotta akcenti u kutovima)      ││
│  │  z-1:  ::before (dijagonalne linije, grid, šum)     ││
│  │  z-0:  bg-coal (solidna tamna pozadina)             ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

## Datoteke za izmjenu

| Datoteka | Promjena |
|----------|----------|
| `src/index.css` | Dodati z-index na pseudo-elemente, povećati opacity i intenzitet boja |

## Preporučene opacity vrijednosti

Za suptilan ali vidljiv efekt:
- `::before` (linije i grid): `opacity: 0.12-0.18`
- `::after` (kutni akcenti): `opacity: 0.08-0.15`
- Boje u gradijentima: `0.5-0.7` umjesto `0.2-0.3`

Ove vrijednosti daju uočljivu teksturu koja ne ometa čitljivost sadržaja.
