
import React,  {useState} from "react";
import Table from 'react-bootstrap/Table'
import {useCartContext} from './CartContext'
import "bootstrap/dist/css/bootstrap.min.css";
import {getFirestore,  } from './../firebase/index'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import useTextInput from './useTextInput';
import InputField from './InputField';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";


function Cart(){

  const [id, setId] = useState(null);
  

  const nameInput = useTextInput("");
  const phoneInput = useTextInput("");
  const emailInput = useTextInput("");



  const  {cart, remove, clear}  = useCartContext();
  let total=cart.length;
  

  let sum = cart.reduce(function(prev, current) {
    return prev + +(current.price*current.quatity)
  }, 0);
  



  
  
  function del(producto){
    remove(producto.id);
  }

  
    
    async function createOrder() { 
      
      console.log(`Procesando su orden Sr/Srta ${nameInput.value}`);

      let suma = cart.reduce(function(prev, current) {
        return prev + +(current.price*current.quatity)
      }, 0);
      
      //debugger;       
      const newOrder = {            
         buyer: { name: nameInput.value, phone: phoneInput.value, email: emailInput.value },            
         items:     
          cart.map(p => ( 
                { id: p.id, title: p.title, price: p.price, quantity: p.quatity }
           ))        
          ,  
        date: firebase.firestore.FieldValue.serverTimestamp(),            
        total: suma,        
      }; 
      console.log('Order:::', newOrder);
      const db=getFirestore();
      const orders=db.collection("orders");
  
      try{
        const doc=await orders.add(newOrder);
        console.log('Orden generada # ', doc.id)
        setId(doc.id);
        clear();
      }catch(error){
        console.log('Error', error);
      }
  
  
    }
  

  return ( 

      <>
      {id &&
              <Alert variant="success">
              Su orden fue generada con exito, numero: {id}
            </Alert>
      }


      
      <div>Contenido del carrito</div>
      <div style={{ display: total === 0 ? "block" : "none" }}>
          <h3>No hay productos en el carrito</h3>
      </div>
       <div style={{ display: total> 0 ? "block" : "none" }}>



       <Table striped bordered hover >
        <thead>
            <tr>
            
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
        <div class="container">
        <div>Complete los siguientes datos para generar la orden</div>
         <div class="row">
           <div class="col">
           
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <InputField title="Nombre">
                    <Form.Control size="sm" {...nameInput} />
                  </InputField>

                  <InputField title="Apellido">
                    <Form.Control size="sm" {...phoneInput} />
                  </InputField>

                  <InputField title="Correo">
                    <Form.Control size="sm" {...emailInput} />
                  </InputField>

                  {
                    <Button variant="primary"
                      disabled={!nameInput.value || !phoneInput.value || !emailInput.value}
                      onClick={createOrder}
                    >
                      Crear orden
                    </Button>
                  }           

                </Form.Group>
              </Form>    
            </div>      
          </div>  
          </div>      
        </div>
    </> 
  )
}
export default Cart;