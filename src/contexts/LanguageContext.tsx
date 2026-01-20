import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hr' | 'it' | 'de';

interface Translations {
  [key: string]: {
    en: string;
    hr: string;
    it: string;
    de: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.gallery': {
    en: 'Gallery',
    hr: 'Galerija',
    it: 'Galleria',
    de: 'Galerie',
  },
  'nav.amenities': {
    en: 'Amenities',
    hr: 'Sadržaji',
    it: 'Servizi',
    de: 'Ausstattung',
  },
  'nav.location': {
    en: 'Location',
    hr: 'Lokacija',
    it: 'Posizione',
    de: 'Lage',
  },
  'nav.contact': {
    en: 'About',
    hr: 'O nama',
    it: 'Chi siamo',
    de: 'Über uns',
  },
  'nav.bookNow': {
    en: 'Book Now',
    hr: 'Rezerviraj',
    it: 'Prenota',
    de: 'Buchen',
  },
  'hero.reserveNow': {
    en: 'Reserve Now',
    hr: 'Rezerviraj sada',
    it: 'Prenota ora',
    de: 'Jetzt buchen',
  },
  'hero.externalBookingNotice': {
    en: 'Redirects to Airbnb · Their terms apply',
    hr: 'Preusmjerava na Airbnb · Vrijede njihovi uvjeti',
    it: 'Reindirizza a Airbnb · Si applicano i loro termini',
    de: 'Weiterleitung zu Airbnb · Es gelten deren Bedingungen',
  },

  // Hero
  'hero.brand': {
    en: 'Villa Palazzina Burjaki',
    hr: 'Villa Palazzina Burjaki',
    it: 'Villa Palazzina Burjaki',
    de: 'Villa Palazzina Burjaki',
  },
  'hero.title': {
    en: 'Experience Istrian Luxury',
    hr: 'Doživite Istarsku Raskoš',
    it: 'Vivi il Lusso Istriano',
    de: 'Erleben Sie Istrischen Luxus',
  },
  'hero.watchVideo': {
    en: 'Watch Video Tour',
    hr: 'Pogledaj Video Turu',
    it: 'Guarda il Video Tour',
    de: 'Video-Tour ansehen',
  },
  'hero.subtitle': {
    en: 'Luxurious villa with private pool, jacuzzi, sauna, and fitness center in the heart of Istria. Trget, Croatia.',
    hr: 'Luksuzna vila s privatnim bazenom, jacuzzijem, saunom i fitness centrom u srcu Istre. Trget, Hrvatska.',
    it: 'Villa lussuosa con piscina privata, jacuzzi, sauna e centro fitness nel cuore dell\'Istria. Trget, Croazia.',
    de: 'Luxuriöse Villa mit privatem Pool, Whirlpool, Sauna und Fitnesscenter im Herzen Istriens. Trget, Kroatien.',
  },

  // Booking Widget
  'booking.checkIn': {
    en: 'Check-in',
    hr: 'Dolazak',
    it: 'Arrivo',
    de: 'Anreise',
  },
  'booking.checkOut': {
    en: 'Check-out',
    hr: 'Odlazak',
    it: 'Partenza',
    de: 'Abreise',
  },
  'booking.guests': {
    en: 'Guests',
    hr: 'Gosti',
    it: 'Ospiti',
    de: 'Gäste',
  },
  'booking.checkAvailability': {
    en: 'Check Availability',
    hr: 'Provjeri Dostupnost',
    it: 'Verifica Disponibilità',
    de: 'Verfügbarkeit Prüfen',
  },

  // Gallery
  'gallery.label': {
    en: 'Interior Design',
    hr: 'Dizajn Interijera',
    it: 'Design d\'Interni',
    de: 'Innenarchitektur',
  },
  'gallery.title': {
    en: 'Curated Living Spaces',
    hr: 'Pažljivo Uređeni Prostori',
    it: 'Spazi Abitativi Curati',
    de: 'Kuratierte Wohnräume',
  },
  'gallery.subtitle': {
    en: 'Where comfort meets sophistication',
    hr: 'Gdje se udobnost susreće s profinjenošću',
    it: 'Dove il comfort incontra la raffinatezza',
    de: 'Wo Komfort auf Raffinesse trifft',
  },
  'gallery.description': {
    en: 'Each room has been thoughtfully designed to blend authentic Istrian charm with modern amenities, creating spaces that inspire relaxation and connection.',
    hr: 'Svaka soba je pažljivo dizajnirana kako bi spojila autentični istarski šarm s modernim sadržajima, stvarajući prostore koji inspiriraju opuštanje i povezanost.',
    it: 'Ogni stanza è stata progettata con cura per unire l\'autentico fascino istriano con i comfort moderni, creando spazi che ispirano relax e connessione.',
    de: 'Jeder Raum wurde sorgfältig gestaltet, um authentischen istrischen Charme mit modernen Annehmlichkeiten zu verbinden und Räume zu schaffen, die zur Entspannung und Verbundenheit inspirieren.',
  },
  'gallery.feature.spacious': {
    en: 'Spacious Rooms',
    hr: 'Prostrane Sobe',
    it: 'Camere Spaziose',
    de: 'Geräumige Zimmer',
  },
  'gallery.feature.authentic': {
    en: 'Authentic Design',
    hr: 'Autentičan Dizajn',
    it: 'Design Autentico',
    de: 'Authentisches Design',
  },
  'gallery.feature.natural': {
    en: 'Natural Light',
    hr: 'Prirodno Svjetlo',
    it: 'Luce Naturale',
    de: 'Natürliches Licht',
  },

  // Gallery Categories
  'gallery.category.all': {
    en: 'All',
    hr: 'Sve',
    it: 'Tutto',
    de: 'Alle',
  },
  'gallery.category.exterior': {
    en: 'Exterior',
    hr: 'Eksterijer',
    it: 'Esterno',
    de: 'Außenbereich',
  },
  'gallery.category.living': {
    en: 'Living Spaces',
    hr: 'Dnevni prostori',
    it: 'Spazi abitativi',
    de: 'Wohnbereiche',
  },
  'gallery.category.bedrooms': {
    en: 'Bedrooms',
    hr: 'Spavaće sobe',
    it: 'Camere da letto',
    de: 'Schlafzimmer',
  },
  'gallery.category.bathrooms': {
    en: 'Bathrooms',
    hr: 'Kupaonice',
    it: 'Bagni',
    de: 'Badezimmer',
  },

