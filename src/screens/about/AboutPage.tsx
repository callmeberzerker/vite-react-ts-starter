import { ReactElement } from 'react'
import { useMessageSource } from 'src/i18n/useMessageSource'
import { userAtom } from 'src/i18n/UserAtom'
import { useAtom } from 'jotai'

export const AboutPage = (): ReactElement => {
  const { getMessage } = useMessageSource()
  const [user] = useAtom(userAtom)
  return (
    <div>
      <h1>About page</h1>
      <div>user</div>
      <div>user is anonymous: {`${user.anonymous}`}</div>
      <div>username is: {user.username}</div>
      <div>{getMessage('label.confirm')}</div>
    </div>
  )
}
