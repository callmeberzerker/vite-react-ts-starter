import { atom } from 'jotai'
import { AppLocale, AppUser } from 'src/@types/app'

const defaultUser: AppUser = {
  username: '',
  email: '',
  roles: [],
  anonymous: true,
  locale: 'en',
}

export const userAtom = atom<AppUser>(defaultUser)

export const userLocaleAtom = atom<AppLocale>((get) => get(userAtom).locale)