  // Gallery Albums
  'gallery.album.pool': {
    en: 'Pool & Surroundings',
    hr: 'Bazen & Okoliš',
    it: 'Piscina e dintorni',
    de: 'Pool & Umgebung',
  },
  'gallery.album.terrace': {
    en: 'Terrace',
    hr: 'Terasa',
    it: 'Terrazza',
    de: 'Terrasse',
  },
  'gallery.album.backyard': {
    en: 'Backyard',
    hr: 'Stražnje dvorište',
    it: 'Cortile',
    de: 'Hinterhof',
  },
  'gallery.album.living': {
    en: 'Living Room',
    hr: 'Dnevni boravak',
    it: 'Soggiorno',
    de: 'Wohnzimmer',
  },
  'gallery.album.dining': {
    en: 'Dining Room',
    hr: 'Blagovaonica',
    it: 'Sala da pranzo',
    de: 'Esszimmer',
  },
  'gallery.album.kitchen': {
    en: 'Kitchen',
    hr: 'Kuhinja',
    it: 'Cucina',
    de: 'Küche',
  },
  'gallery.album.gymSpa': {
    en: 'Gym & Spa',
    hr: 'Gym & Spa',
    it: 'Palestra & Spa',
    de: 'Fitness & Spa',
  },
  'gallery.album.laundry': {
    en: 'Laundry Room',
    hr: 'Vešeraj',
    it: 'Lavanderia',
    de: 'Waschküche',
  },
  'gallery.album.bedroom': {
    en: 'Bedroom',
    hr: 'Spavaća soba',
    it: 'Camera da letto',
    de: 'Schlafzimmer',
  },
  'gallery.album.bedroom1': {
    en: 'Ground Floor Bedroom',
    hr: 'Spavaća soba u prizemlju',
    it: 'Camera da letto al piano terra',
    de: 'Schlafzimmer im Erdgeschoss',
  },
  'gallery.album.bedroom2': {
    en: 'Bunk Bed Bedroom',
    hr: 'Spavaća soba s krevetima na kat',
    it: 'Camera con letti a castello',
    de: 'Schlafzimmer mit Etagenbetten',
  },
  'gallery.album.bedroom3': {
    en: 'Guest Bedroom',
    hr: 'Gostinjska spavaća soba',
    it: 'Camera degli ospiti',
    de: 'Gästezimmer',
  },
  'gallery.album.bedroom4': {
    en: 'Master Bedroom',
    hr: 'Glavna spavaća soba',
    it: 'Camera da letto principale',
    de: 'Hauptschlafzimmer',
  },
  'gallery.album.bathroom': {
    en: 'Bathroom',
    hr: 'Kupaonica',
    it: 'Bagno',
    de: 'Badezimmer',
  },
  'gallery.album.bathroom1': {
    en: 'Ground Floor Bathroom',
    hr: 'Kupaonica u prizemlju',
    it: 'Bagno al piano terra',
    de: 'Badezimmer im Erdgeschoss',
  },
  'gallery.album.bathroom2': {
    en: 'Pool Bathroom',
    hr: 'Kupaonica uz bazen',
    it: 'Bagno piscina',
    de: 'Pool-Badezimmer',
  },
  'gallery.album.bathroom3': {
    en: 'Guest Bathroom',
    hr: 'Gostinjska kupaonica',
    it: 'Bagno ospiti',
    de: 'Gästebad',
  },
  'gallery.album.bathroom4': {
    en: 'Master Bathroom',
    hr: 'Glavna kupaonica',
    it: 'Bagno principale',
    de: 'Hauptbadezimmer',
  },
  'gallery.album.bathroom5': {
    en: 'Upstairs Bathroom',
    hr: 'Kupaonica na katu',
    it: 'Bagno al piano superiore',
    de: 'Badezimmer im Obergeschoss',
  },

  // Gallery Video
  'gallery.video.title': {
    en: 'Video Tour',
    hr: 'Video tura',
    it: 'Video tour',
    de: 'Video-Tour',
  },
  'gallery.video.subtitle': {
    en: 'Virtual villa walkthrough',
    hr: 'Virtualna šetnja vilom',
    it: 'Passeggiata virtuale nella villa',
    de: 'Virtueller Villenrundgang',
  },

  // Gallery Misc
  'gallery.photos': {
    en: 'photos',
    hr: 'slika',
    it: 'foto',
    de: 'Fotos',
  },
  'gallery.photo': {
    en: 'photo',
    hr: 'slika',
    it: 'foto',
    de: 'Foto',
  },

