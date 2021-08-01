import { memo, ReactNode } from 'react'
import { Provider as MessageSourceProvider } from 'src/i18n/MessageSourceContext'
import { useAtom } from 'jotai'
import { userLocaleAtom } from 'src/i18n/UserAtom'
import { resolveTranslations } from 'src/i18n/translations'

const MessageSourceLoader = memo(({ children }: { children: ReactNode }) => {
  const [locale] = useAtom(userLocaleAtom)

  const translations = resolveTranslations(locale)

  return <MessageSourceProvider value={translations}>{children}</MessageSourceProvider>
})
export { MessageSourceLoader }
