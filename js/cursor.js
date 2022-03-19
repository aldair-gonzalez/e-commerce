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

let title = document.querySelector('h1');
let links = Array.from(document.querySelectorAll('a'));
let button = Array.from(document.querySelectorAll('button'));

title.addEventListener('mousemove', () => {
    innerCursor.classList.add('grow');
})
title.addEventListener('mouseleave', () => {
    innerCursor.classList.remove('grow');
})

links.forEach(link => {
    link.addEventListener('mousemove', () => {
        innerCursor.classList.add('grow');
    })
    link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow');
    })
})

button.forEach(boton => {
    boton.addEventListener('mousemove', () => {
        innerCursor.classList.add('grow');
    })
    boton.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow');
    })
})

function mouse(){
    let cardPro = [...document.getElementsByClassName('item-producto')]
    cardPro.forEach(card => {
        card.addEventListener('mousemove', () => {
            innerCursor.classList.add('grow');
        })
        card.addEventListener('mouseleave', () => {
            innerCursor.classList.remove('grow');
        })
    })
}