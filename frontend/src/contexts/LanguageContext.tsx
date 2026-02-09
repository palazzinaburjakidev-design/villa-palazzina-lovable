import React, { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type Language = 'en' | 'hr' | 'it' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

// Default context prevents a blank screen if HMR/cache ever renders a component
// outside the provider. Provider (below) will override this value in normal use.
const defaultLanguageContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {
    if (import.meta.env.DEV) {
      console.warn('LanguageProvider is missing: setLanguage() is a no-op.');
    }
  },
  t: (key: string) => '',
  isLoading: true,
};

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

const LANGUAGE_STORAGE_KEY = 'villa-palazzina-language';

const SUPPORTED_LANGUAGES: Language[] = ['en', 'hr', 'it', 'de'];

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  // 1. Prioritet: korisnička preferencija iz localStorage
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
    return stored as Language;
  }

  // 2. Detekcija jezika browsera
  const browserLanguages = navigator.languages || [navigator.language];
  
  for (const browserLang of browserLanguages) {
    const langCode = browserLang.split('-')[0].toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(langCode as Language)) {
      return langCode as Language;
    }
  }

  // 3. Fallback na engleski
  return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  // Cache: lang -> { key: value }
  const supabaseCache = useRef<Record<string, Record<string, string>>>({});
  const [supabaseTranslations, setSupabaseTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

  // Sync with localStorage on mount (handles SSR hydration edge cases)
  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['en', 'hr', 'it', 'de'].includes(stored) && stored !== language) {
      setLanguageState(stored as Language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch translations from Supabase when language changes
  useEffect(() => {
    const fetchTranslations = async () => {
      // Check cache first
      if (supabaseCache.current[language]) {
        setSupabaseTranslations(supabaseCache.current[language]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        // Paginate to handle >1000 rows
        const allRows: { key: string; value: string }[] = [];
        let from = 0;
        const pageSize = 1000;

        while (true) {
          const { data, error } = await supabase
            .from('translations')
            .select('key, value')
            .eq('lang', language)
            .range(from, from + pageSize - 1);

          if (error) {
            console.warn('Failed to fetch translations from Supabase:', error.message);
            break;
          }
          if (!data || data.length === 0) break;
          allRows.push(...data);
          if (data.length < pageSize) break;
          from += pageSize;
        }

        if (allRows.length > 0) {
          const map: Record<string, string> = {};
          for (const row of allRows) {
            map[row.key] = row.value;
          }
          supabaseCache.current[language] = map;
          setSupabaseTranslations(map);
        }
      } catch (err) {
        console.warn('Supabase translations fetch failed.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, [language]);

  const t = useCallback((key: string): string => {
    // Return empty string while loading to prevent key flickering
    if (isLoading && Object.keys(supabaseTranslations).length === 0) {
      return '';
    }
    return supabaseTranslations[key] || key;
  }, [isLoading, supabaseTranslations]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (import.meta.env.DEV && context === defaultLanguageContext) {
    console.warn('useLanguage is being used outside LanguageProvider.');
  }
  return context;
};
