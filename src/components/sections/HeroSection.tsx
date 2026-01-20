import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import heroImage from '@/assets/hero-villa.avif';

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
    <section className="relative h-full w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="section-zoom"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Villa Palazzina Burjaki exterior view with pool and terrace in Istria"
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
          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-light mb-3 sm:mb-4"
            style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 4px 24px rgba(0, 0, 0, 0.6)' }}
          >
            {t('hero.brand')}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-linen mb-4 sm:mb-6 text-shadow"
          >
            {t('hero.title')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-linen text-sm sm:text-base lg:text-xl max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 text-shadow-sm"
          >
            {t('hero.subtitle')}
          </motion.p>


          <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://hr.airbnb.com/rooms/1374488?_set_bev_on_new_domain=1759776626_EANmIzZjMwMzBlZm&set_everest_cookie_on_new_domain=1759776626.EAZTc0YzVhMzQ2NjM1Mz.1SKP7GRHZCCh7kEL-c4mglEEFUYXy0c2fdwyNyEgf5s&source_impression_id=p3_1768839068_P3JJtgKZZG0aLdcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 sm:px-10 sm:py-4 bg-gold hover:bg-gold-light text-charcoal font-semibold uppercase tracking-widest text-sm sm:text-base rounded transition-all duration-300 hover:scale-105"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}
                >
                  {t('hero.reserveNow')}
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-charcoal/95 text-linen border-white/20 text-sm">
                {t('hero.externalBookingNotice')}
              </TooltipContent>
            </Tooltip>
          </motion.div>
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
