const verCarrito = document.getElementById('verCarrito');
const cerrarCarrito = document.getElementById('cerrarCarrito');
const sectionCarrito = document.getElementById('sectionCarrito');

verCarrito.addEventListener('click', () => {
    sectionCarrito.classList.add('active-carrito');
})
cerrarCarrito.addEventListener('click', () => {
    sectionCarrito.classList.remove('active-carrito');
})

const exitCategorias = document.getElementById('exitCategorias');
const seccCategorias = document.getElementById('seccCategorias');
const aProductos = document.getElementById('aProductos');

aProductos.addEventListener('click', (e) => {
    e.preventDefault();
    seccCategorias.classList.add('active-categorias');
})
exitCategorias.addEventListener('click', () => {
    seccCategorias.classList.remove('active-categorias');
})


/*
Generales
*/
const arrProductos = [];
let carrito = [];
let arrPopulares = [];


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


/*
Modal Producto
*/
const modalProductoCard = document.getElementById('modalProducto');
const cerrarModal = document.getElementById('cerrarModal');
const addCar = document.querySelector('.btn-addCarrito');

function modalProducto(param){
    let productos = [...document.getElementsByClassName(param)];
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


/*
    Pintar Cards
*/
document.addEventListener('DOMContentLoaded', () => {
    peticion();
    respuestaPop();
})

const cards = document.getElementById('cards');
const peticion = async () => {
    try {
        const respuesta = await fetch('script/json/api.json');
        const data = await respuesta.json();
        for (const producto of data) {
            arrProductos.push(new Producto(producto.producto,producto.id,producto.precio,producto.imagen,producto.categoria,producto.subCategoria,producto.ventas,producto.info))
        }
        pintarCards(arrProductos,cards);
    } catch (error) {
        console.error(error);
    }
};

function pintarCards(arr,id){
    for (const producto of arr) {
        let card = document.createElement('div');
        card.classList.add('item');
        card.classList.add('item-producto');
        card.setAttribute('id',`${producto.id}`);
        card.innerHTML = `
            <div class="imagen">
                <img loading="lazy" src="${producto.imagen}" alt="${producto.producto}" class="img">
            </div>
            <div class="info">
                <h3 class="nombre">${producto.producto}</h3>
                <p class="precio">$<span id="precio">${producto.precio}</span></p>
            </div>
        `;
        id.append(card);

        modalProducto('item-producto');
        mouse('item-producto');
    }
}

const btnProductos = document.getElementsByClassName('btn-verMas');
for (const boton of btnProductos) {
    boton.addEventListener('click', () => {
        seccCategorias.classList.add('active-categorias');
    })
}


/*
    Filtro cards
*/
const filtroCategoria = document.getElementById('filtroCategoria');
filtrado();
function filtrado(){
    filtroCategoria.innerHTML = "";

    fetch('script/json/api.json')
    .then((respuesta) => {
        return respuesta.json();
    }).then(data => {
        let categoria = data.map(producto => producto.categoria);
        pintarFiltro(sinRepetir(categoria));
    })
}

function pintarFiltro(categoria){
    for (const cat of categoria) {
        filtroCategoria.innerHTML += `
            <div class="bloque-filtro">
                <h2 class="h2-filtro">${cat}</h2>
                <ul class="contenido-filtro">

                </ul>
            </div>
        `;
        filtrar();
        mouseHover('h2-filtro');
    }
}

function mouseHover(mouse) {
    let bloques = [...document.getElementsByClassName(`${mouse}`)];
    bloques.forEach(bloque => {
        cursorP(bloque);
    })
}

let filtradoCards = [];
function filtrar() {
    let bloque = [...document.getElementsByClassName('bloque-filtro')];
    let h2 = [...document.getElementsByClassName('h2-filtro')];
    h2.forEach((cadaH2, i) => {
        h2[i].addEventListener('click', () => {
            bloque.forEach((cadaBloque, i) => {
                bloque[i].classList.remove('activo')
            })
            bloque[i].classList.add('activo')
            let cardCat = h2[i].innerHTML;
            let productoFiltro = arrProductos.filter(producto => producto.categoria == cardCat);
            let subCategoria = sinRepetir(productoFiltro.map(producto => producto.subCategoria));
            let contenidoFiltro = [...document.getElementsByClassName('contenido-filtro')];
            contenidoFiltro.innerHTML = "";
            for (const ul of contenidoFiltro) {
                ul.innerHTML = "";
                for (const subcat of subCategoria) {
                    ul.innerHTML += `
                    <li class="li-filtro">${subcat}</li>
                    `;
                }
            }
            cards.innerHTML = "";
            pintarCards(productoFiltro,cards);
            pintarSubFiltro(subCategoria,productoFiltro);
            mouseHover('li-filtro');
        })
    });
}

function pintarSubFiltro(subCategoria,productoFiltro){
    let subCat = document.getElementsByClassName('li-filtro');
    for (const li of subCat) {
        li.addEventListener('click', () => {
            for (const categoria of subCategoria) {
                if (categoria == li.innerHTML) {
                    let productoSubFiltro = productoFiltro.filter(producto => producto.subCategoria == categoria);
                    cards.innerHTML = "";
                    pintarCards(productoSubFiltro,cards);
                }
            }
        })
    }
}

function sinRepetir(lista){
    let unicos = [];
    lista.forEach(producto => {
        !unicos.includes(producto) ? unicos.push(producto) : null;
    });
    return unicos;
}


/*
    Carrito de compras
*/
const cantidadCarrito = document.getElementById('cntdCar');
const footerCarrito = document.getElementById('footer-carrito');

function cntdCarritoBtn(){
    let condi = Object.keys(carrito).length;
    cantidadCarrito.innerHTML = condi;
    condi == 0 ? cantidadCarrito.innerHTML = '' : null;
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
                <p class="p">Comienza a comprar!!</p>
            </div>
        `;
        containerCardsCarrito.append(carritoVacio);
    }
}

function pintarFooterCarrito(){
    carrito.length > 0 ? footerCarrito.classList.add('active') : null;
    const cantidadFooterCarrito = document.getElementById('cantidad-footerCarrito');
    const totalFooterCarrito = document.getElementById('total-footerCarrito');
    let cantidad = [...document.getElementsByClassName('input-cantidad')];
    let subTotal = [...document.getElementsByClassName('subTotal')];

    function operacionSuma(append,arr){
        let sum = 0;
        for (const item of arr) {
            let num = parseInt(item.innerHTML);
            let res = sum += num;
            append.innerHTML = res;
        }
    }
    operacionSuma(cantidadFooterCarrito,cantidad);
    operacionSuma(totalFooterCarrito,subTotal);
    carrito.length <= 0 ? footerCarrito.classList.remove('active') : null;
}

const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
    carrito = [];
    localStorage.removeItem('productosCarrito');
    pintarCarrito(carrito);
    carritoVacioNot();
    pintarFooterCarrito();
    cntdCarritoBtn();
})

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
        pintarFooterCarrito();
        localStoraP();
        Toastify({
            text: `Se añadió al carrito`,
            duration: 3000,
            gravity: "bottom",
            style: {
                background: "#474747"
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
                <h3 class="nombre">${producto.producto}</h3>
            </div>
            <div class="cantidad">
                <button class="button remove" id="${producto.id}remove">-</button>
                <p class="input-cantidad" id="${producto.id}cantidad">${producto.cantidad}</p>
                <button class="button add" id="${producto.id}add">+</button>
            </div>
            <div class="precio">
                <p class="p total">$${producto.precio}</span></p>
                <p class="p subtotal">$<span class="subTotal" id="${producto.id}subTotal">${producto.precio}</span></p>
            </div>
            <button class="delete" title="Eliminar producto del carrito" id="${producto.id}delete"><i class="fas fa-trash-alt"></i></button>
        `;
        containerCardsCarrito.append(cardCarrito);
        cantidad(producto);
        pintarFooterCarrito();
    }
}

