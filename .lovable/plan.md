

# Plan: Poboljšana Coal Mine Tekstura

## Cilj
Kreirati sofisticiraniju, realističniju teksturu koja evocira istarski rudnik ugljena - s efektom slojeva kamena, pukotina, i mineralnih naslaga.

## Nova koncepcija teksture

### Sloj 1: Geološki slojevi (::before)
Umjesto jednostavnih linija, kreirat ćemo efekt sedimentnih slojeva:
- **Valovite linije** umjesto ravnih (simulacija prirodnih formacija)
- **Više kutova** za složeniji uzorak (15°, -30°, 60°)
- **Gradijentni prijelazi** umjesto oštrih linija
- **Različite debljine** linija za organičniji izgled

### Sloj 2: Pukotine i minerali (::after)
- **Nepravilne pukotine** koje se "šire" od kutova
- **Kristalni odsjaji** - suptilni terracotta i zlatni akcenti
- **Čestice ugljena** - raspršeni fragmenti različitih veličina

### Sloj 3: Dubina i atmosfera (novi ::before gradijent)
- **Vinjeta efekt** - blago zatamnjenje rubova
- **Središnji fokus** - lagano osvjetljenje sredine

## Vizualni rezultat

```text
┌─────────────────────────────────────────────────────────┐
│                                                         │
│    ╲                        ╱                           │
│      ╲  ═══════════════  ╱      ← Valoviti slojevi     │
│        ╲               ╱                                │
│  ═══════════════════════════     ← Sedimentne linije   │
│           ·  ·                                          │
│     ·          ·    ·            ← Čestice ugljena     │
│  ═══════════════════════════                            │
│        ╱               ╲                                │
│      ╱                   ╲       ← Pukotine             │
│    ╱                       ╲                            │
│                                                         │
│   ◊ ← Kristalni odsjaj    ▪ ← Fragment ugljena         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Tehnička implementacija

### Datoteka: `src/index.css`

**`.coal-texture::before` - Geološki slojevi:**
```css
background-image:
  /* Primarni dijagonalni slojevi - deblji, mekši */
  repeating-linear-gradient(
    -35deg,
    transparent 0px,
    transparent 40px,
    hsl(var(--sandstone) / 0.12) 40px,
    hsl(var(--sandstone) / 0.18) 42px,
    hsl(var(--coal-deep) / 0.25) 42px,
    hsl(var(--coal-deep) / 0.3) 44px,
    transparent 44px,
    transparent 90px
  ),
  /* Sekundarni slojevi - suprotni kut */
  repeating-linear-gradient(
    25deg,
    transparent 0px,
    transparent 70px,
    hsl(var(--graphite) / 0.15) 70px,
    hsl(var(--graphite) / 0.2) 72px,
    transparent 72px,
    transparent 140px
  ),
  /* Horizontalni sedimenti */
  repeating-linear-gradient(
    88deg,
    transparent 0px,
    transparent 150px,
    hsl(var(--sandstone) / 0.08) 150px,
    hsl(var(--sandstone) / 0.12) 153px,
    hsl(var(--coal-deep) / 0.2) 153px,
    transparent 156px,
    transparent 300px
  ),
  /* Fini šum za teksturu kamena */
  url("data:image/svg+xml,...noise...");
```

**`.coal-texture::after` - Pukotine i akcenti:**
```css
background-image:
  /* Glavna pukotina - gornji lijevi kut */
  linear-gradient(
    -60deg,
    hsl(var(--terracotta) / 0.35) 0%,
    hsl(var(--terracotta) / 0.15) 15%,
    transparent 30%
  ),
  /* Sekundarna pukotina - donji desni */
  linear-gradient(
    120deg,
    transparent 60%,
    hsl(var(--terracotta) / 0.1) 80%,
    hsl(var(--terracotta) / 0.25) 100%
  ),
  /* Kristalni odsjaji */
  radial-gradient(ellipse 8px 12px at 12% 18%, hsl(var(--sandstone) / 0.5) 0%, transparent 100%),
  radial-gradient(ellipse 6px 10px at 88% 75%, hsl(var(--terracotta-light) / 0.4) 0%, transparent 100%),
  /* Raspršeni fragmenti ugljena */
  radial-gradient(circle 2px at 20% 40%, hsl(var(--sandstone) / 0.4) 0%, transparent 100%),
  radial-gradient(circle 3px at 75% 25%, hsl(var(--sandstone) / 0.35) 0%, transparent 100%),
  ...više fragmenata na različitim pozicijama...
```

**Nove vrijednosti opacity i blend:**
- `::before`: `opacity: 0.35`, `mix-blend-mode: soft-light`
- `::after`: `opacity: 0.25`, `mix-blend-mode: overlay`

## Prednosti nove teksture

| Aspekt | Stara tekstura | Nova tekstura |
|--------|---------------|---------------|
| Linije | Ravne, pravilne | Valovite, organske |
| Slojevi | 2 kuta | 4+ kutova |
| Akcenti | Samo kutovi | Pukotine + kristali |
| Čestice | 6 fiksnih | 12+ raspršenih |
| Dubina | Plošno | Vinjeta efekt |

## Datoteke za izmjenu

| Datoteka | Promjena |
|----------|----------|
| `src/index.css` | Kompletno nova `.coal-texture::before` i `::after` definicija |

## Napomena
Nova tekstura će biti suptilnija ali kompleksnija - više "geološkog" karaktera, manje "tehničkog grida". Ako ti se više sviđa neki specifični stil (npr. više kristala, jače pukotine, drugačije boje), mogu prilagoditi.

