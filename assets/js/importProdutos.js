import produtos from './catalogo.js';

document.addEventListener('DOMContentLoaded', function () {
    const catalogo = document.querySelector('.catalogo');

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
        botao.classList.add('btn-carrinho');
        botao.innerHTML = "Adicionar ao Carrinho";

        // Função do botão
        botao.onclick = function () {
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

                // Atualizar a quantidade de itens no carrinho no console (ou na interface, conforme necessário)
                console.log(JSON.parse(localStorage.getItem('cart')));
            } else {
                // Produto já está no carrinho, exibir uma mensagem ou realizar outra ação
                alert("Este produto já está no carrinho!");
            }

            const contador = document.getElementById('cart-counter');
            const produtosNoCarrinho = JSON.parse(localStorage.getItem('cart')) || [];
            contador.textContent = produtosNoCarrinho.length;

            console.log(produtosNoCarrinho.length)
        }

        // Adicionar o botão ao DOM (exemplo, você pode ter um local específico para isso)
        document.body.appendChild(botao);



        produtoDiv.appendChild(imagem);
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(plataforma);
        produtoDiv.appendChild(preco);
        produtoDiv.appendChild(descricao);
        produtoDiv.appendChild(botao);

        catalogo.appendChild(produtoDiv);
    });
});
