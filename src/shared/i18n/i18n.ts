import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

export const supportedLanguages = ['en', 'ru', 'uz'] as const

const storedLanguage = window.localStorage.getItem('app-language')
const defaultLanguage =
  storedLanguage && supportedLanguages.includes(storedLanguage as (typeof supportedLanguages)[number])
    ? storedLanguage
    : 'en'

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  },
  lng: defaultLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
