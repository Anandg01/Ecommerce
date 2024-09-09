import React from "react";


const Header = () => {
    return <>
        <header>
            <nav
                class="navbar navbar-light bg-dark justify-content-around position-fixed z-1"
                style={{ width: '100%' }}>
                <ul className="navbar-nav flex-row text-light">
                    <li className="nav-item ms-1">Home</li>
                    <li className="nav-item ms-1">Home</li>
                </ul>

                <div className="ml-auot text-light">
                    <div> Cart</div>
                </div>
            </nav>
            <h1 className="bg-secondary text-light text-center "
            style={{height:'10rem', padding:'40px', fontSize:'100px'}}
            >
                The Generics
            </h1>
        </header>
    </>
}


export default Header;