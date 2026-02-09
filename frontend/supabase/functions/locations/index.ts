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
    const lang = url.searchParams.get("lang") || "en";
    const category = url.searchParams.get("category");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    let query = supabase.from("locations").select("*").order("sort_order");
    if (category) {
      query = query.eq("category", category);
    }

    const { data: locations, error: locError } = await query;
    if (locError) throw locError;

    // Get all location translations for the requested language
    const prefixes = ["locations.beaches", "locations.towns", "locations.transport", "locations.restaurants", "locations.supermarkets"];
    const { data: translations, error: transError } = await supabase
      .from("translations")
      .select("key, value")
      .eq("lang", lang)
      .or(prefixes.map(p => `key.like.${p}.%`).join(","));

    if (transError) throw transError;

    const transMap: Record<string, string> = {};
    for (const t of translations || []) {
      transMap[t.key] = t.value;
    }

    const result = (locations || []).map((loc) => ({
      id: loc.id,
      category: loc.category,
      location_key: loc.location_key,
      image_key: loc.image_key,
      distance_km: loc.distance_km,
      google_maps_url: loc.google_maps_url,
      photo_credit: loc.photo_credit,
      sort_order: loc.sort_order,
      name: transMap[`locations.${loc.category}.${loc.location_key}.name`] || loc.location_key,
      description: transMap[`locations.${loc.category}.${loc.location_key}.description`] || "",
      distance_label: transMap[`locations.${loc.category}.${loc.location_key}.distance`] || "",
    }));

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
