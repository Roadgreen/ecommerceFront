import Productpage from "../../component/Body/product/productArticle/productPage"

export default function article() {
  
  let data = [{photos:['/img/productCard/BestProductCard/teapng.png','/img/productCard/BestProductCard/teapng.png','/img/productCard/BestProductCard/teapng.png','/img/productCard/BestProductCard/teapng.png'],
    edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.'}]

  return (
    <>
    <Productpage data={data}/>
    </>
  )
}
