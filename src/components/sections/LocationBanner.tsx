import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Building2, UtensilsCrossed, ShoppingCart, Plane } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LocationItem {
  nameKey: string;
  descriptionKey: string;
  distanceKey: string;
}

interface Category {
  id: string;
  labelKey: string;
  icon: React.ReactNode;
  items: LocationItem[];
}

const categoriesRow1: Category[] = [
  {
    id: 'beaches',
    labelKey: 'location.category.beaches',
    icon: <Waves className="w-4 h-4" />,
    items: [
      { nameKey: 'location.ravni.title', descriptionKey: 'location.ravni.description', distanceKey: 'location.ravni.distance' },
      { nameKey: 'location.tunarica.title', descriptionKey: 'location.tunarica.description', distanceKey: 'location.tunarica.distance' },
      { nameKey: 'location.santaMarina.title', descriptionKey: 'location.santaMarina.description', distanceKey: 'location.santaMarina.distance' },
      { nameKey: 'location.rabacBeaches.title', descriptionKey: 'location.rabacBeaches.description', distanceKey: 'location.rabacBeaches.distance' },
    ],
  },
  {
    id: 'towns',
    labelKey: 'location.category.towns',
    icon: <Building2 className="w-4 h-4" />,
    items: [
      { nameKey: 'location.labin.title', descriptionKey: 'location.labin.description', distanceKey: 'location.labin.distance' },
      { nameKey: 'location.rabac.title', descriptionKey: 'location.rabac.description', distanceKey: 'location.rabac.distance' },
      { nameKey: 'location.rovinj.title', descriptionKey: 'location.rovinj.description', distanceKey: 'location.rovinj.distance' },
      { nameKey: 'location.pula.title', descriptionKey: 'location.pula.description', distanceKey: 'location.pula.distance' },
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

const categoriesRow2: Category[] = [
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

const allCategories = [...categoriesRow1, ...categoriesRow2];

const ROTATION_INTERVAL = 10000; // 10 seconds

const LocationBanner = memo(() => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const currentCategory = allCategories[activeCategory];
  const currentItem = currentCategory.items[currentItemIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= currentCategory.items.length) {
          setActiveCategory((prevCat) => (prevCat + 1) % allCategories.length);
          return 0;
        }
        return nextIndex;
      });
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [currentCategory.items.length]);

  const handleCategoryChange = (globalIndex: number) => {
    setActiveCategory(globalIndex);
    setCurrentItemIndex(0);
  };

  const CategoryButton = ({ category, globalIndex }: { category: Category; globalIndex: number }) => (
    <button
      onClick={() => handleCategoryChange(globalIndex)}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-300 ${
        globalIndex === activeCategory
          ? 'bg-terracotta/30 text-terracotta-light'
          : 'bg-coal-deep/50 text-sandstone/60 hover:text-sandstone/80 hover:bg-coal-deep/70'
      }`}
    >
      {category.icon}
      <span className="hidden sm:inline">{t(category.labelKey)}</span>
    </button>
  );

  return (
    <div className="w-full glass-card-coal rounded-xl overflow-hidden">
      {/* Category Tabs - Two Rows */}
      <div className="px-3 pt-4 pb-2 space-y-2">
        {/* Row 1: Beaches, Towns, Restaurants */}
        <div className="flex justify-center gap-1 sm:gap-2">
          {categoriesRow1.map((category, index) => (
            <CategoryButton key={category.id} category={category} globalIndex={index} />
          ))}
        </div>
        {/* Row 2: Supermarkets, Transport */}
        <div className="flex justify-center gap-1 sm:gap-2">
          {categoriesRow2.map((category, index) => (
            <CategoryButton key={category.id} category={category} globalIndex={categoriesRow1.length + index} />
          ))}
        </div>
      </div>

      {/* Banner Content */}
      <div className="relative h-28 sm:h-32 md:h-36 flex items-center justify-center px-6 sm:px-8 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentItemIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl"
          >
            {/* Location Name */}
            <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
              <span className="text-terracotta-light">{currentCategory.icon}</span>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl text-sandstone text-shadow">
                {t(currentItem.nameKey)}
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-terracotta/20 text-terracotta-light text-xs sm:text-sm font-semibold">
                {t(currentItem.distanceKey)}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-sandstone/80 text-sm sm:text-base leading-relaxed text-shadow">
              {t(currentItem.descriptionKey)}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-1.5 pb-4">
        {currentCategory.items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentItemIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentItemIndex 
                ? 'w-6 bg-terracotta-light' 
                : 'w-1.5 bg-sandstone/30 hover:bg-sandstone/50'
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

LocationBanner.displayName = 'LocationBanner';

export default LocationBanner;
