import RootLayout from '@/components/layouts/root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path:'/',
      element:(
        <RootLayout/>
      ),
      children:[
    {
      path: '/',
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing')
        return { Component: LandingRoute }
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
