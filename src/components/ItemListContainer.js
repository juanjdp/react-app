import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

import {getFirestore} from './../firebase/index'



function ItemListContainer({ title }){

  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size===0){
        console.log('No result');
      };
      setList(
        querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      );
    })

  }, []);

  return <> 
    <p>{title}</p>
    {error && <p>{error}</p>}
    <ItemList productos={list}/>
    </>


  
}
export default ItemListContainer;