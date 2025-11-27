import { createContext, useState, useEffect } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";

export const LangContext = createContext(undefined);

const languages = { es, en };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // Intentar cargar desde localStorage
    const stored = localStorage.getItem("lang");
    return stored || "en";
  });

  // Cada vez que cambie el idioma → guardarlo
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (path) => {
    return path.split(".").reduce((acc, key) => acc[key], languages[lang]);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
