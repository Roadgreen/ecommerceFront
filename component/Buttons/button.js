import Link from 'next/link'
import { Fragment,useEffect } from 'react'
import styles from './button.module.css'
import Image from 'next/image'
import a from '../../public/img/Button/ButtonHome/JPEG/buttonhome0.jpg'
import b from '../../public/img/Button/ButtonTea/JPEG/thés.jpg'
export default function Button(){
    
   
   
    return(
        <div className={styles.container}>
            <div><Link  href="/"><h3>HOME</h3></Link></div>
            <div><Link  href="/"><h3>THES</h3></Link></div>
            <div><Link  href="/"><h3>ACCESSOIRES</h3></Link></div>
            <div><Link  href="/"><h3>COFFRET</h3></Link></div>
            <div><Link  href="/"><h3>BLOG</h3></Link></div>
         
             
    
  
        </div>
       
    )
  
}