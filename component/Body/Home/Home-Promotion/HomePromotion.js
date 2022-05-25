import React, { Fragment } from 'react'
import Image  from 'next/image'
import styles from './HomePromotion.module.css'
import promotions from '../../../../public/img/Promotion/bann1.jpg'


export default function HomePromotion() {

    const Data = { title:'Promotion',h3FirstPart:`Deux boules de Thés fleuris offerte dès 50€ d'achat*`,h3:`avec le code TEAHOUSE22`,imgBack:'/public/img/Promotion/bann1.jpg'}
   
  return (
 <Fragment>
     <div className={styles.promContainer}>
     <Image className={styles.imgBackground} width={1160} height={199} src={promotions}/>
     <h1 className={styles.Title}>{Data.title}</h1>
     <h3 className={styles.h3}>{Data.h3FirstPart}<br/>{Data.h3}</h3>
     <button className={styles.button}>Profiter de l'offre</button>
     </div>


 </Fragment>
  )
}
