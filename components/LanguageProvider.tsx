"use client";

import { createContext, type PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { type Language, type Translation, translations } from "@/data/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("pbag-language");
    if (savedLanguage === "en" || savedLanguage === "bm" || savedLanguage === "zh") {
      setLanguageState(savedLanguage);
    }
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("pbag-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "zh" ? "zh-Hans" : nextLanguage === "bm" ? "ms" : "en";
  }

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-Hans" : language === "bm" ? "ms" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
