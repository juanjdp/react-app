import React, {useContext, useState} from "react";
//import Cart from './Cart';

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext)

export default function CartProvider({children, defaultCart}){
  const [cart, setCard] = useState(defaultCart);

  function exists(id){
     return cart.find(obj => obj.id === id);
  }
  function add(item, quantity){
      console.log('add de cartContext', item, quantity);
      if (!exists(item.id)){
        item.quatity=quantity;
        setCard([...cart,item]);
      }

  }

  function remove(itemId){
      console.log('remove');
      let cartAux=cart;
      let index = cart.indexOf(itemId);
      cart.splice(index,1);
      setCard([cart]);
  }

  function clear(){
    setCard([]);
  }

  return <CartContext.Provider value={{cart, add, remove}}>
      {children}
  </CartContext.Provider>
}
