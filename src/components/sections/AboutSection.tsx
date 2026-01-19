import { motion } from 'framer-motion';
import { 
  Home, Users, Bed, Bath, Maximize, MapPin, 
  Mail, Phone, Instagram, PawPrint, Ban, 
  Clock, CalendarCheck, Star
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import bedroomImage from '@/assets/gallery-bedroom.avif';

interface AboutSectionProps {
  isActive: boolean;
  scrollToSection: (index: number) => void;
}

const AboutSection = ({ isActive, scrollToSection }: AboutSectionProps) => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
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

  const villaStats = [
    { icon: Maximize, value: '350', unit: 'm²', label: t('about.stats.area') },
    { icon: Bed, value: '4', unit: '', label: t('about.stats.bedrooms') },
    { icon: Bath, value: '5', unit: '', label: t('about.stats.bathrooms') },
    { icon: Users, value: '8', unit: '', label: t('about.stats.guests') },
  ];

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
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-32 sm:pb-24 overflow-y-auto">
        <motion.div
          className="max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 glass-card px-3 py-1.5 rounded-full text-gold text-xs uppercase tracking-widest mb-3">
              <Home className="w-3.5 h-3.5" />
              {t('about.label')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-linen mb-2 text-shadow">
              {t('about.title')}
            </h2>
            <p className="text-linen/70 text-sm sm:text-base max-w-2xl mx-auto text-shadow-sm">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Villa Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {villaStats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-3 sm:p-4 text-center"
              >
                <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                <p className="text-linen font-display text-xl sm:text-2xl">
                  {stat.value}<span className="text-gold text-sm">{stat.unit}</span>
                </p>
                <p className="text-linen/60 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-xl p-4 sm:p-6 mb-6 sm:mb-8"
          >
            <p className="text-linen/80 text-sm sm:text-base leading-relaxed text-center">
              {t('about.description')}
            </p>
          </motion.div>

          {/* Check-in/out and Rating */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-linen/60 text-xs">{t('about.checkin')}</p>
                <p className="text-linen text-sm font-medium">15:00</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-3">
              <CalendarCheck className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-linen/60 text-xs">{t('about.checkout')}</p>
                <p className="text-linen text-sm font-medium">10:00</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-3">
              <Star className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-linen/60 text-xs">{t('about.rating')}</p>
                <p className="text-linen text-sm font-medium">5.0 ★★★★★</p>
              </div>
            </div>
          </motion.div>

          {/* Host & Contact */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-xl p-4 sm:p-6 mb-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Host Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-linen/60 text-xs">{t('about.host')}</p>
                  <p className="text-linen font-medium">Vedran Grubišić</p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="mailto:info@palazzina-burjaki.com"
                  className="inline-flex items-center gap-2 glass-card px-3 py-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="text-linen text-xs sm:text-sm">info@palazzina-burjaki.com</span>
                </a>
                <a
                  href="tel:+385123456789"
                  className="inline-flex items-center gap-2 glass-card px-3 py-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-linen text-xs sm:text-sm">+385 123 456 789</span>
                </a>
                <a
                  href="https://instagram.com/palazzina.burjaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass-card px-3 py-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-gold" />
                  <span className="text-linen text-xs sm:text-sm">@palazzina.burjaki</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* House Rules */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full text-linen/80 text-xs">
              <PawPrint className="w-3.5 h-3.5 text-gold" />
              {t('contact.rules.noPets')}
            </span>
            <span className="inline-flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full text-linen/80 text-xs">
              <Ban className="w-3.5 h-3.5 text-gold" />
              {t('contact.rules.noSmoking')}
            </span>
            <span className="inline-flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full text-linen/80 text-xs">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Burjaki 36, Trgetari 52224
            </span>
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

export default AboutSection;
