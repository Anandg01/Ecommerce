import React, { useState, useEffect } from "react";

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



const Cart = () => {
    const [cartProduct, sertCartProducts] = useState(cartElements)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        const price = cartElements.reduce((i, product) => {
            console.log(i)
            return i + Number(product.price) * Number(product.quantity);
        }, 0)
        setTotalPrice(price)
    }, [])
    return <div>
        <h1 className="text-center">Cart</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ITEM</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                </tr>
            </thead>

            <tbody>
                {cartProduct.map((cartElement, i) => {
                    return <tr key={i} className="">
                        <td className="d-flex align-items-center">
                            <img
                                className="rounded"
                                src={cartElement.imageUrl}
                                alt={cartElement.title}
                                width="80px" />
                            <p className="ms-2">{cartElement.title}</p>
                        </td>
                        <td>{cartElement.price}</td>
                        <td className="d-flex">
                            <input type="text"
                                className="text-center me-1 rounded cart-input"
                                style={{ with: '40px' }}
                                value={cartElement.quantity}
                            />
                            <button className="btn btn-danger">Remove</button>
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
        <div className="d-flex justify-content-center">
            <button className="btn  btn-primary">PURCHASE</button>
        </div>  </div>
}


export default Cart;