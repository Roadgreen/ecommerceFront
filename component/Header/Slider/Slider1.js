import { Fragment, useEffect, useState } from 'react'
import styles from './Slider.module.css'
import Image from 'next/image'
import heroimage from '../../../public/img/Slider/SliderLoopThe/heroimage.jpg'

export default function Slider(){
  

   

    
    return(
<Fragment>
    <div className={styles.Slider}>
    <div className={styles.SliderDiv}>
        <div className={styles.Txt}>  
        <li className={styles.Fli}>Ici, nous</li>
    <div className={styles.wrapper}>
    <li>parlons</li>
    <li>vendons du</li>
    <li>dormons</li>
    <li>discutons</li>
    <li>infusons du</li>
    <li>aimons le</li>
    </div>
    <li className={styles.Eli}>thé.</li>
   </div>
  
</div>
<Image src={heroimage} className={styles.SliderImg} alt='Tea pot' layout='responsive' width="2920" height="1940"/>

</div>
</Fragment>
    )
}

