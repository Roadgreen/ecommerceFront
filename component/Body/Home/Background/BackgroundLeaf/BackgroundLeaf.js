import React, { Fragment } from 'react'
import Leaf from '../../../../../public/img/leafBackground/Leaf.png'
import Image from 'next/image'
import styles from './BackgroundLeaf.module.css'
export default function BackgroundLeaf() {
  return (
      <Fragment> <div className={styles.F1}><Image src={Leaf}  height={25} width={20}/>
      </div>
      <div className={styles.F2}><Image src={Leaf}  height={25} width={20}/>
      </div>
      <div className={styles.F3}><Image src={Leaf}  height={25} width={20}/>
      </div>
      <div className={styles.F4}><Image src={Leaf}  height={25} width={20}/>
      </div>
      <div className={styles.F5}><Image src={Leaf}  height={25} width={20}/>
      </div>
      <div className={styles.F6}><Image src={Leaf}  height={25} width={20}/>
      </div>
      <div className={styles.F7}><Image src={Leaf}  height={25} width={20}/>
      </div></Fragment>
   
  )
}
