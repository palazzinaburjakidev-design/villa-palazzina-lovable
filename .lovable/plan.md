
# Plan: Popravak izgleda primarnog Location bannera

## Problem
Trenutno slika plaže prelazi granice kontejnera jer:
- Kontejner ima fiksnu visinu `h-40 sm:h-48` (~160-192px)
- Slika ima dimenzije `w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56` (~160-224px)
- Na `md` breakpointu slika je 224px visoka ali kontejner samo 192px

## Rješenje
Povećati visinu kontejnera za primarnu grupu da odgovara veličini slike, te dodati padding za čist izgled.

---

## Tehnički detalji

**Datoteka:** `src/components/sections/LocationBanner.tsx`

**Promjene:**

1. **Linija 163** - Povećati visinu banner content kontejnera za primarnu grupu:
   - Trenutno: `h-40 sm:h-48`
   - Novo: `h-44 sm:h-52 md:h-60` (176px / 208px / 240px)
   - Ovo daje dovoljno prostora za sliku (224px na md) plus malo paddinga

2. **Linija 175** - Smanjiti veličinu slike da stane u kontejner:
   - Trenutno: `w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56`
   - Novo: `w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52` (144px / 176px / 208px)
   - Ovo osigurava da slika uvijek stane unutar kontejnera s marginom

Alternativno, ako želite zadržati trenutnu veličinu slike:
- Linija 163: Promjena na `h-48 sm:h-56 md:h-64` (192px / 224px / 256px)

