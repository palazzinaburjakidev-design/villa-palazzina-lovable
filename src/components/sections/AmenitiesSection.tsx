import { motion } from 'framer-motion';
import { Waves, Sparkles, Wifi, Flame } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import poolImage from '@/assets/gallery-pool.avif';

interface AmenitiesSectionProps {
  isActive: boolean;
}

const AmenitiesSection = ({ isActive }: AmenitiesSectionProps) => {
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
      title: t('amenities.jacuzzi.title'),
      description: t('amenities.jacuzzi.description'),
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
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="section-zoom"
        style={{ backgroundImage: `url(${poolImage})` }}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 pt-16 sm:pt-20 pb-24 sm:pb-20">
        <motion.div
          className="text-center max-w-5xl w-full text-backdrop py-12 px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-card text-gold text-xs uppercase tracking-widest mb-4 sm:mb-6 text-shadow-sm"
          >
            {t('amenities.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-linen mb-3 sm:mb-4 text-shadow"
          >
            {t('amenities.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-linen/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 lg:mb-12 text-shadow-sm"
          >
            {t('amenities.subtitle')}
          </motion.p>

          {/* Amenity Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2"
          >
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="amenity-card text-center"
                >
                  <Icon className="amenity-icon w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-4 text-linen/80 transition-colors duration-300" />
                  <h3 className="font-display text-sm sm:text-base lg:text-lg text-linen mb-1 sm:mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-linen/60 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
