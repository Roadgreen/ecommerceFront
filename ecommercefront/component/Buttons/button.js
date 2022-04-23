import Link from 'next/link'
import { Fragment } from 'react'
import styles from './button.module.css'



export default function Button(){

   
    return(
        <Fragment>
             <Link  href="/">
        <a className={styles.a}>
                           </a>
    </Link>
    <Link  href="/">
        <a className={styles.b}>
                           </a>
    </Link>
    <Link  href="/">
        <a className={styles.c}>
                           </a>
    </Link>
    <Link  href="/">
        <a className={styles.d}>
                           </a>
    </Link>
    <Link  href="/">
        <a className={styles.e}>
                           </a>
    </Link>
        </Fragment>
       
    )
  
}