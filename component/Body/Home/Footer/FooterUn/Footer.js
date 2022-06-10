import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../../public/img/LogoMenu/logoDesktop.png'
import insta from '../../../../../public/img/picto/PictoFooter/insta.png'
import facebook from '../../../../../public/img/picto/PictoFooter/facebook.png'
import tik from '../../../../../public/img/picto/PictoFooter/tik.png'

export function Footer() {
  return (
    
    <div className={styles.container}>
      <div className={styles.containerOne}>
      <div className={styles.containerEtea}> 
      <li><Link href={'/'}>Qui sommes nous?</Link></li>
      <li><Link href={'/'}>Notre Engagement</Link></li>
      <li><Link href={'/'}>Aide-FAQ</Link></li>
      <li><Link href={'/'}>Conditions Générales de Ventes</Link></li>
      <li><Link href={'/'}>Livraison</Link></li>
      <li><Link href={'/'}>Mentions Légales</Link></li>
     </div>
      <div className={styles.containerSocial}>
       <h3>Suivez-nous : </h3>
       <div><Link href={'/'}><Image className={styles.Image} layout='fixed' src={facebook} width={30}
       height={30} /></Link>
       <Link href={'/'}><Image layout='fixed' className={styles.Image} src={insta} width={30}
       height={30} /></Link>
       <Link href={'/'}><Image layout='fixed' className={styles.Image} src={tik} width={30}
       height={30} /></Link></div>
      </div>
      </div>
    
       <div className={styles.logo}>
     <Image layout="fixed" src={logo} width={90} height={50}/>
     <p>©2022 ETEA </p>
     </div>
      
       
     
    </div>
  )
}
