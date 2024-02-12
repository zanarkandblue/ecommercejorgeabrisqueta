import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <h1>{producto.nombre}</h1>
        <img src={producto.img} alt={producto.nombre}/>
        <h2>{producto.precio}</h2>
        <h3>{producto.stock}</h3>
        <p>{producto.descripcion}</p>

        <ItemCount initial={1} stock={producto.stock}/>


    </div>
  )
}

export default ItemDetail