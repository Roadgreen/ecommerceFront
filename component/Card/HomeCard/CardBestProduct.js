import React,{useState,Fragment} from 'react'
import styles from './CardBestProduct.module.css'
import Image from 'next/image'
import fr from '../../../public/img/Slider/SliderLoopThe/heroimage.jpg'

import Link from 'next/link'

export default function Card() {


  const data = [{id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 5,description:'Thé Pu erh venue des montagne de losc en chine.'}]

  const [gram,setGram] = useState(0);

  const mapping = (item,i) => {
    return (
      <div className={styles.Card} key={i}>
        <Image  src={fr} width={190} height={190}/>
        <h1>{item.name}</h1>
        <h3>{item.type}</h3>
       
  <div className={styles.notes}>
   
  </div>
  <div className={styles.choose}>
    <button onClick={()=>setGram(0)}>25g</button>
    <button onClick={()=>setGram(50)}>50g</button>
    <button onClick={()=>setGram(100)}>100g</button>
  </div>
  
  {gram === 50 ? <h3 className={styles.h3}>prix: {item.price.cinquante}</h3>: <h3>prix: {item.price.vingt}</h3>}
  {gram === 100 ? <h3>prix: {item.price.cent}</h3>: <h3>prix: {item.price.vingt}</h3>}
  
  <p>{item.description}</p>
  <Link href={`/product/${encodeURIComponent(item.id)}`}>
  <button className={styles.rapid}>Achat rapide</button>
  </Link>
      </div>
    )
      
      
      
      };
    
  

  return (
    <Fragment>
      <h1 className={styles.h1}>Product</h1>
      <div className={styles.containerMapping}>{data.map(mapping)}</div>
      
      </Fragment>
    
    
  )
}
