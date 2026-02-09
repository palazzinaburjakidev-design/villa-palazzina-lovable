
-- Translations table
CREATE TABLE public.translations (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL,
  lang text NOT NULL,
  value text NOT NULL,
  UNIQUE(key, lang)
);
ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read translations" ON public.translations FOR SELECT USING (true);
CREATE INDEX idx_translations_key_lang ON public.translations(key, lang);
CREATE INDEX idx_translations_lang ON public.translations(lang);

-- Amenities table
CREATE TABLE public.amenities (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  icon_name text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0
);
ALTER TABLE public.amenities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read amenities" ON public.amenities FOR SELECT USING (true);

-- Locations table
CREATE TABLE public.locations (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category text NOT NULL,
  location_key text NOT NULL,
  image_key text,
  distance_km numeric,
  google_maps_url text,
  photo_credit text,
  sort_order integer NOT NULL DEFAULT 0
);
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read locations" ON public.locations FOR SELECT USING (true);

-- Gallery Albums table
CREATE TABLE public.gallery_albums (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  album_key text NOT NULL UNIQUE,
  category text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0
);
ALTER TABLE public.gallery_albums ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read gallery_albums" ON public.gallery_albums FOR SELECT USING (true);

-- Gallery Images table
CREATE TABLE public.gallery_images (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  album_id uuid NOT NULL REFERENCES public.gallery_albums(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  is_cover boolean NOT NULL DEFAULT false
);
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read gallery_images" ON public.gallery_images FOR SELECT USING (true);
CREATE INDEX idx_gallery_images_album ON public.gallery_images(album_id);

-- Villa Info table
CREATE TABLE public.villa_info (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  value text NOT NULL
);
ALTER TABLE public.villa_info ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read villa_info" ON public.villa_info FOR SELECT USING (true);

-- Gallery storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);

-- Public read policy for gallery bucket
CREATE POLICY "Public read gallery" ON storage.objects FOR SELECT USING (bucket_id = 'gallery');
