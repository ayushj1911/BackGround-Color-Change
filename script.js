let red = document.getElementById("red");
let blue = document.getElementById("blue");
let black = document.getElementById("black");
let content = document.getElementById("content");

let body = document.body
// console.log(body);

function bRed() {
    body.style.backgroundColor = 'red'
    red.style.rotate = '90deg'
}

red.addEventListener('click', bRed)

function bgBlue() {
    body.style.backgroundColor = 'blue'
    blue.style.rotate = '90deg'
}

blue.addEventListener('click', bgBlue)

function bgBlack() {
    body.style.backgroundColor = 'black'
    content.style.color = 'white'
    black.style.rotate = '90deg'
}

black.addEventListener('click', bgBlack)