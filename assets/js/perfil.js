// Função para obter o usuário logado do localStorage
function getUser() {
    let loggedUser = localStorage.getItem('loggedUser');
    return loggedUser ? JSON.parse(loggedUser) : null;
}

// Função para exibir o nome do usuário no perfil
// function showUsername() {
//     let user = getUser();
//     if (user) {
//         document.getElementById('username').innerText = user.name;
//     } else {
//         alert('Usuário não está logado.');  // Verificar se este alerta está sendo exibido
//         // Redirecionar para página de login ou outra ação apropriada
//         window.location.href = '/assets/html/login.html';
//     }
// }

// Chamada para exibir o nome do usuário quando a página carrega
window.onload = function () {
    showUsername();
};

// Função para alterar a senha do usuário
function changePassword() {
    // Mostra a mensagem e a imagem "Em Desenvolvimento"
    showDevelopment();

    // Atualiza a senha do usuário (caso queira implementar a lógica de alteração de senha, adicione aqui)
    // Exemplo de código para atualizar a senha:
    /*
    let newPassword = document.getElementById('newPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let user = getUser();

    if (!user) {
        alert('Usuário não está logado.');
        return false;
    }

    if (newPassword !== confirmPassword) {
        alert('As novas senhas não coincidem.');
        return false;
    }

    user.password = newPassword;
    localStorage.setItem('loggedUser', JSON.stringify(user));
    alert('Senha alterada com sucesso.');
    window.location.href = '/assets/html/login.html';
    */

    return false; // Previne o envio do formulário
}

// Função para mostrar a mensagem e a imagem "Em Desenvolvimento"
function showDevelopment() {
    let developmentImg = document.querySelector('#development img');
    let developmentText = document.querySelector('#development p');

    developmentImg.style.display = 'block';
    developmentText.style.display = 'block';
}
