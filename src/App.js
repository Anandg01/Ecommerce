import React, { useState, useEffect } from "react"
import {
  Header,
  Footer,
  Products,
  Cart,
  ShowMessage
} from "./component/Index"
import CartProvider from "./store/CartProvider"
import './component.css'
const productsArr = [

  {
    id: 'p1',
    title: 'Colors',
    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

  },

  {
    id: 'p2',
    title: 'Black and white Colors',

    price: 50,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

  },

  {
    id: 'p3',
    title: 'Yellow and Black Colors',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {
    id: 'p4',
    title: 'Blue Color',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  }

]




const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMessage, setShowMessage] = useState('')

  const addProductToCartHandler = (message) => {
    setShowMessage(`Product: ${message} add to Cart`);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowMessage('')
    }, 1000)
  }, [addProductToCartHandler])

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideShowCartHandler = () => {
    setShowCart(false)
  }
  
  return <CartProvider>
    <Header showCart={showCartHandler} />
    {showMessage !== "" &&
      <ShowMessage message={showMessage} />}
    <Products
      products={productsArr}
      onAddProduct={addProductToCartHandler}
    />
    {showCart && <Cart hideCard={hideShowCartHandler} />}
    <Footer />
  </CartProvider>
}

export default App;