import { AboutPage } from 'src/screens/about/AboutPage'
import { FormsPage } from 'src/screens/forms/Forms'
import { HomePage } from 'src/screens/home/HomePage'
import { Layout } from 'src/shared/components/primitives/layout/Layout'

export const ROUTES = [
  {
    path: '/',
    element: <Layout />,

    children: [
      { path: '/', element: <HomePage /> },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'forms',
        element: <FormsPage />,
      },
    ],
  },
]
