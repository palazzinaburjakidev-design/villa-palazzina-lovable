import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface VillaInfo {
  [key: string]: string;
}

// Module-level cache so data persists across component mounts
let cachedData: VillaInfo | null = null;

export const useVillaInfo = () => {
  const [data, setData] = useState<VillaInfo>(cachedData || {});
  const [loading, setLoading] = useState(!cachedData);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (cachedData || fetchedRef.current) return;
    fetchedRef.current = true;

    const fetch = async () => {
      try {
        const { data: rows, error } = await supabase
          .from('villa_info')
          .select('key, value');

        if (error) {
          console.warn('Failed to fetch villa_info:', error.message);
          return;
        }

        const map: VillaInfo = {};
        for (const row of rows || []) {
          map[row.key] = row.value;
        }
        cachedData = map;
        setData(map);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return { data, loading };
};
