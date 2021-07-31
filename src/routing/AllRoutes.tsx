import { ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import { ROUTES } from 'src/routing/routes'

export const AllRoutes = (): ReactElement | null => {
  return useRoutes(ROUTES)
}
