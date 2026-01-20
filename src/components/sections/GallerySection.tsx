import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import villaTourVideo from '@/assets/villa-tour.mp4';
import galleryLiving from '@/assets/gallery-living.avif';
import galleryBedroom from '@/assets/gallery-bedroom.avif';
import galleryPool from '@/assets/gallery-pool.avif';
import galleryTerrace from '@/assets/gallery-terrace.avif';
import livingRoom1 from '@/assets/living-room-1.avif';
import livingRoom2 from '@/assets/living-room-2.avif';
import livingRoom3 from '@/assets/living-room-3.avif';
import livingRoom4 from '@/assets/living-room-4.avif';
import livingRoom5 from '@/assets/living-room-5.avif';
import livingRoom6 from '@/assets/living-room-6.avif';
import diningRoom1 from '@/assets/dining-room-1.avif';
import diningRoom2 from '@/assets/dining-room-2.avif';
import diningRoom3 from '@/assets/dining-room-3.avif';
import diningRoom4 from '@/assets/dining-room-4.avif';
import diningRoom5 from '@/assets/dining-room-5.avif';
import kitchen1 from '@/assets/kitchen-1.avif';
import kitchen2 from '@/assets/kitchen-2.avif';
import kitchen3 from '@/assets/kitchen-3.avif';
import kitchen4 from '@/assets/kitchen-4.avif';
import bedroom1_1 from '@/assets/bedroom1-1.avif';
import bedroom1_2 from '@/assets/bedroom1-2.avif';
import bedroom1_3 from '@/assets/bedroom1-3.avif';
import bedroom1_4 from '@/assets/bedroom1-4.avif';
import bedroom2_1 from '@/assets/bedroom2-1.avif';
import bedroom2_2 from '@/assets/bedroom2-2.avif';
import bedroom2_3 from '@/assets/bedroom2-3.avif';
import bedroom2_4 from '@/assets/bedroom2-4.webp';
import bedroom2_5 from '@/assets/bedroom2-5.avif';
import bedroom2_6 from '@/assets/bedroom2-6.avif';
import bedroom3_1 from '@/assets/bedroom3-1.avif';
import bedroom3_2 from '@/assets/bedroom3-2.webp';
import bedroom3_3 from '@/assets/bedroom3-3.webp';
import bedroom3_4 from '@/assets/bedroom3-4.avif';
import bedroom3_5 from '@/assets/bedroom3-5.webp';
import bedroom3_6 from '@/assets/bedroom3-6.avif';
import bedroom4_1 from '@/assets/bedroom4-1.avif';
import bedroom4_2 from '@/assets/bedroom4-2.avif';
import bedroom4_3 from '@/assets/bedroom4-3.avif';
import bedroom4_4 from '@/assets/bedroom4-4.avif';
import gymSpa1 from '@/assets/gym-spa-1.avif';
import gymSpa2 from '@/assets/gym-spa-2.avif';
import gymSpa3 from '@/assets/gym-spa-3.avif';
import gymSpa4 from '@/assets/gym-spa-4.avif';
import gymSpa5 from '@/assets/gym-spa-5.avif';
import backyard1 from '@/assets/backyard-1.avif';
import backyard2 from '@/assets/backyard-2.avif';
import backyard3 from '@/assets/backyard-3.avif';
import terrace1 from '@/assets/terrace-1.avif';
import terrace2 from '@/assets/terrace-2.avif';
import terrace3 from '@/assets/terrace-3.avif';
import terrace4 from '@/assets/terrace-4.avif';
import terrace5 from '@/assets/terrace-5.avif';
import terrace6 from '@/assets/terrace-6.avif';
import pool1 from '@/assets/pool-1.avif';
import pool2 from '@/assets/pool-2.avif';
import pool3 from '@/assets/pool-3.avif';
import pool4 from '@/assets/pool-4.avif';
import pool5 from '@/assets/pool-5.avif';
import pool6 from '@/assets/pool-6.avif';
import bathroom1_1 from '@/assets/bathroom1-1.avif';
import bathroom1_2 from '@/assets/bathroom1-2.avif';
import bathroom2_1 from '@/assets/bathroom2-1.avif';
import bathroom2_2 from '@/assets/bathroom2-2.avif';
import bathroom2_3 from '@/assets/bathroom2-3.avif';
import bathroom3_1 from '@/assets/bathroom3-1.avif';
import bathroom3_2 from '@/assets/bathroom3-2.avif';
import bathroom3_3 from '@/assets/bathroom3-3.avif';
import bathroom3_4 from '@/assets/bathroom3-4.webp';
import bathroom4_1 from '@/assets/bathroom4-1.avif';
import bathroom4_2 from '@/assets/bathroom4-2.webp';
import bathroom4_3 from '@/assets/bathroom4-3.avif';
import bathroom4_4 from '@/assets/bathroom4-4.webp';
import bathroom5_1 from '@/assets/bathroom5-1.avif';
import bathroom5_2 from '@/assets/bathroom5-2.avif';
import laundry1 from '@/assets/laundry-1.avif';
import laundry2 from '@/assets/laundry-2.avif';

