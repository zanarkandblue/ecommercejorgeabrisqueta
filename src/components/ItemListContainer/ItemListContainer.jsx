import React, { useState, useEffect } from "react";
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams()
  useEffect(()=> {
    const fetchData = async () => {
    try {
      const response = await fetch('/productos.json');
      const data = await response.json()
      if(categoryId){
        const filteredProducts = data.filter((p)=> p.categoria == categoryId)
        setProductos(filteredProducts)}
        else {
          setProductos(data)
        }
      } 
      catch(error){
        console.log('Error: '+error)
      }
    }

    fetchData()
  },[categoryId])
  


  return (
    <div>
    {productos.lenght ==0?
    <h1>Cargando ...</h1>:
    <ItemList productos={productos}/>
  
    }  
    </div>
  )
}

export default ItemListContainer;