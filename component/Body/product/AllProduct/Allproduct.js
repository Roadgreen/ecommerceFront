import React, { useEffect } from 'react'
import styles from './Allproduct.module.css'
import Image from 'next/image'
import { useState } from 'react'
import TwenPict from '../../../../public/img/productCard/GramPicto/poch20.png'
import CinqPict from '../../../../public/img/productCard/GramPicto/verre50.png'
import HomePromotion from '../../Home/Home-Promotion/HomePromotion'

export default function Allproduct(props) {
  
  const data = props.product;
  const mapping = (item,i)=>{
    const mapPrice = [item.price.vingt,item.price.cinquante,item.price.cent]
   const [quantity,setQuantity] = useState(1);
   const [gram,setGram] = useState(item.price.vingt);
   const [price,setPrice] = useState(gram * quantity);
   const decrease = ()=>{
    if(quantity > 1){
     

      setQuantity(--quantity)
      const gr = price - gram;
      setPrice(gr);
      console.log(price,quantity,gram)
      
    }
   }
  
    const increase = ()=>{
      const gr = price + gram;
      console.log(gr);
      const quant = quantity + 1;
        setQuantity(++quantity);
        console.log(quant,quantity);
      const pri  = quantity * gram;
        setPrice(pri);
        console.log(price,quantity,gram)
      }
   
  
      const gramV = () => {
        const c = mapPrice[0];
        const v = c * quantity;
        return(
          setGram(c),
        setPrice(v),
          console.log(price,quantity,gram)
        )
        
      }
  
      const gramC = ()=>{
        const c = mapPrice[1];
        const v = c * quantity;
        return(
          setGram(c),
          setPrice(v),
          console.log(price,quantity,gram)
        )
       
       }
  
       const gramCe = ()=>{
        const c = mapPrice[2];
        const v = c * quantity;
        return( 
          setGram(c),
        setPrice(v),
        console.log(price,quantity,gram))
       }
   
   


    return(
      <div key={i} className={styles.containerCard}>
        <div className={styles.edition}><p>{item.edition}</p></div>
      <h3>{item.name}</h3>
      <div className={styles.containerImage}>
        <Image src={item.photos} width={155} height={155}/>
      </div>
      <div className={styles.containerPrice}>
        <div>
          <div><button onClick={()=>gramV()}><Image src={TwenPict} width={42} height={70}/></button>
          <p>20G</p></div>
          <div><button onClick={()=>gramC()}><Image src={CinqPict} width={42} height={70}/></button>
          <p>50G</p></div>
          <div><button onClick={()=>gramCe()}></button>
          <p>100G</p></div>
        </div>
        <div>
          <button onClick={()=>decrease()}>-</button>
          <input type="number" placeholder={quantity}/>
          <button onClick={()=>increase()}>+</button>
         

        </div>
        <p>prix: {price}€</p>
      </div>
      <button className={styles.button}>Ajouter au panier</button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {data.map(mapping)}</div>
  )
}
