
# Plan: Uklanjanje pozadinskih slika iz svih sekcija osim Hero

## Cilj
Samo Hero sekcija treba imati pozadinsku sliku. Sve ostale sekcije (Gallery, Amenities, Location, About) trebaju koristiti solidnu tamnu "coal" pozadinu.

## Promjene po datotekama

### 1. `src/components/sections/GallerySection.tsx`
**Što ukloniti:**
- Import slike `galleryLiving` (linija 5)
- Cijeli `motion.div` s `section-zoom` klasom i pozadinskom slikom (linije 325-334)
- Overlay div s `section-overlay-coal` (linija 337) - više nije potreban

**Što dodati:**
- Solidna pozadina na `<section>`: `className="relative h-full w-full overflow-hidden bg-coal"`

### 2. `src/components/sections/AmenitiesSection.tsx`
**Što ukloniti:**
- Import slike `poolImage` (linija 5)
- Cijeli `motion.div` s `section-zoom` klasom (linije 79-90)
- Overlay div s `section-overlay-coal` (linija 93)

**Što dodati:**
- Solidna pozadina: `className="relative h-full w-full overflow-hidden bg-coal"`

### 3. `src/components/sections/LocationSection.tsx`
**Što ukloniti:**
- Import slike `terraceImage` (linija 5)
- Cijeli `motion.div` s `section-zoom` klasom (linije 74-83)
- Overlay div s `section-overlay-coal` (linija 86)

**Što dodati:**
- Solidna pozadina: `className="relative h-full w-full overflow-hidden bg-coal"`

### 4. `src/components/sections/AboutSection.tsx`
**Što ukloniti:**
- Import slike `bedroomImage` (linija 6)
- Cijeli `motion.div` s `section-zoom` klasom (linije 67-81)
- Overlay div s `section-overlay-coal` (linija 84)

**Što dodati:**
- Solidna pozadina: `className="relative h-full w-full overflow-hidden bg-coal"`

## Vizualni rezultat

```text
┌─────────────────────────────────────────────────────────┐
│  HERO SEKCIJA                                           │
│  ┌─────────────────────────────────────────────────────┐│
│  │  ✓ Pozadinska slika (hero-villa.avif)               ││
│  │  ✓ Blagi tamni overlay za čitljivost               ││
│  │  ✓ Fokus na fotografiju                            ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  OSTALE SEKCIJE (Gallery, Amenities, Location, About)  │
│  ┌─────────────────────────────────────────────────────┐│
│  │  ✓ Solidna tamna pozadina (bg-coal)                 ││
│  │  ✗ Bez pozadinske slike                             ││
│  │  ✓ Sandstone tekst, terracotta akcenti              ││
│  │  ✓ Glass-card-coal kartice                          ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

## Tehnički detalji

### Prije (svaka sekcija):
```tsx
<section className="relative h-full w-full overflow-hidden">
  {/* Background Image with Zoom Effect */}
  <motion.div
    className="section-zoom"
    style={{ backgroundImage: `url(${someImage})` }}
    ...
  />
  {/* Overlay - Coal theme */}
  <div className="absolute inset-0 section-overlay-coal" />
  {/* Content */}
  ...
</section>
```

### Poslije (sekcije osim Hero):
```tsx
<section className="relative h-full w-full overflow-hidden bg-coal">
  {/* Content - direktno bez slike i overlaya */}
  ...
</section>
```

## Prednosti
- Čišći kod bez nepotrebnih elemenata
- Brže učitavanje (manje slika za preuzeti)
- Jasan vizualni kontrast između Hero sekcije i ostalih
- Konzistentan "Coal & Stone" dizajn na tamnim sekcijama
