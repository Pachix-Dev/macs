import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Fallback language if the user's language is not available.
    interpolation: {
      escapeValue: false // React already escapes variables.
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
      requestOptions: {
        cache: 'no-store'
      }
    }
  })

export default i18n
