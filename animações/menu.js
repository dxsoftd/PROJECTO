//ANIMAÇÕES JAVASCRIPT

        //FUNÇÃO PARA AJUDAR NO FUNCIONAMENTO DO MENU
        function size(){
            if(winodw.innerWidth >= 768){
                itens.style.display = 'block'
            }
            else{
                itens.style.display = 'none'
            }
        }

        //FUNÇÃO PARA QUANDO CLICAR NO HAMBURGUIN APRESENTAR O MENU
        function menu_openned(){
            if(menu.style.display == 'block'){
                menu.style.display = 'none'
            }
            else{
                menu.style.display = 'block'
            }
        }
