

# Plan: Poboljšanje text-shadow za mobilne uređaje

## Problem
Trenutna text-shadow koristi fiksni 2px offset za stroke efekt koji na mobilnom prikazu (manji tekst) izgleda pregrubo - crne linije su previše vidljive u odnosu na veličinu slova.

## Rješenje
Zamijeniti "stroke" pristup s mekanim, više difuznim glow efektom koji se skalira bolje na svim veličinama ekrana.

## Izmjena

**Datoteka:** `src/components/sections/HeroSection.tsx`

**Linija 67 - trenutno:**
```tsx
style={{ textShadow: '-2px -2px 0 rgba(0, 0, 0, 0.8), 2px -2px 0 rgba(0, 0, 0, 0.8), -2px 2px 0 rgba(0, 0, 0, 0.8), 2px 2px 0 rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.9), 0 4px 30px rgba(0, 0, 0, 0.7)' }}
```

**Novo:**
```tsx
style={{ 
  textShadow: '0 2px 4px rgba(0, 0, 0, 1), 0 4px 8px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)' 
}}
```

## Kako novo rješenje funkcionira

| Sjena | Svrha |
|-------|-------|
| `0 2px 4px` (opacity 1) | Uska, tamna sjena direktno ispod teksta za čitljivost |
| `0 4px 8px` (opacity 0.9) | Srednja sjena za dubinu |
| `0 0 30px` (opacity 0.8) | Mekani glow oko teksta |
| `0 0 60px` (opacity 0.6) | Širi halo efekt za dodatni kontrast |

## Prednosti novog pristupa
- Nema oštrih "linija" - sve sjene su mekane (blur > 0)
- Skalira se proporcionalno s veličinom teksta
- Izgleda elegantnije na svim uređajima
- Zadržava čitljivost preko svijetlih pozadina

