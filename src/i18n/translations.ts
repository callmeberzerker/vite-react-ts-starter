import { AppLocale } from 'src/@types/app'

interface Translations {
  [key: string]: {
    en: string
    de: string
    it: string
    fr: string
  }
}

const TRANSLATIONS: Translations = {
  'label.confirm': {
    en: 'Confirm',
    de: 'Bestätigen',
    it: 'Confermare',
    fr: 'Confirmer',
  },
}

export const resolveTranslations = (locale: AppLocale): Record<string, string> =>
  Object.keys(TRANSLATIONS).reduce((cache, key) => {
    cache[key] = TRANSLATIONS[key][locale]
    return cache
  }, {} as Record<string, string>)
