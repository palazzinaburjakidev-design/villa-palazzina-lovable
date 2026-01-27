import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LocationBanner from './LocationBanner';
import MiningIllustration from '@/components/MiningIllustration';

interface LocationSectionProps {
  isActive: boolean;
}

const LocationSection = memo(({ isActive }: LocationSectionProps) => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="relative h-full w-full overflow-hidden bg-coal coal-texture">
      {/* Content */}
      <div 
        className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 py-20 sm:py-24"
        data-scrollable="true"
      >
        <motion.div
          className="text-center max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 rounded-full glass-card-coal text-terracotta-light text-xs uppercase tracking-widest mb-3 sm:mb-4 text-shadow"
          >
            {t('location.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sandstone mb-2 sm:mb-3 text-shadow"
          >
            {t('location.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sandstone/80 text-sm sm:text-base mb-8 sm:mb-10 text-shadow"
          >
            {t('location.subtitle')}
          </motion.p>

          {/* Rotating Location Banner */}
          <motion.div variants={itemVariants}>
            <LocationBanner />
          </motion.div>
        </motion.div>

        {/* Mining Illustration */}
        <MiningIllustration 
          type="mine-cart" 
          isActive={isActive} 
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
        />
      </div>
    </section>
  );
});

LocationSection.displayName = 'LocationSection';

export default LocationSection;
