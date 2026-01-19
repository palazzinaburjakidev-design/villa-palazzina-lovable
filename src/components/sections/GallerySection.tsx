import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import villaTourVideo from '@/assets/villa-tour.mp4';
import galleryLiving from '@/assets/gallery-living.avif';
import galleryBedroom from '@/assets/gallery-bedroom.avif';
import galleryPool from '@/assets/gallery-pool.avif';
import galleryTerrace from '@/assets/gallery-terrace.avif';

interface GallerySectionProps {
  isActive: boolean;
}

const GallerySection = ({ isActive }: GallerySectionProps) => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  // Gallery images - placeholder structure ready for real images
  const galleryImages = [
    { src: galleryLiving, label: 'Dnevni boravak', category: 'living' },
    { src: galleryBedroom, label: 'Spavaća soba', category: 'bedroom' },
    { src: galleryPool, label: 'Bazen', category: 'pool' },
    { src: galleryTerrace, label: 'Terasa', category: 'terrace' },
  ];

  // Placeholder categories for future images
  const upcomingCategories = [
    { label: 'Kuhinja', category: 'kitchen' },
    { label: 'Gym', category: 'gym' },
    { label: 'Kupatilo', category: 'bathroom' },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="section-zoom"
        style={{ backgroundImage: `url(${galleryLiving})` }}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 pt-16 sm:pt-20 pb-24 sm:pb-20">
        <motion.div
          className="text-center max-w-6xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-card text-gold text-xs uppercase tracking-widest mb-4 sm:mb-6"
          >
            {t('gallery.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-linen mb-6 sm:mb-8"
          >
            {t('gallery.title')}
          </motion.h2>

          {/* Video + Gallery Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6"
          >
            {/* Video - spans 2 columns on mobile, 1 on larger */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl glass-card p-1 h-full">
                <video
                  src={villaTourVideo}
                  className="w-full h-full object-cover rounded-lg aspect-video"
                  controls
                  playsInline
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-charcoal/80 rounded text-gold text-xs">
                  Video tura
                </div>
              </div>
            </div>

            {/* Existing gallery images */}
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.category}
                variants={itemVariants}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-charcoal/80 rounded text-linen text-xs">
                  {image.label}
                </div>
              </motion.div>
            ))}

            {/* Placeholder tiles for upcoming images */}
            {upcomingCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="relative rounded-xl overflow-hidden shadow-lg glass-card flex items-center justify-center h-32 sm:h-40 md:h-48 border border-gold/20"
              >
                <div className="text-center">
                  <div className="text-gold/50 text-2xl mb-2">📷</div>
                  <span className="text-linen/50 text-xs">{category.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-linen/70 text-sm sm:text-base max-w-2xl mx-auto"
          >
            {t('gallery.description')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
