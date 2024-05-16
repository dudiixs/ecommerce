import catalogo from './catalogo.js'; // Importa o catálogo de produtos

// Função para renderizar os produtos no catálogo
function renderizarProdutosNoCatalogo() {
    const catalogoContainer = document.querySelector('.catalogo');

    if (!catalogoContainer) {
        console.error("Elemento '.catalogo' não encontrado no DOM.");
        return;
    }

    catalogo.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const imagem = document.createElement('img');
        // imagem.src = produto.imagem; // Supondo que você tenha a URL da imagem no objeto do produto
        imagem.alt = produto.nome;

        const nome = document.createElement('h3');
        nome.textContent = produto.nome;

        const plataforma = document.createElement('p');
        // plataforma.textContent = `Plataforma: ${produto.plataforma}`; // Se houver informações sobre a plataforma

        const preco = document.createElement('p');
        preco.textContent = `Preço: ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

        const descricao = document.createElement('p');
        descricao.classList.add('descricao');
        descricao.textContent = produto.descricao;

        const botao = document.createElement('button');
        botao.classList.add('btn-carrinho');
        botao.textContent = "Adicionar ao Carrinho";
        botao.dataset.id = produto.id;

        produtoDiv.appendChild(imagem);
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(plataforma);
        produtoDiv.appendChild(preco);
        produtoDiv.appendChild(descricao);
        produtoDiv.appendChild(botao);

        catalogoContainer.appendChild(produtoDiv);
    });
}

// Função para atualizar o contador do carrinho
window.atualizarContadorCarrinho = function () {
    const contador = document.getElementById('cart-counter');
    const produtosNoCarrinho = JSON.parse(localStorage.getItem('cart')) || [];
    contador.textContent = produtosNoCarrinho.length;
}
// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
    // Recuperar o carrinho do localStorage
    let actualCart = localStorage.getItem('cart');
    if (actualCart) {
        actualCart = JSON.parse(actualCart);
    }

    // Se o carrinho estiver vazio, inicializá-lo como um array vazio
    if (!actualCart) {
        actualCart = [];
    }

    // Verificar se o produto já está no carrinho
    const isProductInCart = actualCart.some(prod => prod.id === produto.id);

    if (!isProductInCart) {
        // Se o produto não estiver no carrinho, adicioná-lo com quantidade 1
        produto.quantity = 1;
        actualCart.push(produto);

        // Salvar o carrinho atualizado no localStorage
        localStorage.setItem('cart', JSON.stringify(actualCart));

        // Atualizar o contador do carrinho
        atualizarContadorCarrinho();

        return true; // Produto adicionado com sucesso
    } else {
        return false; // Produto já está no carrinho
    }
}

function renderizarProdutosNoCarrinho() {
    const carrinhoContainer = document.querySelector('.carrinho-container');

    // Limpa o conteúdo atual do carrinho
    carrinhoContainer.innerHTML = '';

    // Recupera os produtos do carrinho do localStorage
    const produtosNoCarrinho = JSON.parse(localStorage.getItem('cart')) || [];

    // Renderiza os produtos em forma de cards
    produtosNoCarrinho.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Adiciona a imagem do produto ao card
        const imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;
        card.appendChild(imagem);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const nome = document.createElement('h4');
        nome.textContent = produto.nome;
        cardContent.appendChild(nome);

        const preco = document.createElement('p');
        preco.textContent = `Preço: ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        cardContent.appendChild(preco);

        card.appendChild(cardContent);

        carrinhoContainer.appendChild(card);
    });

    // Atualiza o contador do carrinho
    atualizarContadorCarrinho();
}




// Event listener para os botões "Adicionar ao Carrinho"
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-carrinho")) {
        const id = event.target.dataset.id; // Obtém o ID do produto do atributo 'data-id'
        const produto = catalogo.find(p => p.id === id);
        adicionarAoCarrinho(produto);
        renderizarProdutosNoCarrinho(); // Renderiza os produtos no carrinho após adicionar um novo
    }
});

// Chamada das funções para renderizar produtos no catálogo e no carrinho quando a página é carregada
document.addEventListener('DOMContentLoaded', function () {
    renderizarProdutosNoCatalogo();
    renderizarProdutosNoCarrinho();
});
