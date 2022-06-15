import React from 'react'
import styles from './productDetail.module.css'

export default function productDetail(props) {
    const data = props.data;
    console.log(data);

  return (
    <div className={styles.container}>
        <h3>{data.edition}</h3>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <button>Ajouter au panier</button>
        
    </div>
  )
}
