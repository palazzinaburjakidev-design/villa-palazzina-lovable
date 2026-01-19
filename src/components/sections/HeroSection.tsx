import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-villa.avif';

interface HeroSectionProps {
  isActive: boolean;
}

const HeroSection = ({ isActive }: HeroSectionProps) => {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

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

          {/* Video Play Button */}
          <motion.button
            variants={itemVariants}
            onClick={() => setShowVideo(true)}
            className="group relative mx-auto mb-6 sm:mb-8 flex items-center justify-center"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full glass-card flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gold ml-1 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-linen/70 text-xs sm:text-sm whitespace-nowrap">
              {t('hero.watchVideo')}
            </span>
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="text-linen text-sm sm:text-base lg:text-xl max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 text-shadow-sm mt-8"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator - Hidden on very small screens */}
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

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 text-linen hover:text-gold transition-colors z-10"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl mx-4 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/v_qexUFcnhs?autoplay=1"
              title="Villa Palazzina Burjaki Video Tour"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
