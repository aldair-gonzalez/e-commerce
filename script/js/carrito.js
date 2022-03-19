const cantidadCarrito = document.getElementById('cntdCar');
function cntdCarritoBtn(){
    let condi = Object.keys(carrito).length;
    cantidadCarrito.innerHTML = condi;
    if (condi == 0) {
        cantidadCarrito.innerHTML = "";
    }
}

function localStoraP() {
    localStorage.setItem('productosCarrito',JSON.stringify(carrito));
    cntdCarritoBtn();
}
function carritoVacioNot(){
    if (Object.keys(carrito).length < 1) {
        let carritoVacio = document.createElement('div');
        carritoVacio.innerHTML = `
            <div class="vacio">
                <p class="p">Vacio</p>
            </div>
        `;
        containerCardsCarrito.append(carritoVacio);
    }
}

const containerCardsCarrito = document.getElementById('container-cards-carrito');

addCarrito();
function addCarrito(){
    addCar.addEventListener('click', e => {
        let condition = carrito.find(producto => producto.id == e.target.id);
        if(condition){
            condition.addCantidad();
        } else{
            let condition = arrProductos.find(producto => producto.id == e.target.id);
            carrito.push(condition);
        }
        pintarCarrito(carrito);
        localStoraP();
        Toastify({
            text: `Se añadió al carrito`,
            duration: 3000,
            gravity: "bottom",
            style: {
                background: "#FF6973",
            }
        }).showToast();
    })
}

function pintarCarrito(carrito){
    containerCardsCarrito.innerHTML = "";
    for (const producto of carrito) {
        let cardCarrito = document.createElement('div');
        cardCarrito.classList.add('producto-car');
        cardCarrito.setAttribute('id', `${producto.id}cardProducto`)
        cardCarrito.innerHTML = `
            <div class="imagen">
                <img loading="lazy" src="${producto.imagen}" alt="${producto.producto}" class="img">
            </div>
            <div class="info">
                <p class="nombre">${producto.producto}</p>
            </div>
            <div class="cantidad">
                <button class="button remove" id="${producto.id}remove">-</button>
                <p class="input-cantidad" id="${producto.id}cantidad">${producto.cantidad}</p>
                <button class="button add" id="${producto.id}add">+</button>
            </div>
            <div class="precio">
                <p class="p total">$${producto.precio}</span></p>
                <p class="p subtotal">$<span id="${producto.id}subTotal">${producto.precio}</span></p>
            </div>
        `;
        containerCardsCarrito.append(cardCarrito);
        cantidad(producto);
    }
}

function cantidad(data) {
    const add = document.getElementById(`${data.id}add`);
    const remove = document.getElementById(`${data.id}remove`);
    const pCantidad = document.getElementById(`${data.id}cantidad`);
    const subTotal = document.getElementById(`${data.id}subTotal`);
    let opSubPrecio = data.cantidad * data.precio;
    subTotal.innerHTML = opSubPrecio;

    add.addEventListener('click', () => {
        opCantidad = (data.cantidad++) + 1;
        opSubPrecio = opCantidad * data.precio;
        pCantidad.innerHTML = opCantidad;
        subTotal.innerHTML = opSubPrecio;
        localStoraP();
    })
    remove.addEventListener('click', () => {
        opCantidad = (data.cantidad--) - 1;
        opSubPrecio = opCantidad * data.precio;
        pCantidad.innerHTML = opCantidad;
        subTotal.innerHTML = opSubPrecio;

        if (pCantidad.innerHTML < '1') {
            const cardProductoCarrito = document.getElementById(`${data.id}cardProducto`);
            cardProductoCarrito.remove();
            data.cantidad = 0;
            if (data.cantidad < 1) {
                let index = carrito.indexOf()
                carrito.splice(index, 1);
            }
        }
        carritoVacioNot();
        localStoraP();
    })
}


if ('productosCarrito' in localStorage) {
    const produGuardados = JSON.parse(localStorage.getItem('productosCarrito'));
    for (const producto of produGuardados) {
        carrito.push(producto);
    }
    pintarCarrito(carrito);
}

carritoVacioNot();
cntdCarritoBtn();