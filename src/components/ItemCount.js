import React, { useState } from "react";
import Button from "react-bootstrap/Button";

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
    
      <Button variant="secondary" onClick={subtractionClick}>-</Button>
      {`  ${contador}  `}
      <Button variant="secondary" onClick={addClick}>+</Button>
      <br />
      <Button variant="info"
        onClick={() => onAdd(contador, producto)}
      >
        Agregar
      </Button>
    </>

  
}
export default ItemCount;