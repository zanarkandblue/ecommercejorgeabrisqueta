import React from 'react'
import { useState } from 'react'

const ItemCount = ({initial,stock}) => {

const [count,setCount] = useState(1);

const incrementar = () => {
  if (count < stock){
    setCount(count+1)
  }
}

const decrementar = () => {
  if(count > initial){
    setCount(count -1)
  } 
}

const agregarCarrito = () => {
  alert("productos agregados al carrito: "+count)
}

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={agregarCarrito} disabled={!stock}>Agregar al Carrito</button>
    </div>
    
  )
}

export default ItemCount