

# Plan: Popravak rotacije Location bannera

## Problem

Trenutno postoji bug gdje se stvaraju višestruki intervali zbog nepravilnog čišćenja u `useEffect` hooku. Interval se pokreće unutar `setTimeout`-a, ali cleanup funkcija nije ispravno strukturirana, što uzrokuje da neki elementi rotiraju brže od očekivanog.

## Rješenje

### 1. Promjena intervala rotacije na 5 sekundi
- Promjena `ROTATION_INTERVAL` konstante s 10000ms na 5000ms

### 2. Ispravak useEffect logike
Restructuriranje `useEffect` hooka da ispravno čisti intervale:

```text
useEffect struktura:
┌─────────────────────────────────────────────┐
│  useEffect                                   │
│  ├── Definiraj timeout i interval reference │
│  ├── Pokreni timeout (initialDelay)         │
│  │   └── Unutar timeout-a pokreni interval  │
│  └── Cleanup funkcija                        │
│      ├── clearTimeout(timeout)              │
│      └── clearInterval(interval)            │
└─────────────────────────────────────────────┘
```

Ključna promjena je držanje referenci na `timeout` i `interval` izvan callback-ova, te čišćenje oba u glavnoj cleanup funkciji.

### 3. Uklanjanje problematične dependency
- Uklanjanje `currentCategory.items.length` iz dependency array-a jer uzrokuje ponovno pokretanje efekta pri svakoj promjeni kategorije
- Korištenje funkcijskog pristupa za pristup aktualnoj kategoriji unutar intervala

---

## Tehnički detalji

**Datoteka:** `src/components/sections/LocationBanner.tsx`

**Promjene:**

1. Linija 86: `ROTATION_INTERVAL = 5000` (5 sekundi umjesto 10)

2. Linije 102-119: Restrukturirani useEffect:
   - Koristiti `useRef` za praćenje trenutne kategorije i indeksa
   - Držati reference na timeout i interval u varijablama dostupnima cleanup funkciji
   - Ispravno čistiti oba timera pri unmount-u ili promjeni

