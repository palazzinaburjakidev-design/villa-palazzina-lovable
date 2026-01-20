import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'villa-palazzina-cookie-consent';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-charcoal/95 backdrop-blur-md p-4 md:p-6 shadow-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
              <div className="flex-1">
                <p className="text-sm md:text-base text-cream/90 leading-relaxed">
                  {t('cookieConsent.message')}{' '}
                  <Link
                    to="/cookie-policy"
                    className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
                  >
                    {t('cookieConsent.learnMore')}
                  </Link>
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  onClick={handleAccept}
                  className="w-full md:w-auto bg-gold hover:bg-gold/90 text-charcoal font-medium px-6 py-2"
                >
                  {t('cookieConsent.accept')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
