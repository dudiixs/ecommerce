// Função para atualizar a contagem do carrinho na navbar
function updateCartCount() {
    let actualCart = localStorage.getItem('cart');
    let count = 0;

    if (actualCart) {
        actualCart = JSON.parse(actualCart);
        count = actualCart.length;
    }

    document.getElementById('cart-count').textContent = count;

    // Adiciona ou remove a classe 'has-items' na aba do carrinho conforme a contagem
    const cartTab = document.querySelector('.cart-tab');
    if (count > 0) {
        cartTab.classList.add('has-items');
    } else {
        cartTab.classList.remove('has-items');
    }
}
