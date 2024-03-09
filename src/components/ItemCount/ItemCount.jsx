import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'


const ItemCount = ({initial,stock,onAdd}) => {

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
  Swal.fire({
    title: `¡${count} producto(s) agregado(s) al carrito!`,
    icon: 'success',
    showCancelButton: false,
    confirmButtonColor: '#454138',
    confirmButtonText: 'Seguir comprando',
  }).then((result) => {
    if (result.isConfirmed) {

    } else {
      
    }
  });
  onAdd(count)
}

  return (
    <div>
    <div className='count-container'>
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
     </div> 
     
     <button onClick={agregarCarrito} disabled={!stock}>Agregar al Carrito</button>
    </div>
    
  )
}

export default ItemCount