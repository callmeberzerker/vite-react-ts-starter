import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from 'src/routing/AllRoutes'
import { GraphQLClientProvider } from 'src/shared/providers/GraphQLProvider'
import { ThemeProvider } from 'src/shared/providers/ThemeProvider'

export const App = (): ReactElement => {
  return (
    <ThemeProvider>
      <GraphQLClientProvider>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </GraphQLClientProvider>
    </ThemeProvider>
  )
}
