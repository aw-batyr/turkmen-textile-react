// LanguageSync.tsx
import { useEffect } from "react";
import i18n from "./i18n";
import { useLangStore } from "./store/lang";

const LanguageSync = () => {
  const lang = useLangStore((state) => state.lang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return null;
};

export default LanguageSync;
