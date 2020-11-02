

function Item(){

  
    return new Promise((res) => {
        setTimeout(() => {
            res(
                [{ id: 1, title: "Tostadora", price: "85", pictureUrl:"" }, 
                { id: 2, title: "Cocina", price: "150", pictureUrl:""  },
                { id: 3, title: "Platos", price: "20", pictureUrl:""  },
                { id: 4, title: "Cubiertos", price: "5", pictureUrl:""  },
                { id: 5, title: "Utensilios", price: "25", pictureUrl:""  }]
            );
        }, 2000);
    });
    

  
}
export default Item;