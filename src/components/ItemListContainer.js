import React, { useState, useEffect } from "react";
import Item from "./Item";
import ItemList from "./ItemList";

const styleTitle={ 
    color: 'DarkGray', 
    fontFamily: 'Trocchi',  
    fontSize: 26
}

function ItemListContainer({ title }){

  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Item().then(
      result => {
        setList(result);
      },
      err => {
        setError(err);
      }
    );
  }, []);

  return <> 
    <p><spam style={styleTitle} >{title}</spam></p>
    {error && <p>{error}</p>}
    <ItemList productos={list}/>
    </>


  
}
export default ItemListContainer;