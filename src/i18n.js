import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en.json';
import translationKA from './ge.json'; 

const resources = {
  en: {
    translation: translationEN
  },
  ka: {
    translation: translationKA
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ka',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;