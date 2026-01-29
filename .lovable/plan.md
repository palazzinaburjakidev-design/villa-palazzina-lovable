
# Plan: Pojačavanje vidljivosti naslova "Villa Palazzina Burjaki"

## Problem
Naslov "Villa Palazzina Burjaki" na Hero sekciji ima terracotta boju koja se loše vidi preko svijetlih dijelova pozadinske slike (zeleno drveće). Trenutna text-shadow je mekana i proširena, ali nedostaje joj oštra kontura.

## Rješenje
Dodati višeslojnu text-shadow s oštrim crnim obrubom (stroke efekt) plus mekanim glow efektom za bolju čitljivost.

## Izmjena

**Datoteka:** `src/components/sections/HeroSection.tsx`

**Linija 67 - trenutno:**
```tsx
style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 4px 24px rgba(0, 0, 0, 0.6)' }}
```

**Novo:**
```tsx
style={{ 
  textShadow: `
    -2px -2px 0 rgba(0, 0, 0, 0.8),
    2px -2px 0 rgba(0, 0, 0, 0.8),
    -2px 2px 0 rgba(0, 0, 0, 0.8),
    2px 2px 0 rgba(0, 0, 0, 0.8),
    0 0 20px rgba(0, 0, 0, 0.9),
    0 4px 30px rgba(0, 0, 0, 0.7)
  `
}}
```

## Kako rješenje funkcionira

| Sjena | Svrha |
|-------|-------|
| `-2px -2px 0` (x4 smjera) | Oštra crna kontura oko slova (stroke efekt) |
| `0 0 20px` | Mekani glow za dodatnu dubinu |
| `0 4px 30px` | Sjena ispod teksta za 3D efekt |

## Vizualni učinak
- Crna kontura oko slova osigurava čitljivost preko bilo koje pozadine
- Glow efekt dodaje dubinu bez da je previše agresivan
- Zadržava eleganciju terracotta boje dok povećava kontrast
