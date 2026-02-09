import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface HeaderProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const languages: { code: Language; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
  { code: 'hr', label: 'HR' },
];

const Header = ({ currentSection, scrollToSection }: HeaderProps) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.gallery'), section: 1 },
    { label: t('nav.amenities'), section: 2 },
    { label: t('nav.location'), section: 3 },
    { label: t('nav.contact'), section: 4 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-coal/40 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection(0)}
            className="font-display text-lg sm:text-xl lg:text-2xl text-sandstone tracking-wide hover:text-terracotta transition-colors"
          >
            Palazzina Burjaki
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`text-sm font-medium transition-colors ${
                  currentSection === item.section
                    ? 'text-terracotta'
                    : 'text-sandstone/80 hover:text-sandstone'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher - Desktop */}
            <div className="hidden sm:flex items-center gap-0.5 sm:gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-1.5 sm:px-2 py-1 text-xs font-medium transition-colors rounded ${
                    language === lang.code
                      ? 'bg-terracotta text-coal'
                      : 'text-sandstone/60 hover:text-sandstone'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Book Now Button - Desktop */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://hr.airbnb.com/rooms/1374488?_set_bev_on_new_domain=1759776626_EANmIzZjMwMzBlZm&set_everest_cookie_on_new_domain=1759776626.EAZTc0YzVhMzQ2NjM1Mz.1SKP7GRHZCCh7kEL-c4mglEEFUYXy0c2fdwyNyEgf5s&source_impression_id=p3_1768839068_P3JJtgKZZG0aLdcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block btn-gold text-sm py-2 px-4 lg:px-6"
                >
                  {t('nav.bookNow')}
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-coal/95 text-sandstone border-white/20 text-sm">
                {t('hero.externalBookingNotice')}
              </TooltipContent>
            </Tooltip>

            {/* Mobile Book Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://hr.airbnb.com/rooms/1374488?_set_bev_on_new_domain=1759776626_EANmIzZjMwMzBlZm&set_everest_cookie_on_new_domain=1759776626.EAZTc0YzVhMzQ2NjM1Mz.1SKP7GRHZCCh7kEL-c4mglEEFUYXy0c2fdwyNyEgf5s&source_impression_id=p3_1768839068_P3JJtgKZZG0aLdcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden bg-terracotta text-coal font-semibold py-2 px-4 text-xs rounded-full"
                >
                  {t('nav.bookNow')}
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-coal/95 text-sandstone border-white/20 text-sm">
                {t('hero.externalBookingNotice')}
              </TooltipContent>
            </Tooltip>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-sandstone -mr-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-coal/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 sm:py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-base sm:text-lg font-medium py-3 px-3 rounded-lg transition-colors active:bg-white/10 ${
                    currentSection === item.section
                      ? 'text-terracotta bg-white/5'
                      : 'text-sandstone/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 mt-2 border-t border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors rounded-lg active:scale-95 ${
                      language === lang.code
                        ? 'bg-terracotta text-coal'
                        : 'text-sandstone/60 border border-white/20 active:bg-white/10'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
