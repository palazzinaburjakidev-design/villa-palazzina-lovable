import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-villa.jpg';

interface HeroSectionProps {
  isActive: boolean;
}

const HeroSection = ({ isActive }: HeroSectionProps) => {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-20 pb-32">
        <motion.div
          className="text-center max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={itemVariants}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
          >
            {t('hero.brand')}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl lg:text-7xl text-linen mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-linen/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>

        {/* Booking Widget - Desktop Only */}
        <motion.div
          className="hidden lg:block absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card-solid rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-4 gap-4">
              {/* Check-in */}
              <div className="space-y-2">
                <label className="text-charcoal/60 text-sm font-medium">
                  {t('booking.checkIn')}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-linen border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="space-y-2">
                <label className="text-charcoal/60 text-sm font-medium">
                  {t('booking.checkOut')}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-linen border border-charcoal/10 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-charcoal/60 text-sm font-medium">
                  {t('booking.guests')}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-10 pr-8 py-3 bg-linen border border-charcoal/10 rounded-lg text-charcoal appearance-none focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40 pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-end">
                <button className="w-full btn-gold py-3.5 text-sm">
                  {t('booking.checkAvailability')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
