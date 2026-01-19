import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, PawPrint, Ban } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import bedroomImage from '@/assets/gallery-bedroom.avif';

interface ContactSectionProps {
  isActive: boolean;
  scrollToSection: (index: number) => void;
}

const ContactSection = ({ isActive, scrollToSection }: ContactSectionProps) => {
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

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="section-zoom"
        style={{ backgroundImage: `url(${bedroomImage})` }}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 pt-16 sm:pt-20 pb-32 sm:pb-24">
        <motion.div
          className="text-center max-w-3xl w-full text-backdrop py-8 sm:py-12 px-4 sm:px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-linen mb-2 sm:mb-3 text-shadow"
          >
            {t('contact.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-linen/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-shadow-sm"
          >
            {t('contact.subtitle')}
          </motion.p>

          {/* Host Info */}
          <motion.p
            variants={itemVariants}
            className="text-gold text-sm sm:text-base font-medium mb-4 sm:mb-6"
          >
            {t('contact.host')}
          </motion.p>

          {/* Contact Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
          >
            <a
              href="mailto:info@palazzina-burjaki.com"
              className="flex items-center gap-2 sm:gap-3 glass-card px-4 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-white/20 transition-colors w-full max-w-xs sm:max-w-none sm:w-auto"
            >
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-linen text-sm truncate">info@palazzina-burjaki.com</span>
            </a>

            <a
              href="tel:+385123456789"
              className="flex items-center gap-2 sm:gap-3 glass-card px-4 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-linen text-sm">+385 123 456 789</span>
            </a>
          </motion.div>

          {/* House Rules */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <p className="text-linen/50 text-xs uppercase tracking-widest mb-3">
              {t('contact.rules.title')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full text-linen/80 text-xs">
                <PawPrint className="w-3.5 h-3.5 text-gold" />
                {t('contact.rules.noPets')}
              </span>
              <span className="inline-flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full text-linen/80 text-xs">
                <Ban className="w-3.5 h-3.5 text-gold" />
                {t('contact.rules.noSmoking')}
              </span>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <p className="text-linen/50 text-xs uppercase tracking-widest mb-2">
              {t('contact.social')}
            </p>
            <a
              href="https://instagram.com/palazzina.burjaki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium text-sm">@palazzina.burjaki</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="absolute bottom-16 sm:bottom-0 left-0 right-0 py-4 sm:py-6 px-4"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <p className="text-linen/40 text-xs sm:text-sm text-center sm:text-left">
              {t('contact.copyright')}
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-linen/40 hover:text-linen transition-colors">
                {t('contact.privacy')}
              </a>
              <a href="#" className="text-linen/40 hover:text-linen transition-colors">
                {t('contact.terms')}
              </a>
            </div>
          </div>
        </motion.footer>

        {/* Scroll to Top Indicator - Hidden on mobile due to Book button */}
        <motion.button
          onClick={() => scrollToSection(0)}
          className="hidden sm:block absolute bottom-24 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="scroll-top-indicator">
            <div className="scroll-top-dot" />
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default ContactSection;
