import React from "react"
import Header from "./component/Header";
import Products from "./component/Products";
import Footer from "./component/Footer";
const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ]
  
  
const App=()=>{
  return <>
  <Header/>
  <Products products={productsArr}/>
  <Footer/>
  </>
}

export default App;