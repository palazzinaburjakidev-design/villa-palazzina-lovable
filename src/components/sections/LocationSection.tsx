import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Waves, Building2, Plane } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import terraceImage from '@/assets/gallery-terrace.avif';

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

  const beaches = [
    { title: t('location.santaMarina.title'), distance: t('location.santaMarina.distance') },
    { title: t('location.tunarica.title'), distance: t('location.tunarica.distance') },
    { title: t('location.ravni.title'), distance: t('location.ravni.distance') },
    { title: t('location.rabacBeaches.title'), distance: t('location.rabacBeaches.distance') },
  ];

  const towns = [
    { title: t('location.labin.title'), distance: t('location.labin.distance') },
    { title: t('location.rabac.title'), distance: t('location.rabac.distance') },
    { title: t('location.rovinj.title'), distance: t('location.rovinj.distance') },
    { title: t('location.pula.title'), distance: t('location.pula.distance') },
  ];

  const transport = [
    { title: t('location.airport.title'), distance: t('location.airport.distance') },
    { title: t('location.triesteAirport.title'), distance: t('location.triesteAirport.distance') },
    { title: t('location.zagrebAirport.title'), distance: t('location.zagrebAirport.distance') },
    { title: t('location.busStation.title'), distance: t('location.busStation.distance') },
  ];

  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="section-zoom"
        style={{ backgroundImage: `url(${terraceImage})` }}
        role="img"
        aria-label="Terrace with outdoor dining area at Villa Palazzina Burjaki"
        initial={{ scale: 1.4, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div 
        className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-24 sm:pb-20 overflow-y-auto overscroll-contain touch-pan-y"
        data-scrollable="true"
      >
        <motion.div
          className="text-center max-w-5xl w-full text-backdrop py-8 px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-card text-gold-light text-xs uppercase tracking-widest mb-4 sm:mb-6 text-shadow"
          >
            {t('location.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-linen mb-3 sm:mb-4 text-shadow"
          >
            {t('location.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-linen/80 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 text-shadow-sm"
          >
            {t('location.subtitle')}
          </motion.p>

          {/* Location Categories Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Beaches Category */}
            <div className="glass-card rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center">
                  <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-gold-light" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-linen text-shadow">
                  {t('location.category.beaches')}
                </h3>
              </div>
              <ul className="space-y-3">
                {beaches.map((beach, index) => (
                  <li key={index} className="flex justify-between items-center text-sm sm:text-base">
                    <span className="text-linen/90">{beach.title}</span>
                    <span className="text-gold-light font-semibold text-xs sm:text-sm">{beach.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Towns & Cities Category */}
            <div className="glass-card rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold-light" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-linen text-shadow">
                  {t('location.category.towns')}
                </h3>
              </div>
              <ul className="space-y-3">
                {towns.map((town, index) => (
                  <li key={index} className="flex justify-between items-center text-sm sm:text-base">
                    <span className="text-linen/90">{town.title}</span>
                    <span className="text-gold-light font-semibold text-xs sm:text-sm">{town.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transport Category */}
            <div className="glass-card rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center">
                  <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-gold-light" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-linen text-shadow">
                  {t('location.category.transport')}
                </h3>
              </div>
              <ul className="space-y-3">
                {transport.map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-sm sm:text-base">
                    <span className="text-linen/90">{item.title}</span>
                    <span className="text-gold-light font-semibold text-xs sm:text-sm">{item.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

LocationSection.displayName = 'LocationSection';

export default LocationSection;
