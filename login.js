function loginUser() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var loggedInUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (loggedInUser) {
        localStorage.setItem("acesso", true);
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        alert("Login bem-sucedido!");
        // Redirecionar para a página inicial
        window.location.href = "paginaInicial.html";
    } else {
        alert("Credenciais inválidas. Por favor, tente novamente.");
    }  
    
}
