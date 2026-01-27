
# Plan: Promjena stila ilustracija u skica/crtež stil

## Pregled

Transformacija postojećih rudarskih ilustracija iz vintage gravura stila u stil skice/crteža koji izgleda kao da je ručno nacrtan olovkom. Ovaj stil će dati umjetnički i organski izgled ilustracijama.

---

## Karakteristike skica/crtež stila

### Vizualni elementi
- **Nepravilne, "drhtave" linije** - kao da je ruka crtala, ne savršeno ravne
- **Višestruke skicirane linije** - umjesto jedne čiste linije, više laganih poteza
- **Nezatvoreni oblici** - linije ne moraju biti perfektno spojene
- **Varijabilna debljina** - linije variraju kao kod pritiska olovke
- **Suptilno sjenčanje** - lagane hatching linije za volumen, ne solidne ispune
- **Organsko, "živo" crtanje** - nedovršeni rubovi, skicirani detalji

### Paleta boja
- Primarna: `sandstone` s 30-50% opacity (kao olovka na papiru)
- Akcent: `terracotta` s 20-35% opacity za toplije detalje
- Bez solidnih ispuna - samo linije i hatching

---

## Promjene po ilustraciji

### 1. TunnelEntrance (Gallery sekcija)
```text
Trenutno: Solidni oblici s hatching teksturom
Novo: Skicirani luk tunela s višestrukim linijama

Elementi:
- Kameni luk nacrtan s 2-3 nepravilne linije umjesto jedne
- "SRETNO" natpis ostaje čitljiv ali s rukom pisanim fontom ili blago zakrivljenim slovima
- Drvene grede skicirane s cross-hatch linijama za teksturu
- Tračnice s laganim, nepravilnim linijama
- Tlo s brzim, skiciranim potezima
```

### 2. MinersWalking (Amenities sekcija)
```text
Trenutno: Detaljne siluete s hatching efektom
Novo: Brze skice rudara u pokretu

Elementi:
- Figure nacrtane s gestualnim linijama (kao life drawing)
- Krampovi i alati s jednostavnim, brzim potezima
- Kacige s blagim kružnim skicama
- Planine u pozadini s laganim, brzim linijama
- Svaki rudar ima malo drugačiji stil - kao da su crtani brzo
```

### 3. MineCart (Location sekcija)
```text
Trenutno: Geometrijska kolica s detaljima
Novo: Skicirana kolica s organskim linijama

Elementi:
- Kolica nacrtana s nepravilnim pravokutnicima
- Kotači kao brzi krugovi (ne savršeni)
- Ugljen kao brze, crne skicirane mrlje
- Tračnice s laganim, valovitim linijama
- Rudar koji gura - gestualna skica figure
```

### 4. MiningTools (About sekcija)
```text
Trenutno: Ornamentalni border s detaljnim alatima
Novo: Brze skice alata u nizu

Elementi:
- Krampovi nacrtani s 2-3 brza poteza
- Lampe kao jednostavni pravokutnici s krugom
- Lopate s brzim linijama
- Ornamenti zamijenjeni jednostavnim točkama ili crticama
- Dekorativne linije s blagim valovitim efektom
```

---

## Tehnička implementacija

### SVG tehnike za skica efekt

1. **Nepravilne linije**: Koristiti `path` s blagim krivinama umjesto ravnih `line` elemenata
   ```text
   Prije: M0 0 L100 0 (ravna linija)
   Poslije: M0 1 Q25 -1, 50 2 Q75 0, 100 1 (blago valovita)
   ```

2. **Višestruki potezi**: Za svaki oblik dodati 2-3 blago pomaknute linije
   ```text
   Linija 1: opacity 0.4, offset 0
   Linija 2: opacity 0.25, offset 1-2px
   ```

3. **Stroke svojstva**:
   - `stroke-linecap="round"` za mekše krajeve
   - `stroke-linejoin="round"` za zaobljene kutove
   - Varijabilna `stroke-width` (1-3px)

4. **Hatching za sjene**: Lagane dijagonalne linije s niskim opacityjem
   ```text
   45° linije, razmak 4-6px, opacity 0.15-0.25
   ```

---

## Datoteka za izmjenu

**`src/components/MiningIllustration.tsx`**

Kompletna zamjena svih 4 SVG komponenti s novim skica stilom:
- TunnelEntrance - zadržati SRETNO natpis, promijeniti stil crteža
- MinersWalking - gestualne figure, zadržati smjer lijevo-desno
- MineCart - organske linije, zadržati kompoziciju
- MiningTools - jednostavniji, brži potezi

---

## Primjer vizualne razlike

```text
VINTAGE GRAVURA STIL (trenutno):
┌────────────────────────────┐
│  ╔══════════════════════╗  │  <- precizne, formalne linije
│  ║      SRETNO          ║  │
│  ╚══════════════════════╝  │
│      ╱▔▔▔▔▔▔▔▔▔╲          │  <- geometrijski luk
│     ║           ║          │
└────────────────────────────┘

SKICA/CRTEŽ STIL (novo):
┌────────────────────────────┐
│   ~~ SRETNO ~~             │  <- ručno pisani font
│     /```````\              │  <- nepravilne linije
│    /   ~~~   \             │  <- višestruki potezi
│   |    ~~~    |            │  <- skicirani detalji
└────────────────────────────┘
```

---

## Očekivani rezultat

Ilustracije će izgledati kao umjetničke skice iz skicenbloka:
- Topliji, osobniji doživljaj
- Uklapa se u "autentični" karakter vile
- Manje formalno, više organsko
- Zadržava čitljivost "SRETNO" natpisa
- Konzistentan smjer kretanja rudara (lijevo-desno)
