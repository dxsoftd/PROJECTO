const itens = [

    {
        id:0,
        nome: 'agua - 100,00Kz',
        img: '../../img/agua.png',
        quantidade: 0
    },
    
    {
        id:1,
        nome: 'blue_laranja - 150,00Kz',
        img: '../../img/blue-laranja.png',
        quantidade: 0
    },
    
    {
        id:2,
        nome: 'lulu_manga - 150,00Kz',
        img: '../../img/lulu-manga2.png',
        quantidade: 0
    },
    
    {
        id:3,
        nome: 'red_cola - 150Kz',
        img: '../../img/red-cola2.png',
        quantidade: 0
    },

]

inicializarLoja = () =>  {
    var containerProdutos = document.getElementById('container_produtos');
    itens.map((val)=>{
        
        containerProdutos.innerHTML += `
            <div class = "produto">

                <div class = "imagem">
                    <img src = "`+val.img+`" />
                </div>

                <div class = "texto">
                    <p>`+val.nome+`</p>
                    <a key="`+val.id+`" href="#" id="add_carrinho">adicionar à lista<a/>
                </div>

            </div>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    itens.map((val)=>{
        if(val.quantidade > 0){
            containerCarrinho.innerHTML+= `
/
                <hr>
            `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var cont = 0; cont < links.length; cont++){
    links[cont].addEventListener("click",function(){

        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;

    })
}