import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Building2, UtensilsCrossed, ShoppingCart, Plane } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Beach images
import santaMarinaImg from '@/assets/santa-marina.webp';
import ravniBeachImg from '@/assets/ravni-beach.jpeg';
import tunaricaImg from '@/assets/tunarica.webp';
import rabacBeachImg from '@/assets/rabac-beach.jpg';

// Town images
import rabacTownImg from '@/assets/rabac-town.jpg';
import labinOldTownImg from '@/assets/labin-old-town.jpg';
import rovinjTownImg from '@/assets/rovinj-town.jpg';
import pulaTownImg from '@/assets/pula-town.jpg';
import rasaTownImg from '@/assets/rasa-town.jpg';

interface LocationItem {
  nameKey: string;
  descriptionKey: string;
  distanceKey: string;
  image?: string;
}

interface Category {
  id: string;
  labelKey: string;
  icon: React.ReactNode;
  items: LocationItem[];
}

const categoriesGroup1: Category[] = [
  {
    id: 'towns',
    labelKey: 'location.category.towns',
    icon: <Building2 className="w-4 h-4" />,
    items: [
      { nameKey: 'location.rasa.title', descriptionKey: 'location.rasa.description', distanceKey: 'location.rasa.distance', image: rasaTownImg },
      { nameKey: 'location.labin.title', descriptionKey: 'location.labin.description', distanceKey: 'location.labin.distance', image: labinOldTownImg },
      { nameKey: 'location.rabac.title', descriptionKey: 'location.rabac.description', distanceKey: 'location.rabac.distance', image: rabacTownImg },
      { nameKey: 'location.rovinj.title', descriptionKey: 'location.rovinj.description', distanceKey: 'location.rovinj.distance', image: rovinjTownImg },
      { nameKey: 'location.pula.title', descriptionKey: 'location.pula.description', distanceKey: 'location.pula.distance', image: pulaTownImg },
    ],
  },
  {
    id: 'beaches',
    labelKey: 'location.category.beaches',
    icon: <Waves className="w-4 h-4" />,
    items: [
      { nameKey: 'location.ravni.title', descriptionKey: 'location.ravni.description', distanceKey: 'location.ravni.distance', image: ravniBeachImg },
      { nameKey: 'location.tunarica.title', descriptionKey: 'location.tunarica.description', distanceKey: 'location.tunarica.distance', image: tunaricaImg },
      { nameKey: 'location.santaMarina.title', descriptionKey: 'location.santaMarina.description', distanceKey: 'location.santaMarina.distance', image: santaMarinaImg },
      { nameKey: 'location.rabacBeaches.title', descriptionKey: 'location.rabacBeaches.description', distanceKey: 'location.rabacBeaches.distance', image: rabacBeachImg },
    ],
  },
  {
    id: 'restaurants',
    labelKey: 'location.category.restaurants',
    icon: <UtensilsCrossed className="w-4 h-4" />,
    items: [
      { nameKey: 'location.martinPescador.title', descriptionKey: 'location.martinPescador.description', distanceKey: 'location.martinPescador.distance' },
      { nameKey: 'location.konobaNando.title', descriptionKey: 'location.konobaNando.description', distanceKey: 'location.konobaNando.distance' },
      { nameKey: 'location.pizzeriaRumore.title', descriptionKey: 'location.pizzeriaRumore.description', distanceKey: 'location.pizzeriaRumore.distance' },
      { nameKey: 'location.stareStaze.title', descriptionKey: 'location.stareStaze.description', distanceKey: 'location.stareStaze.distance' },
    ],
  },
];

const categoriesGroup2: Category[] = [
  {
    id: 'supermarkets',
    labelKey: 'location.category.supermarkets',
    icon: <ShoppingCart className="w-4 h-4" />,
    items: [
      { nameKey: 'location.spar.title', descriptionKey: 'location.spar.description', distanceKey: 'location.spar.distance' },
      { nameKey: 'location.plodine.title', descriptionKey: 'location.plodine.description', distanceKey: 'location.plodine.distance' },
      { nameKey: 'location.lidl.title', descriptionKey: 'location.lidl.description', distanceKey: 'location.lidl.distance' },
      { nameKey: 'location.eurospin.title', descriptionKey: 'location.eurospin.description', distanceKey: 'location.eurospin.distance' },
    ],
  },
  {
    id: 'transport',
    labelKey: 'location.category.transport',
    icon: <Plane className="w-4 h-4" />,
    items: [
      { nameKey: 'location.airport.title', descriptionKey: 'location.airport.description', distanceKey: 'location.airport.distance' },
      { nameKey: 'location.triesteAirport.title', descriptionKey: 'location.triesteAirport.description', distanceKey: 'location.triesteAirport.distance' },
      { nameKey: 'location.zagrebAirport.title', descriptionKey: 'location.zagrebAirport.description', distanceKey: 'location.zagrebAirport.distance' },
      { nameKey: 'location.busStation.title', descriptionKey: 'location.busStation.description', distanceKey: 'location.busStation.distance' },
    ],
  },
];

const ROTATION_INTERVAL = 5000;

interface BannerGroupProps {
  categories: Category[];
  initialDelay?: number;
  isPrimary?: boolean;
}

