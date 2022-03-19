document.addEventListener('DOMContentLoaded', () => {
    pintarCards(arrProductos);
})

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
                <p class="envio">Envio gratis</p>
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