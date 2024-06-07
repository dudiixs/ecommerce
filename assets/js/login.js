let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario');
    let senha = document.querySelector('#senha');
    let msgError = document.querySelector('#msgError');
    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    let userValid = listaUser.find(item => item.userCad === usuario.value && item.senhaCad === senha.value);
    console.log(userValid)

    if (userValid) {
        // Limpa mensagem de erro e estilos
        msgError.style.display = 'none';
        usuario.style.borderColor = '';
        senha.style.borderColor = '';

        // Define o usuário como logado
        localStorage.setItem('auth', JSON.stringify(userValid));

        // Gera um token aleatório
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
        localStorage.setItem('token', token);

        // Redireciona para a página principal
        window.location.href = '/index.html';
    } else {
        // Exibe mensagem de erro e estilos indicando erro
        msgError.style.display = 'block';
        msgError.innerHTML = 'Usuário ou senha incorretos';
        usuario.style.borderColor = 'red';
        senha.style.borderColor = 'red';
        usuario.focus();
    }
}