function cantidad(data) {
    const add = document.getElementById(`${data.id}add`);
    const remove = document.getElementById(`${data.id}remove`);
    const pCantidad = document.getElementById(`${data.id}cantidad`);
    const subTotal = document.getElementById(`${data.id}subTotal`);
    const cardProductoCarrito = document.getElementById(`${data.id}cardProducto`);
    const eliminar = document.getElementById(`${data.id}delete`);
    pintarFooterCarrito();

    function eliminarProducto(){
        data.cantidad = 0;
        if (data.cantidad == 0 && data.cantidad < 1) {
            let index = carrito.indexOf()
            carrito.splice(index, 1);
        }
    }

    eliminar.addEventListener('click', () => {
        cardProductoCarrito.remove();
        eliminarProducto();
        carritoVacioNot();
        localStoraP();
        pintarFooterCarrito();
        carrito.length <= 0 ? footerCarrito.classList.remove('active') : null;
    })


    let opSubPrecio = data.cantidad * data.precio;
    subTotal.innerHTML = opSubPrecio;

    add.addEventListener('click', () => {
        opCantidad = (data.cantidad++) + 1;
        opSubPrecio = opCantidad * data.precio;
        pCantidad.innerHTML = opCantidad;
        subTotal.innerHTML = opSubPrecio;
        localStoraP();
        pintarFooterCarrito();
    })
    remove.addEventListener('click', () => {
        opCantidad = (data.cantidad--) - 1;
        opSubPrecio = opCantidad * data.precio;
        pCantidad.innerHTML = opCantidad;
        subTotal.innerHTML = opSubPrecio;
        pintarFooterCarrito();

        if (pCantidad.innerHTML < '1') {
            cardProductoCarrito.remove();
            eliminarProducto();
            pintarFooterCarrito();
        }
        carritoVacioNot();
        localStoraP();
    })
}

