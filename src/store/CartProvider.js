import React, { useReducer } from "react";
import CartContext from "./CartContext";

const initialCart = {
    products: [],
    totalItme: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'add') {
        console.log(state, action)
        const matchedIndex = state.products.findIndex(product => product.id === action.product.id);

        if (matchedIndex !== -1) {
            state.products[matchedIndex].quantity = state.products[matchedIndex].quantity + 1;
        }
        else {
            state.products.push({ ...action.product, "quantity": 1 })
        }
        return { 
            products: state.products,
            totalItme:state.totalItme+1
        };
    }
    if (action.type === 'remove') {
        const updatedProducts = state.products.filter(product => product.id !== action.id)
        return { products: updatedProducts,totalItme:state.totalItme-action.quantity}
    }
    return initialCart;
}



const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCart)

    const addProductToCartHandler = (product) => {
        dispatchCartAction({ type: 'add', product: product })
    }

    const removeProductFromCartHandler = (id,quantity) => {
        dispatchCartAction({ type: 'remove',id,quantity })
    }

    const cartContext = {
        Products: cartState.products,
        addProduct: addProductToCartHandler,
        removeProduct: removeProductFromCartHandler,
        totalItme:cartState.totalItme
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;