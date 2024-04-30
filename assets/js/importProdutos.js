document.addEventListener('DOMContentLoaded', function () {
    const catalogo = document.querySelector('.catalogo');

    const produtos = [
        {
            "id": 1,
            "nome": "The Legend of Zelda: Breath of the Wild",
            "plataforma": "Nintendo Switch",
            "preco": 199.99,
            "estoque": 50,
            "descricao": "Um jogo de ação e aventura que se passa em um mundo aberto expansivo, onde os jogadores podem explorar livremente a paisagem, lutar contra inimigos, completar missões e resolver quebra-cabeças.",
            "imagem": "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
            "classificacao_etaria": "Para maiores de 10 anos"
        },
        {
            "id": 2,
            "nome": "Animal Crossing New Horizons",
            "plataforma": "Nintendo Switch",
            "preco": 329.90,
            "estoque": 30,
            "descricao": "O mais recente jogo da série FIFA, com gráficos aprimorados, modos de jogo emocionantes e uma jogabilidade aprimorada para proporcionar uma experiência de futebol autêntica.",
            "imagem": "https://cdn.cdkeys.com/500x706/media/catalog/product/f/i/fifa-22-pc-game-origin-cover_14_.jpg",
            "classificacao_etaria": "Para maiores de 3 anos"
        },
        {
            "id": 3,
            "nome": "Hades",
            "plataforma": "Playstation 5",
            "preco": 89.90,
            "estoque": 40,
            "descricao": "~~~~~~~~~~~~~~~~",
            "imagem": "https://media.wired.com/photos/5f6cf5ec6f32a729dc0b3a89/master/w_1600%2Cc_limit/Culture_inline_Hades_PackArt.jpg",
            "classificacao_etaria": "Para maiores de 18 anos"
        },
        {
            "id": 4,
            "nome": "Suicide Squad: Kill The Justice League",
            "plataforma": "Playstation 4",
            "preco": 259.90,
            "estoque": 30,
            "descricao": "Um jogo de tiro em primeira pessoa gratuito e online, onde os jogadores podem competir em partidas multiplayer intensas em diversos modos de jogo.",
            "imagem": "https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2021/09/dd5635903fa5547dec0d8a19b27ef13b-1.jpeg",
            "classificacao_etaria": "Para maiores de 18 anos"
        },
        {
            "id": 5,
            "nome": "Marvel Spider Man",
            "plataforma": "Playstation 5",
            "preco": 229.90,
            "estoque": 10,
            "descricao": "Um jogo de tiro em primeira pessoa gratuito e online, onde os jogadores podem competir em partidas multiplayer intensas em diversos modos de jogo.",
            "imagem": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9c13725-c5c3-49f8-be82-92147e347045/dcya5nm-04a41370-556e-438b-a222-d6f805d13a24.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U5YzEzNzI1LWM1YzMtNDlmOC1iZTgyLTkyMTQ3ZTM0NzA0NVwvZGN5YTVubS0wNGE0MTM3MC01NTZlLTQzOGItYTIyMi1kNmY4MDVkMTNhMjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yhZhz_9tYWttUOkkbTYLfk8_DHwCuwynPNNwbOBDlBE",
            "classificacao_etaria": "Para maiores de 18 anos"
        },
    ];

    //console.log(localStorage)

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        const nome = document.createElement('h3');
        nome.textContent = produto.nome;

        const plataforma = document.createElement('p');
        plataforma.textContent = `Plataforma: ${produto.plataforma}`;

        const preco = document.createElement('p');
        preco.textContent = `Preço: ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

        const descricao = document.createElement('p');
        descricao.classList.add('descricao');
        descricao.textContent = produto.descricao;

        const botao = document.createElement('BUTTON');
        botao.classList.add('btn-carrinho')
        botao.innerHTML = "Adicionar ao Carrinho"


        // Função botão
        botao.onclick = function () {
            //Criação variavel do carrinho
            let actualCart = localStorage.getItem('cart');

            if (actualCart) {
                actualCart = JSON.parse(actualCart);
            }

            if (!actualCart) {
                actualCart = [];
            }

            const existentId = actualCart.find(prod => prod.id == produto.id);

            if (existentId) {
                return
            }

            actualCart.push(produto);
            localStorage.setItem('cart', JSON.stringify(actualCart));
            console.log(JSON.parse(localStorage.cart))
        }

        produtoDiv.appendChild(imagem);
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(plataforma);
        produtoDiv.appendChild(preco);
        produtoDiv.appendChild(descricao);
        produtoDiv.appendChild(botao);

        catalogo.appendChild(produtoDiv);
    });
});
