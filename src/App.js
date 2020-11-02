import React from 'react';

import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {



  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Tienda online" />

      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
