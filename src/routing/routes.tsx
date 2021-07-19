import { AboutPage } from 'src/screens/about/AboutPage'
import { HomePage } from 'src/screens/home/HomePage'
import { Layout } from 'src/shared/components/primitives/layout/Layout'

export const ROUTES = [
  {
    path: '//*',
    element: <Layout />,

    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]
