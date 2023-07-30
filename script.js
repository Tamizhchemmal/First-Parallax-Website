let text = document.getElementById('text')
let baloon = document.getElementById('baloon')
let trees = document.getElementById('trees')
let moon = document.getElementById('moon')


window.addEventListener('scroll',()=>{
    let value= window.scrollY;
    text.style.marginTop= value * 1.5 + 'px';
    baloon.style.left= value* -.5 + 'px';
})