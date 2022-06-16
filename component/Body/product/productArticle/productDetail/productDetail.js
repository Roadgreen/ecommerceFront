import React,{useState} from 'react'
import styles from './productDetail.module.css'
import Image from 'next/image'
import TwenPict from '../../../../../public/img/productCard/GramPicto/poch20.png'
import CinqPict from '../../../../../public/img/productCard/GramPicto/verre50.png'



export default function productDetail(props) {
    const data = props.data;
    console.log(data);

    const mapPrice = [data.price.vingt,data.price.cinquante,data.price.cent]
   const [quantity,setQuantity] = useState(1);
   const [gram,setGram] = useState(data.price.vingt);
   const [price,setPrice] = useState(gram * quantity);
   function decrease(){
    if(quantity > 1){
      const gr = gram;
      setQuantity(x=> x-1)
      setPrice(x => x - gr)
    }
   }
   function increase(){
      setQuantity(x=> x + 1)
      setPrice(x => x + gram)
    }
      function gramV(){
        const c = mapPrice[0];
        setGram(c)
        const v = mapPrice[0] * quantity;
       setPrice(v);
     
      }
  
      function gramC(){
        const c = mapPrice[0];
        setGram(c)
        const v = mapPrice[1] * quantity;
        setPrice(v);
       
       }
  
       function gramCe(){
        const v = mapPrice[2] * quantity;
       setPrice(v);
      
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
        <Image  src={note(data.note)} width={130} height={32}/>
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
