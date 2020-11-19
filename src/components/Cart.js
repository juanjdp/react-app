import React from "react";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from './../firebase/index'

function Cart(){

  async function createOrder() { 
    debugger;       
    const newOrder = {            
       buyer: { name: 'Poli', phone: '+541143432323', email: 'asd@asd' },            
       items: [                
         { id: '1', title: 'zapas', price: 200, quantity: 2 },                
         { id: '2', title: 'gorro', price: 100, quantity: 1 },            
        ],  
      date: firebase.firestore.FieldValue.serverTimestamp(),            
      total: 500,        
    }; 
    const db=getFirestore();
    const orders=db.collection("orders");

    /*orders.add(newOrder).then(id => {            
      console.log('Order created with id: ', id);        
    });*/

    try{
      const doc=await orders.add(newOrder);
      console.log('Orden generada # ', doc.id)
    }catch(error){
      console.log('Error')
    }


  }

  return <> 
    
        <p>finalizando compra</p>
        <p><button onClick={createOrder}>Crear orden</button></p>
    </>

  
}
export default Cart;