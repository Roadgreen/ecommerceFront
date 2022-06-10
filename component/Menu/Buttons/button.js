import Link from 'next/link'
import { Fragment,useEffect } from 'react'
import styles from './button.module.css'
import Image from 'next/image'
export default function Button(){
    
   
   
    return(
        <div className={styles.container}>
            <div><Link  href="/"><h4>HOME</h4></Link></div>
            <div><Link  href="/"><h4>THES</h4></Link></div>
            <div><Link  href="/"><h4>ACCESSOIRES</h4></Link></div>
            <div><Link  href="/"><h4>COFFRET</h4></Link></div>
            <div><Link  href="/"><h4>BLOG</h4></Link></div>
         
             
    
  
        </div>
       
    )
  
}