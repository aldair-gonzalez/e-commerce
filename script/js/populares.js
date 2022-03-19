populares();
function populares(){
    for (const producto of arrProductos) {
        arrPopulares.push(producto)
    }
    let arrPop = arrPopulares.sort(function(a,b){
        if(a.ventas > b.ventas){
            return -1;
        }
        if(a.ventas < b.ventas){
            return 1;
        }
        return 0;
    }).splice(0,6)
    pintarPop(arrPop);
}

function pintarPop(populares){
    // console.log(populares);
}
