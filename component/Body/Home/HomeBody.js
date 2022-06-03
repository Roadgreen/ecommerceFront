import React from 'react'
import styles from './HomeBody.module.css'
import CardBestProduct from '../../Card/HomeCard/CardBestProduct/CardBestProduct'
import HomePromotion from './Home-Promotion/HomePromotion'
import HomeBlog from './Home-Blog/HomeBlog'
import CardSecondProduct from '../../Card/HomeCard/CardSecondProduct/CardSecondProduct'
import AvisClient from './AvisClient/AvisClient'

export default function HomeBody() {
  return (
    <div className={styles.bodyHome}>

        <CardBestProduct/>
        <HomePromotion/>
      
        <CardSecondProduct/>
        <AvisClient/>
    </div>
  )
}
