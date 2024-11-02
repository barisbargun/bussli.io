import { AppProvider } from './provider'
import { AppRouter } from './router'

const index = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default index
