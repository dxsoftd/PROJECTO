//ANIMAÇÕES JAVASCRIPT

//VARIÁVEIS
var icone1 = window.document.getElementById('iburger1')
var icone2 = window.document.getElementById('iburger2')
var escolha_entrar = window.document.getElementById('abrir')

//FUNÇÃO PARA AJUDAR NO FUNCIONAMENTO DO MENU
function size(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
        icone1.innerHTML = 'close'
        icone2.innerHTML = 'close'
    }
    else{
        itens.style.display = 'none'
        icone1.innerHTML = 'menu'
        icone2.innerHTML = 'menu'
    }
}

//FUNÇÃO PARA QUANDO CLICAR NO HAMBURGUIN APRESENTAR O MENU
function menu_openned(){
    if(div3.style.display == 'block'){
        div3.style.display = 'none'
        icone1.innerHTML = 'menu'
        icone2.innerHTML = 'menu'
    }
    else{
        div3.style.display = 'block'
        icone1.innerHTML = 'close'
        icone2.innerHTML = 'close'
    }
}