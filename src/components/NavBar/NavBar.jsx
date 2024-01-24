import React from "react"
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {



    return (
        <div className="navigationbar">
            <img src="./src/assets/logo.png" alt="" />
            <div className="links">
                <a href="#">Productos</a>
                <a href="#">Ofertas</a>
                <a href="#">Blog</a>
                <a href="#">Contacto</a>
            </div>
            <CartWidget/>
        </div>

    )
}

export default NavBar;