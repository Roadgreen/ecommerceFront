import React from 'react'
import styles from './HomeBody.module.css'
import CardBestProduct from '../../Card/HomeCard/CardBestProduct'
import HomePromotion from './Home-Promotion/HomePromotion'
import HomeBlog from './Home-Blog/HomeBlog'

export default function HomeBody() {
  return (
    <div className={styles.bodyHome}>

        <CardBestProduct/>
        <HomePromotion/>
        <HomeBlog/>
    </div>
  )
}
