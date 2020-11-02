import React from "react";
import Table from 'react-bootstrap/Table'
import "../index.css"; 
import ItemCount from './ItemCount'

function ItemDetail({ producto }){

    function onAdd(contador){
        alert(`Cantidad de productos en el carrito: ${contador}`);
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
                <td>{p.id} </td>
                <td>{p.title}</td>
                <td>{p.price}</td>
                <td><img src={p.pictureUrl} alt={p.title} height={150} width={150} /> </td>
                <td><ItemCount stock={10} initial={0} onAdd={onAdd}/> </td>
                </tr>
            ))}   
            </tbody> 
        </Table>        

            
    </>

  
}
export default ItemDetail;