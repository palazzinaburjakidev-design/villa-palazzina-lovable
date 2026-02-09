
-- Amenities data
INSERT INTO public.amenities (icon_name, sort_order) VALUES
('Waves', 1),
('Sparkles', 2),
('Dumbbell', 3),
('CircleDot', 4),
('Wifi', 5),
('Flame', 6),
('AirVent', 7),
('Gamepad2', 8);

-- Locations data
INSERT INTO public.locations (category, location_key, image_key, distance_km, photo_credit, sort_order) VALUES
-- Towns
('towns', 'rasa', 'rasa-town', 12, 'Turistička zajednica Općine Raša', 1),
('towns', 'labin', 'labin-old-town', 11, 'Turistička zajednica Rabac-Labin', 2),
('towns', 'rabac', 'rabac-town', 16, 'Turistička zajednica Rabac-Labin', 3),
('towns', 'rovinj', 'rovinj-town', 53, 'rovinj-tourism', 4),
('towns', 'pula', 'pula-town', 40, 'pulainfo.hr', 5),
-- Beaches
('beaches', 'ravni', 'ravni-beach', 2, 'Turistička zajednica Općine Raša', 1),
('beaches', 'tunarica', 'tunarica', 11, 'Turistička zajednica Općine Raša', 2),
('beaches', 'santaMarina', 'santa-marina', 16, 'Turistička zajednica Općine Raša', 3),
('beaches', 'rabacBeaches', 'rabac-beach', 16, 'Turistička zajednica Rabac-Labin', 4),
-- Restaurants
('restaurants', 'martinPescador', NULL, 2, NULL, 1),
('restaurants', 'konobaNando', NULL, 2, NULL, 2),
('restaurants', 'pizzeriaRumore', NULL, 12, NULL, 3),
('restaurants', 'stareStaze', NULL, 23, NULL, 4),
-- Supermarkets
('supermarkets', 'spar', NULL, 13, NULL, 1),
('supermarkets', 'plodine', NULL, 12, NULL, 2),
('supermarkets', 'lidl', NULL, 12, NULL, 3),
('supermarkets', 'eurospin', NULL, 15, NULL, 4),
-- Transport
('transport', 'airport', NULL, 36, NULL, 1),
('transport', 'triesteAirport', NULL, 165, NULL, 2),
('transport', 'zagrebAirport', NULL, 241, NULL, 3),
('transport', 'busStation', NULL, 13, NULL, 4);

-- Villa Info data
INSERT INTO public.villa_info (key, value) VALUES
('name', 'Villa Palazzina Burjaki'),
('address', 'Burjaki 36, Trgetari 52224'),
('country', 'Croatia'),
('latitude', '45.0667'),
('longitude', '14.1167'),
('airbnb_url', 'https://hr.airbnb.com/rooms/1374488?_set_bev_on_new_domain=1759776626_EANmIzZjMwMzBlZm&set_everest_cookie_on_new_domain=1759776626.EAZTc0YzVhMzQ2NjM1Mz.1SKP7GRHZCCh7kEL-c4mglEEFUYXy0c2fdwyNyEgf5s&source_impression_id=p3_1768839068_P3JJtgKZZG0aLdcA'),
('max_guests', '8'),
('bedrooms', '4'),
('bathrooms', '5'),
('area_sqm', '235'),
('checkin_time', '15:00'),
('checkout_time', '10:00'),
('airbnb_rating', '4.93'),
('google_rating', '4.8'),
('host_name', 'Vedran Grubišić'),
('email', 'info@villaburjaki.com'),
('phone', '+385 91 xxx xxxx'),
('youtube_video_id', 'v_qexUFcnhs'),
('google_maps_url', 'https://www.google.com/maps?q=45.0667,14.1167');
