

# Plan: Redizajn web stranice s inspiracijom u rudarenju ugljena i istarskom krajoliku

## Vizija dizajna

Redizajn će transformirati stranicu u elegantno, snažno i mirno korisničko iskustvo inspirirano:
- **Lokalnom poviješću rudarenja ugljena** - korištenjem tamnih ugljenih tonova (charcoal, grafit)
- **Istarskim krajolikom** - toplim kamenim i pješčanim naglascima

### Filozofija dizajna
- Miran i snažan vizualni identitet
- Bez luksuznih klišeja i rustikalnog izgleda
- Fokus na autentičnost, karakter i povezanost s lokalnom poviješću
- Visoki kontrast i čitljivost
- Moderan, minimalistički layout

---

## 1. Nova paleta boja

### Primarne boje ("Coal & Stone" tema)

| Ime | HSL vrijednost | Namjena |
|-----|----------------|---------|
| `coal` | 0 0% 8% | Najdublja crna za pozadine |
| `graphite` | 0 0% 18% | Sekundarna pozadina, kartice |
| `slate` | 0 0% 28% | Borderi, razdjelnici |
| `sandstone` | 35 25% 75% | Primarni tekst (topla pješčana) |
| `warm-stone` | 30 20% 60% | Sekundarni tekst |
| `terracotta` | 25 35% 50% | Akcenti (gumbi, ikone) - zamjena za zlato |
| `terracotta-light` | 25 35% 65% | Hover stanja |

### Hero sekcija (zadržava svijetlu temu)
- Blagi tamni overlay za čitljivost (trenutni pristup ostaje)
- Minimalan tekst, fokus na fotografije

---

## 2. Tipografija

### Naslovi - Serif font s tradicijom i snagom
**Preporuka:** Zadržati `Playfair Display` jer već ima osjećaj tradicije, ili razmotriti `Cormorant Garamond` za elegantniji dojam.

### Tekst - Čitljiv sans-serif
**Preporuka:** Zadržati `Inter` - moderan, čitljiv, dobar kontrast.

---

## 3. Izmjene po datotekama

### 3.1 `tailwind.config.ts`
Dodati nove boje u paletu:

```typescript
colors: {
  // Postojeće boje ostaju
  // Nove "coal" boje
  coal: {
    DEFAULT: "hsl(var(--coal))",
    deep: "hsl(var(--coal-deep))",
  },
  graphite: "hsl(var(--graphite))",
  slate: "hsl(var(--slate))",
  sandstone: {
    DEFAULT: "hsl(var(--sandstone))",
    light: "hsl(var(--sandstone-light))",
  },
  terracotta: {
    DEFAULT: "hsl(var(--terracotta))",
    light: "hsl(var(--terracotta-light))",
    dark: "hsl(var(--terracotta-dark))",
  },
}
```

### 3.2 `src/index.css`
Definirati nove CSS varijable i ažurirati stilove:

```css
:root {
  /* Coal & Stone paleta */
  --coal: 0 0% 8%;
  --coal-deep: 0 0% 5%;
  --graphite: 0 0% 18%;
  --slate: 0 0% 28%;
  --sandstone: 35 25% 75%;
  --sandstone-light: 35 25% 85%;
  --terracotta: 25 35% 50%;
  --terracotta-light: 25 35% 65%;
  --terracotta-dark: 25 35% 40%;
  
  /* Ažurirani semantic mappings za tamnu temu */
  --background: 0 0% 8%;  /* coal */
  --foreground: 35 25% 75%; /* sandstone */
  --primary: 25 35% 50%; /* terracotta umjesto gold */
  --muted: 0 0% 18%; /* graphite */
  --border: 0 0% 25%;
}
```

**Novi stilovi za glass kartice (tamna verzija):**

```css
.glass-card-coal {
  @apply backdrop-blur-xl border border-slate/30;
  background: rgba(18, 18, 18, 0.7);
}

.section-overlay-coal {
  background: linear-gradient(
    to bottom,
    hsla(var(--coal), 0.6) 0%,
    hsla(var(--coal), 0.75) 50%,
    hsla(var(--coal), 0.9) 100%
  );
}
```

### 3.3 `src/components/sections/HeroSection.tsx`
**Minimalne promjene** - zadržava svijetlu, prozračnu estetiku:

- Smanjiti overlay intenzitet za još prozračniji osjećaj
- Ažurirati boju gumba na `terracotta` umjesto `gold`
- Smanjiti količinu teksta (subtitle kraći)

```tsx
// Gumb promjena
className="bg-terracotta hover:bg-terracotta-light text-coal..."

// Blagi overlay
.hero-overlay-light {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    hsla(var(--coal), 0.2) 60%,
    hsla(var(--coal), 0.4) 100%
  );
}
```

### 3.4 `src/components/sections/GallerySection.tsx`
**Tamna "ugljena" transformacija:**

