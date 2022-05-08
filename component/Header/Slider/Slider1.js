import { Fragment, useEffect, useState } from 'react'
import styles from './Slider.module.css'
import Image from 'next/image'
import Link from 'next/link'
import heroimage from '../../../public/img/Slider/SliderLoopThe/heroimage.jpg'


export default function Slider(){
  

   

    
    return(
<Fragment>
    <div className={styles.Slider}>
    <div className={styles.SliderDiv}>
    
        <div className={styles.txt}>
        <h1 className={styles.h1T}>Ici,<br/> nous parlons thé.</h1>
        </div>
        <div className={styles.productsSlider}>
            <Link href="/product">
            <div className={styles.mil}><h1 className={styles.h1products1}>Nos Thés <br/>Millénaires</h1>
            <h1 className={styles.hmil}>我们的千年茶</h1>
            <button>Découvrir</button>
            </div>
            </Link>
            <Link href="/">
            <div className={styles.mil}><h1 className={styles.h1products2}>Nos Thés <br/> Gourmands</h1>
            <h1 className={styles.hgour}>我们的美味茶</h1>
            <button>Découvrir</button>
            </div>
            </Link>
            <Link href="/">
            <div className={styles.mil}> 
            <h1 className={styles.h1products3}>Nos Thés<br/> Fleuris</h1>
            <h1 className={styles.hfleur}>我们的花茶</h1>
            <button>Découvrir</button>
            </div>
            </Link>
            </div>
       
      
       
    
  
</div>
<Image src={heroimage} className={styles.SliderImg} alt='Tea pot' layout='responsive' width="2920" height="1940"/>

</div>
</Fragment>
    )
}

