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
    en: 'Contact',
    hr: 'Kontakt',
    it: 'Contatto',
    de: 'Kontakt',
  },
  'nav.bookNow': {
    en: 'Book Now',
    hr: 'Rezerviraj',
    it: 'Prenota',
    de: 'Buchen',
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
  'location.beach.title': {
    en: 'Santa Marina Beach',
    hr: 'Plaža Santa Marina',
    it: 'Spiaggia Santa Marina',
    de: 'Strand Santa Marina',
  },
  'location.beach.distance': {
    en: '800 m - 1 km',
    hr: '800 m - 1 km',
    it: '800 m - 1 km',
    de: '800 m - 1 km',
  },
  'location.labin.title': {
    en: 'Labin',
    hr: 'Labin',
    it: 'Albona',
    de: 'Labin',
  },
  'location.labin.distance': {
    en: '12 km',
    hr: '12 km',
    it: '12 km',
    de: '12 km',
  },
  'location.rovinj.title': {
    en: 'Rovinj',
    hr: 'Rovinj',
    it: 'Rovigno',
    de: 'Rovinj',
  },
  'location.rovinj.distance': {
    en: '35 km',
    hr: '35 km',
    it: '35 km',
    de: '35 km',
  },
  'location.airport.title': {
    en: 'Pula Airport',
    hr: 'Zračna Luka Pula',
    it: 'Aeroporto di Pola',
    de: 'Flughafen Pula',
  },
  'location.airport.distance': {
    en: '35 km',
    hr: '35 km',
    it: '35 km',
    de: '35 km',
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

  // Contact
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
