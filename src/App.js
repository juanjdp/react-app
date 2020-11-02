import React from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

import ItemCount from './components/ItemCount'


function App() {

  function onAdd(contador){
    alert(`Cantidad de productos en el carrito: ${contador}`);
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Tienda online" />
      <ItemCount stock={10} initial={0} onAdd={onAdd}/>
    </div>
  );
}

export default App;