  // Amenities
  'amenities.label': {
    en: 'Villa Features',
    hr: 'Sadržaji Vile',
    it: 'Caratteristiche Villa',
    de: 'Villa Ausstattung',
  },
  'amenities.title': {
    en: 'Luxury Amenities',
    hr: 'Luksuzni Sadržaji',
    it: 'Servizi di Lusso',
    de: 'Luxuriöse Annehmlichkeiten',
  },
  'amenities.subtitle': {
    en: 'Everything you need for an unforgettable stay',
    hr: 'Sve što vam je potrebno za nezaboravan boravak',
    it: 'Tutto ciò di cui hai bisogno per un soggiorno indimenticabile',
    de: 'Alles was Sie für einen unvergesslichen Aufenthalt brauchen',
  },
  'amenities.pool.title': {
    en: 'Private Pool',
    hr: 'Privatni Bazen',
    it: 'Piscina Privata',
    de: 'Privatpool',
  },
  'amenities.pool.description': {
    en: 'Seasonal outdoor pool',
    hr: 'Sezonski vanjski bazen',
    it: 'Piscina esterna stagionale',
    de: 'Saisonaler Außenpool',
  },
  'amenities.wellness.title': {
    en: 'Wellness Zone',
    hr: 'Wellness Zona',
    it: 'Zona Benessere',
    de: 'Wellnessbereich',
  },
  'amenities.wellness.description': {
    en: 'Jacuzzi & sauna',
    hr: 'Jacuzzi i sauna',
    it: 'Jacuzzi e sauna',
    de: 'Whirlpool & Sauna',
  },
  'amenities.fitness.title': {
    en: 'Fitness Center',
    hr: 'Fitness Centar',
    it: 'Centro Fitness',
    de: 'Fitnesscenter',
  },
  'amenities.fitness.description': {
    en: 'Fully equipped gym',
    hr: 'Potpuno opremljena teretana',
    it: 'Palestra completamente attrezzata',
    de: 'Voll ausgestattetes Fitnessstudio',
  },
  'amenities.basketball.title': {
    en: 'Basketball Court',
    hr: 'Košarkaški Teren',
    it: 'Campo da Basket',
    de: 'Basketballplatz',
  },
  'amenities.basketball.description': {
    en: 'For active recreation',
    hr: 'Za aktivnu rekreaciju',
    it: 'Per la ricreazione attiva',
    de: 'Für aktive Erholung',
  },
  'amenities.wifi.title': {
    en: 'Free WiFi',
    hr: 'Besplatan WiFi',
    it: 'WiFi Gratuito',
    de: 'Kostenloses WLAN',
  },
  'amenities.wifi.description': {
    en: 'High-speed internet',
    hr: 'Brzi internet',
    it: 'Internet ad alta velocità',
    de: 'Highspeed-Internet',
  },
  'amenities.bbq.title': {
    en: 'BBQ & Garden',
    hr: 'Roštilj i Vrt',
    it: 'BBQ e Giardino',
    de: 'BBQ & Garten',
  },
  'amenities.bbq.description': {
    en: 'Terrace with garden furniture',
    hr: 'Terasa s vrtnim namještajem',
    it: 'Terrazza con mobili da giardino',
    de: 'Terrasse mit Gartenmöbeln',
  },
  'amenities.ac.title': {
    en: 'Air Conditioning',
    hr: 'Klima Uređaj',
    it: 'Aria Condizionata',
    de: 'Klimaanlage',
  },
  'amenities.ac.description': {
    en: 'In all rooms',
    hr: 'U svim sobama',
    it: 'In tutte le stanze',
    de: 'In allen Zimmern',
  },
  'amenities.entertainment.title': {
    en: 'Entertainment',
    hr: 'Zabava',
    it: 'Intrattenimento',
    de: 'Unterhaltung',
  },
  'amenities.entertainment.description': {
    en: 'Satellite TV & PlayStation',
    hr: 'Satelitska TV i PlayStation',
    it: 'TV satellitare e PlayStation',
    de: 'Sat-TV & PlayStation',
  },

  // Location
  'location.label': {
    en: 'Trget, Istria',
    hr: 'Trget, Istra',
    it: 'Trget, Istria',
    de: 'Trget, Istrien',
  },
  'location.title': {
    en: 'Perfect Location',
    hr: 'Savršena Lokacija',
    it: 'Posizione Perfetta',
    de: 'Perfekte Lage',
  },
  'location.subtitle': {
    en: 'Burjaki 36, Trgetari 52224, Croatia',
    hr: 'Burjaki 36, Trgetari 52224, Hrvatska',
    it: 'Burjaki 36, Trgetari 52224, Croazia',
    de: 'Burjaki 36, Trgetari 52224, Kroatien',
  },
  // Location Categories
  'location.category.beaches': {
    en: 'Beaches',
    hr: 'Plaže',
    it: 'Spiagge',
    de: 'Strände',
  },
  'location.category.towns': {
    en: 'Towns & Cities',
    hr: 'Gradovi',
    it: 'Città',
    de: 'Städte',
  },
  'location.category.transport': {
    en: 'Transport',
    hr: 'Prijevoz',
    it: 'Trasporti',
    de: 'Transport',
  },
  // Beaches
  'location.santaMarina.title': {
    en: 'Sveta Marina Beach',
    hr: 'Plaža Sveta Marina',
    it: 'Spiaggia Sveta Marina',
    de: 'Strand Sveta Marina',
  },
  'location.santaMarina.distance': {
    en: '16 km',
    hr: '16 km',
    it: '16 km',
    de: '16 km',
  },
  'location.tunarica.title': {
    en: 'Tunarica Beach',
    hr: 'Plaža Tunarica',
    it: 'Spiaggia Tunarica',
    de: 'Strand Tunarica',
  },
  'location.tunarica.distance': {
    en: '11 km',
    hr: '11 km',
    it: '11 km',
    de: '11 km',
  },
  'location.ravni.title': {
    en: 'Trget Beach',
    hr: 'Plaža Trget',
    it: 'Spiaggia Trget',
    de: 'Strand Trget',
  },
  'location.ravni.distance': {
    en: '2 km',
    hr: '2 km',
    it: '2 km',
    de: '2 km',
  },
  'location.rabacBeaches.title': {
    en: 'Rabac Beaches',
    hr: 'Plaže Rabac',
    it: 'Spiagge di Rabac',
    de: 'Strände Rabac',
  },
  'location.rabacBeaches.distance': {
    en: '16 km',
    hr: '16 km',
    it: '16 km',
    de: '16 km',
  },
  // Towns & Cities
  'location.labin.title': {
    en: 'Labin Old Town',
    hr: 'Stari grad Labin',
    it: 'Città vecchia di Albona',
    de: 'Altstadt Labin',
  },
  'location.labin.distance': {
    en: '11 km',
    hr: '11 km',
    it: '11 km',
    de: '11 km',
  },
  'location.rabac.title': {
    en: 'Rabac',
    hr: 'Rabac',
    it: 'Rabac',
    de: 'Rabac',
  },
  'location.rabac.distance': {
    en: '16 km',
    hr: '16 km',
    it: '16 km',
    de: '16 km',
  },
  'location.rovinj.title': {
    en: 'Rovinj',
    hr: 'Rovinj',
    it: 'Rovigno',
    de: 'Rovinj',
  },
  'location.rovinj.distance': {
    en: '53 km',
    hr: '53 km',
    it: '53 km',
    de: '53 km',
  },
  'location.pula.title': {
    en: 'Pula',
    hr: 'Pula',
    it: 'Pola',
    de: 'Pula',
  },
  'location.pula.distance': {
    en: '40 km',
    hr: '40 km',
    it: '40 km',
    de: '40 km',
  },
  // Transport
  'location.airport.title': {
    en: 'Pula Airport',
    hr: 'Zračna luka Pula',
    it: 'Aeroporto di Pola',
    de: 'Flughafen Pula',
  },
  'location.airport.distance': {
    en: '36 km',
    hr: '36 km',
    it: '36 km',
    de: '36 km',
  },
  'location.triesteAirport.title': {
    en: 'Trieste Airport',
    hr: 'Zračna luka Trst',
    it: 'Aeroporto di Trieste',
    de: 'Flughafen Triest',
  },
  'location.triesteAirport.distance': {
    en: '165 km',
    hr: '165 km',
    it: '165 km',
    de: '165 km',
  },
  'location.zagrebAirport.title': {
    en: 'Zagreb Airport',
    hr: 'Zračna luka Zagreb',
    it: 'Aeroporto di Zagabria',
    de: 'Flughafen Zagreb',
  },
  'location.zagrebAirport.distance': {
    en: '241 km',
    hr: '241 km',
    it: '241 km',
    de: '241 km',
  },
  'location.busStation.title': {
    en: 'Bus Station Labin',
    hr: 'Autobusni kolodvor Labin',
    it: 'Stazione autobus Albona',
    de: 'Busbahnhof Labin',
  },
  'location.busStation.distance': {
    en: '13 km',
    hr: '13 km',
    it: '13 km',
    de: '13 km',
  },

