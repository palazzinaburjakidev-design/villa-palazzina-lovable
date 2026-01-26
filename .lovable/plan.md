
Cilj: da se “coal mine” embossing tekstura stvarno vidi na svim tamnim sekcijama (About/Amenities/Gallery/Location), bez da utječe na Hero.

Što sam provjerio i što je problem
- `coal-texture` je ispravno dodan na `<section>` u svim tamnim sekcijama (npr. About/Amenities/Location/Gallery).
- Pseudo-elementi `::before` i `::after` imaju `z-index: 1/2` i sadržaj ima `z-10`, pa layering (u teoriji) nije problem.
- U screenshotu se ne vidi ništa, čak ni suptilno. To vrlo često znači da se `background-image` uopće ne renderira (nije samo “preslabo”), nego je CSS vrijednost nevažeća i browser je odbacuje.

Najvjerojatniji uzrok (bitno)
- U CSS-u se koristi forma `hsla(var(--sandstone), 0.6)` i `hsla(var(--terracotta), 0.6)`.
- Naši CSS varijable su definirane u modernom formatu s razmacima, npr. `--sandstone: 35 25% 75%`.
- Kombinacija “modernog” formata (space-separated) s “legacy” hsla sintaksom (zarez za alpha) može rezultirati nevažećom vrijednošću na nekim browserima i tada cijeli `background-image` propadne.
- Ispravna, najkompatibilnija forma je: `hsl(var(--sandstone) / 0.6)` (alpha ide preko `/`, bez zareza).

Plan promjena (implementacija)

1) Popraviti sintaksu boja da gradienti sigurno rade
Datoteka: `src/index.css`
- U `.coal-texture::before` i `.coal-texture::after` zamijeniti sve:
  - `hsla(var(--sandstone), X)` -> `hsl(var(--sandstone) / X)`
  - `hsla(var(--terracotta), X)` -> `hsl(var(--terracotta) / X)`
- Po potrebi isto napraviti i za druge slične klase koje koriste `hsla(var(--coal), X)` (npr. `.text-backdrop`, `.hero-overlay`, `.section-overlay-coal`) kako bi sve bilo konzistentno i cross-browser stabilno.

2) Privremeni “debug boost” da potvrdimo da se tekstura prikazuje
Datoteka: `src/index.css`
- Privremeno (za test) dići:
  - `.coal-texture::before { opacity: 0.45; }`
  - `.coal-texture::after { opacity: 0.35; }`
- Ako se nakon toga tekstura jasno vidi, znači da je prethodni problem bio render/sintaksa ili preslab intenzitet.
- Nakon potvrde, spustiti na “final” vrijednosti (npr. 0.22–0.30 i 0.16–0.24), ovisno o tvojoj želji.

3) Povećati vidljivost “utisnutog” efekta (bez da postane šareno)
Datoteka: `src/index.css`
- Pojačati linije (emboss look) umjesto samo “svijetlih tragova”:
  - U repeating linear gradientu dodati 2 linije: jednu svjetliju (highlight) i jednu tamniju (shadow) uz nju, npr. 2px ukupno.
  - Primjer ideje (konceptualno):
    - highlight: `hsl(var(--sandstone) / 0.18)`
    - shadow: `hsl(var(--coal) / 0.35)`
- Smanjiti razmak da se uzorak češće ponavlja na velikim ekranima (npr. 80px -> 56px), jer na velikim površinama rijetke 1px linije “nestanu”.

4) Osigurati da tekstura “sjedi” iznad pozadine ali ispod sadržaja i da blend radi predvidljivo
Datoteka: `src/index.css`
- Dodati na `.coal-texture`:
  - `isolation: isolate;` (sprječava da blend-mode utječe izvan sekcije i pomaže konzistentnosti rendera)
- Opcionalno (ako želiš jači embossed osjećaj, a ne samo šare):
  - dodati `mix-blend-mode: soft-light;` ili `overlay;` na `::before` i `::after`
  - i malo “izbrusiti” s `filter: contrast(1.1);` (oprezno, da ne postane pregrubo)

5) Provjera da nije “prekriveno” internim overlayem
- Trenutno neke sekcije imaju velike elemente s backgroundom (npr. `.text-backdrop`).
- Ako nakon gore navedenog i dalje izgleda “kao da ništa nema”, napravit ćemo jedan od ova 2 pristupa:
  A) Smanjiti opacity `.text-backdrop` (malo) da propusti teksturu kroz “prazne” dijelove.
  B) Umjesto da je tekstura na `<section>`, ubaciti poseban sloj unutar sekcije:
     - `<div className="absolute inset-0 coal-texture-layer pointer-events-none" />`
     - i onda content ostaje `relative z-10`.
  Ovo je “sigurna” varijanta ako neki layout/overlay nehotice prekriva background.

Kriterij uspjeha (što ćeš vidjeti)
- Na tamnim sekcijama će se vidjeti:
  - dijagonalne “šavove” (coal seams),
  - mrežu (tunnel grid),
  - suptilne terracotta akcente u kutevima,
  - i lagani “noise”,
  čak i kada su kartice prisutne (kroz njihove transparentne dijelove).

Datoteke koje ćemo mijenjati
- Obavezno: `src/index.css`
- Moguće (samo ako je potrebno zbog overlay pokrivanja): `src/components/sections/*Section.tsx` da dodamo dedicated texture layer element unutar sekcije.

Napomena
- Ovo rješava i tvoju sumnju “možda je zakačeno na div ispod tamne pozadine”: tekstura će biti ili direktno na sekciji kao sloj iznad backgrounda, ili kao poseban apsolutni layer iznad pozadine, što eliminira tu klasu problema.
