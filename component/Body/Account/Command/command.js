import React from "react";
import styles from "./command.module.css";
export default function command(props) {
  const data = props.data;
  const TestMapSpecial = (a,b) =>{
    for(var i = 0; i > a.length; i++){
     console.log(a[i].localCompare(b[i]));
    }
  }
  const CommandMapping = (item, id) => {
    return (
      <div key={id}>
        <p> {item.id}</p>
        <p> {item.numbArticle}</p>
        <p>{item.adresseFact}</p>
        <p>{item.adresseLiv}</p>
        <p> {item.totalPrice}</p>
        <button>Detail Commande</button>
      </div>
    );
  };
  return (
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
  );
}


