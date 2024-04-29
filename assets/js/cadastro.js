function signup() {
    let newName = document.getElementById('newName').value;
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;

    // Obtém os usuários salvos no localStorage
    let savedUsers = localStorage.getItem('users');
    savedUsers = savedUsers ? JSON.parse(savedUsers) : [];

    // Verifica se já existe um usuário com o mesmo nome de usuário
    let existingUser = savedUsers.find(function (user) {
        return user.username === newUsername;
    });

    if (existingUser) {
        alert('Usuário já cadastrado. Por favor, escolha outro nome de usuário.');
        return;
    }

    // Cria um novo objeto de usuário com nome, usuário e senha
    let newUser = {
        name: newName,
        username: newUsername,
        password: newPassword
    };

    // Adiciona o novo usuário à lista de usuários salvos
    savedUsers.push(newUser);

    // Salva a lista atualizada de usuários de volta no localStorage
    localStorage.setItem('users', JSON.stringify(savedUsers));

    alert('Cadastro realizado com sucesso!');

    // Redireciona o usuário de volta para a página de login após o cadastro bem-sucedido
    window.location.href = 'login.html';
}