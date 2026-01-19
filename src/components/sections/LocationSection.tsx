import { motion } from 'framer-motion';
import { Umbrella, Building2, MapPin, Plane } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import terraceImage from '@/assets/gallery-terrace.avif';

interface LocationSectionProps {
  isActive: boolean;
}

const LocationSection = ({ isActive }: LocationSectionProps) => {
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

  const locations = [
    {
      icon: Umbrella,
      title: t('location.beach.title'),
      distance: t('location.beach.distance'),
    },
    {
      icon: Building2,
      title: t('location.labin.title'),
      distance: t('location.labin.distance'),
    },
    {
      icon: MapPin,
      title: t('location.rovinj.title'),
      distance: t('location.rovinj.distance'),
    },
    {
      icon: Plane,
      title: t('location.airport.title'),
      distance: t('location.airport.distance'),
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="section-zoom"
        style={{ backgroundImage: `url(${terraceImage})` }}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 pt-16 sm:pt-20 pb-24 sm:pb-20">
        <motion.div
          className="text-center max-w-4xl w-full text-backdrop py-12 px-6"
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
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-linen mb-3 sm:mb-4 text-shadow"
          >
            {t('location.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-linen/80 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 text-shadow-sm"
          >
            {t('location.subtitle')}
          </motion.p>

          {/* Location Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <div
                  key={index}
                  className="location-card"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 rounded-full glass-card flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gold-light" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base lg:text-lg text-linen mb-1 text-shadow">
                    {location.title}
                  </h3>
                  <p className="text-gold-light text-xs sm:text-sm font-semibold text-shadow">
                    {location.distance}
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

export default LocationSection;
