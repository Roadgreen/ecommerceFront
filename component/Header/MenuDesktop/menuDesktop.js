import styles from './menuDesktop.module.css'
import Image from 'next/image'
import logo from '../../../public/img/LogoMenu/logoDesktop.png'
import Link from 'next/link'
import Button from '../../Buttons/button'


export function MenuDesktop(){


    return(
        <div className={styles.container}>
            <Image src={logo} className={styles.logo}  width={70} height={40} layout="fixed" alt="Logo ETEA pour etea.fr"/>
              
            <Button/>
            
             
             
            
        </div>
    )
}