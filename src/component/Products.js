import React, { useContext } from "react";
import classes from "./products.module.css"
import CartContext from "../store/CartContext";


const Products = ({ products,onAddProduct }) => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.Products)

    const addProductHandler=(product)=>{
        onAddProduct(product.title);
        cartCtx.addProduct(product)
    }
    return <>
        <div className="d-flex flex-wrap justify-content-center">
            {products.map((product) => {
                return <div key={product.id}
                    className="card m-3 overflow-hidden"
                    style={{ width: '18rem' }}>
                    <div className="card-header fw-medium fs-3" style={{ textAlign: 'center' }}>
                        {product.title}
                    </div>
                    <div className="overflow-hidden">
                        <img src={product.imageUrl}
                            className={`card-img-top ${classes['prod-images']}`}
                            alt={product.title} />
                    </div>
                    <span class="border-top border-dark-subtle"></span>
                    <div className="align-items-center d-flex mt-3">
                        <p className="card-text">${product.price}</p>
                        <button
                            onClick={()=>addProductHandler(product)}
                            className="btn btn-primary ms-auto m-2"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            })}
        </div>
    </>
}


export default Products;