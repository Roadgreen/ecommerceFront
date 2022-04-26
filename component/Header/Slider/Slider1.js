import { Fragment, useEffect, useState } from 'react'
import styles from './Slider.module.css'
import Image from 'next/image'
import GifTea from '../../../public/img/Slider/SliderLoopThe/giftea.gif'

export default function Slider(){

      
          
    

    
    return(
<Fragment>
    <div className={styles.Slider}>
<Image src={GifTea} className={styles.SliderImg} alt='Tea pot' width={350} height={500}/>
<h1 className={styles.SliderH1}>Ici, Nous parlons thé.</h1>
</div>
</Fragment>
    )
}