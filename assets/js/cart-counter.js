// Função para atualizar o contador do carrinho
document.addEventListener('DOMContentLoaded', function () {
  const contador = document.getElementById('cart-counter');
  const produtosNoCarrinho = JSON.parse(localStorage.getItem('cart')) || [];
  contador.textContent = produtosNoCarrinho.length;

  console.log(produtosNoCarrinho.length)
});