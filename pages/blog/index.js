import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'
export default function index() {
    const data = [{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022',img:'/img/Blog/HomeBlog/Blog1.jpg'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022',img:'/img/Blog/HomeBlog/Blog1.jpg'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022',img:'/img/Blog/HomeBlog/Blog1.jpg'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022',img:'/img/Blog/HomeBlog/Blog1.jpg'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022',img:'/img/Blog/HomeBlog/Blog1.jpg'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022',img:'/img/Blog/HomeBlog/Blog1.jpg'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022',img:'/img/Blog/HomeBlog/Blog1.jpg'}]

    const Mapping = (item,i)=>{
      return(
<div className={styles.containerMapIn} key={i}>
  <div>            <p>{item.gender}</p>
</div>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className={styles.img}>
            <Image src={item.img} width={200} height={90} layout='fixed'/>
            <button>Lire</button>
            </div>
        </div>
      )
        
    }
  return (

    <div className={styles.container}>
        <h1>Blog</h1>
        <span></span>
        <p>Retrouvez les techniques, les conseils et les histoires sur la préparation et la dégustation du thé!</p>
        <div className={styles.containerMap}>
        {data.map(Mapping)}
        </div>
        

    </div>
  )
}
