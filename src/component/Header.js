import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import CartContext from "../store/CartContext";

const Header = ({ showCart }) => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx)
    return <>
        <header>
            <nav
                className="navbar navbar-light bg-dark justify-content-around position-fixed z-1"
                style={{ width: '100%' }}>
                <ul className="navbar-nav flex-row text-light">
                    <li className="nav-item ms-1">Home</li>
                    <li className="nav-item ms-1">Home</li>
                </ul>
                <NavLink to='/about'
                    className={'link-underline text-light'}
                >ABOUT</NavLink>

                <div className="ml-auot text-light">
                    <button type="button"
                        onClick={() => showCart()}
                        className="btn btn-danger position-relative">
                        CART
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartCtx.totalItme}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>


                </div>
            </nav>
            <h1 className="bg-secondary text-light text-center "
                style={{ height: '10rem', padding: '40px', fontSize: '100px' }}
            >
                The Generics
            </h1>
        </header>
    </>
}


export default Header;