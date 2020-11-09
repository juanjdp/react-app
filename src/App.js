import React from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {



  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Switch>
            <Route path="/">
              <ItemListContainer title="Tienda online" />
            </Route>
          
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>  
        </Switch>  
      </BrowserRouter>
    </>
  );
}

export default App;
