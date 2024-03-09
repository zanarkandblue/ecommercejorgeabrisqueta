import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)

    return (
        <div>

            {cart.length == 0 
            ? 
            <>
            <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
            <Link to={"/"}><button>Volver al inicio</button></Link>
            </>
                
                :

                <>

                <h1>Carrito de compras</h1>

                {cart.map((p)=>(
                    <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem}/>
                ))}
                

                <h1>Total: ${totalCarrito()}</h1>

                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    <br></br><br></br>
                <Link to={"/checkout"}>
                    <button>Ir al checkout</button>
                </Link>


                </>

                

            } 
        </div>
    );
};

export default Cart;