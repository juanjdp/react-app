import React, {useContext, useState} from "react";

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
      console.log('remove', itemId);

      const items = cart.filter(item => item.id !== itemId);

      console.log(items);
      setCard([...items]);
  }

  function clear(){
    setCard([]);
  }

  return <CartContext.Provider value={{cart, add, remove, clear}}>
      {children}
  </CartContext.Provider>
}
