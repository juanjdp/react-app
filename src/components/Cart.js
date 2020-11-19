import React, {useContext} from "react";
import Table from 'react-bootstrap/Table'
import {useCartContext} from './CartContext'

//const ValueContext = React.createContext();

function Cart(){



  const  {cart, remove}  = useCartContext();
  let total=cart.length;
  //var total = cart.reduce(function(a, b){ return a + b; });
  /*cart.map(p => ( 
    total=(total+p.price))
  );*/
  //cart.map(p => ( total=total+p.price));

  let sum = cart.reduce(function(prev, current) {
    return prev + +(current.price*current.quatity)
  }, 0);


  
  
  function del(producto){
    remove(producto.id);
  }

  return ( 

      <>
      <div>Contenido del carrito</div>
      <div style={{ display: total === 0 ? "block" : "none" }}>
          <h3>No hay productos en el carrito</h3>
      </div>
       <div style={{ display: total> 0 ? "block" : "none" }}>
       
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
                    {
                    
                    cart.map(p => ( 
                            <tr>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            <td>{p.quatity}</td>
                            <button onClick={() => del(p)}>Eliminar</button>
                            </tr>                         
                    ))}  
        </tbody> 

        <div style={{justifyContent:'right', alignItems:'right'}}>
            <h4> {`Total de la compra: ${sum}`}</h4>
        </div>
                 
        </Table>  
        </div>
    </> 
  )
}
export default Cart;