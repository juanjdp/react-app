import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css"; 
import ItemDetail from "./ItemDetail";
import {getFirestore,  } from './../firebase/index'
import * as firebase from 'firebase/app';
import 'firebase/firestore';


function ItemDetailCategoryContainer(){

  const [producto, setProducto] = useState({});
  const [error, setError] = useState(null);

  const {category} = useParams();



  useEffect(() => {

        try{
          const db = getFirestore();
          const itemCollection = db.collection("items");
          let Collections = itemCollection.where('categoryId', '==', category).get();

          Collections.then((querySnapshot) => {
            if (querySnapshot.size===0){
              console.log('No result');
            };
  
            querySnapshot.forEach(function(doc) {
              setProducto( {id: doc.id,...doc.data()} );
            });
  
            console.log('producto obtenido by category:::::',producto);
  
          })
        }catch(error){
          console.log('Error', error);
          setError(error);
        }

  }, [category]);

  return <> 
    {error && <p>{error}</p>}
    
    <ItemDetail producto={producto}/>
  </>


  
}
export default ItemDetailCategoryContainer;