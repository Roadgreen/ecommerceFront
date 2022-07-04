import React from 'react'
import styles from './BlogArticle.module.css'
import Image from 'next/image'

export default function BlogArticle(props) {
    const data = props.data;
  return (
    <div className={styles.container}>
        <h1>{data.name}</h1>
        <p>{data.accroche}</p>
        <p>{data.articleOne}</p>
        <div>
            <Image src={data.img} width={250} height={150} />
        </div>
        <p>{data.articleTwo}</p>
    </div>
  )
}
