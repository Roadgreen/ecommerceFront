import '../styles/globals.css'
import Container from '../component/container/Container'
import styles from './apps.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <div className={styles.component}> <Component {...pageProps} /></div>
     
      </Container>

  )
}

export default MyApp
