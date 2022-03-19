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