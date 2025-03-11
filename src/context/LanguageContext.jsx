import { createContext, useState, useEffect, useContext } from 'react';
import translations from '../translations.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    return (
      localStorage.getItem('language') ||
      (navigator.language.startsWith('ru') ? 'ru' : 'en')
    );
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const text = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, text }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to consume context
export const useLanguage = () => useContext(LanguageContext);
