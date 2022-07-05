import '../styles/globals.css'
import '../components/Navbar.css'
import Navbar from '../components/Navbar'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
  <>
   <SessionProvider session={pageProps.session}>
   <Navbar/>
   </SessionProvider>
  
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
