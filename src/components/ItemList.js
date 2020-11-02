import React from "react";
import Table from 'react-bootstrap/Table'
import "../index.css"; 

function ItemList({ productos }){

  return <> 
        <div>Listado de productos</div>
        <Table striped bordered hover >
        <thead>
            <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {productos.map(p => (
                <tr>
                <td>{p.id} </td>
                <td>{p.title}</td>
                <td>{p.price}</td>
                </tr>
            ))}   
            </tbody> 
        </Table>        
    </>

  
}
export default ItemList;