  // House Rules
  'contact.rules.title': {
    en: 'House Rules',
    hr: 'Kućni red',
    it: 'Regole della Casa',
    de: 'Hausregeln',
  },
  'contact.rules.noPets': {
    en: 'No pets allowed',
    hr: 'Bez kućnih ljubimaca',
    it: 'Animali non ammessi',
    de: 'Keine Haustiere erlaubt',
  },
  'contact.rules.noSmoking': {
    en: 'No smoking',
    hr: 'Zabranjeno pušenje',
    it: 'Vietato fumare',
    de: 'Rauchen verboten',
  },
  'contact.rules.maxGuests': {
    en: 'Maximum 8 guests',
    hr: 'Maksimalno 8 gostiju',
    it: 'Massimo 8 ospiti',
    de: 'Maximal 8 Gäste',
  },
  'contact.rules.quietHours': {
    en: 'Quiet hours: 22:00 – 07:00',
    hr: 'Vrijeme tišine: 22:00 – 07:00',
    it: 'Ore di silenzio: 22:00 – 07:00',
    de: 'Ruhezeiten: 22:00 – 07:00',
  },
  'contact.rules.noParties': {
    en: 'No parties or events',
    hr: 'Zabrane zabave i događaji',
    it: 'Feste ed eventi vietati',
    de: 'Keine Partys oder Veranstaltungen',
  },
  'about.arrivalTime': {
    en: 'Arrival time',
    hr: 'Vrijeme dolaska',
    it: 'Orario di arrivo',
    de: 'Ankunftszeit',
  },
  'about.departureTime': {
    en: 'Departure by',
    hr: 'Odlazak do',
    it: 'Partenza entro',
    de: 'Abreise bis',
  },
  'about.arrival': {
    en: 'Arrival',
    hr: 'Dolazak',
    it: 'Arrivo',
    de: 'Ankunft',
  },
  'about.departure': {
    en: 'Departure by',
    hr: 'Odlazak do',
    it: 'Partenza entro',
    de: 'Abreise bis',
  },
  'contact.host': {
    en: 'Host: Vedran Grubišić',
    hr: 'Domaćin: Vedran Grubišić',
    it: 'Host: Vedran Grubišić',
    de: 'Gastgeber: Vedran Grubišić',
  },