if ('productosCarrito' in localStorage) {
    pintarFooterCarrito();
    const produGuardados = JSON.parse(localStorage.getItem('productosCarrito'));
    for (const producto of produGuardados) {
        carrito.push(producto);
    }
    pintarCarrito(carrito);
}

pintarFooterCarrito();
carritoVacioNot();
cntdCarritoBtn();


/*
    Seccion de populares
*/

const containerCardsPopulares = document.getElementById('container-cards-populares');
const containerCardsPopularesModal = document.getElementById('container-pop-modal');
const respuestaPop = async () => {
    try {
        const respuesta = await fetch('script/json/api.json');
        const data = await respuesta.json();
        for (const producto of data) {
            arrPopulares.push(producto);
        }
        populares(arrPopulares);
    } catch (error) {
        console.log(error)
    }
}

function populares(array){
    let arrPop = array.sort(function(a,b){
        if(a.ventas > b.ventas){
            return -1;
        }
        if(a.ventas < b.ventas){
            return 1;
        }
        return 0;
    }).splice(0,4);
    pintarPop(arrPop,containerCardsPopulares);
    pintarPop(arrPop,containerCardsPopularesModal);
}

function pintarPop(populares,id){
    id.innerHTML = '';
    for (const item of populares) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id',`${item.id}`);
        card.innerHTML = `
            <div class="img-card">
                <img loading="lazy" src="${item.imagen}" alt="${item.nombre}" class="img">
            </div>
            <div class="info-card">
                <h3 class="h3">${item.producto}</h3>
                <p class="p">$<span>${item.precio}</span></p>
                <p class="ventas">Vendidos: <span>${item.ventas}</span></p>
            </div>
        `;
        id.append(card);
    }
    modalProducto('card');
    mouse('card');
}


/*
    Cursor personalizado
*/
let innerCursor = document.getElementById('inner-cursor');
let outerCursor = document.getElementById('outer-cursor');

document.addEventListener('mousemove',moveCursor)

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
}

const title = document.querySelector('h1');
const links = Array.from(document.querySelectorAll('a'));
const button = Array.from(document.querySelectorAll('button'));

function cursorP(param){
    param.addEventListener('mousemove', () => {
        innerCursor.classList.add('grow');
    })
    param.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow');
    })
}
cursorP(title);

links.forEach(link => {
    cursorP(link);
})

button.forEach(boton => {
    cursorP(boton);
})

function mouse(param){
    let items = [...document.getElementsByClassName(param)]
    items.forEach(item => {
        cursorP(item);
    })
}