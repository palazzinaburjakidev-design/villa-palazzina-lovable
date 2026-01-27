import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Bed, Bath, Maximize, MapPin, Mail, Phone, Instagram, PawPrint, Ban, Clock, Moon, PartyPopper, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MiningIllustration from '@/components/MiningIllustration';

interface AboutSectionProps {
  isActive: boolean;
  scrollToSection: (index: number) => void;
}
const AboutSection = memo(({
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
  return <section className="relative h-full w-full overflow-hidden bg-coal coal-texture-light">
      {/* Content */}
      <div data-scrollable="true" className="relative z-10 h-full flex flex-col justify-start sm:justify-center items-center px-4 sm:px-6 pt-20 sm:pt-20 pb-32 sm:pb-12 overflow-y-auto sm:overflow-hidden touch-pan-y overscroll-contain">
        <motion.div className="max-w-6xl w-full" variants={containerVariants} initial="hidden" animate={isActive ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-2 glass-card-coal px-3 py-1.5 rounded-full text-terracotta text-xs uppercase tracking-widest mb-3">
              <Home className="w-3.5 h-3.5" />
              {t('about.label')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sandstone mb-2 text-shadow">
              {t('about.title')}
            </h2>
            
          </motion.div>

          {/* Villa Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {villaStats.map((stat, index) => <div key={index} className="glass-card-coal rounded-xl p-3 sm:p-4 text-center">
                <stat.icon className="w-5 h-5 text-terracotta mx-auto mb-2" />
                <p className="text-sandstone font-display text-xl sm:text-2xl text-shadow-sm">
                  {stat.value}<span className="text-terracotta text-sm">{stat.unit}</span>
                </p>
                <p className="text-sandstone/80 text-xs">{stat.label}</p>
              </div>)}
          </motion.div>

          {/* Times, Rules and Ratings Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4">
            {/* Check-in/out Combined */}
            <div className="glass-card-coal rounded-xl p-2 sm:p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <Clock className="w-4 h-4 text-terracotta flex-shrink-0" />
                <p className="text-sandstone/80 text-[10px] sm:text-xs">{t('about.arrivalTime')}</p>
              </div>
              <p className="text-sandstone text-xs sm:text-sm font-medium text-shadow-sm ml-6">{t('about.arrival')} 16:00 – 00:00</p>
              <p className="text-sandstone text-xs sm:text-sm font-medium text-shadow-sm ml-6 mt-1">{t('about.departure')} 10:00</p>
            </div>

            {/* House Rules - spans 2 columns */}
            <div className="glass-card-coal rounded-xl p-2 sm:p-3 col-span-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Home className="w-4 h-4 text-terracotta flex-shrink-0" />
                <p className="text-sandstone/80 text-[10px] sm:text-xs">{t('contact.rules.title')}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 ml-6">
                <p className="text-sandstone text-[10px] sm:text-xs flex items-center gap-1">
                  <Moon className="w-3 h-3 text-terracotta/70" />
                  22:00 – 07:00
                </p>
                <p className="text-sandstone text-[10px] sm:text-xs flex items-center gap-1">
                  <PawPrint className="w-3 h-3 text-terracotta/70" />
                  {t('contact.rules.noPets')}
                </p>
                <p className="text-sandstone text-[10px] sm:text-xs flex items-center gap-1">
                  <Ban className="w-3 h-3 text-terracotta/70" />
                  {t('contact.rules.noSmoking')}
                </p>
                <p className="text-sandstone text-[10px] sm:text-xs flex items-center gap-1">
                  <PartyPopper className="w-3 h-3 text-terracotta/70" />
                  {t('contact.rules.noParties')}
                </p>
              </div>
            </div>

            {/* Airbnb Rating */}
            <a href="https://hr.airbnb.com/rooms/1374488?_set_bev_on_new_domain=1759776626_EANmIzZjMwMzBlZm&set_everest_cookie_on_new_domain=1759776626.EAZTc0YzVhMzQ2NjM1Mz.1SKP7GRHZCCh7kEL-c4mglEEFUYXy0c2fdwyNyEgf5s&source_impression_id=p3_1768839068_P3JJtgKZZG0aLdcA" target="_blank" rel="noopener noreferrer" className="glass-card-coal rounded-xl p-3 sm:p-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 64 64" fill="#FF5A5F" fillRule="evenodd">
                <path d="M60.9 45.487l-.966-2.305-1.475-3.27-.062-.062a661.83 661.83 0 0 0-14.15-28.957l-.198-.384-1.524-3.073a18.4 18.4 0 0 0-2.305-3.52A10.35 10.35 0 0 0 32.027 0a10.76 10.76 0 0 0-8.203 3.84 22.1 22.1 0 0 0-2.305 3.52l-1.735 3.395c-4.956 9.615-9.74 19.342-14.163 28.957l-.062.124c-.384 1.053-.892 2.13-1.413 3.284-.322.702-.644 1.47-.966 2.305a14.4 14.4 0 0 0-.768 6.914 13.63 13.63 0 0 0 8.327 10.631 13.16 13.16 0 0 0 5.192 1.028 14.57 14.57 0 0 0 1.66-.124 16.93 16.93 0 0 0 6.406-2.18 32.44 32.44 0 0 0 7.943-6.666 33.62 33.62 0 0 0 7.943 6.666 16.92 16.92 0 0 0 6.406 2.18c.55.073 1.105.114 1.66.124 1.783.018 3.55-.332 5.192-1.028a13.63 13.63 0 0 0 8.327-10.631 12.11 12.11 0 0 0-.582-6.852zM32.026 48.82c-3.457-4.362-5.7-8.45-6.468-11.92-.314-1.277-.38-2.6-.198-3.903.127-.965.48-1.886 1.028-2.7a6.79 6.79 0 0 1 5.638-2.825c2.236-.086 4.362.974 5.638 2.813a6.17 6.17 0 0 1 1.028 2.69 10.3 10.3 0 0 1-.198 3.903c-.768 3.395-3 7.435-6.468 11.92zm25.562 3c-.5 3.337-2.7 6.166-5.836 7.435a9.7 9.7 0 0 1-4.857.706 12.6 12.6 0 0 1-4.87-1.66 29.91 29.91 0 0 1-7.298-6.195c4.225-5.192 6.8-9.913 7.757-14.163a16.11 16.11 0 0 0 .322-5.452c-.238-1.567-.832-3.06-1.735-4.362-2.062-2.942-5.453-4.666-9.045-4.597-3.572-.046-6.942 1.65-9.033 4.547-.903 1.303-1.497 2.794-1.735 4.362a13.31 13.31 0 0 0 .322 5.452c.966 4.225 3.593 9.033 7.757 14.225a28.79 28.79 0 0 1-7.298 6.195 12.6 12.6 0 0 1-4.882 1.71 10.26 10.26 0 0 1-4.87-.644C9.16 58.12 6.94 55.292 6.45 51.954a10.61 10.61 0 0 1 .582-4.956c.198-.644.508-1.24.83-2.044.446-1.028.966-2.12 1.475-3.2l.062-.124c4.424-9.54 9.157-19.28 14.1-28.772l.186-.458 1.536-2.95a14.05 14.05 0 0 1 1.846-2.838 6.73 6.73 0 0 1 10.247 0 13.87 13.87 0 0 1 1.747 2.813l1.536 2.95.186.384c4.87 9.553 9.628 19.28 14.04 28.834v.062c.508 1.028.966 2.18 1.475 3.2.322.768.644 1.413.83 2.044a10.81 10.81 0 0 1 .446 4.956z" />
              </svg>
              <div>
                <p className="text-sandstone/80 text-xs sm:text-sm">Airbnb</p>
                <p className="text-sandstone text-sm sm:text-base font-medium text-shadow-sm">4.93★ <span className="text-sandstone/70">(54)</span></p>
              </div>
            </a>

            {/* Google Rating */}
            <a href="https://share.google/KNtMhXhU9m7ieTJaM" target="_blank" rel="noopener noreferrer" className="glass-card-coal rounded-xl p-3 sm:p-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div>
                <p className="text-sandstone/80 text-xs sm:text-sm">Google</p>
                <p className="text-sandstone text-sm sm:text-base font-medium text-shadow-sm">4.8★ <span className="text-sandstone/70">(17)</span></p>
              </div>
            </a>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} className="glass-card-coal rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-terracotta flex-shrink-0" />
              <h3 className="text-sandstone text-sm sm:text-base font-medium text-shadow-sm">{t('faq.title')}</h3>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="pool" className="border-sandstone/10">
                <AccordionTrigger className="text-sandstone text-xs sm:text-sm py-2.5 hover:no-underline hover:text-terracotta [&[data-state=open]]:text-terracotta">
                  {t('faq.pool.question')}
                </AccordionTrigger>
                <AccordionContent className="text-sandstone/80 text-xs sm:text-sm pb-3">
                  {t('faq.pool.answer')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="kitchen" className="border-sandstone/10">
                <AccordionTrigger className="text-sandstone text-xs sm:text-sm py-2.5 hover:no-underline hover:text-terracotta [&[data-state=open]]:text-terracotta">
                  {t('faq.kitchen.question')}
                </AccordionTrigger>
                <AccordionContent className="text-sandstone/80 text-xs sm:text-sm pb-3">
                  {t('faq.kitchen.answer')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="towels" className="border-sandstone/10 border-b-0">
                <AccordionTrigger className="text-sandstone text-xs sm:text-sm py-2.5 hover:no-underline hover:text-terracotta [&[data-state=open]]:text-terracotta">
                  {t('faq.towels.question')}
                </AccordionTrigger>
                <AccordionContent className="text-sandstone/80 text-xs sm:text-sm pb-3">
                  {t('faq.towels.answer')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Host & Contact */}
          <motion.div variants={itemVariants} className="glass-card-coal rounded-xl p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Host Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <p className="text-sandstone/80 text-xs">{t('about.host')}</p>
                  <p className="text-sandstone font-medium text-shadow-sm">Vedran Grubišić</p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
                {/* Address */}
                <a href="https://www.google.com/maps/search/?api=1&query=Burjaki+36,+Trgetari+52224,+Croatia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 glass-card-coal px-3 py-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors">
                  <MapPin className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span className="text-sandstone text-xs sm:text-sm text-shadow-sm">Burjaki 36, Trgetari 52224</span>
                </a>
                <a href="mailto:palazzinaburjaki@gmail.com" className="inline-flex items-center justify-center gap-2 glass-card-coal px-3 py-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span className="text-sandstone text-xs sm:text-sm text-shadow-sm truncate">palazzinaburjaki@gmail.com</span>
                </a>
                <a href="tel:+385123456789" className="inline-flex items-center justify-center gap-2 glass-card-coal px-3 py-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span className="text-sandstone text-xs sm:text-sm text-shadow-sm">+385 91 151 3014</span>
                </a>
                <a href="https://www.instagram.com/burjaki/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 glass-card-coal px-3 py-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors">
                  <Instagram className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span className="text-sandstone text-xs sm:text-sm text-shadow-sm">@burjaki</span>
                </a>
                <a href="https://www.facebook.com/palazzinaferienhaus/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 glass-card-coal px-3 py-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 text-terracotta flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sandstone text-xs sm:text-sm text-shadow-sm">Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mining Illustration */}
          <MiningIllustration 
            type="mining-tools" 
            isActive={isActive} 
            className="mt-4 sm:mt-6 flex justify-center"
          />
        </motion.div>

        {/* Footer */}
        <motion.footer className="relative mt-6 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 py-2 sm:py-4 px-4 w-full bg-coal-deep/80 backdrop-blur-sm" initial={{
        opacity: 0
      }} animate={isActive ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        delay: 0.8
      }}>
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <p className="text-sandstone/40 text-xs sm:text-sm text-center sm:text-left">
              {t('contact.copyright')}
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-sandstone/40 hover:text-sandstone transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/cookie-policy" className="text-sandstone/40 hover:text-sandstone transition-colors">
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
});
AboutSection.displayName = 'AboutSection';
export default AboutSection;