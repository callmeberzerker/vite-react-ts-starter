export type AppLocale = 'en' | 'de' | 'it' | 'fr'

export type AppUser = {
  username: string
  email: string
  roles: AppRoles[]
  anonymous: boolean
  locale: AppLocale
}

export type AppRoles = 'ADMIN' | 'USER'
