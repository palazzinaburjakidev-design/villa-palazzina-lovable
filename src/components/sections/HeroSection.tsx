import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-villa.avif';
import villaTourVideo from '@/assets/villa-tour.mp4';

interface HeroSectionProps {
  isActive: boolean;
}

const HeroSection = ({ isActive }: HeroSectionProps) => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="section-zoom"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 pt-16 sm:pt-20 pb-24 sm:pb-32">
        <motion.div
          className="text-center max-w-4xl w-full text-backdrop py-12 px-6 sm:py-16 sm:px-10"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={itemVariants}
            className="text-gold uppercase tracking-[0.15em] sm:tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 text-shadow-sm"
          >
            {t('hero.brand')}
          </motion.p>

          {/* Small Video Window */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-6 sm:mb-8 w-full max-w-[280px] sm:max-w-xs"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl glass-card p-1">
              <video
                src={villaTourVideo}
                className="w-full aspect-video rounded-lg"
                controls
                playsInline
              />
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-linen text-sm sm:text-base lg:text-xl max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 text-shadow-sm"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="scroll-indicator">
            <div className="scroll-indicator-dot" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
