import React from 'react'
import styles from './productPage.module.css'
import Image from 'next/image'
import Carr from '../ProductCarrou/ProductPageCarr'
import ProdDetail from './productDetail/productDetail'

export default function productPage(props) {
  const data = props.data[0];
  console.log(data)
  return (
    <div className={styles.container}>
    
       <Carr data={data}/>
       <ProdDetail data={data}/>
    </div>
  )
}