- Zamijeniti `hero-overlay` s `section-overlay-coal`
- Promijeniti `glass-card` u `glass-card-coal`
- Ažurirati tekst boje: `text-linen` → `text-sandstone`
- Ažurirati akcente: `text-gold` → `text-terracotta`
- Kategorije tabovi: `bg-terracotta` umjesto `bg-gold`

```tsx
// Primjer promjene
<button className={`... ${
  activeCategory === cat.key
    ? 'bg-terracotta text-coal'
    : 'glass-card-coal text-sandstone/80 hover:text-sandstone'
}`}>
```

### 3.5 `src/components/sections/AmenitiesSection.tsx`
**Tamna transformacija:**

- Isti pristup kao Gallery
- Ikone: `text-terracotta` umjesto `text-gold-light`
- Kartice: `glass-card-coal`
- Naslovi i tekst: `text-sandstone` nijanse

### 3.6 `src/components/sections/LocationSection.tsx`
**Tamna transformacija:**

- Overlay: `section-overlay-coal`
- Kartice kategorija: `glass-card-coal`
- Ikone u krugovima: `text-terracotta-light`
- Udaljenosti: `text-terracotta` umjesto `text-gold-light`

### 3.7 `src/components/sections/AboutSection.tsx`
**Tamna transformacija:**

- Statistike kartice: `glass-card-coal`
- Ikone: `text-terracotta`
- Kontakt linkovi: hover stanja s `bg-sandstone/10`
- Footer: tamnija pozadina

### 3.8 `src/components/Header.tsx`
**Ažuriranje za konzistentnost:**

- Pozadina: `bg-coal/40` umjesto `bg-charcoal/30`
- Logo tekst: `text-sandstone` s hover na `text-terracotta`
- Aktivna navigacija: `text-terracotta` umjesto `text-gold`
- Book gumb: `bg-terracotta hover:bg-terracotta-light text-coal`

### 3.9 `src/components/Footer.tsx`
**Ažuriranje:**

- Pozadina: `bg-coal-deep`
- Naslovi: `text-terracotta` umjesto `text-gold`
- Tekst: `text-sandstone/70`
- Linkovi hover: `hover:text-sandstone`

---

## 4. Pregled vizualnih promjena

```text
┌─────────────────────────────────────────────────────────┐
│  HERO SEKCIJA                                           │
│  ┌─────────────────────────────────────────────────────┐│
│  │  SVIJETLA • Prozračna • Fokus na fotografiju        ││
│  │  - Blagi tamni overlay (20-40% opacity)             ││
│  │  - Minimalan tekst (naslov + kratki subtitle)       ││
│  │  - Terracotta gumb                                  ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  OSTALE SEKCIJE (Gallery, Amenities, Location, About)  │
│  ┌─────────────────────────────────────────────────────┐│
│  │  TAMNA "COAL" TEMA                                  ││
│  │  - Duboka ugljena pozadina                          ││
│  │  - Graphite kartice s blur efektom                  ││
│  │  - Sandstone tekst (topla pješčana)                 ││
│  │  - Terracotta akcenti (ikone, gumbi, hover)         ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

---

## 5. Tehničke napomene

### Očuvanje funkcionalnosti
- Sve interakcije, animacije i responsivnost ostaju nepromijenjene
- Samo vizualne promjene (boje, kartice, tipografija)

### Pristupačnost
- Kontrast omjer minimalno 4.5:1 za tekst
- Sandstone na coal pozadini: ✓ Prolazi WCAG AA
- Terracotta na coal: ✓ Prolazi za velike elemente

### Datoteke koje se mijenjaju

| Datoteka | Opseg promjena |
|----------|---------------|
| `tailwind.config.ts` | Dodavanje novih boja |
| `src/index.css` | Nove CSS varijable i stilovi |
| `src/components/sections/HeroSection.tsx` | Minimalne promjene (overlay, gumb) |
| `src/components/sections/GallerySection.tsx` | Boje i klase kartica |
| `src/components/sections/AmenitiesSection.tsx` | Boje i klase kartica |
| `src/components/sections/LocationSection.tsx` | Boje i klase kartica |
| `src/components/sections/AboutSection.tsx` | Boje i klase kartica |
| `src/components/Header.tsx` | Boje navigacije |
| `src/components/Footer.tsx` | Boje i pozadina |

---

## 6. Očekivani rezultat

Web stranica će imati:
- **Jedinstveni identitet** povezan s lokalnom rudarskom poviješću
- **Elegantnu, mirnu atmosferu** bez pretencioznosti
- **Visoku čitljivost** kroz pažljivo odabrane kontraste
- **Moderni minimalistički izgled** s toplim mediteranskim naglascima
- **Hero sekciju** koja "diše" i stavlja vilu u prvi plan
- **Ostale sekcije** s dubokom, karakternom "coal" estetikom

