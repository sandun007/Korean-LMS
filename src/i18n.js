import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locals/en/translation.json';
import kr from './locals/kr/translation.json';

console.log("i18n.js is being executed");

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            kr: { translation: kr }
        },
        fallbackLng: 'en',
        //lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

console.log("i18n initialized, languages:", i18n.languages);

export default i18n;