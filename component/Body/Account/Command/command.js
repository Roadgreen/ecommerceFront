import React from "react";
import styles from "./command.module.css";
export default function command(props) {
  const data = props.data;
  const TestMapSpecial = (a,b) =>{
const B = b.reverse();
//PRobleme sur le localcompare!
var newArr = [];
console.log(a[1].id);
    for(var i = 0; i < a.length; i++){
      var A = a[i].adresseFact.toString();
      var BB = B[i].adresseFact.toString();
      var result = A.localCompare(BB);
      console.log(result)
     if(A.localCompare(BB) > 0){
      newArr.push(B[i])
      console.log(newArr);
     }else{
      newArr.push(a[i]);
      console.log('ici')
      console.log(newArr);
     }
    }
    console.log(a[1].id);
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
        <h4 onClick={()=>{TestMapSpecial(data.command,data.command)}}>PRIX</h4>
        <h4></h4>
      </div>

      {data.command.map(CommandMapping)}
    </div>
  );
}


