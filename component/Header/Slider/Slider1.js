import { Fragment, useEffect, useState } from 'react'
import styles from './Slider.module.css'
import Image from 'next/image'
import heroimage from '../../../public/img/Slider/SliderLoopThe/heroimage.jpg'


export default function Slider(){
  

   

    
    return(
<Fragment>
    <div className={styles.Slider}>
    <div className={styles.SliderDiv}>
    
        <div className={styles.txt}>
        <h1 className={styles.h1}>Ici,<br/> nous parlons thé.</h1>
        </div>
        <div className={styles.productsSlider}>
            <h1 className={styles.h1products}>Nos Thés Millénaires</h1>
            <h1 className={styles.h1products}>Nos Thés Gourmands</h1>
            <h1 className={styles.h1products}>Nos Infusions</h1>
            </div>
       
      
       
    
  
</div>
<Image src={heroimage} className={styles.SliderImg} alt='Tea pot' layout='responsive' width="2920" height="1940"/>

</div>
</Fragment>
    )
}

