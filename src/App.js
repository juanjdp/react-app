import React from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetailCategoryContainer from './components/ItemDetailCategoryContainer'
import CartProvider from './components/CartContext'
import Cart from './components/Cart'

import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <CartProvider defaultCart={[]}>
      
        <BrowserRouter>
          <NavBar />
          <Switch>
              <Route exact path="/">
                <ItemListContainer title="Tienda online" />
              </Route>
            
              <Route exact path="/item/:id">
                <ItemDetailContainer />
              </Route>  

              <Route exact path="/itembycategory/:category">
                <ItemDetailCategoryContainer />
              </Route>  

              <Route exact path="/cart">
                <Cart />
              </Route>  

      
          </Switch>  
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
