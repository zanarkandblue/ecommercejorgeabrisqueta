import React, { useState, useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { collection,getDocs,query,where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams()
 
  
  useEffect(()=>{

    const misProductos = 
    categoryId ? 
    query(collection(db,"item"),where("categoria","==",categoryId))
    :
    collection(db,"item")

 
    getDocs(misProductos).then((res) => {
      const nuevosProductos = res.docs.map((doc) => {
         const data = doc.data()
         return {id: doc.id,...data}
      })
      setProductos(nuevosProductos)
    })
    .catch((error) => console.log(error))

 },[categoryId])
  


  return (
    <div>
    {productos.length ==0?
    <h1>Cargando ...</h1>:
    <ItemList productos={productos}/>
  
    }  
    </div>
  )
}

export default ItemListContainer;