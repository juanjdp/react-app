import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css"; 
import ItemDetail from "./ItemDetail";
import {getFirestore,  } from './../firebase/index'
import * as firebase from 'firebase/app';
import 'firebase/firestore';


function ItemDetailContainer(){

  const [producto, setProducto] = useState([]);
  const [error, setError] = useState(null);

  const {id} = useParams();

  useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const priceCollections = itemCollection.where(firebase.firestore.FieldPath.documentId(), '==', id).get();

        priceCollections.then((querySnapshot) => {
          if (querySnapshot.size===0){
            console.log('No result');
          };
          
          
          setProducto(
            querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          );
        })
  }, [id]);

  return <> 
    {error && <p>{error}</p>}
    <ItemDetail producto={producto}/>
  </>


  
}
export default ItemDetailContainer;