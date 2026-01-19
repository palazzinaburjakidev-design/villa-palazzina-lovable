import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectionIndicatorProps {
  totalSections: number;
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const sectionNames = ['Hero', 'Gallery', 'Amenities', 'Location', 'Contact'];

const SectionIndicator = ({ totalSections, currentSection, scrollToSection }: SectionIndicatorProps) => {
  const { t } = useLanguage();

  return (
    <div className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div key={index} className="relative group">
          <motion.button
            onClick={() => scrollToSection(index)}
            className={`section-dot ${currentSection === index ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${sectionNames[index]} section`}
          />
          
          {/* Section name tooltip - desktop only */}
          <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/80 text-linen text-xs px-2 py-1 rounded whitespace-nowrap"
            >
              {sectionNames[index]}
            </motion.span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionIndicator;
