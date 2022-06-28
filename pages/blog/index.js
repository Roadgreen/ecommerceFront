import React from 'react'

export default function index() {
    const data = [{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022'},{gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022'}]

    const Mapping = (item,i)=>{
        <div key={i}>
            <p>{item.gender}</p>
            <h4>{item.name}</h4>
            <p>{item.description}</p>

        </div>
    }
  return (

    <div>
        <h1>Blog</h1>
        <span></span>
        <p>Retrouvez les techniques, les conseils et les histoires sur la préparation et la dégustation du thé!</p>
        <div>
        {data.map(Mapping)}
        </div>
        

    </div>
  )
}
