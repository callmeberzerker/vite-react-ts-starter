import { ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import { ROUTES } from 'src/routing/routes'

export const AllRoutes = (): ReactElement | null => {
  const element = useRoutes(ROUTES)
  return element
}
