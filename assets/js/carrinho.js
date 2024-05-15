// Função para atualizar o contador do carrinho com base nos itens armazenados no localStorage
function updateCartCounter() {
    let actualCart = localStorage.getItem('cart');
    if (actualCart) {
        actualCart = JSON.parse(actualCart);
        const totalItems = actualCart.reduce((sum, prod) => sum + prod.quantity, 0);
        cartCounter.textContent = totalItems;
    } else {
        cartCounter.textContent = 0;
    }
}

// Função do botão
botao.onclick = function () {
    // Seu código para adicionar um item ao carrinho...

    // Após adicionar o item ao carrinho, atualize o contador
    updateCartCounter();
}
