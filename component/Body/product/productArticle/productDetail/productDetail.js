import React,{useState} from 'react'
import styles from './productDetail.module.css'
import { IconContext } from 'react-icons'
import {FaTemperatureLow} from 'react-icons/fa'
import Image from 'next/image'
export default function productDetail(props) {
const data = props.data
const [button,setButton] = useState({
    b1: styles.buttonChecked,
    b2: styles.button,
    b3: styles.button
})
const [hydrate,setHydrate] = useState({
    h1: styles.detailChecked,
    h2: styles.detail,
    h3: styles.detail
})
const desClick = (a)=>{
    switch(a){
        case 1: setButton({
            b1: styles.buttonChecked,
    b2: styles.button,
    b3: styles.button
        }), setHydrate({
            h1: styles.detailChecked,
    h2: styles.detail,
    h3: styles.detail
        }); 
        break;
        case 2: 
            setButton({
                b1: styles.button,
        b2: styles.buttonChecked,
        b3: styles.button
            }),setHydrate({
                h1: styles.detail,
        h2: styles.detailChecked,
        h3: styles.detail
            });
        
        break;
        case 3: 
            setButton({
                b1: styles.button,
        b2: styles.button,
        b3: styles.buttonChecked
            }),setHydrate({
                h1: styles.detail,
        h2: styles.detail,
        h3: styles.detailChecked
            });
        
        break;
    }
}

const Mapping = (item,i) =>{
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
        <div key={i} className={styles.containerComTwo}>
            <div> 
                <h3>{item.name}</h3>
            <Image  layout='fixed' src={note(item.note)} width={80} height={20}/>
            <h3>Date: {item.date}</h3>
            </div>
           <div>
            <p>{item.comment}</p>
           </div>
        </div>
    )
}

  return (
    <div className={styles.container}>
        <div className={styles.Title}>
        <button onClick={()=>{desClick(1)}} className={button.b1}>Description</button>
        <button onClick={()=>{desClick(2)}} className={button.b2}>Préparation</button>
        <button onClick={()=>{desClick(3)}} className={button.b3}>Histoire</button>
        </div>
        
        <div className={hydrate.h1}>
            <p dangerouslySetInnerHTML={{ __html: data.articleDescription}}></p>
        </div>
        <div className={hydrate.h2}>
            <h2>Préparation:</h2>
            <p dangerouslySetInnerHTML={{ __html: data.preparation}}></p>
            <h2>IceTea:</h2>
            <p dangerouslySetInnerHTML={{ __html: data.iceteapreparation}}></p>
        </div>
        <div className={hydrate.h3}>
            <p dangerouslySetInnerHTML={{ __html: data.story}}></p>
        </div>
        <div  className={styles.containerCom}>
            <h2>AVIS:</h2>
            {data.com.map(Mapping)}
        </div>
    </div>
  )
}