  // About Section
  'about.label': {
    en: 'About the Villa',
    hr: 'O Vili',
    it: 'Sulla Villa',
    de: 'Über die Villa',
  },
  'about.title': {
    en: 'Villa Palazzina Burjaki',
    hr: 'Villa Palazzina Burjaki',
    it: 'Villa Palazzina Burjaki',
    de: 'Villa Palazzina Burjaki',
  },
  'about.subtitle': {
    en: 'A luxurious 350m² villa with 4 bedrooms, 5 bathrooms, private pool, jacuzzi, sauna, and fitness center in the heart of Istria.',
    hr: 'Luksuzna vila od 350m² sa 4 spavaće sobe, 5 kupaonica, privatnim bazenom, jacuzzijem, saunom i fitness centrom u srcu Istre.',
    it: 'Una lussuosa villa di 350m² con 4 camere da letto, 5 bagni, piscina privata, jacuzzi, sauna e centro fitness nel cuore dell\'Istria.',
    de: 'Eine luxuriöse 350m² Villa mit 4 Schlafzimmern, 5 Badezimmern, privatem Pool, Whirlpool, Sauna und Fitnesscenter im Herzen Istriens.',
  },
  'about.description': {
    en: 'Nestled in the peaceful Istrian surroundings of Trgetari, Villa Burjaki offers the perfect blend of privacy, comfort, and authentic Mediterranean ambiance. Surrounded by nature and just a few minutes from the sea, the villa is an ideal choice for guests seeking tranquility while remaining close to the most beautiful beaches of eastern Istria.',
    hr: 'Smještena u mirnom istarskom okruženju Trgetara, Villa Burjaki nudi savršen spoj privatnosti, udobnosti i autentičnog mediteranskog ugođaja. Okružena prirodom, a svega nekoliko minuta od mora, vila je idealan izbor za goste koji žele mir, ali i blizinu najljepših plaža istočne Istre.',
    it: 'Immersa nella tranquilla atmosfera istriana di Trgetari, Villa Burjaki offre la perfetta combinazione di privacy, comfort e autentico fascino mediterraneo. Circondata dalla natura e a pochi minuti dal mare, la villa è la scelta ideale per gli ospiti che cercano tranquillità pur rimanendo vicini alle più belle spiagge dell\'Istria orientale.',
    de: 'Eingebettet in die friedliche istrische Umgebung von Trgetari bietet Villa Burjaki die perfekte Mischung aus Privatsphäre, Komfort und authentischem mediterranem Ambiente. Umgeben von Natur und nur wenige Minuten vom Meer entfernt, ist die Villa die ideale Wahl für Gäste, die Ruhe suchen und gleichzeitig in der Nähe der schönsten Strände Ostistriens bleiben möchten.',
  },
  'about.stats.area': {
    en: 'Living Area',
    hr: 'Stambena Površina',
    it: 'Superficie Abitabile',
    de: 'Wohnfläche',
  },
  'about.stats.bedrooms': {
    en: 'Bedrooms',
    hr: 'Spavaće Sobe',
    it: 'Camere da Letto',
    de: 'Schlafzimmer',
  },
  'about.stats.bathrooms': {
    en: 'Bathrooms',
    hr: 'Kupaonice',
    it: 'Bagni',
    de: 'Badezimmer',
  },
  'about.stats.guests': {
    en: 'Max Guests',
    hr: 'Maks. Gostiju',
    it: 'Max Ospiti',
    de: 'Max. Gäste',
  },
  'about.checkin': {
    en: 'Check-in',
    hr: 'Prijava',
    it: 'Check-in',
    de: 'Check-in',
  },
  'about.checkout': {
    en: 'Check-out',
    hr: 'Odjava',
    it: 'Check-out',
    de: 'Check-out',
  },
  'about.rating': {
    en: 'Guest Rating',
    hr: 'Ocjena Gostiju',
    it: 'Valutazione Ospiti',
    de: 'Gästebewertung',
  },
  'about.host': {
    en: 'Your Host',
    hr: 'Vaš Domaćin',
    it: 'Il Tuo Host',
    de: 'Ihr Gastgeber',
  },
  'contact.title': {
    en: 'Get in Touch',
    hr: 'Kontaktirajte Nas',
    it: 'Contattaci',
    de: 'Kontaktieren Sie Uns',
  },
  'contact.subtitle': {
    en: 'We\'d love to hear from you',
    hr: 'Rado ćemo vas čuti',
    it: 'Saremo lieti di sentirti',
    de: 'Wir freuen uns von Ihnen zu hören',
  },
  'contact.email': {
    en: 'Email',
    hr: 'Email',
    it: 'Email',
    de: 'E-Mail',
  },
  'contact.phone': {
    en: 'Phone',
    hr: 'Telefon',
    it: 'Telefono',
    de: 'Telefon',
  },
  'contact.social': {
    en: 'Follow Us',
    hr: 'Pratite Nas',
    it: 'Seguici',
    de: 'Folgen Sie Uns',
  },
  'contact.copyright': {
    en: '© 2025 Palazzina Burjaki. All rights reserved.',
    hr: '© 2025 Palazzina Burjaki. Sva prava pridržana.',
    it: '© 2025 Palazzina Burjaki. Tutti i diritti riservati.',
    de: '© 2025 Palazzina Burjaki. Alle Rechte vorbehalten.',
  },
  'contact.privacy': {
    en: 'Privacy Policy',
    hr: 'Politika Privatnosti',
    it: 'Privacy Policy',
    de: 'Datenschutz',
  },
  'contact.terms': {
    en: 'Terms of Service',
    hr: 'Uvjeti Korištenja',
    it: 'Termini di Servizio',
    de: 'Nutzungsbedingungen',
  },

  // Footer Legal
  'footer.impressum': {
    en: 'Legal Information',
    hr: 'Pravne informacije',
    it: 'Informazioni legali',
    de: 'Impressum',
  },
  'footer.renterType': {
    en: 'Private Rental',
    hr: 'Privatni iznajmljivač',
    it: 'Affitto privato',
    de: 'Private Vermietung',
  },
  'footer.reservations': {
    en: 'Reservations',
    hr: 'Rezervacije',
    it: 'Prenotazioni',
    de: 'Reservierungen',
  },
  'footer.reservationsNotice': {
    en: 'All reservations and payments are processed exclusively through the Airbnb platform.',
    hr: 'Sve rezervacije i plaćanja obavljaju se isključivo putem platforme Airbnb.',
    it: 'Tutte le prenotazioni e i pagamenti vengono elaborati esclusivamente attraverso la piattaforma Airbnb.',
    de: 'Alle Reservierungen und Zahlungen werden ausschließlich über die Airbnb-Plattform abgewickelt.',
  },
  'footer.bookOnAirbnb': {
    en: 'Book on Airbnb',
    hr: 'Rezerviraj na Airbnb',
    it: 'Prenota su Airbnb',
    de: 'Auf Airbnb buchen',
  },
  'footer.noPaymentData': {
    en: 'This website does not collect payment data or process reservations.',
    hr: 'Ova web stranica ne prikuplja podatke o plaćanju niti obrađuje rezervacije.',
    it: 'Questo sito web non raccoglie dati di pagamento né elabora prenotazioni.',
    de: 'Diese Website erfasst keine Zahlungsdaten und verarbeitet keine Reservierungen.',
  },
  'footer.legal': {
    en: 'Legal',
    hr: 'Pravno',
    it: 'Legale',
    de: 'Rechtliches',
  },
  'footer.privacyPolicy': {
    en: 'Privacy Policy',
    hr: 'Politika privatnosti',
    it: 'Informativa sulla privacy',
    de: 'Datenschutzerklärung',
  },
  'footer.cookiePolicy': {
    en: 'Cookie Policy',
    hr: 'Politika kolačića',
    it: 'Politica sui cookie',
    de: 'Cookie-Richtlinie',
  },
  'footer.websiteNotice': {
    en: 'Website Notice',
    hr: 'Obavijest o stranici',
    it: 'Avviso sul sito web',
    de: 'Website-Hinweis',
  },
  'footer.websiteNoticeText': {
    en: 'This website is for informational purposes only. It provides details about Villa Palazzina Burjaki and redirects visitors to Airbnb for bookings.',
    hr: 'Ova web stranica služi isključivo u informativne svrhe. Pruža informacije o Villa Palazzina Burjaki i preusmjerava posjetitelje na Airbnb za rezervacije.',
    it: 'Questo sito web è solo a scopo informativo. Fornisce dettagli su Villa Palazzina Burjaki e reindirizza i visitatori su Airbnb per le prenotazioni.',
    de: 'Diese Website dient ausschließlich Informationszwecken. Sie bietet Details über Villa Palazzina Burjaki und leitet Besucher für Buchungen zu Airbnb weiter.',
  },
  'footer.allRightsReserved': {
    en: 'All rights reserved.',
    hr: 'Sva prava pridržana.',
    it: 'Tutti i diritti riservati.',
    de: 'Alle Rechte vorbehalten.',
  },
  'footer.legalDisclaimer': {
    en: 'All reservations are made exclusively through the Airbnb platform. This website does not enable online payments or booking processing.',
    hr: 'Sve rezervacije obavljaju se isključivo putem platforme Airbnb. Ova web stranica ne omogućuje online plaćanja niti obradu rezervacija.',
    it: 'Tutte le prenotazioni vengono effettuate esclusivamente tramite la piattaforma Airbnb. Questo sito web non consente pagamenti online né elaborazione di prenotazioni.',
    de: 'Alle Reservierungen erfolgen ausschließlich über die Airbnb-Plattform. Diese Website ermöglicht keine Online-Zahlungen oder Buchungsabwicklung.',
  },

