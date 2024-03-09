import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {cantidadCarrito} = useContext(CartContext)
  return (
    <div className="cartwidget">
      <Link to={'/cart'}>
    <img src="./src/assets/cart-shopping.png" alt="" />
    </Link>
   <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
   
    </div>
  )
}

export default CartWidget; 