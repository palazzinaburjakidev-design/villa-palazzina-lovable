import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const album = url.searchParams.get("album");
    const category = url.searchParams.get("category");
    const lang = url.searchParams.get("lang") || "en";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // If specific album requested, return its images
    if (album) {
      const { data: albumData, error: albumError } = await supabase
        .from("gallery_albums")
        .select("*")
        .eq("album_key", album)
        .single();

      if (albumError) throw albumError;

      const { data: images, error: imgError } = await supabase
        .from("gallery_images")
        .select("*")
        .eq("album_id", albumData.id)
        .order("sort_order");

      if (imgError) throw imgError;

      // Get album title translation
      const { data: trans } = await supabase
        .from("translations")
        .select("value")
        .eq("lang", lang)
        .eq("key", `gallery.albums.${album}`)
        .single();

      return new Response(
        JSON.stringify({
          ...albumData,
          title: trans?.value || album,
          images: images || [],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Return all albums with cover images
    let albumQuery = supabase.from("gallery_albums").select("*").order("sort_order");
    if (category) {
      albumQuery = albumQuery.eq("category", category);
    }

    const { data: albums, error: albumsError } = await albumQuery;
    if (albumsError) throw albumsError;

    // Get cover images and counts
    const albumIds = (albums || []).map((a) => a.id);

    const { data: allImages, error: imgError } = await supabase
      .from("gallery_images")
      .select("album_id, image_url, is_cover")
      .in("album_id", albumIds);

    if (imgError) throw imgError;

    // Get translations for album names
    const albumKeys = (albums || []).map((a) => `gallery.albums.${a.album_key}`);
    const { data: translations } = await supabase
      .from("translations")
      .select("key, value")
      .eq("lang", lang)
      .in("key", albumKeys);

    const transMap: Record<string, string> = {};
    for (const t of translations || []) {
      transMap[t.key] = t.value;
    }

    const result = (albums || []).map((a) => {
      const imgs = (allImages || []).filter((i) => i.album_id === a.id);
      const cover = imgs.find((i) => i.is_cover) || imgs[0];
      return {
        id: a.id,
        album_key: a.album_key,
        category: a.category,
        sort_order: a.sort_order,
        title: transMap[`gallery.albums.${a.album_key}`] || a.album_key,
        cover_url: cover?.image_url || null,
        image_count: imgs.length,
      };
    });

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
