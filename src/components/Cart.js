import React, {useContext} from "react";
import Table from 'react-bootstrap/Table'
import {useCartContext} from './CartContext'
import "bootstrap/dist/css/bootstrap.min.css";
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




       
 
                    {
                    
                    cart.map(p => ( 

                      <div class="row">
                      <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                          <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>{p.title}</p>
                            
                          </div>
                        </div>
                      </div>
                    </div>


                             
                    ))}  
        

        <div style={{justifyContent:'right', alignItems:'right'}}>
            <h4> {`Total de la compra: ${sum}`}</h4>
        </div>
                 
         
        </div>
    </> 
  )
}
export default Cart;