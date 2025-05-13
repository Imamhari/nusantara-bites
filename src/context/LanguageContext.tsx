// context/LanguageContext.tsx

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = "en" | "id";

interface LanguageContextType {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en"); // Set default language (en)

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
