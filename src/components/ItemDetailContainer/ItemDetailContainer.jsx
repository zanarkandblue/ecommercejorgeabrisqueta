import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../services/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "item", id);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                if (data) {
                    const nuevoProducto = { id: res.id, ...data };
                    setProducto(nuevoProducto);
                } else {
                    // Manejar el caso en el que no se encuentra el producto
                    console.log("No se encontró el producto");
                }
            })
            .catch(error => {
                console.log("Error al recuperar datos del producto:", error);
            });
    }, [id]);

    return (
        <div>
            {producto && <ItemDetail producto={producto} />}
        </div>
    );
}

export default ItemDetailContainer;