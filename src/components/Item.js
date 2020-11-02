

function Item(){

  
    return new Promise((res) => {
        setTimeout(() => {
            res(
                [{ id: 1, title: "Tostadora", price: "85", pictureUrl:"" }, 
                { id: 2, title: "Cocina", price: "150", pictureUrl:""  }]
            );
        }, 2000);
    });
    

  
}
export default Item;