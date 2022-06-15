import React,{useState} from 'react'
import styles from './ProductPageCarr.module.css'
import Image from 'next/image'


export default function ProductPageCarr(props) {
   const data = props.data.photos;

    const [div,setDiv] = useState({
        div1: styles.divO,
        div2: styles.divT,
        div3: styles.divTh,
        div4: styles.divF
    });

    function changeCarr(){
        if(div.div1 === styles.divO){
            setDiv({
                div1: styles.divT,
            div2: styles.divTh,
            div3: styles.divF,
            div4:  styles.divO
            })
           
        }else if(div.div1 === styles.divT){
            setDiv({
            div1: styles.divTh,
            div2: styles.divF,
            div3: styles.divO,
            div4: styles.divT
            }) 
            
        }else if(div.div1 === styles.divTh){
            setDiv({
            div1: styles.divF,
            div2: styles.divO,
            div3: styles.divT,
            div4: styles.divTh
            }) 
            
        }else if(div.div1 === styles.divF){
            setDiv({
                div1: styles.divO,
            div2: styles.divT,
            div3: styles.divTh,
            div4:  styles.divF
            }) 
           
        } 
       
    }

    function changeCarrSens(){
        if(div.div1 === styles.divO){
            setDiv({
                div1: styles.divF,
            div2:  styles.divO,
            div3:  styles.divT,
            div4:  styles.divTh, 
            })
            
        }else if(div.div1 === styles.divF){
            setDiv({
            div1: styles.divTh,
            div2: styles.divF,
            div3: styles.divO,
            div4: styles.divT
            }) 
            
        }else if(div.div1 === styles.divTh){
            setDiv({
            div1: styles.divT, 
            div2:  styles.divTh,
            div3: styles.divF,
            div4: styles.divO,
            }) 
          
        }else if(div.div1 === styles.divT){
            setDiv({
                div1: styles.divO,
            div2: styles.divT,
            div3: styles.divTh,
            div4:  styles.divF
            }) 
            
        } 
       
    }

  return (
    <div className={styles.container}>
        <button onClick={()=>{changeCarr()}}><Image src={'/img/picto/PictoCarr/PictoCar.png'} layout="fixed" width={50} height={50}/></button>
<div className={div.div1}><Image src={data[0]} width={200} height={200} layout="responsive"/></div>
<div className={div.div2}><Image src={data[1]} width={200} height={200} layout="responsive"/></div>
<div className={div.div3}><Image src={data[2]} width={200} height={200} layout="responsive"/></div>
<div className={div.div4}><Image src={data[3]} width={200} height={200} layout="responsive"/></div>
<button onClick={()=>{changeCarrSens()}}><Image className={styles.pictoReturn} src={'/img/picto/PictoCarr/PictoCar.png'}  layout="fixed" width={50} height={50}/></button>
    </div>
  )
}
