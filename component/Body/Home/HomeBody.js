import React from 'react'
import styles from './HomeBody.module.css'
import CardBestProduct from '../../Card/HomeCard/CardBestProduct'

export default function HomeBody() {
  return (
    <div className={styles.bodyHome}>

        <CardBestProduct/>
    </div>
  )
}
