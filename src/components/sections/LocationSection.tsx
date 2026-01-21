import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Waves, Building2, Plane, UtensilsCrossed, ShoppingCart, ChevronDown } from 'lucide-react';
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

  const restaurants = [
    { title: t('location.martinPescador.title'), distance: t('location.martinPescador.distance') },
    { title: t('location.konobaNando.title'), distance: t('location.konobaNando.distance') },
    { title: t('location.pizzeriaRumore.title'), distance: t('location.pizzeriaRumore.distance') },
    { title: t('location.stareStaze.title'), distance: t('location.stareStaze.distance') },
  ];

  const supermarkets = [
    { title: t('location.spar.title'), distance: t('location.spar.distance') },
    { title: t('location.plodine.title'), distance: t('location.plodine.distance') },
    { title: t('location.lidl.title'), distance: t('location.lidl.distance') },
    { title: t('location.eurospin.title'), distance: t('location.eurospin.distance') },
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
          className="text-center max-w-6xl w-full text-backdrop py-4 px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 rounded-full glass-card text-gold-light text-xs uppercase tracking-widest mb-3 sm:mb-4 text-shadow"
          >
            {t('location.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-linen mb-2 sm:mb-3 text-shadow"
          >
            {t('location.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-linen/80 text-sm sm:text-base mb-5 sm:mb-6 text-shadow"
          >
            {t('location.subtitle')}
          </motion.p>

          {/* First Row: Beaches, Towns, Restaurants */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-3 lg:mb-4"
          >
            {/* Beaches Category */}
            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center">
                  <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-gold-light" />
                </div>
                <h3 className="font-display text-base sm:text-lg text-linen text-shadow">
                  {t('location.category.beaches')}
                </h3>
              </div>
              <ul className="space-y-2">
                {beaches.map((beach, index) => (
                  <li key={index} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-linen/90">{beach.title}</span>
                    <span className="text-gold-light font-semibold text-xs">{beach.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Towns & Cities Category */}
            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold-light" />
                </div>
                <h3 className="font-display text-base sm:text-lg text-linen text-shadow">
                  {t('location.category.towns')}
                </h3>
              </div>
              <ul className="space-y-2">
                {towns.map((town, index) => (
                  <li key={index} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-linen/90">{town.title}</span>
                    <span className="text-gold-light font-semibold text-xs">{town.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Restaurants Category */}
            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center">
                  <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-gold-light" />
                </div>
                <h3 className="font-display text-base sm:text-lg text-linen text-shadow">
                  {t('location.category.restaurants')}
                </h3>
              </div>
              <ul className="space-y-2">
                {restaurants.map((restaurant, index) => (
                  <li key={index} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-linen/90">{restaurant.title}</span>
                    <span className="text-gold-light font-semibold text-xs">{restaurant.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Second Row: Transport, Supermarkets */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-4xl mx-auto mb-16 sm:mb-0"
          >
            {/* Transport Category */}
            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-gold-light" />
                </div>
                <h3 className="font-display text-base sm:text-lg text-linen text-shadow">
                  {t('location.category.transport')}
                </h3>
              </div>
              <ul className="space-y-2">
                {transport.map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-linen/90">{item.title}</span>
                    <span className="text-gold-light font-semibold text-xs">{item.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Supermarkets Category */}
            <div className="glass-card rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gold-light" />
                </div>
                <h3 className="font-display text-base sm:text-lg text-linen text-shadow">
                  {t('location.category.supermarkets')}
                </h3>
              </div>
              <ul className="space-y-2">
                {supermarkets.map((market, index) => (
                  <li key={index} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-linen/90">{market.title}</span>
                    <span className="text-gold-light font-semibold text-xs">{market.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mobile swipe indicator */}
          <motion.div
            variants={itemVariants}
            className="sm:hidden flex flex-col items-center mt-4 pb-4"
          >
            <span className="text-linen/60 text-xs mb-1">{t('location.swipeHint') || 'Swipe up'}</span>
            <ChevronDown className="w-5 h-5 text-gold-light animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

LocationSection.displayName = 'LocationSection';

export default LocationSection;
