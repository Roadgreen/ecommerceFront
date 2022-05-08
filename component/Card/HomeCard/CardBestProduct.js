import React,{useState,Fragment} from 'react'
import styles from './CardBestProduct.module.css'
import Image from 'next/image'
import testPhoto from '../../../public/img/Slider/SliderLoopThe/heroimage.jpg'
import Fnote from '../../../public/img/feuillesvg.svg'
import Link from 'next/image'

export default function Card() {

  const data = [{id:'pjpeioj',LinkPhoto:{testPhoto},name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{id:'pjpeioj',LinkPhoto:{testPhoto},name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{id:'pjpeioj',LinkPhoto:{testPhoto},name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 5,description:'Thé Pu erh venue des montagne de losc en chine.'},{id:'pjpeioj',LinkPhoto:{testPhoto},name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'}]

  const [gram,setGram] = useState(0);


  return (
    <Fragment>
      <h1 className={styles.h1}>Product</h1>
      {data.map((item,i)=> {
    <div className={styles.Card}>
      <h1>{item.name}</h1>
      <h3>{item.type}</h3>
      <Image src={item.LinkPhoto} width={500} height={400}/>
<div className={styles.notes}>
  {Array(item.note).fill().map((_,i) => (<Image src={Fnote} width={10} height={10}/>))}
</div>
<div className={styles.choose}>
  <button onClick={()=>setGram(0)}>25g</button>
  <button onClick={()=>setGram(50)}>50g</button>
  <button onClick={()=>setGram(100)}>100g</button>
</div>

{gram === 50 ? <h3>prix: {item.price.cinquante}</h3>: <h3>prix: {item.price.vingt}</h3>}
{gram === 100 ? <h3>prix: {item.price.cent}</h3>: <h3>prix: {item.price.vingt}</h3>}

<p>{item.description}</p>
<Link href={`/product/${encodeURIComponent(item.id)}`}>
<button></button>
</Link>
    </div>
    
    
    })}
      
      </Fragment>
    
    
  )
}
