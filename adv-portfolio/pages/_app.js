import About from '../components/About'
import Navbar from '../components/Navbar'
import Parent from '../components/Parent'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}
