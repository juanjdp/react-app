import React from "react";
import { NavLink } from 'react-router-dom'


import "../index.css"; 

function ItemList({ productos }){

    console.log(productos)


  return (<div className="container"> 
           
                <div style={{verticalAlign:'middle'}}>Listado de productos</div>
                <div className="row">  
                
                {productos.map(p => (

                
                    <div className="card" style={{width: "16rem", marginLeft: 5, marginRight: 5}}>
                        <img className="card-img-top" src="./fondo.jpeg" alt="Card image cap"></img>
                        <div className="card-body">
                            
                            <h5 className="card-title"><NavLink to={`/item/${p.id}`} activeClassName="currentCategory">{p.title} </NavLink></h5>
                            <p className="card-text">{p.price}$</p>
                            <p className="card-text">{p.description}</p>
                            
                        </div>
                    </div>
                    

                ))}   
          </div>
        </div>
  )
    
}
export default ItemList;