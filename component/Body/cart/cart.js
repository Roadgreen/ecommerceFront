import React,{useState} from 'react'
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
            <select>
                <option>{item.quantity}</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                </select>
                
            <p>{item.priceTotal}</p>
                    </div>
        )
       
    }
  return (
    <div className={styles.container}>
<div className={styles.containerProduct}>
    <div className={styles.containerHead}>
    <div><p>PRODUITS</p></div>
    <div><p>PRIX</p></div>
    <div><p>QTÉ</p></div>
    <div><p>SOUS-TOTAL</p></div>
    </div>
    <div className={styles.containerMap}>{dataP.map(Mapping)}</div>
</div>
        <CartCommand dataC={dataC}/>
    </div>
  )
}


