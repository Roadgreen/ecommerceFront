import React,{useEffect, useState} from 'react'
import styles from './productBuy.module.css'
import Image from 'next/image'
import TwenPict from '../../../../../public/img/productCard/GramPicto/poch20.png'
import CinqPict from '../../../../../public/img/productCard/GramPicto/verre50.png'



export default function productBuy(props) {
    const data = props.data;
  

    const mapPrice = [data.price.vingt,data.price.cinquante,data.price.cent]
   const [quantity,setQuantity] = useState(1);
   const [gram,setGram] = useState(data.price.vingt);
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

    function note(d){
      var srcNote = '';
        switch(d){
            case 5: srcNote = '/img/productCard/NoteLeaf/Cinq.png';
            break;
            case 4.5: srcNote = '/img/productCard/NoteLeaf/QuatreCinq.png';
            break;
            case 4: srcNote = '/img/productCard/NoteLeaf/Quatre.png';
            break;
            case 3.5: srcNote = '/img/productCard/NoteLeaf/TroisCinq.png';
            break;
            case 3: srcNote = '/img/productCard/NoteLeaf/Trois.png';
            break;
            case 2.5: srcNote = '/img/productCard/NoteLeaf/DeuxCinq.png';
            break;
            case 2: srcNote = '/img/productCard/NoteLeaf/Deux.png';
            break;
            case 1.5: srcNote - '/img/productCard/NoteLeaf/UnCinq.png';
            break;
            case 1: srcNote = '/img/productCard/NoteLeaf/Un.png';
            break;
            case 0.5: srcNote  = '/img/productCard/NoteLeaf/Zero.png'
            break;
        }
        return srcNote
    }

  return (
    <div className={styles.container}>
        <h3>{data.edition}</h3>
        <h1>{data.name}</h1>
        <h2>{data.type}</h2>
        <p>{data.description}</p>
        <div className={styles.notes}>
          <p>Avis: </p>
        <Image  layout='fixed' src={note(data.note)} width={80} height={20}/>
        </div>
        <div className={styles.containerButton}>
          <div><button onClick={()=>{gramV()}}><Image src={TwenPict} width={42} height={70}/></button><p>20G</p></div>
          <div className={styles.middleBut}> <button onClick={()=>{gramC()}}><Image src={CinqPict} width={42} height={70}/></button><p>50G</p></div>
          <div> <button onClick={()=>{gramCe()}}><Image src={CinqPict} width={42} height={70}/></button><p>100G</p></div>
        </div>
        <div className={styles.DetailFoot}>
          <button onClick={()=>{decrease()}}>-</button>
          <input type="number" placeholder={quantity}/>
          <button onClick={()=>{increase()}}>+</button>
          <p>prix: {price}€</p>
       
        </div>
        <button className={styles.addButton}>Ajouter au panier</button>
        
    </div>
  )
}
