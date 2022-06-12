import React from 'react'
import styles from './Allproduct.module.css'
import Image from 'next/image'

export default function Allproduct(props) {
  
  const data = props.product;
console.log(props.product);
  const mapping = (item,i)=>{
    return(
      <div key={i} className={styles.containerCard}>
        <div className={styles.edition}><p>{item.edition}</p></div>
      <h3>{item.name}</h3>
      <div className={styles.containerImage}>
        <Image src={item.photos} width={105} height={105}/>
      </div>
      <div className={styles.containerPrice}>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <p>prix:{item.price.vingt}€</p>
      </div>
      <button className={styles.button}>Ajouter au panier</button>
      </div>
    )
  }

  return (
    <div className={styles.container}>{data.map(mapping)}</div>
  )
}
