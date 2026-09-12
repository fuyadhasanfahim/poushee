"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANG,
  DICT,
  format,
  pick,
  type Lang,
  type Localized,
  type UIKey,
} from "./dictionary";

const STORAGE_KEY = "poushee-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (key: UIKey, vars?: Record<string, string | number>) => string;
  tf: (value: Localized) => string;
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyLang(lang: Lang) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.lang = lang;
  root.classList.toggle("lang-bn", lang === "bn");
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: Lang | null = null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw === "en" || raw === "bn") stored = raw;
    } catch {
    }
    const initial =
      stored ??
      (document.documentElement.classList.contains("lang-bn") ? "bn" : DEFAULT_LANG);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(initial);
    applyLang(initial);
    setReady(true);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    applyLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
    }
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "en" ? "bn" : "en";
      applyLang(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
      }
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      ready,
      t: (key, vars) => format(DICT[lang][key] ?? DICT.en[key] ?? key, vars),
      tf: (v) => pick(v, lang),
    }),
    [lang, setLang, toggle, ready],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within <LanguageProvider>");
  }
  return ctx;
}

export const LANG_BOOTSTRAP_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{var l=localStorage.getItem('${STORAGE_KEY}');if(l==='bn'){d.classList.add('lang-bn');d.lang='bn';}}catch(e){}})();`;