interface GallerySectionProps {
  isActive: boolean;
}

interface Album {
  id: string;
  title: string;
  cover: string;
  images: string[];
  count: number;
  category: 'exterior' | 'living' | 'bedrooms' | 'bathrooms' | 'other';
}

type CategoryKey = 'all' | 'exterior' | 'living' | 'bedrooms' | 'bathrooms';

const GallerySection = ({ isActive }: GallerySectionProps) => {
  const { t } = useLanguage();
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const categories: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: t('gallery.category.all') },
    { key: 'exterior', label: t('gallery.category.exterior') },
    { key: 'living', label: t('gallery.category.living') },
    { key: 'bedrooms', label: t('gallery.category.bedrooms') },
    { key: 'bathrooms', label: t('gallery.category.bathrooms') },
  ];

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

  // Albums with images - organized by category
  const albums: Album[] = [
    // Eksterijer
    {
      id: 'pool',
      title: t('gallery.album.pool'),
      cover: pool1,
      images: [pool1, pool2, pool3, pool4, pool5, pool6],
      count: 6,
      category: 'exterior',
    },
    {
      id: 'terrace',
      title: t('gallery.album.terrace'),
      cover: terrace1,
      images: [terrace1, terrace2, terrace3, terrace4, terrace5, terrace6],
      count: 6,
      category: 'exterior',
    },
    {
      id: 'backyard',
      title: t('gallery.album.backyard'),
      cover: backyard1,
      images: [backyard1, backyard2, backyard3],
      count: 3,
      category: 'exterior',
    },
    // Dnevni prostori
    {
      id: 'living',
      title: t('gallery.album.living'),
      cover: livingRoom1,
      images: [livingRoom1, livingRoom2, livingRoom3, livingRoom4, livingRoom5, livingRoom6],
      count: 6,
      category: 'living',
    },
    {
      id: 'dining',
      title: t('gallery.album.dining'),
      cover: diningRoom1,
      images: [diningRoom1, diningRoom2, diningRoom3, diningRoom4, diningRoom5],
      count: 5,
      category: 'living',
    },
    {
      id: 'kitchen',
      title: t('gallery.album.kitchen'),
      cover: kitchen1,
      images: [kitchen1, kitchen2, kitchen3, kitchen4],
      count: 4,
      category: 'living',
    },
    {
      id: 'gym-spa',
      title: t('gallery.album.gymSpa'),
      cover: gymSpa1,
      images: [gymSpa1, gymSpa2, gymSpa3, gymSpa4, gymSpa5],
      count: 5,
      category: 'living',
    },
    {
      id: 'laundry',
      title: t('gallery.album.laundry'),
      cover: laundry1,
      images: [laundry1, laundry2],
      count: 2,
      category: 'living',
    },
    // Spavaće sobe
    {
      id: 'bedroom1',
      title: t('gallery.album.bedroom1'),
      cover: bedroom1_1,
      images: [bedroom1_1, bedroom1_2, bedroom1_3, bedroom1_4],
      count: 4,
      category: 'bedrooms',
    },
    {
      id: 'bedroom2',
      title: t('gallery.album.bedroom2'),
      cover: bedroom2_1,
      images: [bedroom2_1, bedroom2_2, bedroom2_3, bedroom2_4, bedroom2_5, bedroom2_6],
      count: 6,
      category: 'bedrooms',
    },
    {
      id: 'bedroom3',
      title: t('gallery.album.bedroom3'),
      cover: bedroom3_1,
      images: [bedroom3_1, bedroom3_2, bedroom3_3, bedroom3_4, bedroom3_5, bedroom3_6],
      count: 6,
      category: 'bedrooms',
    },
    {
      id: 'bedroom4',
      title: t('gallery.album.bedroom4'),
      cover: bedroom4_1,
      images: [bedroom4_1, bedroom4_2, bedroom4_3, bedroom4_4],
      count: 4,
      category: 'bedrooms',
    },
    // Kupaonice
    {
      id: 'bathroom1',
      title: t('gallery.album.bathroom1'),
      cover: bathroom1_1,
      images: [bathroom1_1, bathroom1_2],
      count: 2,
      category: 'bathrooms',
    },
    {
      id: 'bathroom2',
      title: t('gallery.album.bathroom2'),
      cover: bathroom2_1,
      images: [bathroom2_1, bathroom2_2, bathroom2_3],
      count: 3,
      category: 'bathrooms',
    },
    {
      id: 'bathroom3',
      title: t('gallery.album.bathroom3'),
      cover: bathroom3_1,
      images: [bathroom3_1, bathroom3_2, bathroom3_3, bathroom3_4],
      count: 4,
      category: 'bathrooms',
    },
    {
      id: 'bathroom4',
      title: t('gallery.album.bathroom4'),
      cover: bathroom4_1,
      images: [bathroom4_1, bathroom4_2, bathroom4_3, bathroom4_4],
      count: 4,
      category: 'bathrooms',
    },
    {
      id: 'bathroom5',
      title: t('gallery.album.bathroom5'),
      cover: bathroom5_1,
      images: [bathroom5_1, bathroom5_2],
      count: 2,
      category: 'bathrooms',
    },
  ];

  const filteredAlbums = activeCategory === 'all' 
    ? albums 
    : albums.filter(album => album.category === activeCategory);

  // Placeholder albums for future
  const upcomingAlbums: { id: string; title: string }[] = [];

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(0);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prev) => 
        prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="relative h-full w-full overflow-hidden">
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
      <div className="relative z-10 h-full flex flex-col items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-24 sm:pb-20">
        <motion.div
          className="text-center max-w-6xl w-full h-full flex flex-col min-h-0"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-card text-gold text-xs uppercase tracking-widest mb-4 sm:mb-6 self-center"
          >
            {t('gallery.label')}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-linen mb-4 sm:mb-6"
          >
            {t('gallery.title')}
          </motion.h2>

          {/* Category Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-gold text-charcoal'
                    : 'glass-card text-linen/80 hover:text-linen hover:bg-linen/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Scrollable Albums Grid */}
          <motion.div
            variants={itemVariants}
            data-scrollable="true"
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain pr-2 touch-pan-y"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pb-4">
              {/* Video Album - only show in 'all' */}
              {activeCategory === 'all' && (
                <motion.div
                  variants={itemVariants}
                  className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer col-span-2 row-span-2"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="relative h-full bg-charcoal">
                    {/* Use static image instead of video for faster loading */}
                    <img
                      src={galleryLiving}
                      alt="Video Tour Preview"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center group-hover:bg-charcoal/20 transition-colors">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent">
                    <h3 className="text-linen font-display text-sm sm:text-base">{t('gallery.video.title')}</h3>
                    <p className="text-linen/60 text-xs">{t('gallery.video.subtitle')}</p>
                  </div>
                </motion.div>
              )}

              {/* Photo Albums */}
              {filteredAlbums.map((album) => (
                <motion.div
                  key={album.id}
                  variants={itemVariants}
                  className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  onClick={() => openAlbum(album)}
                >
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-28 sm:h-32 md:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-linen font-display text-sm sm:text-base">{album.title}</h3>
                    <p className="text-linen/60 text-xs">{album.count} {album.count === 1 ? t('gallery.photo') : t('gallery.photos')}</p>
                  </div>
                  {/* Stack effect for albums with multiple images */}
                  {album.count > 1 && (
                    <>
                      <div className="absolute -bottom-1 -right-1 w-full h-full rounded-xl border-2 border-gold/20 -z-10" />
                      <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl border-2 border-gold/10 -z-20" />
                    </>
                  )}
                </motion.div>
              ))}

              {/* Placeholder albums */}
              {upcomingAlbums.map((album) => (
                <motion.div
                  key={album.id}
                  variants={itemVariants}
                  className="relative rounded-xl overflow-hidden shadow-lg glass-card flex items-center justify-center h-40 sm:h-48 md:h-56 border border-gold/20"
                >
                  <div className="text-center">
                    <div className="text-gold/50 text-3xl mb-2">📷</div>
                    <span className="text-linen/50 text-sm">{album.title}</span>
                    <p className="text-linen/30 text-xs mt-1">Uskoro</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-linen/70 text-sm sm:text-base max-w-2xl mx-auto mt-4 shrink-0"
          >
            {t('gallery.description')}
          </motion.p>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <button
              className="absolute top-4 right-4 text-linen/80 hover:text-linen p-2"
              onClick={() => setShowVideo(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={villaTourVideo}
                className="w-full rounded-xl"
                controls
                autoPlay
                playsInline
                preload="auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Album Lightbox */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            onClick={closeAlbum}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-linen/80 hover:text-linen p-2 z-10"
              onClick={closeAlbum}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Album title */}
            <div className="absolute top-4 left-4 text-linen z-10">
              <h3 className="font-display text-xl">{selectedAlbum.title}</h3>
              <p className="text-linen/60 text-sm">
                {currentImageIndex + 1} / {selectedAlbum.images.length}
              </p>
            </div>

            {/* Navigation arrows */}
            {selectedAlbum.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-linen/80 hover:text-linen p-2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-linen/80 hover:text-linen p-2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[80vh] px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedAlbum.images[currentImageIndex]}
                alt={`${selectedAlbum.title} ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>

            {/* Thumbnail strip */}
            {selectedAlbum.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 glass-card rounded-lg">
                {selectedAlbum.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-gold scale-110'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
