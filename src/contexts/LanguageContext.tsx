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
    en: '4 Bedrooms · 5 Bathrooms · Up to 12 Guests',
    hr: '4 Spavaće sobe · 5 Kupaonica · Do 12 Gostiju',
    it: '4 Camere · 5 Bagni · Fino a 12 Ospiti',
    de: '4 Schlafzimmer · 5 Bäder · Bis zu 12 Gäste',
  },
  'hero.subtitle': {
    en: 'Luxurious villa with private pool, jacuzzi, and sauna in the heart of Istria. Experience authentic Croatian hospitality in Trgetari.',
    hr: 'Luksuzna vila s privatnim bazenom, jacuzzijem i saunom u srcu Istre. Doživite autentično hrvatsko gostoprimstvo u Trgetarima.',
    it: 'Villa lussuosa con piscina privata, jacuzzi e sauna nel cuore dell\'Istria. Vivi l\'autentica ospitalità croata a Trgetari.',
    de: 'Luxuriöse Villa mit privatem Pool, Whirlpool und Sauna im Herzen Istriens. Erleben Sie authentische kroatische Gastfreundschaft in Trgetari.',
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
    en: 'Seasonal Pool',
    hr: 'Sezonski Bazen',
    it: 'Piscina Stagionale',
    de: 'Saisonaler Pool',
  },
  'amenities.pool.description': {
    en: 'Outdoor pool open during summer season',
    hr: 'Vanjski bazen otvoren tijekom ljetne sezone',
    it: 'Piscina esterna aperta durante la stagione estiva',
    de: 'Außenpool während der Sommersaison geöffnet',
  },
  'amenities.jacuzzi.title': {
    en: 'Jacuzzi & Sauna',
    hr: 'Jacuzzi i Sauna',
    it: 'Jacuzzi e Sauna',
    de: 'Whirlpool & Sauna',
  },
  'amenities.jacuzzi.description': {
    en: 'Private hot tub and Finnish sauna for relaxation',
    hr: 'Privatni jacuzzi i finska sauna za opuštanje',
    it: 'Vasca idromassaggio privata e sauna finlandese per il relax',
    de: 'Privater Whirlpool und finnische Sauna zur Entspannung',
  },
  'amenities.wifi.title': {
    en: 'Free WiFi',
    hr: 'Besplatan WiFi',
    it: 'WiFi Gratuito',
    de: 'Kostenloses WLAN',
  },
  'amenities.wifi.description': {
    en: 'High-speed internet throughout the villa',
    hr: 'Brzi internet u cijeloj vili',
    it: 'Internet ad alta velocità in tutta la villa',
    de: 'Highspeed-Internet in der gesamten Villa',
  },
  'amenities.bbq.title': {
    en: 'BBQ & Garden',
    hr: 'Roštilj i Vrt',
    it: 'BBQ e Giardino',
    de: 'BBQ & Garten',
  },
  'amenities.bbq.description': {
    en: 'Outdoor BBQ area with beautiful garden and terrace',
    hr: 'Vanjski roštilj s prekrasnim vrtom i terasom',
    it: 'Area BBQ esterna con bellissimo giardino e terrazza',
    de: 'Außen-BBQ-Bereich mit schönem Garten und Terrasse',
  },

  // Location
  'location.label': {
    en: 'Trgetari, Istria',
    hr: 'Trgetari, Istra',
    it: 'Trgetari, Istria',
    de: 'Trgetari, Istrien',
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
    en: 'Beach',
    hr: 'Plaža',
    it: 'Spiaggia',
    de: 'Strand',
  },
  'location.beach.distance': {
    en: '5 km',
    hr: '5 km',
    it: '5 km',
    de: '5 km',
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
  'location.porec.title': {
    en: 'Poreč',
    hr: 'Poreč',
    it: 'Parenzo',
    de: 'Poreč',
  },
  'location.porec.distance': {
    en: '45 km',
    hr: '45 km',
    it: '45 km',
    de: '45 km',
  },
  'location.airport.title': {
    en: 'Pula Airport',
    hr: 'Zračna Luka Pula',
    it: 'Aeroporto di Pola',
    de: 'Flughafen Pula',
  },
  'location.airport.distance': {
    en: '17 km',
    hr: '17 km',
    it: '17 km',
    de: '17 km',
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
