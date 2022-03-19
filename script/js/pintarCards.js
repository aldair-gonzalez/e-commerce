document.addEventListener('DOMContentLoaded', () => {
    peticion();
})

const peticion = async () => {
    try {
        const respuesta = await fetch('script/json/api.json');
        let data = await respuesta.json();
        for (const producto of data) {
            arrProductos.push(new Producto(producto.producto,producto.id,producto.precio,producto.imagen,producto.categoria,producto.subCategoria,producto.ventas,producto.info))
        }
        pintarCards(arrProductos);
    } catch (error) {
        console.error(error);
    }
};

const cards = document.getElementById('cards');
function pintarCards(arr){
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
                <p class="nombre">${producto.producto}</p>
                <p class="precio">$<span id="precio">${producto.precio}</span></p>
            </div>
        `;
        cards.append(card);

        modalProducto();
        mouse();
    }
}

const btnProductos = document.getElementsByClassName('btn-verMas');
for (const boton of btnProductos) {
    boton.addEventListener('click', () => {
        seccCategorias.classList.add('active-categorias');
    })
}