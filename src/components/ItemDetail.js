import React, { useState } from "react";
import Table from 'react-bootstrap/Table'
import "../index.css"; 
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import {useCartContext} from './CartContext'

function ItemDetail({ producto }){

    const  {cart, add}  = useCartContext();

    const [cantidad, setCantidad] = useState(0);
    const [online, setOnline]=useState(true);

    console.log('producto::::::', producto)

    function onAdd(contador, producto){
        setCantidad(contador);
        
        add(producto, contador);
        setOnline(contador > 0 ? false : true);
        //alert(`Cantidad de productos en el carrito: ${cantidad}`);
    }

    function buy(){
        alert(`hola comprando`);
    }
    
      

  return <> 
        <div>Detalle del producto</div>
        <Table striped bordered hover >
        <thead>
            <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Add to cart</th>
            </tr>
        </thead>
        <tbody>
            
                <tr>
                <td>{producto.id} </td>
                <td>{producto.title}</td>
                <td>{producto.price}</td>
                <td><img src={producto.pictureUrl} alt={producto.title} height={150} width={150} /> </td>
                <td>{online ? <ItemCount stock={10} initial={0} producto={producto} onAdd={onAdd}/> : <Link to="/cart"><button onClick="">Terminar compra</button></Link>} </td>

                

                </tr>
              
            </tbody> 
        </Table>             
    </>
}
export default ItemDetail;