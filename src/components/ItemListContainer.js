import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore} from './../firebase/index'



function ItemListContainer({ title }){

  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  const {category} = useParams();

  console.log('CATEGORY::::', category);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    let Collections;
    if (typeof category !='undefined'){
      Collections = itemCollection.where('categoryId', '==', category);
    }else{
      Collections=itemCollection;
    }

    Collections.get().then((querySnapshot) => {
      if (querySnapshot.size===0){
        console.log('No result');
      };
      setList(
        querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      );
    })

  }, [category]);

  return <> 
    <p>{title}</p>
    {error && <p>{error}</p>}
    <ItemList productos={list}/>
    </>


  
}
export default ItemListContainer;