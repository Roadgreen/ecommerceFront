import React from 'react'
import styles from './HomeBlog.module.css'
import Image from 'next/image'



export default function HomeBlog() {
const data = [{title:`Le thés et l'eau`,description:`Comment le thés et l'eau est devenue un breuvage`,img:'/img/Blog/HomeBlog/Blog1.jpg'},{title:`Le thés et l'eau`,description:`Comment le thés et l'eau est devenue un breuvage`,img:'/img/Blog/HomeBlog/Blog1.jpg'},{title:`Le thés et l'eau`,description:`Comment le thés et l'eau est devenue un breuvage`,img:'/img/Blog/HomeBlog/Blog1.jpg'}]

const mapping = (item,i) => {
return(
  <div className={styles.Card} key={i}>
    <Image className={styles.img} src={item.img} width={366} height={202}/>
    <h1 className={styles.h1}>{item.title}</h1>
    <h3 className={styles.h3}>{item.description}</h3>
    <div className={styles.buttonContainer}>
    <button className={styles.button}>Lire L'article</button>
 </div>
  </div>
)
}


  return (

    <div className={styles.container}>
        {data.map(mapping)}
    </div>
  )
}
