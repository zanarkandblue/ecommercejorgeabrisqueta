import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {


  return (

    <Link to={'/detalle/${producto.id}'}>

      <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <img src={producto.img} alt={producto.nombre}/>
      </div> 

    </Link>
    
  )
}

export default Item;