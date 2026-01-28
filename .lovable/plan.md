
# Plan: Poboljšanje opisa lokacija

## Cilj
Osigurati da svi opisi u Location sekciji budu potpune rečenice, bez fragmentiranih dijelova, a da pritom ne budu preduge (optimalno 15-25 riječi po opisu).

## Izmjene u datoteci `src/contexts/LanguageContext.tsx`

### 1. Plaže

**Rabac Beaches** (linija 558-562):
- Trenutno: "Award-winning beaches with turquoise waters. Known as the 'Pearl of Kvarner' with excellent facilities."
- Novo: "Rabac offers award-winning beaches with turquoise waters and excellent facilities, earning its nickname 'Pearl of Kvarner'."

### 2. Gradovi

**Pula** (linija 631-635):
- Trenutno: "Home to the magnificent Roman Arena and rich ancient history. A vibrant city with culture, nightlife, and cuisine."
- Novo: "Pula is home to the magnificent Roman Arena and offers rich culture, nightlife, and excellent cuisine."

**Raša** (linija 649-653):
- Trenutno: "The youngest town in Istria, known for its mining history and peaceful surroundings."
- Novo: "Raša is the youngest town in Istria, featuring unique mining heritage and a peaceful atmosphere."

### 3. Restorani

**Martin Pescador** (linija 747-751):
- Trenutno: "Renowned seafood restaurant with fresh Adriatic catches. Terrace dining with stunning sea views."
- Novo: "Martin Pescador is a renowned seafood restaurant offering fresh Adriatic catches with terrace dining and sea views."

**Pizzeria Rumore** (linija 783-787):
- Trenutno: "Popular pizzeria in Labin with wood-fired pizzas and a lively atmosphere. Perfect for families."
- Novo: "This popular Labin pizzeria serves delicious wood-fired pizzas in a lively, family-friendly atmosphere."

## Sve prijevode (HR, IT, DE)
Svaka promjena će biti prevedena na sva 4 jezika kako bi konzistentnost bila održana.

## Tehnički detalji
- Datoteka: `src/contexts/LanguageContext.tsx`
- Broj izmjena: 5 opisa × 4 jezika = 20 string izmjena
- Nema strukturalnih promjena, samo tekstualne izmjene
