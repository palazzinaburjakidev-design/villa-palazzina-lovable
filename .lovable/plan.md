
# Plan: Popravak preklapanja ilustracija na mobilnim uređajima

## Problem
Mining ilustracije su pozicionirane s `position: absolute` i `bottom-4`, što ih fiksira na dno containera. Na mobilnim uređajima, kad sadržaj scrolla, ilustracije ostaju fiksirane i prekrivaju kartice sadržaja.

## Rješenje
Promijeniti pozicioniranje ilustracija tako da na mobilnim uređajima budu dio normalnog document flow-a (relativna pozicija), a na većim ekranima zadrže absolute pozicioniranje.

## Izmjene

### 1. AmenitiesSection.tsx

**Trenutno (linija 140-144):**
```tsx
<MiningIllustration 
  type="miners-walking" 
  isActive={isActive} 
  className="absolute bottom-4 sm:bottom-6 left-0 right-0 mx-auto w-full max-w-3xl px-4 z-20"
/>
```

**Novo:**
```tsx
<MiningIllustration 
  type="miners-walking" 
  isActive={isActive} 
  className="relative mt-6 sm:absolute sm:bottom-6 sm:mt-0 left-0 right-0 mx-auto w-full max-w-3xl px-4 z-20"
/>
```

**Također potrebno ukloniti** `pb-28` iz parent containera jer ilustracija više ne treba taj prostor na mobilnom:
- Linija 85: promijeniti `pb-28 sm:pb-20` u `pb-8 sm:pb-20`

### 2. LocationSection.tsx

**Trenutno (linija 79-83):**
```tsx
<MiningIllustration 
  type="mine-cart" 
  isActive={isActive} 
  className="absolute bottom-4 sm:bottom-6 left-0 right-0 mx-auto w-full max-w-xl px-4 z-20"
/>
```

**Novo:**
```tsx
<MiningIllustration 
  type="mine-cart" 
  isActive={isActive} 
  className="relative mt-6 sm:absolute sm:bottom-6 sm:mt-0 left-0 right-0 mx-auto w-full max-w-xl px-4 z-20"
/>
```

**Također dodati scrollanje** na Location sekciju za mobile i smanjiti padding:
- Linija 41: dodati `overflow-y-auto sm:overflow-hidden` i `pb-8`

## Kako rješenje funkcionira

| Uređaj | Pozicioniranje ilustracije |
|--------|---------------------------|
| Mobile (< 640px) | `relative` - dio normalnog flowa, scrolla zajedno sa sadržajem |
| Desktop (≥ 640px) | `absolute bottom-6` - fiksirana na dnu sekcije |

## Tehnički detalji
- **Datoteke:** `src/components/sections/AmenitiesSection.tsx`, `src/components/sections/LocationSection.tsx`
- **Tailwind klase:** `relative sm:absolute` za responsive pozicioniranje
- **Breakpoint:** `sm:` (640px) - standardni Tailwind mobile breakpoint
