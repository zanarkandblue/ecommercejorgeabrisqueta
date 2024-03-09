import React from "react"
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {



    return (
        <div>
        <div className="navigationbar">
            <Link to ='/'>
           <h1>ROBOT STORE</h1>
            </Link>
            <div className="links">
               <NavLink to={'/categoria/Procesadores'}>Procesadores</NavLink>
               <NavLink to={'/categoria/Baterías'}>Baterías</NavLink>
               <NavLink to={'/categoria/Mantenimiento'}>Mantenimiento</NavLink>
               <NavLink to={'/categoria/Repuestos'}>Repuestos</NavLink>
            </div>
            <CartWidget/>
        </div>
        <h3>La tienda de suministros de robots más popular de la región.</h3>
    </div>
    )
}

export default NavBar;