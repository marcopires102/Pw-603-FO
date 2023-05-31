// Evento de carga da página
window.addEventListener("DOMContentLoaded", function() {
    // Recuperar o usuário logado do localStorage
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Verificar se há um usuário logado
    if (loggedInUser) {
        // Preencher as informações do usuário no formulário
        document.getElementById("username").value = loggedInUser.username;
        document.getElementById("email").value = loggedInUser.email;
        document.getElementById("password").value = loggedInUser.password;

        document.getElementById("loggedInUsername").textContent = loggedInUser.username;
        
    } else {
        // Redirecionar para a página de login se não houver usuário logado
        window.location.href = "login.html";
    }
});

// Manipular o envio do formulário
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio padrão do formulário

    // Obter os valores atualizados do formulário
    var updatedUser = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    // Atualizar as informações do usuário no localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    alert("Perfil atualizado com sucesso!");

    // Redirecionar para a página inicial ou qualquer outra página após a atualização
    window.location.href = "paginaInicial.html";
});