import { Outlet } from 'react-router-dom'

import { Footer } from '../global/footer'
import { Navbar } from '../global/navbar'

const RootLayout = () => {
  return (
    <>
      <header className="absolute left-0 top-0 z-20 flex w-full justify-center">
        <Navbar />
      </header>
      <main className="flex min-h-screen w-full flex-col justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
