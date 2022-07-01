import React from 'react'
import BlogArticle from '../../component/Body/Blog/BlogArticle'

export default function article() {
    const data = {gender: 'nouveau',name:'Les thes de 100 ans', description:`c'est du the d'exeptionecjoijroijgojirtgoijrt`, data: '12/12/2022',img:'/img/Blog/HomeBlog/Blog1.jpg',accroche:`est du the d'exeptionecjoijroijgojirtgoijrt`,articleOne:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,articleTwo:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
  return (
    <>
    <BlogArticle data={data}/>
    </>
  )
}
