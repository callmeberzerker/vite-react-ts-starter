import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from 'src/routing/AllRoutes'
import { GraphQLClientProvider } from 'src/shared/providers/GraphQLProvider'
import { ThemeProvider } from 'src/shared/providers/ThemeProvider'
import { MessageSourceLoader } from 'src/i18n/MessageSourceLoader'

export const App = (): ReactElement => {
  return (
    <MessageSourceLoader>
      <ThemeProvider>
        <GraphQLClientProvider>
          <BrowserRouter>
            <AllRoutes />
          </BrowserRouter>
        </GraphQLClientProvider>
      </ThemeProvider>
    </MessageSourceLoader>
  )
}
