var logado = false;

if(localStorage.getItem("acesso") == "true"){
    logado = true;
    console.log('entrou');
}

if(logado != true){
    console.log('voce nao esta autenticado!');
}