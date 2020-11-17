import React, { useState } from "react";
import Cart from './Cart';

const Context = React.createContext(false);

function CartContext(){
    const [cantidad, setCantidad] = useState(0);

    return  <>
        <Context.Provider value={cantidad}>
            <Cart />
        </Context.Provider>
    </>
}
export default CartContext;    