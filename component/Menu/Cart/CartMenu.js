import React, { useEffect, useState } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import styles from './CartMenu.module.css'

export default function CartMenu() {
    const [Cart,setCart] = useState(false)
    const data = [0]

    useEffect(()=>{
        const data = [0];
        if(data[0] !== 0){
            setCart(true)
        } else{

        }
    },[])

  return (
    <div><FiShoppingCart size={18} className={styles.Cart}/>
   {Cart ? <span className={styles.Numb}>{data[0]}</span> : console.log('')} 
    </div>
  )
}
