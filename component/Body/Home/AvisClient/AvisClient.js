import React, { Fragment } from 'react'
import styles from './AvisClient.module.css'
import Image from 'next/image'

export default function AvisClient() {

    const data = [{name:'C.Duvet', note:4,description: 'Incroyable, différent thé, prix attractif'},{name:'C.Duvet', note:4,description: 'Incroyable, différent thé, prix attractif'},{name:'C.Duvet', note:4,description: 'Incroyable, différent thé, prix attractif'}]

    

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
            <div className={styles.containerMap} key={i}>
        <div className={styles.Cards}>
            <h2 className={styles.h2}>{item.name}</h2>
            <Image className={styles.img} src={srcNote} width={130} height={32} />
            <p className={styles.p}>{item.description}</p>

        </div>
        <div className={styles.shadow}></div>
        </div>
        )
    }
  return (
      <div className={styles.containerAvis}>

    <h1 className={styles.h1Avis}>LES AVIS DE NOS CLIENTS</h1>
    <div className={styles.container}>
       
        {data.map(mapping)}
        
        
        </div>
        <button className={styles.button}>Voir Les Avis Clients</button>
        </div>
  )
}
