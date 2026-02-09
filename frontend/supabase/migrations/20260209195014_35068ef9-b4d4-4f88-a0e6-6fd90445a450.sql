
-- Insert gallery albums
INSERT INTO public.gallery_albums (album_key, category, sort_order) VALUES
('pool', 'exterior', 1),
('terrace', 'exterior', 2),
('backyard', 'exterior', 3),
('living', 'living', 4),
('dining', 'living', 5),
('kitchen', 'living', 6),
('gym-spa', 'living', 7),
('laundry', 'living', 8),
('bedroom1', 'bedrooms', 9),
('bedroom2', 'bedrooms', 10),
('bedroom3', 'bedrooms', 11),
('bedroom4', 'bedrooms', 12),
('bathroom1', 'bathrooms', 13),
('bathroom2', 'bathrooms', 14),
('bathroom3', 'bathrooms', 15),
('bathroom4', 'bathrooms', 16),
('bathroom5', 'bathrooms', 17);

-- Insert gallery images using Supabase Storage URLs
-- Pool (6 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'pool/pool-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'pool';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'pool/pool-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'pool';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'pool/pool-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'pool';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'pool/pool-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'pool';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'pool/pool-5.avif', 5 FROM public.gallery_albums WHERE album_key = 'pool';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'pool/pool-6.avif', 6 FROM public.gallery_albums WHERE album_key = 'pool';

-- Terrace (6 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'terrace/terrace-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'terrace';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'terrace/terrace-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'terrace';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'terrace/terrace-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'terrace';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'terrace/terrace-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'terrace';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'terrace/terrace-5.avif', 5 FROM public.gallery_albums WHERE album_key = 'terrace';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'terrace/terrace-6.avif', 6 FROM public.gallery_albums WHERE album_key = 'terrace';

-- Backyard (3 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'backyard/backyard-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'backyard';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'backyard/backyard-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'backyard';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'backyard/backyard-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'backyard';

-- Living room (6 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'living/living-room-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'living';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'living/living-room-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'living';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'living/living-room-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'living';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'living/living-room-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'living';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'living/living-room-5.avif', 5 FROM public.gallery_albums WHERE album_key = 'living';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'living/living-room-6.avif', 6 FROM public.gallery_albums WHERE album_key = 'living';

-- Dining room (5 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'dining/dining-room-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'dining';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'dining/dining-room-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'dining';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'dining/dining-room-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'dining';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'dining/dining-room-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'dining';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'dining/dining-room-5.avif', 5 FROM public.gallery_albums WHERE album_key = 'dining';

-- Kitchen (4 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'kitchen/kitchen-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'kitchen';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'kitchen/kitchen-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'kitchen';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'kitchen/kitchen-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'kitchen';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'kitchen/kitchen-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'kitchen';

-- Gym & Spa (5 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'gym-spa/gym-spa-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'gym-spa';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'gym-spa/gym-spa-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'gym-spa';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'gym-spa/gym-spa-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'gym-spa';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'gym-spa/gym-spa-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'gym-spa';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'gym-spa/gym-spa-5.avif', 5 FROM public.gallery_albums WHERE album_key = 'gym-spa';

-- Laundry (2 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'laundry/laundry-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'laundry';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'laundry/laundry-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'laundry';

-- Bedroom 1 (4 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bedrooms/bedroom1-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bedroom1';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom1-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'bedroom1';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom1-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'bedroom1';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom1-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'bedroom1';

-- Bedroom 2 (6 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bedrooms/bedroom2-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bedroom2';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom2-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'bedroom2';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom2-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'bedroom2';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom2-4.webp', 4 FROM public.gallery_albums WHERE album_key = 'bedroom2';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom2-5.avif', 5 FROM public.gallery_albums WHERE album_key = 'bedroom2';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom2-6.avif', 6 FROM public.gallery_albums WHERE album_key = 'bedroom2';

-- Bedroom 3 (6 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bedrooms/bedroom3-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bedroom3';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom3-2.webp', 2 FROM public.gallery_albums WHERE album_key = 'bedroom3';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom3-3.webp', 3 FROM public.gallery_albums WHERE album_key = 'bedroom3';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom3-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'bedroom3';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom3-5.webp', 5 FROM public.gallery_albums WHERE album_key = 'bedroom3';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom3-6.avif', 6 FROM public.gallery_albums WHERE album_key = 'bedroom3';

-- Bedroom 4 (4 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bedrooms/bedroom4-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bedroom4';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom4-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'bedroom4';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom4-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'bedroom4';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bedrooms/bedroom4-4.avif', 4 FROM public.gallery_albums WHERE album_key = 'bedroom4';

-- Bathroom 1 (2 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bathrooms/bathroom1-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bathroom1';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom1-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'bathroom1';

-- Bathroom 2 (3 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bathrooms/bathroom2-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bathroom2';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom2-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'bathroom2';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom2-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'bathroom2';

-- Bathroom 3 (4 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bathrooms/bathroom3-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bathroom3';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom3-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'bathroom3';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom3-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'bathroom3';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom3-4.webp', 4 FROM public.gallery_albums WHERE album_key = 'bathroom3';

-- Bathroom 4 (4 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bathrooms/bathroom4-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bathroom4';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom4-2.webp', 2 FROM public.gallery_albums WHERE album_key = 'bathroom4';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom4-3.avif', 3 FROM public.gallery_albums WHERE album_key = 'bathroom4';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom4-4.webp', 4 FROM public.gallery_albums WHERE album_key = 'bathroom4';

-- Bathroom 5 (2 images)
INSERT INTO public.gallery_images (album_id, image_url, sort_order, is_cover) 
SELECT id, 'bathrooms/bathroom5-1.avif', 1, true FROM public.gallery_albums WHERE album_key = 'bathroom5';
INSERT INTO public.gallery_images (album_id, image_url, sort_order) 
SELECT id, 'bathrooms/bathroom5-2.avif', 2 FROM public.gallery_albums WHERE album_key = 'bathroom5';
