import React, { useState } from "react";

function ItemCount({ stock, initial, producto, onAdd }){

  const [contador, setContador] = useState(initial)

  function addClick() {
      if (contador<stock)
       setContador(contador + 1);

  }

  function subtractionClick() {
      if (contador>0)
       setContador(contador - 1);
  }

  return <> 
    
      <button onClick={subtractionClick}>-</button>
      {`  ${contador}  `}
      <button onClick={addClick}>+</button>
      <br />
      <button
        onClick={() => onAdd(contador, producto)}
      >
        Agregar
      </button>
    </>

  
}
export default ItemCount;