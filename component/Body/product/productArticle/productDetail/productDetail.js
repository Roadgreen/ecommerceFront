import React,{useState} from 'react'
import styles from './productDetail.module.css'
import { IconContext } from 'react-icons'
import {FaTemperatureLow} from 'react-icons/fa'

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
    </div>
  )
}
