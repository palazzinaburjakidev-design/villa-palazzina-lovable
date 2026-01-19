import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, ChevronUp } from 'lucide-react';
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
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-20">
        <motion.div
          className="text-center max-w-3xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-6xl text-linen mb-4"
          >
            {t('contact.title')}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-linen/70 text-lg mb-12"
          >
            {t('contact.subtitle')}
          </motion.p>

          {/* Contact Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <a
              href="mailto:info@palazzina-burjaki.com"
              className="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5 text-gold" />
              <span className="text-linen">info@palazzina-burjaki.com</span>
            </a>

            <a
              href="tel:+385123456789"
              className="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-gold" />
              <span className="text-linen">+385 123 456 789</span>
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-linen/50 text-sm uppercase tracking-widest mb-4">
              {t('contact.social')}
            </p>
            <a
              href="https://instagram.com/palazzina.burjaki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-medium">@palazzina.burjaki</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="absolute bottom-0 left-0 right-0 py-6 px-4"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-linen/40 text-sm">
              {t('contact.copyright')}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-linen/40 hover:text-linen transition-colors">
                {t('contact.privacy')}
              </a>
              <a href="#" className="text-linen/40 hover:text-linen transition-colors">
                {t('contact.terms')}
              </a>
            </div>
          </div>
        </motion.footer>

        {/* Scroll to Top Indicator */}
        <motion.button
          onClick={() => scrollToSection(0)}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
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
