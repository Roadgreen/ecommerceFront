import Productpage from "../../component/Body/product/productArticle/productPage"

export default function article() {
  
  let data = [{photos:['/img/productCard/BestProductCard/teapng.png','/img/productCard/BestProductCard/teapng.png','/img/productCard/BestProductCard/teapng.png','/img/productCard/BestProductCard/teapng.png'],
    edition:'Best-seller',id:'pjpeioj',name:'Thé Pu Erh Moudjaidin',type:'thé noir de boula',price:{vingt:45,cinquante:70,cent:90 },note:5,description:'Thé Pu erh venue des montagne de losc en chine.',temperature:75,articleDescription:"Délicatement parfumé avec des agrumes et du gingembre, <br/>Vive le thé !est le thé vert BIO de la bonne humeur et de la joie de vivre !\n Parsemé de morceaux d’orange, il se déguste aussi bien chaud que glacé.Vive le thé ! BIO est aussi un thé du bien-être, naturellement antioxydant grâce à sa base de thé vert, tonifiant par ses agrumes et stimulant la digestion grâce au gingembre.Un thé vert à l’odeur très agréable et fraîche, avec une belle harmonie de notes zestées et du gingembre.",preparation:`Prendre 6 g de feuilles de thé pour 30 cl d'eau et faire chauffer à 75°. Faire infuser 3 à 4 minutes.`,iceteapreparation:`Infuser 16 g par litre d'eau à température ambiante pendant 30 minutes. Retirer les feuilles et placer au frais.`,story:"Délicatement parfumé avec des agrumes et du gingembre, <br/>Vive le thé !est le thé vert BIO de la bonne humeur et de la joie de vivre !\n Parsemé de morceaux d’orange, il se déguste aussi bien chaud que glacé.Vive le thé ! BIO est aussi un thé du bien-être, naturellement antioxydant grâce à sa base de thé vert, tonifiant par ses agrumes et stimulant la digestion grâce au gingembre.Un thé vert à l’odeur très agréable et fraîche, avec une belle harmonie de notes zestées et du gingembre.",com:[{name:'hector',note:4,comment:'The parfait bonne saveur',date:'12/10/22'},{name:'hector',note:4,comment:'The parfait bonne saveur',date:'12/10/22'}]}]

  return (
    <>
    <Productpage data={data}/>
    </>
  )
}
