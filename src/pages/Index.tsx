import { AnimatePresence, motion } from 'framer-motion';
import { useFullPageScroll } from '@/hooks/useFullPageScroll';
import Header from '@/components/Header';
import SectionIndicator from '@/components/SectionIndicator';
import HeroSection from '@/components/sections/HeroSection';
import GallerySection from '@/components/sections/GallerySection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import LocationSection from '@/components/sections/LocationSection';
import AboutSection from '@/components/sections/AboutSection';



const TOTAL_SECTIONS = 5;

const Index = () => {
  const { currentSection, scrollToSection } = useFullPageScroll({
    totalSections: TOTAL_SECTIONS,
    debounceTime: 800,
  });

  const sections = [
    { Component: HeroSection, key: 'hero' },
    { Component: GallerySection, key: 'gallery' },
    { Component: AmenitiesSection, key: 'amenities' },
    { Component: LocationSection, key: 'location' },
    { Component: AboutSection, key: 'about' },
  ];

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-charcoal">
      <Header currentSection={currentSection} scrollToSection={scrollToSection} />
      <SectionIndicator
        totalSections={TOTAL_SECTIONS}
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      <AnimatePresence mode="wait">
        {sections.map(({ Component, key }, index) => (
          currentSection === index && (
            <motion.div
              key={key}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {key === 'about' ? (
                <AboutSection isActive={currentSection === index} scrollToSection={scrollToSection} />
              ) : (
                <Component isActive={currentSection === index} />
              )}
            </motion.div>
          )
        ))}
      </AnimatePresence>

      
    </div>
  );
};

export default Index;
