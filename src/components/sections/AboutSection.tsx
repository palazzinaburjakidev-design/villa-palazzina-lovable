import { motion } from 'framer-motion';
import { Home, Users, Bed, Bath, Maximize, MapPin, Mail, Phone, Instagram, PawPrint, Ban, Clock, Star, Moon, PartyPopper, Volume2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import bedroomImage from '@/assets/gallery-bedroom.avif';
interface AboutSectionProps {
  isActive: boolean;
  scrollToSection: (index: number) => void;
}
const AboutSection = ({
  isActive,
  scrollToSection
}: AboutSectionProps) => {
  const {
    t
  } = useLanguage();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };
  const villaStats = [{
    icon: Maximize,
    value: '350',
    unit: 'm²',
    label: t('about.stats.area')
  }, {
    icon: Bed,
    value: '4',
    unit: '',
    label: t('about.stats.bedrooms')
  }, {
    icon: Bath,
    value: '5',
    unit: '',
    label: t('about.stats.bathrooms')
  }, {
    icon: Users,
    value: '8',
    unit: '',
    label: t('about.stats.guests')
  }];
  return <section className="relative h-full w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div className="section-zoom" style={{
      backgroundImage: `url(${bedroomImage})`
    }} initial={{
      scale: 1.4,
      opacity: 0
    }} animate={isActive ? {
      scale: 1,
      opacity: 1
    } : {
      scale: 1.4,
      opacity: 0
    }} transition={{
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }} />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div data-scrollable="true" className="relative z-10 h-full flex flex-col justify-start sm:justify-center items-center px-4 sm:px-6 pt-20 sm:pt-20 pb-32 sm:pb-12 overflow-y-auto sm:overflow-hidden touch-pan-y overscroll-contain">
        <motion.div className="max-w-6xl w-full" variants={containerVariants} initial="hidden" animate={isActive ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-3 sm:mb-4">
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
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {villaStats.map((stat, index) => <div key={index} className="glass-card rounded-xl p-3 sm:p-4 text-center">
                <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                <p className="text-linen font-display text-xl sm:text-2xl text-shadow-sm">
                  {stat.value}<span className="text-gold text-sm">{stat.unit}</span>
                </p>
                <p className="text-linen/80 text-xs">{stat.label}</p>
              </div>)}
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="glass-card rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
            <p className="text-linen/90 text-sm sm:text-base leading-relaxed text-center text-shadow-sm">
              {t('about.description')}
            </p>
          </motion.div>

          {/* Times and Ratings Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
            {/* Check-in/out Combined */}
            <div className="glass-card rounded-xl p-2 sm:p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <p className="text-linen/80 text-[10px]">{t('about.arrivalTime')}</p>
              </div>
              <p className="text-linen text-xs font-medium text-shadow-sm ml-6">16:00 – 00:00</p>
              <p className="text-linen/70 text-[10px] mt-1 ml-6">{t('about.departureTime')}: 10:00</p>
            </div>

            {/* House Rules */}
            <div className="glass-card rounded-xl p-2 sm:p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <Home className="w-4 h-4 text-gold flex-shrink-0" />
                <p className="text-linen/80 text-[10px]">{t('contact.rules.title')}</p>
              </div>
              <div className="space-y-0.5 ml-6">
                <p className="text-linen text-[10px] flex items-center gap-1">
                  <Users className="w-3 h-3 text-gold/70" />
                  {t('contact.rules.maxGuests')}
                </p>
                <p className="text-linen text-[10px] flex items-center gap-1">
                  <Moon className="w-3 h-3 text-gold/70" />
                  22:00 – 07:00
                </p>
                <p className="text-linen text-[10px] flex items-center gap-1">
                  <PawPrint className="w-3 h-3 text-gold/70" />
                  {t('contact.rules.noPets')}
                </p>
                <p className="text-linen text-[10px] flex items-center gap-1">
                  <Ban className="w-3 h-3 text-gold/70" />
                  {t('contact.rules.noSmoking')}
                </p>
                <p className="text-linen text-[10px] flex items-center gap-1">
                  <PartyPopper className="w-3 h-3 text-gold/70" />
                  {t('contact.rules.noParties')}
                </p>
              </div>
            </div>

            {/* Airbnb Rating */}
            <a 
              href="https://hr.airbnb.com/rooms/1374488?_set_bev_on_new_domain=1759776626_EANmIzZjMwMzBlZm&set_everest_cookie_on_new_domain=1759776626.EAZTc0YzVhMzQ2NjM1Mz.1SKP7GRHZCCh7kEL-c4mglEEFUYXy0c2fdwyNyEgf5s&source_impression_id=p3_1768839068_P3JJtgKZZG0aLdcA"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-2 sm:p-3 flex items-center gap-2 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#FF5A5F] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.08c-.746 1.174-1.924 2.078-3.486 2.684-1.562.606-3.434.752-5.064.284-1.684-.482-3.09-1.472-4.012-2.75-.922-1.278-1.332-2.818-1.332-4.298 0-1.974.758-3.894 2.188-5.406.692-.732 1.53-1.324 2.466-1.73.936-.406 1.958-.608 2.988-.608 1.542 0 3.068.456 4.228 1.306 1.16.85 2.03 2.076 2.402 3.476l-5.494 2.08c-.25-.47-.68-.85-1.22-1.08-.54-.23-1.154-.29-1.736-.17-.582.12-1.114.406-1.512.814-.398.408-.658.924-.738 1.478-.08.554.02 1.12.282 1.614.262.494.68.894 1.188 1.142.508.248 1.078.336 1.62.25.542-.086 1.048-.342 1.44-.726l5.228 1.886c.202.284.372.586.508.9.136.314.238.642.306.98.068.338.1.686.1 1.034 0 .348-.032.696-.1 1.034-.068.338-.17.666-.306.98-.136.314-.306.616-.508.9z" />
              </svg>
              <div>
                <p className="text-linen/80 text-[10px]">Airbnb</p>
                <p className="text-linen text-xs font-medium text-shadow-sm">4.93★ <span className="text-linen/70">(54)</span></p>
              </div>
            </a>

            {/* Google Rating */}
            <a 
              href="https://share.google/KNtMhXhU9m7ieTJaM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-2 sm:p-3 flex items-center gap-2 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div>
                <p className="text-linen/80 text-[10px]">Google</p>
                <p className="text-linen text-xs font-medium text-shadow-sm">4.8★ <span className="text-linen/70">(17)</span></p>
              </div>
            </a>
          </motion.div>

          {/* Host & Contact */}
          <motion.div variants={itemVariants} className="glass-card rounded-xl p-3 sm:p-4 mb-2 sm:mb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Host Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-linen/80 text-xs">{t('about.host')}</p>
                  <p className="text-linen font-medium text-shadow-sm">Vedran Grubišić</p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
                <a href="mailto:palazzinaburjaki@gmail.com" className="inline-flex items-center justify-center gap-2 glass-card px-3 py-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-linen text-xs sm:text-sm text-shadow-sm truncate">palazzinaburjaki@gmail.com</span>
                </a>
                <a href="tel:+385123456789" className="inline-flex items-center justify-center gap-2 glass-card px-3 py-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-linen text-xs sm:text-sm text-shadow-sm">+385 91 151 3014</span>
                </a>
                <a href="https://www.instagram.com/burjaki/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 glass-card px-3 py-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors">
                  <Instagram className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-linen text-xs sm:text-sm text-shadow-sm">@burjaki</span>
                </a>
                <a href="https://www.facebook.com/palazzinaferienhaus/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 glass-card px-3 py-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-linen text-xs sm:text-sm text-shadow-sm">Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Address Tag */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full text-linen/80 text-xs">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Burjaki 36, Trgetari 52224
            </span>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer className="relative mt-6 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 py-2 sm:py-4 px-4 w-full bg-black/40 backdrop-blur-sm" initial={{
        opacity: 0
      }} animate={isActive ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        delay: 0.8
      }}>
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <p className="text-linen/40 text-xs sm:text-sm text-center sm:text-left">
              {t('contact.copyright')}
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-linen/40 hover:text-linen transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/cookie-policy" className="text-linen/40 hover:text-linen transition-colors">
                {t('footer.cookiePolicy')}
              </Link>
            </div>
          </div>
        </motion.footer>

        {/* Scroll to Top Indicator - Hidden on mobile due to Book button */}
        <motion.button onClick={() => scrollToSection(0)} className="hidden sm:block absolute bottom-24 left-1/2 -translate-x-1/2" initial={{
        opacity: 0
      }} animate={isActive ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        delay: 1,
        duration: 0.5
      }} whileHover={{
        scale: 1.1
      }} whileTap={{
        scale: 0.95
      }}>
          
        </motion.button>
      </div>
    </section>;
};
export default AboutSection;