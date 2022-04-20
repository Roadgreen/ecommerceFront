import styles from './menuDesktop.module.css'
import { Fragment } from 'react'
import Image from 'next/image'
import logo from '../../../public/img/LogoMenu/logo3.svg'
import Link from 'next/link'

export function MenuDesktop(){


    return(
        <Fragment>
            <div className={styles.background}>
                <Image src={logo} className={styles.logo}  width={70} height={40} layout="fixed" alt="Logo ETEA pour etea.fr"/>
              <Link id="" href="/">
                  <a className={styles.a}>Home</a>
              </Link>
              <Link href="/">
                  <a className={styles.a}>Nos thés</a>
              </Link>
              <Link href="/">
                  <a className={styles.a}>à propos</a>
              </Link>
              <Link href="/">
                  <a className={styles.a}>Blog</a>
              </Link>
             
             
            </div>
        </Fragment>
    )
}