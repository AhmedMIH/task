import english from './en.json'
import arabic from './ar.json'


import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: english,
  },
  ar: {
    translation: arabic,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'ar',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false
  }
});