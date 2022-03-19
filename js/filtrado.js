const filtroCategoria = document.getElementById('filtroCategoria');
filtrado();
function filtrado(){
    filtroCategoria.innerHTML = "";
    let categoria = arrProductos.map(producto => producto.categoria);
    pintarFiltro(sinRepetir(categoria));
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
        bloque.addEventListener('mousemove', () => {
            innerCursor.classList.add('grow');
        })
        bloque.addEventListener('mouseleave', () => {
            innerCursor.classList.remove('grow');
        })
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
            pintarCards(productoFiltro);
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
                    pintarCards(productoSubFiltro);
                }
            }
        })
    }
}

function sinRepetir(lista){
    let unicos = [];
    lista.forEach(producto => {
        if(!unicos.includes(producto)){
            unicos.push(producto)
        }
    });
    return unicos;
}