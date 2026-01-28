

# Plan: Ispravak opisa plaža

## Problem
U prethodnoj izmjeni pogrešno je ažuriran opis za **Tunarica** umjesto za **Plaža Trget**. Korisnik je tražio promjenu za "plažu Trget", a ja sam krivo izmijenio Tunaricu.

## Izmjene

### 1. Vratiti originalni opis za Tunaricu
**Datoteka:** `src/contexts/LanguageContext.tsx` (linije 522-526)

| Jezik | Trenutno (pogrešno) | Originalno (ispravno) |
|-------|--------------------|-----------------------|
| EN | "A secluded cove surrounded by lush greenery — a true favorite among locals seeking peace and quiet." | "A secluded cove surrounded by lush greenery. Ideal for nature lovers seeking tranquility away from crowds." |
| HR | "Osamljena uvala okružena bujnim zelenilom — pravi favorit lokalaca..." | "Osamljena uvala okružena bujnim zelenilom. Idealna za ljubitelje prirode koji traže mir daleko od gužvi." |
| IT | "Una baia appartata... — un vero favorito dei locali..." | "Una baia appartata circondata da vegetazione rigogliosa. Ideale per gli amanti della natura in cerca di tranquillità." |
| DE | "Eine abgeschiedene Bucht... — ein echter Favorit der Einheimischen..." | "Eine abgeschiedene Bucht umgeben von üppigem Grün. Ideal für Naturliebhaber auf der Suche nach Ruhe abseits der Massen." |

### 2. Ažurirati opis za Plažu Trget (Ravni)
**Datoteka:** `src/contexts/LanguageContext.tsx` (linije 540-544)

| Jezik | Trenutno | Novo |
|-------|----------|------|
| EN | "A peaceful pebble beach just minutes away. Crystal-clear waters perfect for swimming and snorkeling." | "A peaceful pebble beach just minutes away — a true favorite among locals for its crystal-clear waters." |
| HR | "Mirna šljunčana plaža na samo nekoliko minuta vožnje. Kristalno čisto more idealno za plivanje i ronjenje." | "Mirna šljunčana plaža na samo nekoliko minuta vožnje — pravi favorit lokalaca zbog kristalno čistog mora." |
| IT | "Una tranquilla spiaggia di ciottoli a pochi minuti di distanza. Acque cristalline perfette per nuotare e fare snorkeling." | "Una tranquilla spiaggia di ciottoli a pochi minuti di distanza — un vero favorito dei locali per le sue acque cristalline." |
| DE | "Ein ruhiger Kiesstrand nur wenige Minuten entfernt. Kristallklares Wasser perfekt zum Schwimmen und Schnorcheln." | "Ein ruhiger Kiesstrand nur wenige Minuten entfernt — ein echter Favorit der Einheimischen wegen des kristallklaren Wassers." |

## Tehnički detalji
- **Datoteka:** `src/contexts/LanguageContext.tsx`
- **Broj izmjena:** 8 string izmjena (2 opisa × 4 jezika)
- **Nema strukturalnih promjena**, samo tekstualne ispravke

