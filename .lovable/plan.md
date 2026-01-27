

# Plan: Totalno crne ilustracije (Pure Black Silhouettes)

## Pregled

Transformacija rudarskih ilustracija u **čiste crne siluete** - bez unutarnjih linija, bez bijelih kontura, samo solidni crni oblici. Minimalistički, dramatičan pristup.

---

## Karakteristike stila

### Vizualni pristup
- **100% crne ispune** - `fill="hsl(0 0% 5-10%)"`
- **Bez stroke linija** - ili minimalne samo za vanjski rub
- **Čiste siluete** - prepoznatljive samo po obliku
- **Bez unutarnjih detalja** - samo kontura forme
- **Suptilna transparentnost** - 70-90% opacity za eleganciju na tamnoj pozadini

### Paleta
```
fill: hsl(0 0% 6-10%)    <- skoro crna
stroke: hsl(0 0% 15-20%) <- jedva vidljiv rub (opcionalno)
opacity: 0.7 - 0.9       <- za suptilnost
```

---

## Promjene po ilustraciji

### 1. TunnelEntrance
- Kameni luk: crna silueta luka
- Tunel: potpuno crn
- "SRETNO" banner: crna pozadina, suptilni svijetli tekst (jedini kontrast)
- Drvene grede: crne vertikale
- Tračnice: crne linije

### 2. MinersWalking
- Rudari: čiste crne siluete figura
- Alati: crne forme (krampovi, lopate)
- Planine: crna masa u pozadini
- Bez unutarnjih detalja - samo prepoznatljivi oblici

### 3. MineCart
- Kolica: crna trapezoidna forma
- Kotači: crni krugovi
- Ugljen: crna nepravilna masa
- Rudar: crna silueta

### 4. MiningTools
- Svi alati: crne ispunjene forme
- Dekorativne linije: tanke crne linije
- Bez ornamenata - čisto i minimalistički

---

## Tehnička implementacija

```jsx
// Stil za sve elemente
const pureBlackStyle = {
  fill: "hsl(0 0% 8%)",
  stroke: "none", // ili minimalni stroke za definiciju
  opacity: 0.8
};

// Primjer siluete rudara
<path 
  d="M10 5 Q15 2, 18 5 L18 50 L10 50 Z" 
  fill="hsl(0 0% 8%)"
  fillOpacity="0.85"
/>
```

---

## Vizualni primjer

```
TRENUTNO (woodcut s konturama):
    ╔═══╗
   ░║   ║░    <- linije i teksture
    ╚═══╝

NOVO (pure black):
    ████
   █████      <- samo crna forma
    ████
```

---

## Očekivani rezultat

- **Ultra minimalistički** izgled
- **Dramatične siluete** na tamnoj pozadini
- **Elegantna jednostavnost**
- **"SRETNO"** ostaje čitljiv kao jedini svijetli element
- Ilustracije djeluju kao **suptilni grafički elementi**

---

## Datoteka za izmjenu

**`src/components/MiningIllustration.tsx`**

Promjene:
1. Ukloniti sve `stroke` atribute ili postaviti na "none"
2. Postaviti sve `fill` na crnu (`hsl(0 0% 6-10%)`)
3. Dodati `fillOpacity` 0.7-0.9 za suptilnost
4. Pojednostaviti pathove - ukloniti unutarnje detalje
5. Zadržati samo prepoznatljive siluete

