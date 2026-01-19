import { motion } from 'framer-motion';

interface SectionIndicatorProps {
  totalSections: number;
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const sectionNames = ['Hero', 'Gallery', 'Amenities', 'Location', 'Contact'];

const SectionIndicator = ({ totalSections, currentSection, scrollToSection }: SectionIndicatorProps) => {
  return (
    <div className="fixed right-3 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 sm:gap-3">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div key={index} className="relative group">
          <motion.button
            onClick={() => scrollToSection(index)}
            className={`section-dot ${currentSection === index ? 'active' : ''}`}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${sectionNames[index]} section`}
          />
          
          {/* Section name tooltip - desktop only */}
          <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/80 text-linen text-xs px-2 py-1 rounded whitespace-nowrap">
              {sectionNames[index]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionIndicator;
