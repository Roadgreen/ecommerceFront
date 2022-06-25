import React from 'react'
import Cart from '../../component/Body/cart/cart'

export default function index() {
    let data = [{photos:'/img/productCard/BestProductCard/teapng.png',
    edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price: 42,priceTotal:121,note:5,quantity: 5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price: 42,note:5,quantity: 5,priceTotal:121,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',priceTotal:121,type:'thé noir de boula',price: 42,note:5,quantity: 5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price: 42,note:5,priceTotal:121,quantity: 5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price: 42,note:5,priceTotal:121,quantity: 5,description:'Thé Pu erh venue des montagne de losc en chine.'},{photos:'/img/productCard/BestProductCard/teapng.png',edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price: 42,note:5,quantity: 5,priceTotal:121,description:'Thé Pu erh venue des montagne de losc en chine.'}];
const dataCart = {ArticleQuant: 5,TotalPrice: 97.50,TransportPrice:{cheap: 4,fast: 11}}
  return (
    <Cart dataProduct={data} dataCart={dataCart}/>
  )
}
