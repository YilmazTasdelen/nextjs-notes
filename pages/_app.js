import { Provider } from 'next-auth/client'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css'

function MyApp({ Component, pageProps,session }) {
  return (
    <Provider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp