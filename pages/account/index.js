import React from 'react'
import MainAccount from '../../component/Body/Account/Main/MainAccount'

export default function index() {
    const data = {
        name:'Jacko',img:'/img/Blog/HomeBlog/Blog1.jpg',comment:[{id:'2345gt',commentHtml:'houlenidjoj'},{id:'344gt', commentHtml:'hirjfjiojtij'}],command:[{id:'345D32',totalPrice:123,numbArticle:4,adresseLiv:'172 rue de la voictoire 8883999 oisuvv oihfo',adresseFact:'172 rue de la voictoire 8883999 oisuvv oihfo',articles:[{name:'the noir',quantity:3,price:34,img:'/img/Blog/HomeBlog/Blog1.jpg'}]},{id:'345D32',adresseLiv:'172 rue de la voictoire 8883999 oisuvv oihfo',adresseFact:'172 rue de la voictoire 8883999 oisuvv oihfo',totalPrice:123,numbArticle:4,articles:[{name:'the noir',quantity:3,price:34,img:'/img/Blog/HomeBlog/Blog1.jpg'}]}]
    }
  return (
    <>
<MainAccount data={data}/>
    </>
  )
}
