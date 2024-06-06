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
        "descricao": "Um relaxante simulador de vida em uma ilha deserta, onde os jogadores podem construir, decorar e interagir com amigos e personagens adoráveis em um ambiente acolhedor e cheio de possibilidades.",
        "imagem": "https://cdn.cdkeys.com/500x706/media/catalog/product/f/i/fifa-22-pc-game-origin-cover_14_.jpg",
        "classificacao_etaria": "Para maiores de 3 anos"
    },
    {
        "id": 3,
        "nome": "Hades",
        "plataforma": "Playstation 5",
        "preco": 89.90,
        "estoque": 40,
        "descricao": "Uma emocionante jornada de ação e aventura no submundo, onde os jogadores desafiam perigos, obtêm poderes divinos e buscam a redenção de Zagreu, filho de Hades.",
        "imagem": "https://media.wired.com/photos/5f6cf5ec6f32a729dc0b3a89/master/w_1600%2Cc_limit/Culture_inline_Hades_PackArt.jpg",
        "classificacao_etaria": "Para maiores de 12 anos"
    },
    {
        "id": 4,
        "nome": "Suicide Squad: Kill The Justice League",
        "plataforma": "Playstation 4",
        "preco": 259.90,
        "estoque": 30,
        "descricao": "Um eletrizante jogo de ação onde os jogadores integram a Suicide Squad em uma missão arriscada para derrubar a Liga da Justiça, enfrentando desafios épicos e reviravoltas surpreendentes.",
        "imagem": "https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2021/09/dd5635903fa5547dec0d8a19b27ef13b-1.jpeg",
        "classificacao_etaria": "Para maiores de 14 anos"
    },
    {
        "id": 5,
        "nome": "Marvel Spider Man",
        "plataforma": "Playstation 5",
        "preco": 229.90,
        "estoque": 10,
        "descricao": "Explore Nova York como o lendário herói aracnídeo em uma emocionante aventura de ação, onde os jogadores enfrentam vilões clássicos, balançam pela cidade e protegem os inocentes.",
        "imagem": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9c13725-c5c3-49f8-be82-92147e347045/dcya5nm-04a41370-556e-438b-a222-d6f805d13a24.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U5YzEzNzI1LWM1YzMtNDlmOC1iZTgyLTkyMTQ3ZTM0NzA0NVwvZGN5YTVubS0wNGE0MTM3MC01NTZlLTQzOGItYTIyMi1kNmY4MDVkMTNhMjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yhZhz_9tYWttUOkkbTYLfk8_DHwCuwynPNNwbOBDlBE",
        "classificacao_etaria": "Para maiores de 14 anos"
    },
    {
        "id": 6,
        "nome": "Need For Speed: Heat",
        "plataforma": "Playstation 5",
        "preco": 229.90,
        "estoque": 10,
        "descricao": "Entre no mundo das corridas clandestinas em Palm City, onde os jogadores desafiam autoridades e rivais em uma busca pela glória nas ruas, personalizando carros e dominando as pistas.",
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/f/f1/Need_for_Speed_Heat_capa.png",
        "classificacao_etaria": "Para maiores de 13 anos"
    },
    {
        "id": 7,
        "nome": "Dark Souls II",
        "plataforma": "Playstation 5",
        "preco": 229.90,
        "estoque": 25,
        "descricao": "Enfrente grandes monstros em um mundo no estilo Soul, onde se você morrer ira ter que recomeçar tudo do zero",
        "imagem": "https://i.pinimg.com/736x/ee/3e/cd/ee3ecd3445b0c6596a78569d1f8da7a6.jpg",
        "classificacao_etaria": "Para maiores de 14 anos"
    },
    {
        "id": 8,
        "nome": "Need For Speed: Unbound",
        "plataforma": "Playstation 5",
        "preco": 199.89,
        "estoque": 20,
        "descricao": "Supere seus adversários nas corridas de rua em Lakeshore, ao longo de semanas as corridas acontecem e os competidores precisam pôr à prova suas habilidades para ganhar dinheiro e despistar a polícia com seus carros",
        "imagem": "https://www.codesproduit.fr/wp-content/uploads/2022/12/NFS-UNBOUND-PC-COVER.jpg",
        "classificacao_etaria": "Para maiores de 13 anos"
    },
    {
        "id": 9,
        "nome": "Ghost of Tsushima",
        "plataforma": "Playstation 4",
        "preco": 146.95,
        "estoque": 25,
        "descricao": "É ambientado na ilha de Tsushima durante o século XIII, época onde o império assolava a ásia, conquistando territórios e destruindo qualquer inimigo pela frente. A ilha é invadida por Khotun Khan, um general fictício fortemente inspirado pelo poderoso Kublai Khan",
        "imagem": "https://assetsio.gnwcdn.com/co2crj.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        "classificacao_etaria": "Para maiores de 13 anos"
    },

];


export default produtos;