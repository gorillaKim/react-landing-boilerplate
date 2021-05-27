import 'swiper/swiper-bundle.min.css'
import GlobalStyle from '../src/styles/GlobalStyle'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
