import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css"; 
import ItemDetail from "./ItemDetail";
import {getFirestore,  } from './../firebase/index'
import * as firebase from 'firebase/app';
import 'firebase/firestore';


function ItemDetailContainer(){

  const [producto, setProducto] = useState({});
  const [error, setError] = useState(null);

  const {id} = useParams();

  useEffect(() => {

        try{
          const db = getFirestore();
          const itemCollection = db.collection("items");
          let item = itemCollection.doc(id);

          item.get().then((doc) => {
            if (doc.size===0){
              console.log('No result');
            };

            setProducto( {id: doc.id,...doc.data()} );
            console.log('producto por id:::::',producto);
  
          })
        }catch(error){
          console.log('Error', error);
          setError(error);
        }

  }, [id]);

  return <> 
    {error && <p>{error}</p>}
    
    <ItemDetail producto={producto}/>
  </>


  
}
export default ItemDetailContainer;