  // Legal Pages Common
  'legal.backToHome': {
    en: 'Back to Home',
    hr: 'Povratak na početnu',
    it: 'Torna alla home',
    de: 'Zurück zur Startseite',
  },

  // Privacy Policy
  'privacy.title': {
    en: 'Privacy Policy',
    hr: 'Politika privatnosti',
    it: 'Informativa sulla privacy',
    de: 'Datenschutzerklärung',
  },
  'privacy.intro': {
    en: 'Villa Palazzina Burjaki respects your privacy and is committed to protecting your personal data. This privacy policy explains how we handle information when you visit our website.',
    hr: 'Villa Palazzina Burjaki poštuje vašu privatnost i predana je zaštiti vaših osobnih podataka. Ova politika privatnosti objašnjava kako postupamo s informacijama kada posjetite našu web stranicu.',
    it: 'Villa Palazzina Burjaki rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa informativa sulla privacy spiega come gestiamo le informazioni quando visiti il nostro sito web.',
    de: 'Villa Palazzina Burjaki respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer persönlichen Daten. Diese Datenschutzerklärung erklärt, wie wir mit Informationen umgehen, wenn Sie unsere Website besuchen.',
  },
  'privacy.dataCollection.title': {
    en: 'Data Collection',
    hr: 'Prikupljanje podataka',
    it: 'Raccolta dati',
    de: 'Datenerfassung',
  },
  'privacy.dataCollection.text': {
    en: 'This website may collect the following types of information:',
    hr: 'Ova web stranica može prikupljati sljedeće vrste informacija:',
    it: 'Questo sito web può raccogliere i seguenti tipi di informazioni:',
    de: 'Diese Website kann folgende Arten von Informationen erfassen:',
  },
  'privacy.dataCollection.item1': {
    en: 'Contact information you voluntarily provide when contacting us via email',
    hr: 'Kontakt informacije koje dobrovoljno pružite kada nas kontaktirate putem e-pošte',
    it: 'Informazioni di contatto che fornisci volontariamente quando ci contatti via email',
    de: 'Kontaktinformationen, die Sie freiwillig angeben, wenn Sie uns per E-Mail kontaktieren',
  },
  'privacy.dataCollection.item2': {
    en: 'Technical data from third-party services (Google Maps) that may use cookies',
    hr: 'Tehnički podaci iz usluga trećih strana (Google Maps) koje mogu koristiti kolačiće',
    it: 'Dati tecnici da servizi di terze parti (Google Maps) che potrebbero utilizzare cookie',
    de: 'Technische Daten von Drittanbieterdiensten (Google Maps), die Cookies verwenden können',
  },
  'privacy.dataCollection.item3': {
    en: 'Basic analytics data for website performance monitoring',
    hr: 'Osnovni analitički podaci za praćenje performansi web stranice',
    it: 'Dati analitici di base per il monitoraggio delle prestazioni del sito web',
    de: 'Grundlegende Analysedaten zur Überwachung der Website-Leistung',
  },
  'privacy.dataStorage.title': {
    en: 'Data Storage',
    hr: 'Pohrana podataka',
    it: 'Archiviazione dati',
    de: 'Datenspeicherung',
  },
  'privacy.dataStorage.text': {
    en: 'This website does not store personal data on its servers. Any data you provide via email is handled through your email provider and ours. We do not maintain databases of visitor information.',
    hr: 'Ova web stranica ne pohranjuje osobne podatke na svojim serverima. Svi podaci koje pružite putem e-pošte obrađuju se putem vašeg i našeg pružatelja e-pošte. Ne održavamo baze podataka informacija o posjetiteljima.',
    it: 'Questo sito web non memorizza dati personali sui propri server. Qualsiasi dato fornito via email viene gestito dal tuo provider email e dal nostro. Non manteniamo database di informazioni sui visitatori.',
    de: 'Diese Website speichert keine persönlichen Daten auf ihren Servern. Alle Daten, die Sie per E-Mail bereitstellen, werden über Ihren und unseren E-Mail-Anbieter verarbeitet. Wir führen keine Datenbanken mit Besucherinformationen.',
  },
  'privacy.thirdParties.title': {
    en: 'Third-Party Services',
    hr: 'Usluge trećih strana',
    it: 'Servizi di terze parti',
    de: 'Dienste von Drittanbietern',
  },
  'privacy.thirdParties.text': {
    en: 'This website uses the following third-party services that may collect data according to their own privacy policies:',
    hr: 'Ova web stranica koristi sljedeće usluge trećih strana koje mogu prikupljati podatke prema svojim pravilima o privatnosti:',
    it: 'Questo sito web utilizza i seguenti servizi di terze parti che potrebbero raccogliere dati secondo le proprie politiche sulla privacy:',
    de: 'Diese Website nutzt folgende Dienste von Drittanbietern, die Daten gemäß ihren eigenen Datenschutzrichtlinien erfassen können:',
  },
  'privacy.thirdParties.item1': {
    en: 'Google Maps - for displaying location information',
    hr: 'Google Maps - za prikaz informacija o lokaciji',
    it: 'Google Maps - per visualizzare informazioni sulla posizione',
    de: 'Google Maps - zur Anzeige von Standortinformationen',
  },
  'privacy.thirdParties.item2': {
    en: 'Airbnb - for booking redirects (external platform)',
    hr: 'Airbnb - za preusmjeravanje rezervacija (vanjska platforma)',
    it: 'Airbnb - per i reindirizzamenti delle prenotazioni (piattaforma esterna)',
    de: 'Airbnb - für Buchungsweiterleitungen (externe Plattform)',
  },
  'privacy.gdprRights.title': {
    en: 'Your Rights Under GDPR',
    hr: 'Vaša prava prema GDPR-u',
    it: 'I tuoi diritti secondo il GDPR',
    de: 'Ihre Rechte nach DSGVO',
  },
  'privacy.gdprRights.text': {
    en: 'Under the General Data Protection Regulation (GDPR), you have the following rights:',
    hr: 'Prema Općoj uredbi o zaštiti podataka (GDPR), imate sljedeća prava:',
    it: 'Ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR), hai i seguenti diritti:',
    de: 'Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte:',
  },
  'privacy.gdprRights.item1': {
    en: 'Right of access - to request copies of your personal data',
    hr: 'Pravo pristupa - zatražiti kopije vaših osobnih podataka',
    it: 'Diritto di accesso - richiedere copie dei tuoi dati personali',
    de: 'Auskunftsrecht - Kopien Ihrer persönlichen Daten anzufordern',
  },
  'privacy.gdprRights.item2': {
    en: 'Right to rectification - to request correction of inaccurate data',
    hr: 'Pravo na ispravak - zatražiti ispravak netočnih podataka',
    it: 'Diritto di rettifica - richiedere la correzione di dati inesatti',
    de: 'Recht auf Berichtigung - Korrektur unrichtiger Daten zu verlangen',
  },
  'privacy.gdprRights.item3': {
    en: 'Right to erasure - to request deletion of your data',
    hr: 'Pravo na brisanje - zatražiti brisanje vaših podataka',
    it: 'Diritto alla cancellazione - richiedere la cancellazione dei tuoi dati',
    de: 'Recht auf Löschung - Löschung Ihrer Daten zu verlangen',
  },
  'privacy.gdprRights.item4': {
    en: 'Right to restrict processing - to limit how we use your data',
    hr: 'Pravo na ograničenje obrade - ograničiti kako koristimo vaše podatke',
    it: 'Diritto di limitare il trattamento - limitare come utilizziamo i tuoi dati',
    de: 'Recht auf Einschränkung der Verarbeitung - zu beschränken, wie wir Ihre Daten verwenden',
  },
  'privacy.gdprRights.item5': {
    en: 'Right to object - to object to the processing of your data',
    hr: 'Pravo na prigovor - prigovoriti obradi vaših podataka',
    it: 'Diritto di opposizione - opporsi al trattamento dei tuoi dati',
    de: 'Widerspruchsrecht - der Verarbeitung Ihrer Daten zu widersprechen',
  },
  'privacy.contact.title': {
    en: 'Contact Us',
    hr: 'Kontaktirajte nas',
    it: 'Contattaci',
    de: 'Kontaktieren Sie uns',
  },
  'privacy.contact.text': {
    en: 'If you have any questions about this privacy policy or wish to exercise your rights, please contact us:',
    hr: 'Ako imate pitanja o ovoj politici privatnosti ili želite ostvariti svoja prava, molimo kontaktirajte nas:',
    it: 'Se hai domande su questa informativa sulla privacy o desideri esercitare i tuoi diritti, contattaci:',
    de: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns bitte:',
  },
  'privacy.lastUpdated': {
    en: 'Last updated',
    hr: 'Posljednje ažuriranje',
    it: 'Ultimo aggiornamento',
    de: 'Zuletzt aktualisiert',
  },

