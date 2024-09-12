import React,
{
    useState,
    useEffect,
    useContext
} from "react";

import CartContext from "../store/CartContext";

import Model from './UI/Model/Model'
const cartElements = [
    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {
        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

]



const Cart = ({ hideCard }) => {
    const [cartProduct, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const cartCtx = useContext(CartContext);
    console.log(cartElements)
    useEffect(() => {
        const price = cartProduct.reduce((i, product) => {
            return i + Number(product.price) * Number(product.quantity);
        }, 0)
        setTotalPrice(price);
        setCartProducts(cartCtx.Products);
    }, [cartCtx.Products, cartProduct])
    return <Model>
        <div className="d-flex justify-content-end">
            <button
                 onClick={()=>hideCard()}
                type="button"
                className="btn-close"
                aria-label="Close"></button>

        </div>

        <h1 className="text-center">Cart</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ITEM</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                </tr>
            </thead>

            <tbody>
                {cartProduct.map((cartElement) => {
                    return <tr key={cartElement.id} className="">
                        <td className="d-flex align-items-center">
                            <img
                                className="rounded"
                                src={cartElement.imageUrl}
                                alt={cartElement.title}
                                width="80px" />
                            <p className="ms-2">{cartElement.title}</p>
                        </td>
                        <td >
                            {cartElement.price}
                        </td>
                        <td>
                            <div className="d-flex">
                                <input type="text"
                                    className="text-center me-1 rounded disable cart-input"
                                    style={{ with: '40px' }}
                                    value={cartElement.quantity}
                                    disabled
                                />
                                <button
                                    onClick={() => cartCtx.removeProduct(cartElement.id,cartElement.quantity)}
                                    className="btn btn-danger"
                                >Remove</button>
                            </div>
                        </td>
                    </tr>
                })}
                <tr>
                    <td></td>
                    <td></td>
                    <td>TOTAL ${totalPrice}</td>
                </tr>
            </tbody>
        </table>
        <div
            className="d-flex justify-content-center">
            <button
                className="btn  btn-primary">
                PURCHASE
            </button>
        </div>
    </Model>
}


export default Cart;