import { devtoolsExchange } from '@urql/devtools'
import { ReactElement, ReactNode, useMemo } from 'react'
import { cacheExchange, CombinedError, createClient, dedupExchange, errorExchange, fetchExchange, Provider } from 'urql'

const VITE_HASURA_ADMIN_PASSWORD = import.meta.env.VITE_HASURA_ADMIN_PASSWORD
const VITE_HASURA_ENDPOINT = import.meta.env.VITE_HASURA_ENDPOINT

export const GraphQLClientProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const URQL_EXCHANGES = useMemo(() => {
    const onError = async (e: CombinedError) => {
      const isDenied = e?.graphQLErrors.some((x) => x.extensions?.code === 'access-denied')
      const hasNetworkError = e.networkError?.message

      if (isDenied && hasNetworkError) {
        console.error('Something happened', e)
      }
    }

    return [devtoolsExchange, dedupExchange, cacheExchange, errorExchange({ onError }), fetchExchange]
  }, [])

  const urqlClient = useMemo(
    () =>
      createClient({
        url: VITE_HASURA_ENDPOINT,
        exchanges: URQL_EXCHANGES,
        requestPolicy: 'network-only',
        fetchOptions: () => ({
          mode: 'cors',
          credentials: 'include',
          headers: {
            'x-hasura-admin-secret': VITE_HASURA_ADMIN_PASSWORD,
          },
        }),
      }),
    [URQL_EXCHANGES],
  )
  return <Provider value={urqlClient}>{children}</Provider>
}
