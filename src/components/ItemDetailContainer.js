import React, { useState, useEffect } from "react";
import "../index.css"; 
import ItemDetail from "./ItemDetail";

const getItemsDetail = () => { 
    return new Promise((res) => {
        setTimeout(() => {
            res(
                [{ id: 1, title: "Tostadora", price: "85", pictureUrl:"./tostadora.png" }]
            );
        }, 2000);
    });
}

function ItemDetailContainer(){

  const [producto, setProducto] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItemsDetail().then(
      result => {
        setProducto(result);
      },
      err => {
        setError(err);
      }
    );
  }, []);

  return <> 
    {error && <p>{error}</p>}
    <ItemDetail producto={producto}/>
  </>


  
}
export default ItemDetailContainer;