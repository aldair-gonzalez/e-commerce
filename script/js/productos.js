/*
Incorporar Arrays
*/

class Producto {
    constructor(producto,id,precio,imagen,categoria,subCategoria,ventas,info){
        this.producto = producto;
        this.id =parseInt(id);
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.categoria = categoria.toLowerCase();
        this.subCategoria = subCategoria.toLowerCase();
        this.ventas = parseInt(ventas);
        this.info = info;
        this.cantidad = 1;
    }
    addCantidad(){
        return this.cantidad++;
    }
}