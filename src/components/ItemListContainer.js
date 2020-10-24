import React from 'react';

const styleTitle={ 
    color: 'DarkGray', 
    fontFamily: 'Trocchi',  
    fontSize: 26
}

function ItemListContainer({ title }){

  return <> 
    <p><spam style={styleTitle} >{title}</spam></p>
    </>

  
}
export default ItemListContainer;