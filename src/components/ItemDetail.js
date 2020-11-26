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


    function onAdd(contador, producto){
        setCantidad(contador);

        console.log('onAdd::::',producto)
        
        add(producto, contador);
        setOnline(contador > 0 ? false : true);
        //alert(`Cantidad de productos en el carrito: ${cantidad}`);
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
        {producto.map(p => (
                <tr>
                    <td>{p.categoryId} </td>
                    <td>{p.title}</td>
                    <td>{p.price}</td>
                    <td><img src={p.pictureUrl} alt={p.title} height={150} width={150} /> </td>
                    <td>{online ? <ItemCount stock={10} initial={0} onAdd={onAdd}/> : <Link to="/cart"><button >Terminar compra</button></Link>} </td>
                </tr>
               ))}  
            </tbody> 
        </Table>             
    </>
}
export default ItemDetail;