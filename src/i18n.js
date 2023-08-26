import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    lng: 'es',
    interpolation: {
      escapeValue: false // React already escapes variables.
    },
    backend: {
      loadPath: '/macs/locales/{{lng}}/translation.json',
      requestOptions: {
        cache: 'no-store'
      }
    }
  })

export default i18n
