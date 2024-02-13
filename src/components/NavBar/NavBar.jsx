import React from "react"
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {



    return (
        <div className="navigationbar">
            <Link to ='/'>
            <img src="./src/assets/logo.png" alt="" />
            </Link>
            <div className="links">
               <NavLink to={'/categoria/Procesadores'}>Procesadores</NavLink>
               <NavLink to={'/categoria/Baterías'}>Baterías</NavLink>
               <NavLink to={'/categoria/Mantenimiento'}>Mantenimiento</NavLink>
               <NavLink to={'/categoria/Repuestos'}>Repuestos</NavLink>
            </div>
            <CartWidget/>
        </div>

    )
}

export default NavBar;