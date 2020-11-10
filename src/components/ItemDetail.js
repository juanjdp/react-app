import React from "react";
import Table from 'react-bootstrap/Table'
import "../index.css"; 
import ItemCount from './ItemCount'

function ItemDetail({ producto }){

    console.log('producto::::::', producto)

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
            
                <tr>
                <td>{producto.id} </td>
                <td>{producto.title}</td>
                <td>{producto.price}</td>
                <td><img src={producto.pictureUrl} alt={producto.title} height={150} width={150} /> </td>
                <td><ItemCount stock={10} initial={0} onAdd={onAdd}/> </td>
                </tr>
              
            </tbody> 
        </Table>        

            
    </>

  
}
export default ItemDetail;