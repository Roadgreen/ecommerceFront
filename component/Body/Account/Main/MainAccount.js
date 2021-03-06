import React, { useState } from "react";
import styles from "./MainAccount.module.css";
import Image from "next/image";
import Command from "../Command/command";
import Comments from '../Comment/comment'


export default function MainAccount(props) {
  const data = props.data;
  console.log(data.adresse);
  const [commandes,setCommandes] = useState(true);
  const [comments,setComments] = useState(false);
  const [factures,setFactures] = useState(false);

  const handleClick = (a)=>{
    console.log('ici',a)
switch(a){
case 1: setCommandes(true);setComments(false);setFactures(false); console.log('icihere');
break;
case 2: setCommandes(false);setComments(true);setFactures(false);
break;
case 3: setCommandes(false);setComments(false);setFactures(true);
break;
}
  }

  return (
    <div className={styles.container}>
      {/** Contener accountgauche button */}
      <div className={styles.containerMenu}>
        <div>
          <Image
            src={data.img}
            width={90}
            height={90}
            className={styles.AccountImg}
          />
        </div>
        <h4>{data.name}</h4>
        <button onClick={()=>{handleClick(1)}}>Mes commandes</button>
        <button onClick={()=>{handleClick(2)}}>Mes commentaires</button>
        <button onClick={()=>{handleClick(3)}}>Mes factures</button>
      </div>
      {/**Container droit avec infos */}
      {commandes? <Command data={data} />: console.log('')}
      {comments?<Comments data={data}/>: console.log('')}
      {factures? <Factures data={data}/> : console.log('')}
      
    </div>
  );
}
