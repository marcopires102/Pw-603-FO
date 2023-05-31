var logado = false;

if(localStorage.getItem("acesso") == "true"){
    logado = true;
    console.log('entrou');
}

if(logado != true){

    console.log('voce nao esta autenticado!');

}

document.addEventListener("DOMContentLoaded", function() {
    var inscricaoButton = document.getElementById("inscricaoButton");
  
    var acesso = localStorage.getItem("acesso");
  
    if (!acesso) {
      inscricaoButton.style.display = "none";
    } else {
      inscricaoButton.style.display = "block";
    }
  });



