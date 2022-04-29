import '../styles/globals.css'
import Container from '../component/container/Container'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
      </Container>

  )
}

export default MyApp
