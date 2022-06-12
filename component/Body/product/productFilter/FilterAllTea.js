import React,{useState} from 'react'
import Product from '../AllProduct/Allproduct'
import styles from './FilterAllTea.module.css'

export default function FilterAllTea() {
    const [button,setButton] = useState(styles.button);
    const [buttonTwo,setButtonTwo] = useState(styles.button);
    const [buttonThree,setButtonThree] = useState(styles.button);

    let data = [{photos:'/img/productCard/BestProductCard/teapng.png',
    edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 4.5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 2,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note: 1,description:'Thé Pu erh venue des montagne de losc en chine.'}];



function onClick(a){

    console.log('click')
   switch(a){
    case 1: {button === styles.button? setButton(styles.buttonClicked) : setButton(styles.button)};
       
    break;
    case 2:  {buttonTwo === styles.button? setButtonTwo(styles.buttonClicked) : setButtonTwo(styles.button)};
    break;
    case 3:  {buttonThree === styles.button? setButtonThree(styles.buttonClicked) : setButtonThree(styles.button)}
    break;
   }
}
  return (
    <div className={styles.container}>
        <div className={styles.containerFilter}>
        <h4>Filtre</h4>
        <div className={styles.containerButton}>
            <button onClick={()=>{onClick(1)}} className={button}><div></div></button>
            <h3>Thés</h3>
             </div>
             <div className={styles.containerButton}>
            <button onClick={()=>onClick(2)} className={buttonTwo}><div></div></button>
            <h3>Infusion</h3>
             </div>
             <div className={styles.containerButton}>
            <button onClick={()=>onClick(3)} className={buttonThree}><div></div></button>
            <h3>Millénaire</h3>
             </div>
        </div>
        <Product product={data}/>
    </div>

  )
}