  // Cookie Policy
  'cookie.title': {
    en: 'Cookie Policy',
    hr: 'Politika kolačića',
    it: 'Politica sui cookie',
    de: 'Cookie-Richtlinie',
  },
  'cookie.intro': {
    en: 'This Cookie Policy explains how Villa Palazzina Burjaki uses cookies and similar technologies on this website.',
    hr: 'Ova politika kolačića objašnjava kako Villa Palazzina Burjaki koristi kolačiće i slične tehnologije na ovoj web stranici.',
    it: 'Questa politica sui cookie spiega come Villa Palazzina Burjaki utilizza i cookie e tecnologie simili su questo sito web.',
    de: 'Diese Cookie-Richtlinie erklärt, wie Villa Palazzina Burjaki Cookies und ähnliche Technologien auf dieser Website verwendet.',
  },
  'cookie.whatAreCookies.title': {
    en: 'What Are Cookies?',
    hr: 'Što su kolačići?',
    it: 'Cosa sono i cookie?',
    de: 'Was sind Cookies?',
  },
  'cookie.whatAreCookies.text': {
    en: 'Cookies are small text files that are stored on your device when you visit a website. They help websites function properly and provide information to website owners.',
    hr: 'Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju kada posjetite web stranicu. Pomažu web stranicama da pravilno funkcioniraju i pružaju informacije vlasnicima web stranica.',
    it: 'I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Aiutano i siti web a funzionare correttamente e forniscono informazioni ai proprietari dei siti.',
    de: 'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen Websites, ordnungsgemäß zu funktionieren, und liefern Informationen an Website-Betreiber.',
  },
  'cookie.typesOfCookies.title': {
    en: 'Types of Cookies We Use',
    hr: 'Vrste kolačića koje koristimo',
    it: 'Tipi di cookie che utilizziamo',
    de: 'Arten von Cookies, die wir verwenden',
  },
  'cookie.typesOfCookies.text': {
    en: 'This website uses minimal cookies:',
    hr: 'Ova web stranica koristi minimalne kolačiće:',
    it: 'Questo sito web utilizza cookie minimi:',
    de: 'Diese Website verwendet minimale Cookies:',
  },
  'cookie.typesOfCookies.essential.title': {
    en: 'Essential Cookies',
    hr: 'Osnovni kolačići',
    it: 'Cookie essenziali',
    de: 'Wesentliche Cookies',
  },
  'cookie.typesOfCookies.essential.text': {
    en: 'These cookies are necessary for the website to function properly. They include language preference storage.',
    hr: 'Ovi kolačići su neophodni za pravilno funkcioniranje web stranice. Uključuju pohranu postavki jezika.',
    it: 'Questi cookie sono necessari per il corretto funzionamento del sito web. Includono la memorizzazione delle preferenze linguistiche.',
    de: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich. Sie umfassen die Speicherung von Spracheinstellungen.',
  },
  'cookie.typesOfCookies.thirdParty.title': {
    en: 'Third-Party Cookies',
    hr: 'Kolačići trećih strana',
    it: 'Cookie di terze parti',
    de: 'Cookies von Drittanbietern',
  },
  'cookie.typesOfCookies.thirdParty.text': {
    en: 'Some third-party services embedded on this site (such as Google Maps) may set their own cookies according to their privacy policies.',
    hr: 'Neke usluge trećih strana ugrađene na ovu stranicu (kao što je Google Maps) mogu postaviti vlastite kolačiće prema svojim pravilima o privatnosti.',
    it: 'Alcuni servizi di terze parti incorporati in questo sito (come Google Maps) potrebbero impostare i propri cookie secondo le loro politiche sulla privacy.',
    de: 'Einige auf dieser Website eingebettete Drittanbieterdienste (wie Google Maps) können gemäß ihren Datenschutzrichtlinien eigene Cookies setzen.',
  },
  'cookie.thirdPartyServices.title': {
    en: 'Third-Party Services',
    hr: 'Usluge trećih strana',
    it: 'Servizi di terze parti',
    de: 'Dienste von Drittanbietern',
  },
  'cookie.thirdPartyServices.text': {
    en: 'This website may include content from the following third-party services:',
    hr: 'Ova web stranica može uključivati sadržaj sljedećih usluga trećih strana:',
    it: 'Questo sito web può includere contenuti dei seguenti servizi di terze parti:',
    de: 'Diese Website kann Inhalte folgender Drittanbieterdienste enthalten:',
  },
  'cookie.thirdPartyServices.item1': {
    en: 'Google Maps - for interactive map display',
    hr: 'Google Maps - za interaktivni prikaz karte',
    it: 'Google Maps - per la visualizzazione di mappe interattive',
    de: 'Google Maps - für interaktive Kartenanzeige',
  },
  'cookie.thirdPartyServices.item2': {
    en: 'Airbnb - for booking platform integration (external link)',
    hr: 'Airbnb - za integraciju platforme za rezervacije (vanjska veza)',
    it: 'Airbnb - per l\'integrazione della piattaforma di prenotazione (link esterno)',
    de: 'Airbnb - für Buchungsplattform-Integration (externer Link)',
  },
  'cookie.consent.title': {
    en: 'Your Consent',
    hr: 'Vaš pristanak',
    it: 'Il tuo consenso',
    de: 'Ihre Einwilligung',
  },
  'cookie.consent.text': {
    en: 'By using this website, you consent to the use of cookies as described in this policy. You can manage your cookie preferences through your browser settings.',
    hr: 'Korištenjem ove web stranice pristajete na korištenje kolačića kako je opisano u ovoj politici. Možete upravljati postavkama kolačića putem postavki preglednika.',
    it: 'Utilizzando questo sito web, acconsenti all\'uso dei cookie come descritto in questa politica. Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del browser.',
    de: 'Durch die Nutzung dieser Website stimmen Sie der Verwendung von Cookies wie in dieser Richtlinie beschrieben zu. Sie können Ihre Cookie-Einstellungen über Ihre Browsereinstellungen verwalten.',
  },
  'cookie.managing.title': {
    en: 'Managing Cookies',
    hr: 'Upravljanje kolačićima',
    it: 'Gestione dei cookie',
    de: 'Cookies verwalten',
  },
  'cookie.managing.text': {
    en: 'Most web browsers allow you to control cookies through their settings. You can delete existing cookies, allow or block all cookies, and set preferences for certain websites. Please note that blocking some cookies may affect your experience on this website.',
    hr: 'Većina web preglednika omogućuje upravljanje kolačićima putem svojih postavki. Možete izbrisati postojeće kolačiće, dopustiti ili blokirati sve kolačiće i postaviti postavke za određene web stranice. Imajte na umu da blokiranje nekih kolačića može utjecati na vaše iskustvo na ovoj web stranici.',
    it: 'La maggior parte dei browser web consente di controllare i cookie attraverso le loro impostazioni. Puoi eliminare i cookie esistenti, consentire o bloccare tutti i cookie e impostare preferenze per determinati siti web. Tieni presente che il blocco di alcuni cookie potrebbe influire sulla tua esperienza su questo sito web.',
    de: 'Die meisten Webbrowser ermöglichen es Ihnen, Cookies über ihre Einstellungen zu kontrollieren. Sie können vorhandene Cookies löschen, alle Cookies zulassen oder blockieren und Einstellungen für bestimmte Websites festlegen. Bitte beachten Sie, dass das Blockieren einiger Cookies Ihre Erfahrung auf dieser Website beeinträchtigen kann.',
  },
  'cookie.contact.title': {
    en: 'Contact Us',
    hr: 'Kontaktirajte nas',
    it: 'Contattaci',
    de: 'Kontaktieren Sie uns',
  },
  'cookie.contact.text': {
    en: 'If you have any questions about our cookie policy, please contact us:',
    hr: 'Ako imate pitanja o našoj politici kolačića, molimo kontaktirajte nas:',
    it: 'Se hai domande sulla nostra politica sui cookie, contattaci:',
    de: 'Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:',
  },
  'cookie.lastUpdated': {
    en: 'Last updated',
    hr: 'Posljednje ažuriranje',
    it: 'Ultimo aggiornamento',
    de: 'Zuletzt aktualisiert',
  },

  // Cookie Consent Banner
  'cookieConsent.message': {
    en: 'This website uses essential cookies and third-party services to enhance your experience.',
    hr: 'Ova web stranica koristi osnovne kolačiće i usluge trećih strana kako bi poboljšala vaše iskustvo.',
    it: 'Questo sito web utilizza cookie essenziali e servizi di terze parti per migliorare la tua esperienza.',
    de: 'Diese Website verwendet essenzielle Cookies und Dienste von Drittanbietern, um Ihr Erlebnis zu verbessern.',
  },
  'cookieConsent.learnMore': {
    en: 'Learn more',
    hr: 'Saznaj više',
    it: 'Scopri di più',
    de: 'Mehr erfahren',
  },
  'cookieConsent.accept': {
    en: 'Accept',
    hr: 'Prihvati',
    it: 'Accetta',
    de: 'Akzeptieren',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
