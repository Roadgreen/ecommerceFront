import React from 'react'
import Image from 'next/image'
import styles from './Picto.module.css'
import transport from '../../../../public/img/picto/PictoFooter/transport.png'
import contact from '../../../../public/img/picto/PictoFooter/contact.png'
import gout from '../../../../public/img/picto/PictoFooter/gout.png'
import Security from '../../../../public/img/picto/PictoFooter/Sécurité.png'

export default function Picto() {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
      <Image src={transport} layout="fixed"  width={90} height={90}/>
      <h3>Livraison offerte des 45€</h3>
      </div>
      <div className={styles.containerImg}>
      <Image src={Security} layout="fixed" width={90} height={90}/>
      <h3>Paiement sécurisé</h3>
      </div> <div className={styles.containerImg}>
      <Image src={gout} layout="fixed" width={90} height={90}/>
      <h3>Qualité Garantie</h3>
      </div> <div className={styles.containerImg}>
      <Image src={contact} layout="fixed" width={90} height={90}/>
      <h3>Service Client 7/7</h3>
      </div> 

    </div>
  )
}
