import React from 'react'
import styles from './productPage.module.css'
import Image from 'next/image'

export default function productPage(props) {
  const data = props.data[0];
  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.photos}>
        <button></button>
        <Image className={styles.img} src={data.photos} layout="fixed" width={200} height={200} />
        <button></button>
      </div>
    </div>
  )
}
