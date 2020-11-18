import React, {useContext} from "react";
import Table from 'react-bootstrap/Table'
import {useCartContext} from './CartContext'

//const ValueContext = React.createContext();

function Cart(){



  const  {cart, remove}  = useCartContext();

  function del(producto){
    remove(producto.id);
  }

  return ( 
      <>
      <div>Contenido del carrito</div>
        <Table striped bordered hover >
        <thead>
            <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Price</th>
            <th>Cantidad</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
                    {cart.map(p => (
                            <tr>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            <td>{p.quatity}</td>
                            <button onClick={() => del(p)}>Eliminar</button>
                            </tr>
                    ))}  
        </tbody> 
        </Table>  
    </> 
  )
}
export default Cart;