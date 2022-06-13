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
      <Link href={'/'}><li>Qui sommes nous?</li></Link><Link href={'/'}><li>Notre Engagement</li></Link>
      <Link href={'/'}><li>Aide-FAQ</li></Link>
      <Link href={'/'}><li>Conditions Générales de Ventes</li></Link>
      <Link href={'/'}><li>Livraison</li></Link>
     <Link href={'/'}><li>Mentions Légales</li></Link>
     </div>
      <div className={styles.containerSocial}>
       <h3>Suivez-nous : </h3>
       <div><Link href={'/'}><div><Image className={styles.Image} layout='fixed' src={facebook} width={30}
       height={30} /></div></Link>

       <Link href={'/'}><div><Image layout='fixed' className={styles.Image} src={insta} width={30}
       height={30} /></div></Link>
       <Link href={'/'}><div><Image layout='fixed' className={styles.Image} src={tik} width={30}
       height={30} /></div></Link></div>
      </div>
      </div>
    
       <div className={styles.logo}>
     <Image layout="fixed" src={logo} width={90} height={50}/>
     <p>©2022 ETEA </p>
     </div>
      
       
     
    </div>
  )
}
