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

  console.log ('ID:::::',id)

  useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const priceCollections = itemCollection.where(firebase.firestore.FieldPath.documentId(), '==', id).get();

        priceCollections.then((querySnapshot) => {
          if (querySnapshot.size===0){
            console.log('No result');
          };

          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //setProducto( {id: doc.id,...doc.data()} );
            setProducto( {id: doc.id,...doc.data()} );
          });

          console.log('producto obtenido:::::',producto);

          //setProducto(querySnapshot.docs[0]);
          
          
          /*setProducto(
            querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          );*/
        })
  }, [id]);

  return <> 
    {error && <p>{error}</p>}
    
    <ItemDetail producto={producto}/>
  </>


  
}
export default ItemDetailContainer;