import React, {useContext} from "react";

const Context = React.createContext();

function Cart(){

  return <> 
    
        <Context.Consumer >
            {(cantidad) => (<p>{cantidad}</p>)}
        </Context.Consumer>
    </>

  
}
export default Cart;