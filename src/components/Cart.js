
import React from "react";
import Table from 'react-bootstrap/Table'
import {useCartContext} from './CartContext'
import "bootstrap/dist/css/bootstrap.min.css";
import {getFirestore,  } from './../firebase/index'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import useTextInput from './useTextInput';
import InputField from './InputField';

function Cart(){

  const nameInput = useTextInput("");
  const phoneInput = useTextInput("");
  const emailInput = useTextInput("");



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

  
    
    async function createOrder() { 
      console.log(`Procesando su orden Sr/Srta ${nameInput.value}`);
      //debugger;       
      const newOrder = {            
         buyer: { name: nameInput.value, phone: phoneInput.value, email: emailInput.value },            
         items:     
          cart.map(p => ( 
                { id: p.id, title: p.title, price: p.price, quantity: p.quatity }                
           ))        
          ,  
        date: firebase.firestore.FieldValue.serverTimestamp(),            
        total: 500,        
      }; 
      console.log('Order:::', newOrder);
      const db=getFirestore();
      const orders=db.collection("orders");
  
      /*orders.add(newOrder).then(id => {            
        console.log('Order created with id: ', id);        
      });*/
  
      try{
        const doc=await orders.add(newOrder);
        console.log('Orden generada # ', doc.id)
      }catch(error){
        console.log('Error', error);
      }
  
  
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
        

        <div style={{justifyContent:'right', alignItems:'right'}}>
            <h4> {`Total de la compra: ${sum}`}</h4>
        </div>


                 
         
        </tbody> 

        </Table> 
        <div>
            <InputField title="Nombre">
              <input {...nameInput} />
            </InputField>

            <InputField title="Apellido">
              <input {...phoneInput} />
            </InputField>

            <InputField title="Correo">
              <input {...emailInput} />
            </InputField>
        </div>  

        {
        <button
          disabled={!nameInput.value || !phoneInput.value || !emailInput.value}
          onClick={createOrder}
        >
          Crear orden
        </button>
      } 
        </div>
    </> 
  )
}
export default Cart;