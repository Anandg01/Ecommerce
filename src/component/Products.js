import React from "react";
import classes from "./products.module.css"
const Products = ({ products }) => {
    return <>
        <div className="d-flex flex-wrap justify-content-center">
            {products.map((product, i) => {
                return <div key={i}
                    className="card m-3 overflow-hidden"
                    style={{ width: '18rem' }}>
                    <div className="card-header fw-medium fs-3" style={{ textAlign: 'center' }}>
                        {product.title}
                    </div>
                    <img src={product.imageUrl}
                        className={`card-img-top ${classes['prod-images']}`} alt={product.title} />
                    <div className="card-body">
                        <p className="card-text">${product.price}</p>
                    </div>
                </div>
            })}
        </div>
    </>
}


export default Products;