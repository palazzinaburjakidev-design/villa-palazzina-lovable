
# Plan: Promjena ilustracija u Linorez/Drvorez stil

## Pregled

Transformacija rudarskih ilustracija u autentični linorez/drvorez (woodcut) stil koji karakteriziraju:
- Grubi, ekspresivni potezi poput rezanja u drvo
- Visoki crno-bijeli kontrast
- Solidne ispune umjesto tankih linija
- Karakteristične "rezane" teksture
- Izgled starih novinskih gravura

---

## Karakteristike Linorez/Drvorez stila

### Vizualni elementi
- **Debele, grube linije** - kao da su urezane u drvo
- **Solidne ispune** - crne siluete s bijelim negativnim prostorom
- **Paralelne linije za sjene** - horizontalne/dijagonalne "rezane" linije
- **Gruba tekstura** - nepravilni rubovi, rustikalni izgled
- **Visoki kontrast** - crno/bijelo bez polutona
- **Karakteristične "V" usjeke** - linije koje završavaju kao usjeci noža

### Paleta boja
- Primarna: `sandstone` puna opacity (0.7-1.0) za svijetle forme
- Pozadina/sjene: transparentna ili jako tamna ispuna
- Bez gradijenata - samo solidne ispune i linije

### Tehnike
- `fill` umjesto samo `stroke` za glavne oblike
- Deblje linije (3-6px) za glavne konture
- Paralelne hatching linije za teksturu (ne cross-hatch)
- Nepravilni, "izrezani" rubovi na pathovima

---

## Promjene po ilustraciji

### 1. TunnelEntrance (Gallery sekcija)

**Elementi:**
- Kameni luk kao solidna silueta s bijelim prostorom za tunel
- "SRETNO" banner s debelim okvirom i ispunjenom pozadinom
- Drvene grede kao crni pravokutnici s paralelnim linijama
- Tračnice kao debele solidne linije
- Tekstura kamena kroz paralelne dijagonalne linije

**SVG pristup:**
- Koristiti `fill` za velike oblike
- Path s nepravilnim rubovima za "rezani" efekt
- Hatching linije za volumen (razmak 3-5px)

### 2. MinersWalking (Amenities sekcija)

**Elementi:**
- Rudari kao solidne crne siluete s definiranim proporcijama
- Alati jasno prepoznatljivi (krampovi, lopate)
- Planine u pozadini s paralelnim linijama
- Kacige s lampama kao karakteristični oblici
- Ekspresivne, dinamične poze

**SVG pristup:**
- Solidne filled siluete za figure
- Debele konture (3-4px)
- Unutarnje teksturne linije za detalje

### 3. MineCart (Location sekcija)

**Elementi:**
- Kolica kao čvrst geometrijski oblik
- Kotači kao debeli krugovi s ispunom
- Ugljen kao gruba, nepravilna masa
- Rudar s prepoznatljivom siluetom
- Tračnice kao paralelne debele linije

**SVG pristup:**
- Filled oblici za kolica i kotače
- Grube konture za rudar figuru
- Tekstura ugljena kroz kratke paralelne poteze

### 4. MiningTools (About sekcija)

**Elementi:**
- Alati kao solidne ispunjene forme
- Krampovi s jasnom glavom i drškom
- Lampe s karakterističnim oblikom
- Dekorativne linije kao debeli potezi
- Ornamenti kao jednostavni geometrijski oblici

**SVG pristup:**
- Većina elemenata s `fill` umjesto samo `stroke`
- Debele border linije (2-4px)
- Jednostavna, čitljiva ikonografija

---

## Tehnička implementacija

### SVG definicije

Woodcut stroke style:
```jsx
const woodcutStroke = {
  strokeLinecap: "square", // Oštri završeci
  strokeLinejoin: "miter", // Oštri kutovi
};
```

### Hatching pattern za teksturu
```jsx
<defs>
  <pattern id="woodcutHatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="1.5" />
  </pattern>
</defs>
```

### Primjer woodcut siluete rudara
```jsx
// Solidna silueta umjesto linijskih crteža
<path 
  d="M10 5 Q15 2, 18 5 L18 8 Q17 12, 15 14 L18 28 Q20 40, 22 50 L18 50 L16 35 L14 50 L10 50 L12 35 L10 28 L7 20 Q5 16, 8 14 L10 14 L10 5" 
  fill="hsl(35 25% 75% / 0.6)" 
  stroke="hsl(35 25% 75% / 0.8)" 
  strokeWidth="2"
/>
```

---

## Datoteka za izmjenu

**`src/components/MiningIllustration.tsx`**

Kompletna transformacija svih 4 SVG komponenti:

1. **Zamjena `sketchStroke` s `woodcutStroke`**:
   - `strokeLinecap: "square"` umjesto "round"
   - `strokeLinejoin: "miter"` umjesto "round"

2. **Povećanje opaciteta i debljine linija**:
   - Opacity: 0.5 - 0.9 (visoki kontrast)
   - strokeWidth: 2-6px (deblje linije)

3. **Dodavanje filled oblika**:
   - Siluete rudara s `fill` atributom
   - Geometrijski oblici umjesto gestualnih linija

4. **Hatching tekstura**:
   - Paralelne linije za sjene
   - Karakteristični "rezani" usjeci

---

## Vizualna usporedba

**SKICA STIL (trenutno):**
```
    o          <- krug za glavu
   /|\         <- tanke linije za tijelo
   / \         <- tanke linije za noge
```

**LINOREZ/DRVOREZ STIL (novo):**
```
   ████        <- solidna ispuna glave
  ██████       <- debele linije za tijelo
 ██    ██      <- čvrste forme za noge
    ▄█▄        <- alat kao solidna forma
```

---

## Očekivani rezultat

Ilustracije će izgledati kao autentične stare gravure:
- Rustikalni, tradicijski izgled
- Visoki kontrast i čitljivost
- Profesionalne, umjetničke siluete
- Uklapa se u "autentični" karakter vile
- Asocira na industrijsku baštinu i rudarstvo
- "SRETNO" natpis ostaje jasno vidljiv
- Rudari hodaju konzistentno lijevo-desno

---

## Promjene u kodu

Kompletna zamjena SVG sadržaja u `src/components/MiningIllustration.tsx`:
- Novi `woodcutStroke` objekt za stil linija
- Redizajn TunnelEntrance s solidnim oblicima
- Redizajn MinersWalking s ispunjenim siluetama
- Redizajn MineCart s geometrijskim formama
- Redizajn MiningTools s ikonografskim elementima
