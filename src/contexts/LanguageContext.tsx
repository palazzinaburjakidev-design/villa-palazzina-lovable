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
    en: 'Luxury Mediterranean Villa',
    hr: 'Luksuzna Mediteranska Vila',
    it: 'Villa Mediterranea di Lusso',
    de: 'Luxuriöse Mediterrane Villa',
  },
  'hero.title': {
    en: 'Experience Timeless Elegance',
    hr: 'Doživite Bezvremensku Eleganciju',
    it: 'Vivi l\'Eleganza Senza Tempo',
    de: 'Erleben Sie Zeitlose Eleganz',
  },
  'hero.subtitle': {
    en: 'Nestled in the heart of Istria, Palazzina Burjaki offers an unforgettable escape where tradition meets contemporary luxury.',
    hr: 'Smještena u srcu Istre, Palazzina Burjaki nudi nezaboravan bijeg gdje se tradicija susreće s modernim luksuzom.',
    it: 'Nel cuore dell\'Istria, Palazzina Burjaki offre una fuga indimenticabile dove la tradizione incontra il lusso contemporaneo.',
    de: 'Im Herzen Istriens bietet Palazzina Burjaki einen unvergesslichen Rückzugsort, wo Tradition auf zeitgenössischen Luxus trifft.',
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
    en: 'Features',
    hr: 'Značajke',
    it: 'Caratteristiche',
    de: 'Ausstattung',
  },
  'amenities.title': {
    en: 'Exceptional Amenities',
    hr: 'Izvanredni Sadržaji',
    it: 'Servizi Eccezionali',
    de: 'Außergewöhnliche Annehmlichkeiten',
  },
  'amenities.subtitle': {
    en: 'Everything you need for a perfect stay',
    hr: 'Sve što trebate za savršen boravak',
    it: 'Tutto ciò di cui hai bisogno per un soggiorno perfetto',
    de: 'Alles was Sie für einen perfekten Aufenthalt brauchen',
  },
  'amenities.pool.title': {
    en: 'Private Pool',
    hr: 'Privatni Bazen',
    it: 'Piscina Privata',
    de: 'Privater Pool',
  },
  'amenities.pool.description': {
    en: 'Crystal clear waters surrounded by Mediterranean gardens',
    hr: 'Kristalno čista voda okružena mediteranskim vrtovima',
    it: 'Acque cristalline circondate da giardini mediterranei',
    de: 'Kristallklares Wasser umgeben von mediterranen Gärten',
  },
  'amenities.sea.title': {
    en: 'Sea View',
    hr: 'Pogled na More',
    it: 'Vista Mare',
    de: 'Meerblick',
  },
  'amenities.sea.description': {
    en: 'Breathtaking panoramic views of the Adriatic coast',
    hr: 'Prekrasan panoramski pogled na jadransku obalu',
    it: 'Viste panoramiche mozzafiato della costa adriatica',
    de: 'Atemberaubende Panoramablicke auf die Adriaküste',
  },
  'amenities.wifi.title': {
    en: 'High-Speed WiFi',
    hr: 'Brzi WiFi',
    it: 'WiFi Veloce',
    de: 'Highspeed-WLAN',
  },
  'amenities.wifi.description': {
    en: 'Stay connected with fast and reliable internet',
    hr: 'Ostanite povezani s brzim i pouzdanim internetom',
    it: 'Resta connesso con internet veloce e affidabile',
    de: 'Bleiben Sie verbunden mit schnellem und zuverlässigem Internet',
  },
  'amenities.wellness.title': {
    en: 'Wellness Area',
    hr: 'Wellness Zona',
    it: 'Area Benessere',
    de: 'Wellnessbereich',
  },
  'amenities.wellness.description': {
    en: 'Rejuvenate in our spa with sauna and massage services',
    hr: 'Podmladite se u našem spa centru sa saunom i masažama',
    it: 'Rigenerati nella nostra spa con sauna e servizi massaggio',
    de: 'Erholen Sie sich in unserem Spa mit Sauna und Massage',
  },

  // Location
  'location.label': {
    en: 'Location',
    hr: 'Lokacija',
    it: 'Posizione',
    de: 'Lage',
  },
  'location.title': {
    en: 'Perfectly Situated',
    hr: 'Savršeno Smješteno',
    it: 'Perfettamente Situato',
    de: 'Perfekt Gelegen',
  },
  'location.subtitle': {
    en: 'Explore the beauty of Istria',
    hr: 'Istražite ljepotu Istre',
    it: 'Esplora la bellezza dell\'Istria',
    de: 'Entdecken Sie die Schönheit Istriens',
  },
  'location.beach.title': {
    en: 'Beach',
    hr: 'Plaža',
    it: 'Spiaggia',
    de: 'Strand',
  },
  'location.beach.distance': {
    en: '5 min drive',
    hr: '5 min vožnje',
    it: '5 min in auto',
    de: '5 Min. Fahrt',
  },
  'location.dining.title': {
    en: 'Restaurants',
    hr: 'Restorani',
    it: 'Ristoranti',
    de: 'Restaurants',
  },
  'location.dining.distance': {
    en: '10 min walk',
    hr: '10 min hoda',
    it: '10 min a piedi',
    de: '10 Min. Fußweg',
  },
  'location.oldtown.title': {
    en: 'Old Town',
    hr: 'Stari Grad',
    it: 'Città Vecchia',
    de: 'Altstadt',
  },
  'location.oldtown.distance': {
    en: '15 min drive',
    hr: '15 min vožnje',
    it: '15 min in auto',
    de: '15 Min. Fahrt',
  },
  'location.airport.title': {
    en: 'Airport',
    hr: 'Zračna Luka',
    it: 'Aeroporto',
    de: 'Flughafen',
  },
  'location.airport.distance': {
    en: '45 min drive',
    hr: '45 min vožnje',
    it: '45 min in auto',
    de: '45 Min. Fahrt',
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
