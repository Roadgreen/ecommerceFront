import React from 'react'
import styles from './CardSecondProduct.module.css'
import Image from 'next/image'
import BackgroundLeaf from '../../../Body/Home/Background/BackgroundLeaf/BackgroundLeaf'


export default function CardSecondProduct() {

    const data = [{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 4.5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 2,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 1,description:'Thé Pu erh venue des montagne de losc en chine.'}]

const mapping = (item,i) => {
   var srcNote = '';
        switch(item.note){
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


    return(
        <div key={i} className={styles.Card}>
            <div className={styles.CardInner}>
            <div className={styles.CardFront}>
            <h1 className={styles.h1}>{item.name}</h1>
           
            <Image className={styles.Image} src={item.photos} width={150} height={150}/>
            <h4 className={styles.h4W}>  {item.price.vingt} €</h4>
            </div>

            <div className={styles.CardBack}>
            <h3 className={styles.h3}>{item.type}</h3>
            <Image className={styles.note}  src={srcNote} width={130} height={32}/>
            <p className={styles.p}>{item.description}</p> 
            <h4 className={styles.h4}>  {item.price.vingt} €</h4>
            <button className={styles.button}>Découvrir</button>
            </div>
        </div>
        </div>
    )
}

  return (
    <div className={styles.container}>
        
       <BackgroundLeaf/>
        {data.map(mapping)}</div>
  )
}
