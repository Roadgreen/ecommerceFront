import React,{useState} from 'react'
import styles from './cart.module.css'
import CartCommand from './cartCommand/cartCommand';
import Image from 'next/image'
import {FaTrash} from 'react-icons/fa'

export default function cart(props) {
    const dataP = props.dataProduct;
    const dataC = props.dataCart;
    const changeQuantity = (num)=>{
        console.log(num)
    }

    const Mapping = (item,i)=>{
     
        return(
            <div key={i}>
                <div><Image src={item.photos} width={50} height={50} layout='fixed'/>
                <p>{item.name}</p>
                </div>
            <p>{item.price}</p>
            <select  onChange={e => changeQuantity(e.target.value)}>
                <option value={item.quantity}>{item.quantity}</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                </select>
                
            <p>{item.priceTotal}</p>
            <div className={styles.buttonDiv}><button><FaTrash/></button></div>
            
            
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
    <div><p>EDIT</p></div>
    </div>
    <div className={styles.containerMap}>{dataP.map(Mapping)}</div>
</div>
        <CartCommand dataC={dataC}/>
    </div>
  )
}


