function registerUser() {
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password
    };

    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro bem-sucedido! Agora você pode fazer login.");

    // Redirecionar para a página de login, se necessário
    window.location.href = "login.html";

}