import React from 'react'
import styles from './cart.module.css'
import CartCommand from './cartCommand/cartCommand';
import Image from 'next/image'

export default function cart(props) {
    const dataP = props.dataProduct;
    const dataC = props.dataCart;

    const Mapping = (item,i)=>{
        return(
            <div key={i}>
                <div><Image src={item.photos} width={50} height={50} layout='fixed'/>
                <p>{item.name}</p>
                </div>
            <p>{item.price}</p>
            <input placeholder={item.quantity} type='number'/>
            <p>{item.priceTotal}</p>
                    </div>
        )
       
    }
  return (
    <div className={styles.container}>
<div className={styles.containerProduct}>
    <div className={styles.containerHead}>
    <div><p>Produits</p></div>
    <div><p>Prix</p></div>
    <div><p>QTÉ</p></div>
    <div><p>SOUS-TOTAL</p></div>
    </div>
    <div className={styles.containerMap}>{dataP.map(Mapping)}</div>
</div>
        <CartCommand dataC={dataC}/>
    </div>
  )
}


