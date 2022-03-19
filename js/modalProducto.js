const modalProductoCard = document.getElementById('modalProducto');
const cerrarModal = document.getElementById('cerrarModal');
const addCar = document.querySelector('.btn-addCarrito');

function modalProducto(){
    let productos = [...document.getElementsByClassName('item-producto')];
    for (const producto of productos) {
        let nombreProductoModal = document.getElementById('nombre-productoModal');
        let precioProductoModal = document.getElementById('precio-productoModal');
        let imgModal = document.getElementById('img-modal');
        let descripcionModal = document.getElementById('descripcionModal')
        producto.addEventListener('click', (e) => {
            let respuesta = arrProductos.find(producto => producto.id == e.target.id);
            if (respuesta) {
                nombreProductoModal.innerHTML = respuesta.producto;
                precioProductoModal.innerHTML = respuesta.precio;
                descripcionModal.innerHTML = respuesta.info;
                imgModal.setAttribute('src', `${respuesta.imagen}`);
                addCar.setAttribute('id', `${respuesta.id}`)
                modalProductoCard.classList.add('active-modal');
            }
        })
        cerrarModal.addEventListener('click', () => {
            modalProductoCard.classList.remove('active-modal');
        })
    }
}