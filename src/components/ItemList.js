import React from "react";

function ItemList({ productos }){

  return <> 
        <div>Listado de productos</div>
        {productos.map(p => (
            <li>
            {p.id} - {p.title}
            </li>
        ))}
        
    </>

  
}
export default ItemList;