const BannerGroup = memo(({ categories, initialDelay = 0, isPrimary = false }: BannerGroupProps) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentCategory = categories[activeCategory];
  const currentItem = currentCategory.items[currentItemIndex];

  // Use refs to track current state without causing effect re-runs
  const activeCategoryRef = useRef(activeCategory);
  const currentItemIndexRef = useRef(currentItemIndex);
  const isPausedRef = useRef(isPaused);
  
  useEffect(() => {
    activeCategoryRef.current = activeCategory;
    currentItemIndexRef.current = currentItemIndex;
  }, [activeCategory, currentItemIndex]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let intervalId: NodeJS.Timeout | null = null;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        // Skip rotation if paused
        if (isPausedRef.current) return;
        
        const currentCat = categories[activeCategoryRef.current];
        const nextIndex = currentItemIndexRef.current + 1;
        
        if (nextIndex >= currentCat.items.length) {
          setActiveCategory((prevCat) => (prevCat + 1) % categories.length);
          setCurrentItemIndex(0);
        } else {
          setCurrentItemIndex(nextIndex);
        }
      }, ROTATION_INTERVAL);
    }, initialDelay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [categories.length, initialDelay]);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setCurrentItemIndex(0);
  };

  return (
    <div 
      className={`w-full glass-card-coal rounded-xl overflow-hidden transition-all duration-300 ${isPrimary ? 'ring-1 ring-terracotta/20' : ''} ${isPaused ? 'ring-2 ring-terracotta/40' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Category Tabs */}
      <div className={`flex justify-center gap-1 sm:gap-2 px-3 ${isPrimary ? 'pt-4 pb-3' : 'pt-3 pb-2'}`}>
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(index)}
            className={`flex items-center gap-1.5 rounded-full transition-all duration-300 ${
              isPrimary ? 'px-4 py-2 text-sm sm:text-base' : 'px-3 py-1.5 text-xs sm:text-sm'
            } ${
              index === activeCategory
                ? 'bg-terracotta/30 text-terracotta-light'
                : 'bg-coal-deep/50 text-sandstone/60 hover:text-sandstone/80 hover:bg-coal-deep/70'
            }`}
          >
            {category.icon}
            <span className="hidden sm:inline">{t(category.labelKey)}</span>
          </button>
        ))}
      </div>

      {/* Banner Content */}
      <div className={`relative flex items-center justify-center ${isPrimary ? 'h-56 sm:h-52 md:h-60' : 'h-24 sm:h-28'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentItemIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 sm:px-6 md:px-10 w-full max-w-3xl"
          >
            {/* Image thumbnail - only for primary group with images */}
            {isPrimary && currentItem.image && (
              <div className="flex-shrink-0 w-24 h-24 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-xl overflow-hidden ring-2 ring-terracotta/40 shadow-lg">
                <img 
                  src={currentItem.image} 
                  alt={t(currentItem.nameKey)}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Text content */}
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-2 mb-1.5 flex-wrap">
                <span className="text-terracotta-light">{currentCategory.icon}</span>
                <h3 className={`font-display text-sandstone text-shadow ${isPrimary ? 'text-lg sm:text-xl md:text-2xl' : 'text-base sm:text-lg md:text-xl'}`}>
                  {t(currentItem.nameKey)}
                </h3>
                <span className={`px-2 py-0.5 rounded-full bg-terracotta/20 text-terracotta-light font-semibold ${isPrimary ? 'text-sm' : 'text-xs'}`}>
                  {t(currentItem.distanceKey)}
                </span>
              </div>
              <p className={`text-sandstone/80 leading-relaxed text-shadow line-clamp-2 ${isPrimary ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                {t(currentItem.descriptionKey)}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-1.5 pb-2">
        {currentCategory.items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentItemIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentItemIndex 
                ? 'w-5 bg-terracotta-light' 
                : 'w-1.5 bg-sandstone/30 hover:bg-sandstone/50'
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>

      {/* Photo Attribution */}
      {isPrimary && (currentCategory.id === 'beaches' || currentCategory.id === 'towns') && currentItem.image && (
        <p className="text-center text-[10px] text-sandstone/40 pb-2 italic">
          {currentCategory.id === 'beaches' 
            ? (currentItem.nameKey === 'location.rabacBeaches.title' 
                ? 'Izvor fotografije: Turistička zajednica Rabac-Labin'
                : 'Izvor fotografije: Turistička zajednica Općine Raša')
            : (currentItem.nameKey === 'location.rovinj.title'
                ? 'Izvor fotografije: rovinj-tourism'
                : currentItem.nameKey === 'location.pula.title'
                  ? 'Izvor fotografije: pulainfo.hr'
                  : currentItem.nameKey === 'location.rasa.title'
                    ? 'Izvor fotografije: Turistička zajednica Općine Raša'
                    : 'Izvor fotografije: Turistička zajednica Rabac-Labin')
          }
        </p>
      )}
    </div>
  );
});

BannerGroup.displayName = 'BannerGroup';

const LocationBanner = memo(() => {
  return (
    <div className="w-full space-y-3">
      {/* Group 1: Towns, Beaches, Restaurants (Primary) */}
      <BannerGroup categories={categoriesGroup1} initialDelay={0} isPrimary={true} />
      
      {/* Group 2: Supermarkets, Transport */}
      <BannerGroup categories={categoriesGroup2} initialDelay={5000} />
    </div>
  );
});

LocationBanner.displayName = 'LocationBanner';

export default LocationBanner;
