import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Dumbbell, CircleDot, Wifi, Flame, AirVent, Gamepad2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import MiningIllustration from '@/components/MiningIllustration';

interface AmenitiesSectionProps {
  isActive: boolean;
}

const AmenitiesSection = memo(({ isActive }: AmenitiesSectionProps) => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const amenities = [
    {
      icon: Waves,
      title: t('amenities.pool.title'),
      description: t('amenities.pool.description'),
    },
    {
      icon: Sparkles,
      title: t('amenities.wellness.title'),
      description: t('amenities.wellness.description'),
    },
    {
      icon: Dumbbell,
      title: t('amenities.fitness.title'),
      description: t('amenities.fitness.description'),
    },
    {
      icon: CircleDot,
      title: t('amenities.basketball.title'),
      description: t('amenities.basketball.description'),
    },
    {
      icon: Wifi,
      title: t('amenities.wifi.title'),
      description: t('amenities.wifi.description'),
    },
    {
      icon: Flame,
      title: t('amenities.bbq.title'),
      description: t('amenities.bbq.description'),
    },
    {
      icon: AirVent,
      title: t('amenities.ac.title'),
      description: t('amenities.ac.description'),
    },
    {
      icon: Gamepad2,
      title: t('amenities.entertainment.title'),
      description: t('amenities.entertainment.description'),
    },
  ];

  return (
    <section className="relative h-full w-full overflow-hidden bg-coal coal-texture">
      {/* Content */}
      <div 
        data-scrollable="true"
        className="relative z-10 h-full flex flex-col justify-start sm:justify-center items-center px-4 sm:px-6 pt-20 sm:pt-20 pb-28 sm:pb-20 overflow-y-auto sm:overflow-hidden touch-pan-y overscroll-contain"
      >
        <motion.div
          className="text-center max-w-7xl xl:max-w-[90%] w-full text-backdrop py-8 sm:py-12 px-4 sm:px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-card-coal text-terracotta text-xs uppercase tracking-widest mb-4 sm:mb-6 text-shadow-sm"
          >
            {t('amenities.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sandstone mb-3 sm:mb-4 text-shadow"
          >
            {t('amenities.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sandstone/80 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 text-shadow"
          >
            {t('amenities.subtitle')}
          </motion.p>

          {/* Amenity Cards Grid - 8 items */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 px-2"
          >
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="amenity-card text-center py-4 sm:py-5"
                >
                  <Icon className="amenity-icon w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-sandstone/80 transition-colors duration-300" />
                  <h3 className="font-display text-xs sm:text-sm lg:text-base text-sandstone mb-1">
                    {amenity.title}
                  </h3>
                  <p className="text-sandstone/60 text-[10px] sm:text-xs leading-relaxed line-clamp-2">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Mining Illustration */}
        <MiningIllustration 
          type="miners-walking" 
          isActive={isActive} 
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 z-20"
        />
      </div>
    </section>
  );
});

AmenitiesSection.displayName = 'AmenitiesSection';

export default AmenitiesSection;
