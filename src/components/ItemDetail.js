import React, { useState } from "react";

import "../index.css"; 
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import {useCartContext} from './CartContext'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
       
        <Card style={{ width: '18rem' }}>
        <Card.Header>Detalle del producto</Card.Header>
            <img className="card-img-top" src="../fondo.jpeg" width="20" height="150" alt="Card image cap"></img>
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                {producto.description}
                </Card.Text>
                {online ? <ItemCount stock={10} initial={0} producto={producto} onAdd={onAdd}/> : <Link to="/cart"><Button >Ver carrito</Button></Link>}
                
            </Card.Body>
        </Card>


             
    </>
}
export default ItemDetail;