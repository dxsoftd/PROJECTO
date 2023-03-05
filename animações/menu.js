//ANIMAÇÕES JAVASCRIPT

//VARIÁVEIS
var icone = window.document.getElementById('iburger')

        //FUNÇÃO PARA AJUDAR NO FUNCIONAMENTO DO MENU
        function size(){
            if(window.innerWidth >= 768){
                itens.style.display = 'block'
                icone.innerHTML = 'close'
            }
            else{
                itens.style.display = 'none'
                icone.innerHTML = 'menu'
            }
        }

        //FUNÇÃO PARA QUANDO CLICAR NO HAMBURGUIN APRESENTAR O MENU
        function menu_openned(){
            if(menu.style.display == 'block'){
                menu.style.display = 'none'
                icone.innerHTML = 'menu'
            }
            else{
                menu.style.display = 'block'
                icone.innerHTML = 'close'
            }
        }
