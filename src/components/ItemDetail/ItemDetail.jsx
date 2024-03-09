import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({producto}) => {

  const [cart,setCart] = useState(false)

  const {agregarCarrito} = useContext(CartContext)

  const onAdd = (count) => {

      setCart(true)

      agregarCarrito(producto,count)

  }

  return (
      <div>
          <h1>{producto.nombre}</h1>
          <img src={producto.img} alt={producto.nombre} />
          <h3>Precio: $ {producto.precio}</h3>
          <h3>Stock: {producto.stock} unidades</h3>
          <blockquote>{producto.descripcion}</blockquote>

          {producto.stock == 0 ? <h2>EL PRODUCTO NO TIENE STOCK</h2> : (
              cart ? <Link to={'/cart'}>Ir al carrito</Link> : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
          )}
          
      </div>
  );
};

export default ItemDetail;