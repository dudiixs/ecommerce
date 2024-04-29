// Função para obter o usuário logado do localStorage
function getUser() {
    let loggedUser = localStorage.getItem('loggedUser');
    return loggedUser ? JSON.parse(loggedUser) : null;
}

// Função para exibir o nome do usuário no perfil
function showUsername() {
    let user = getUser();
    if (user) {
        document.getElementById('username').innerText = user.name;
    }
}

// Função para fazer logout
function logout() {
    localStorage.removeItem('loggedUser');
    // Redireciona o usuário para a página de login após fazer logout
    window.location.href = 'login.html';
}

// Chamada para exibir o nome do usuário quando a página carrega
window.onload = function () {
    showUsername();
};