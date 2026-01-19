import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import galleryImage from '@/assets/gallery-living.avif';

interface GallerySectionProps {
  isActive: boolean;
}

const GallerySection = ({ isActive }: GallerySectionProps) => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const features = [
    t('gallery.feature.spacious'),
    t('gallery.feature.authentic'),
    t('gallery.feature.natural'),
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="section-zoom"
        style={{ backgroundImage: `url(${galleryImage})` }}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 pt-16 sm:pt-20 pb-24 sm:pb-20">
        <motion.div
          className="text-center max-w-3xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-card text-gold text-xs uppercase tracking-widest mb-4 sm:mb-6"
          >
            {t('gallery.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-linen mb-3 sm:mb-4 px-2"
          >
            {t('gallery.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gold text-sm sm:text-base lg:text-xl mb-4 sm:mb-6"
          >
            {t('gallery.subtitle')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-linen/70 text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
          >
            {t('gallery.description')}
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {features.map((feature, index) => (
              <span key={index} className="feature-pill">
                {feature}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
