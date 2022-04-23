import styles from './menuDesktop.module.css'
import { Fragment } from 'react'
import Image from 'next/image'
import logo from '../../../public/img/LogoMenu/logo3.svg'
import Link from 'next/link'
import Button from '../../Buttons/button'


export function MenuDesktop(){


    return(
        <Fragment>
            <div className={styles.background}>
                <Image src={logo} className={styles.logo}  width={70} height={40} layout="fixed" alt="Logo ETEA pour etea.fr"/>
              
            <Button/>
            
             
             
            </div>
        </Fragment>
    )
}