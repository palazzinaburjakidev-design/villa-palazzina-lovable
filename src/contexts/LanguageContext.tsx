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
  'gallery.album.bathroom': {
    en: 'Bathroom',
    hr: 'Kupaonica',
    it: 'Bagno',
    de: 'Badezimmer',
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
    en: '50 km',
    hr: '50 km',
    it: '50 km',
    de: '50 km',
  },

  // House Rules
  'contact.rules.title': {
    en: 'House Rules',
    hr: 'Pravila Kuće',
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
    en: 'Villa Palazzina Burjaki is a stunning holiday home located in the picturesque village of Trget, Istria. This elegant property combines authentic Istrian charm with modern luxury, offering guests an unforgettable Mediterranean experience. Just 800m from Santa Marina beach, the villa features a seasonal private pool, wellness zone with jacuzzi and sauna, fully equipped fitness center, and a basketball court for active recreation.',
    hr: 'Villa Palazzina Burjaki je prekrasna kuća za odmor smještena u slikovitom selu Trget u Istri. Ovaj elegantni objekt kombinira autentični istarski šarm s modernim luksuzom, nudeći gostima nezaboravno mediteransko iskustvo. Samo 800m od plaže Santa Marina, vila ima sezonski privatni bazen, wellness zonu s jacuzzijem i saunom, potpuno opremljen fitness centar i košarkaški teren za aktivnu rekreaciju.',
    it: 'Villa Palazzina Burjaki è una splendida casa vacanze situata nel pittoresco villaggio di Trget, in Istria. Questa elegante proprietà combina l\'autentico fascino istriano con il lusso moderno, offrendo agli ospiti un\'esperienza mediterranea indimenticabile. A soli 800m dalla spiaggia di Santa Marina, la villa dispone di una piscina privata stagionale, zona benessere con jacuzzi e sauna, centro fitness completamente attrezzato e campo da basket per la ricreazione attiva.',
    de: 'Villa Palazzina Burjaki ist ein atemberaubendes Ferienhaus im malerischen Dorf Trget in Istrien. Dieses elegante Anwesen verbindet authentischen istrischen Charme mit modernem Luxus und bietet Gästen ein unvergessliches mediterranes Erlebnis. Nur 800m vom Strand Santa Marina entfernt, verfügt die Villa über einen saisonalen Privatpool, Wellnessbereich mit Whirlpool und Sauna, voll ausgestattetes Fitnesscenter und Basketballplatz für aktive Erholung.',
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
