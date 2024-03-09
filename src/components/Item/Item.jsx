import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {


  return (
    
    <div className="product-card">
    <Link to={`/detalle/${producto.id}`}>

      <div key={producto.id}>
      <img src={producto.img} alt={producto.nombre}/>
          <h2>{producto.nombre}</h2>
          <h5>{producto.descripcion}</h5>
          <button>Ver detalle</button>
          
      </div> 

    </Link>
    </div>
  )
}

export default Item;