import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from '@/components/layouts/root'

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,

      children: [
        {
          path: '/',
          lazy: async () => {
            const { LandingRoute } = await import('./routes/landing')
            return { Component: LandingRoute }
          }
        },
        {
          path: '/contact',
          lazy: async () => {
            const { ContactRoute } = await import('./routes/contact')
            return { Component: ContactRoute }
          }
        },
        {
          path: '/pricing',
          lazy: async () => {
            const { PricingRoute } = await import('./routes/pricing')
            return { Component: PricingRoute }
          }
        },
        {
          path: '/about',
          lazy: async () => {
            const { AboutRoute } = await import('./routes/about')
            return { Component: AboutRoute }
          }
        },
        {
          path: '/terms',
          lazy: async () => {
            const { TermsRoute } = await import('./routes/terms')
            return { Component: TermsRoute }
          }
        },
        {
          path: '*',
          lazy: async () => {
            const { NotFoundRoute } = await import('./routes/not-found')
            return { Component: NotFoundRoute }
          }
        }
      ]
    }
  ])

export const AppRouter = () => {
  const router = createAppRouter()

  return <RouterProvider router={router} />
}
