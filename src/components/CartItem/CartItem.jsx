import React from 'react';

const CartItem = ({producto,eliminarItem}) => {

    return (
        <div className="container">
        <div className="text-container">
          <h3>{producto.producto.nombre}</h3>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Precio unitario: ${producto.producto.precio}</p>
          <p>Subtotal: ${producto.producto.precio * producto.cantidad}</p>
          <button onClick={() => eliminarItem(producto.producto.id)}>Eliminar producto</button>
        </div>
        <div className="image-container">
          <img src={producto.producto.img} alt={producto.producto.nombre}/>
        </div>
      </div>
    );
};

export default CartItem;