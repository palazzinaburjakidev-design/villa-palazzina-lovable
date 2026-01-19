import { motion } from 'framer-motion';
import { Umbrella, UtensilsCrossed, Building2, Plane } from 'lucide-react';
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
      icon: UtensilsCrossed,
      title: t('location.dining.title'),
      distance: t('location.dining.distance'),
    },
    {
      icon: Building2,
      title: t('location.oldtown.title'),
      distance: t('location.oldtown.distance'),
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
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-20">
        <motion.div
          className="text-center max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-gold text-xs uppercase tracking-widest mb-6"
          >
            {t('location.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-6xl text-linen mb-4"
          >
            {t('location.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-linen/70 text-lg mb-12"
          >
            {t('location.subtitle')}
          </motion.p>

          {/* Location Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <motion.div
                  key={index}
                  className="location-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full glass-card flex items-center justify-center">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-lg text-linen mb-1">
                    {location.title}
                  </h3>
                  <p className="text-gold text-sm font-medium">
                    {location.distance}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
