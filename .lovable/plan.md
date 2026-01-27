
# Analiza problema s veličinom ilustracija

## Pronađeni uzrok

Ilustracije u sekcijama **Gallery** i **Location** ostaju malene zbog razlike u CSS klasama na `MiningIllustration` komponenti.

### Usporedba className propova:

| Sekcija | className | Rezultat |
|---------|-----------|----------|
| **Amenities** (ispravno) | `w-full max-w-3xl px-4 left-0 right-0 mx-auto` | Puna širina do 768px |
| **Gallery** (problem) | `right-4 sm:right-8` | Nema definirane širine |
| **Location** (problem) | `left-1/2 -translate-x-1/2` | Nema definirane širine |

### Zašto se to događa:

1. Amenities sekcija ima `w-full max-w-3xl` na vanjskom kontejneru
2. Gallery i Location nemaju `w-full` - SVG unutar komponente nema referencu za izračun širine
3. Iako je `max-w-3xl` postavljen na SVG elemente unutar MiningIllustration.tsx, bez `w-full` na roditeljskom elementu, SVG se skalira prema svom sadržaju umjesto prema dostupnom prostoru

## Plan popravka

### Korak 1: Ažurirati GallerySection.tsx (redak 487)
Promijeniti:
```jsx
className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-20"
```
U:
```jsx
className="absolute bottom-4 sm:bottom-6 left-0 right-0 mx-auto w-full max-w-3xl px-4 z-20"
```

### Korak 2: Ažurirati LocationSection.tsx (redak 82)
Promijeniti:
```jsx
className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
```
U:
```jsx
className="absolute bottom-4 sm:bottom-6 left-0 right-0 mx-auto w-full max-w-3xl px-4 z-20"
```

## Tehnički detalji

Ključne klase koje omogućuju ispravno skaliranje:
- `w-full` - omogućuje elementu da zauzme punu širinu roditelja
- `max-w-3xl` - ograničava maksimalnu širinu na 768px
- `left-0 right-0 mx-auto` - centrira element horizontalno
- `px-4` - dodaje padding s lijeve i desne strane

Ova promjena osigurava da sve ilustracije imaju identičan layout kao Amenities sekcija koja trenutno ispravno prikazuje ilustraciju.
