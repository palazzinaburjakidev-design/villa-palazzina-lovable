import React, { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useFullPageScroll } from '@/hooks/useFullPageScroll';
import Header from '@/components/Header';
import SectionIndicator from '@/components/SectionIndicator';

// Lazy load sections for better initial load performance
const HeroSection = React.lazy(() => import('@/components/sections/HeroSection'));
const GallerySection = React.lazy(() => import('@/components/sections/GallerySection'));
const AmenitiesSection = React.lazy(() => import('@/components/sections/AmenitiesSection'));
const LocationSection = React.lazy(() => import('@/components/sections/LocationSection'));
const AboutSection = React.lazy(() => import('@/components/sections/AboutSection'));

const TOTAL_SECTIONS = 5;

// Loading fallback component
const SectionLoader = () => (
  <div className="h-full w-full flex items-center justify-center bg-charcoal">
    <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
  </div>
);

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
              <Suspense fallback={<SectionLoader />}>
                {key === 'about' ? (
                  <AboutSection isActive={currentSection === index} scrollToSection={scrollToSection} />
                ) : (
                  <Component isActive={currentSection === index} />
                )}
              </Suspense>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Index;
