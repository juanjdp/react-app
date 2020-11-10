import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css"; 
import ItemDetail from "./ItemDetail";

const getItemsDetail = (id) => { 
    return new Promise((res) => {
        setTimeout(() => {
            const item=[
                { id: '1', title: "Tostadora", price: "85", pictureUrl:"./tostadora.png" },
                { id: '2', title: "Cocina", price: "150", pictureUrl:""  },
                { id: '3', title: "Platos", price: "20", pictureUrl:""  },
                { id: '4', title: "Cubiertos", price: "5", pictureUrl:""  },
                { id: '5', title: "Utensilios", price: "25", pictureUrl:""  }
              ];
            res(item.find(i => i.id === id))
        }, 2000);
    });
}

function ItemDetailContainer(){

  const [producto, setProducto] = useState([]);
  const [error, setError] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    console.log("id::::", id)
      getItemsDetail(id).then(result => {
        console.log(result)
        setProducto(result);
      },
      err => {
        setError(err);
      }
    );
  }, [id]);

  return <> 
    {error && <p>{error}</p>}
    <ItemDetail producto={producto}/>
  </>


  
}
export default ItemDetailContainer;