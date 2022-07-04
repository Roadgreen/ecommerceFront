import React from 'react'
import styles from './MainAccount.module.css'
import Image from 'next/image'

export default function MainAccount(props) {
    const data = props.data;
    console.log(data.adresse)

    const CommandMapping = (item,id)=>{
        return(
            <div key={id}>
                 <p> {item.id}</p>
            <p> {item.numbArticle}</p>
            <p>{item.adresseFact}</p>
            <p>{item.adresseLiv}</p>
            <p> {item.totalPrice}</p>
            <button>Detail Commande</button>
            </div>
           
        )
    }
  return (
    <div className={styles.container}>
        {/** Contener accountgauche button */}
        <div className={styles.containerMenu}>
            <div>
            <Image src={data.img} width={90} height={90} className={styles.AccountImg} />
            </div>
            <h4>{data.name}</h4>

        </div>
        {/**Container droit avec infos */}
        <div className={styles.containerInfo}>
            <h3>Commandes</h3>
            <div>
                <h4>ID</h4>
                <h4>QTÉ</h4>
                <h4>ADRESSE DE FACTURATION</h4>
                <h4>ADRESSE DE LIVRAISON</h4>
                <h4>PRIX</h4>
                <h4></h4>
            </div>
      
            {data.command.map(CommandMapping)}
       
        </div>

    </div>
  )
}
