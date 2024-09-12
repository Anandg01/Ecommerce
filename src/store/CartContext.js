import {createContext} from "react";

const CartContext =createContext({
Products:[],
totalItme:0,
addProduct:(product)=>{},
removeProduct:(id)=>{},
})

export default CartContext;