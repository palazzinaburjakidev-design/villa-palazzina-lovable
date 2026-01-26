import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LocationItem {
  nameKey: string;
  descriptionKey: string;
  distanceKey: string;
}

const locationItems: LocationItem[] = [
  {
    nameKey: 'location.ravni.title',
    descriptionKey: 'location.ravni.description',
    distanceKey: 'location.ravni.distance',
  },
  {
    nameKey: 'location.tunarica.title',
    descriptionKey: 'location.tunarica.description',
    distanceKey: 'location.tunarica.distance',
  },
  {
    nameKey: 'location.santaMarina.title',
    descriptionKey: 'location.santaMarina.description',
    distanceKey: 'location.santaMarina.distance',
  },
  {
    nameKey: 'location.rabacBeaches.title',
    descriptionKey: 'location.rabacBeaches.description',
    distanceKey: 'location.rabacBeaches.distance',
  },
  {
    nameKey: 'location.labin.title',
    descriptionKey: 'location.labin.description',
    distanceKey: 'location.labin.distance',
  },
  {
    nameKey: 'location.rabac.title',
    descriptionKey: 'location.rabac.description',
    distanceKey: 'location.rabac.distance',
  },
  {
    nameKey: 'location.rovinj.title',
    descriptionKey: 'location.rovinj.description',
    distanceKey: 'location.rovinj.distance',
  },
  {
    nameKey: 'location.pula.title',
    descriptionKey: 'location.pula.description',
    distanceKey: 'location.pula.distance',
  },
];

const ROTATION_INTERVAL = 10000; // 10 seconds

const LocationBanner = memo(() => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locationItems.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const currentItem = locationItems[currentIndex];

  return (
    <div className="w-full glass-card-coal rounded-xl overflow-hidden">
      {/* Banner Content */}
      <div className="relative h-32 sm:h-36 md:h-40 flex items-center justify-center px-6 sm:px-8 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="text-center max-w-3xl"
          >
            {/* Location Name */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta-light" />
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
        {locationItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-6 bg-terracotta-light' 
                : 'w-1.5 bg-sandstone/30 hover:bg-sandstone/50'
            }`}
            aria-label={`Go to location ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

LocationBanner.displayName = 'LocationBanner';

export default LocationBanner;
