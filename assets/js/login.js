function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Obtém os usuários salvos no localStorage
    let savedUsers = localStorage.getItem('users');
    savedUsers = savedUsers ? JSON.parse(savedUsers) : [];

    // Verifica se há um usuário com o nome de usuário fornecido e senha correspondente
    let foundUser = savedUsers.find(function (user) {
        return user.username === username && user.password === password;
    });

    // Usuario mockado
    if (foundUser || (username === 'admin' && password === 'admin')) {
        // Armazena o usuário logado no localStorage
        localStorage.setItem('loggedUser', JSON.stringify(foundUser || { username: 'admin', name: 'Admin' }));

        // Redireciona o usuário para a página de perfil após o login bem-sucedido
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }

    // Adiciona um ouvinte de evento de teclado ao campo de senha
    document.getElementById('password').addEventListener('keyup', function (event) {
        // Verifica se a tecla pressionada foi 'Enter' (código 13)
        if (event.keyCode === 13) {
            // Chama a função login() quando 'Enter' for pressionado
            login();
        }
    });
}