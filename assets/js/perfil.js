// Função para obter o usuário logado do localStorage
function getUser() {
    let loggedUser = localStorage.getItem('auth');
    return loggedUser ? JSON.parse(loggedUser) : null;
}

// Função para exibir o nome do usuário no perfil
function showUsername() {
    let user = getUser();
    console.log(user)
    if (user) {
        document.getElementById('username').innerText = user.nomeCad;
    } else {
        alert('Usuário não está logado.');  // Verificar se este alerta está sendo exibido
        // Redirecionar para página de login ou outra ação apropriada
        window.location.href = '/assets/html/login.html';
    }
}

// Chamada para exibir o nome do usuário quando a página carrega
window.onload = function () {
    showUsername();
};

// Função para alterar a senha do usuário
function changePassword() {
    // Mostra a mensagem e a imagem "Em Desenvolvimento"
    // showDevelopment();

    let oldPassword = document.getElementById('oldPassword').value;
    let newPassword = document.getElementById('newPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let user = getUser();
    const userPassword = user.senhaCad;

    if (!user) {
        alert('Usuário não está logado.');
        return false;
    }

    if (oldPassword !== userPassword) {
        alert('A senha atual não coincide.');
        return false;
    }

    if (newPassword !== confirmPassword) {
        alert('As novas senhas não coincidem.');
        return false;
    }

    user.senhaCad = newPassword;
    localStorage.setItem('auth', JSON.stringify({}));
    localStorage.setItem('listaUser', JSON.stringify([user]))
    alert('Senha alterada com sucesso.');
    window.location.href = '/assets/html/login.html';


    return false; // Previne o envio do formulário
}

// // Função para mostrar a mensagem e a imagem "Em Desenvolvimento"
// function showDevelopment() {
//     let developmentImg = document.querySelector('#development img');
//     let developmentText = document.querySelector('#development p');

//     developmentImg.style.display = 'block';
//     developmentText.style.display = 'block';
// }
