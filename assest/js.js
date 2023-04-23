const menuDiv = document.querySelector('div.menu_mobile')
const btnanimar = document.querySelector('div.hambuguer')

menuDiv.addEventListener('click', abrir)

function abrir(){
    menuDiv.classList.toggle('abrir')
    menuDiv.classList.toggle('ativo')
}