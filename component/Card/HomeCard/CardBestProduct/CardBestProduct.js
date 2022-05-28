import React,{useState,Fragment,useRef,useEffect} from 'react'
import styles from './CardBestProduct.module.css'
import Image from 'next/image'
import Link from 'next/link'



export default function Card() {

  const [CardClass,setCardClass] = useState(styles.CardBefore)
  const [media,setMedia] = useState(false);
  const [dataToMap,setDataToMap] = useState([]);


    const Resp = [{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 5,description:'Thé Pu erh venue des montagne de losc en chine.'}]


  


  

  
 
  const CardRef = useRef();
  useEffect(()=>{
    const match = window.matchMedia(`(max-width:930px)`);
    if(match.matches){
      const newData = Resp.slice(1);
      setDataToMap(newData)
      console.log(newData)
      
    } else {
      console.log('else',dataToMap)
      setDataToMap(Resp)
    }
    
    setInterval(()=>{
      const Bound = CardRef.current.getBoundingClientRect();
     const BoundTop =  Bound.top;
     
      if(BoundTop < 600){
        setCardClass(styles.Card);
      } else {

      }
    },100)
 
  },[])

  const mapping = (item,i) => {
  
   

    return (
      <div ref={CardRef} className={CardClass} key={i}>
        <div className={styles.img}>
        <Image  src={item.photos} width={100} height={85}/>
        </div>
       
        <h1>{item.name}</h1>
        <h3>{item.type}</h3>
       
  <div className={styles.notes}>
   
  </div>
  <p>{item.description}</p>
  <h3 className={styles.h3}>{item.price.vingt}€</h3>
  
 
  <Link href={`/product/${encodeURIComponent(item.id)}`}>
  <button className={styles.rapid} >Découverte</button>
  </Link>
      </div>
    )
      
      
      
      };
    
      
      
  return (
    <Fragment>

      <h1 className={styles.Title}>Nos Bestseller</h1>
   
      <div className={styles.containerMapping}>{dataToMap.map(mapping)}</div>
      
      </Fragment>
    
    
  )
}
