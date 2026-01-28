
# Plan: Skraćivanje dugih opisa lokacija

## Problem
CSS klasa `line-clamp-2` u `LocationBanner.tsx` (linija 219) ograničava prikaz teksta na maksimalno 2 linije. Duži opisi se automatski režu i prikazuju "..." na kraju.

## Rješenje
Skratiti preduge opise kako bi stali u 2 linije bez CSS rezanja. Fokus na najdužim hrvatskim opisima (ostali jezici će se uskladiti).

## Izmjene u `src/contexts/LanguageContext.tsx`

### 1. Stari grad Labin (linija 577-581)
| Jezik | Trenutno | Novo |
|-------|----------|------|
| EN | "A charming medieval hilltop town with rich mining heritage, art galleries, and stunning Adriatic views." | "A charming medieval hilltop town with mining heritage, art galleries, and Adriatic views." |
| HR | "Šarmantni srednjovjekovni gradić na brdu s bogatom rudarskom baštinom, umjetničkim galerijama i pogledom na Jadran." | "Šarmantni srednjovjekovni gradić s rudarskom baštinom, galerijama i pogledom na Jadran." |
| IT | "Un affascinante borgo medievale con ricca eredità mineraria, gallerie d'arte e splendide viste sull'Adriatico." | "Un affascinante borgo medievale con eredità mineraria, gallerie d'arte e vista sull'Adriatico." |
| DE | "Eine charmante mittelalterliche Hügelstadt mit reichem Bergbauerbe, Kunstgalerien und atemberaubendem Adriablick." | "Eine charmante mittelalterliche Hügelstadt mit Bergbauerbe, Kunstgalerien und Adriablick." |

### 2. Rovinj (linija 613-617)
| Jezik | Trenutno | Novo |
|-------|----------|------|
| EN | "Istria's most romantic town with colorful houses, cobblestone streets, and the iconic Church of St. Euphemia." | "Istria's most romantic town with colorful houses, cobblestone streets, and St. Euphemia Church." |
| HR | "Najromantičniji grad Istre sa šarenim kućama, kaldrmanim ulicama i ikoničnom crkvom Sv. Eufemije." | "Najromantičniji grad Istre sa šarenim kućama, kaldrmanim ulicama i crkvom Sv. Eufemije." |
| IT | "La città più romantica dell'Istria con case colorate, strade acciottolate e l'iconica Chiesa di Santa Eufemia." | "La città più romantica dell'Istria con case colorate, vie acciottolate e la Chiesa di Santa Eufemia." |
| DE | "Istriens romantischste Stadt mit bunten Häusern, Kopfsteinpflasterstraßen und der ikonischen Kirche der Hl. Euphemia." | "Istriens romantischste Stadt mit bunten Häusern, Pflasterstraßen und der Kirche der Hl. Euphemia." |

### 3. Rabac (linija 595-599)
| Jezik | Trenutno | Novo |
|-------|----------|------|
| EN | "A lively coastal resort with beautiful beaches, waterfront promenades, and excellent seafood restaurants." | "A lively coastal resort with beautiful beaches, promenades, and excellent seafood restaurants." |
| HR | "Živahno obalno odmaralište s prekrasnim plažama, šetnicom uz more i izvrsnim ribljem restoranima." | "Živahno obalno odmaralište s prekrasnim plažama, šetnicom i izvrsnim ribljem restoranima." |
| IT | "Un vivace resort costiero con belle spiagge, lungomare e ottimi ristoranti di pesce." | (bez promjene - dovoljno kratak) |
| DE | "Ein lebhafter Küstenort mit schönen Stränden, Uferpromenaden und ausgezeichneten Fischrestaurants." | "Ein lebhafter Küstenort mit schönen Stränden, Promenaden und ausgezeichneten Fischrestaurants." |

## Tehnički detalji
- **Datoteka:** `src/contexts/LanguageContext.tsx`
- **Broj izmjena:** ~12 string izmjena
- **Uzrok problema:** `line-clamp-2` CSS klasa u `LocationBanner.tsx` (linija 219)
- **Alternativa:** Povećati `line-clamp-3`, ali to bi moglo narušiti dizajn bannera
