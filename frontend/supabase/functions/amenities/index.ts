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

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: amenities, error: amenitiesError } = await supabase
      .from("amenities")
      .select("*")
      .order("sort_order");

    if (amenitiesError) throw amenitiesError;

    const { data: translations, error: transError } = await supabase
      .from("translations")
      .select("key, value")
      .eq("lang", lang)
      .like("key", "amenities.%");

    if (transError) throw transError;

    const transMap: Record<string, string> = {};
    for (const t of translations || []) {
      transMap[t.key] = t.value;
    }

    const result = (amenities || []).map((a, i) => {
      const keys = [
        "pool", "cleaning", "gym", "billiards", "wifi", "bbq", "ac", "entertainment"
      ];
      const key = keys[i] || `item${i}`;
      return {
        id: a.id,
        icon_name: a.icon_name,
        sort_order: a.sort_order,
        title: transMap[`amenities.${key}.title`] || key,
        description: transMap[`amenities.${key}.description`] || "",
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
