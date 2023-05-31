function loadNavbar2() {
    const navbarContainer = document.querySelector('#navbar-container');
    navbarContainer.innerHTML = `
    <!--- navbar --->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <a class="navbar-brand" href="paginaInicial.html" style="padding-left: 60px;">
      <img src="Imagens/headers/logobranco3.png" alt="Logo" width="190" height="85" class="d-inline-block align-text-center">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="tourorganizados.html" >Planear Rota</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Descobrir Braga
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="porquebraga.html">Porquê Braga</a></li>
            <li><a class="dropdown-item" href="alojamentos.html">Alojamentos</a></li>
            <li><a class="dropdown-item" href="bares.html">Bares</a></li>
            <li><a class="dropdown-item" href="museus.html">Museus</a></li>
            <li><a class="dropdown-item" href="restaurantes.html">Restaurantes</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Informações
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="informacoesuteis.html">Informações Úteis</a></li>
            <li><a class="dropdown-item" href="rent.html">Rent-A-Car</a></li>
            <li><a class="dropdown-item" href="sobrenos.html">Sobre Nós</a></li>
            <li><a class="dropdown-item" href="contactos.html">Contacta-nos</a></li>              
          </ul>
        </li>
        <li class="nav-item dropdown" style="padding-right: 80px;">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="Imagens/headers/perfil-navbar.png" alt="" width="20px" height="20px">
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="perfil.html">Perfil</a></li>
              <li><a class="dropdown-item" href="paginaInicial.html" id="logout-button">Logout</a></li>
                          
            </ul>
          </li>
      </ul>
    </div>
  </nav>
    
    `;

    var logoutLink = document.getElementById('logout-button');

    // Adicione um evento de clique ao elemento de logout
    logoutLink.addEventListener('click', () => {
        // Defina o estado de login como false (usuário deslogado)
        // Substitua esta linha com sua lógica de logout real
        localStorage.removeItem("acesso");

        // Redirecione o usuário para a página de login
        window.location.href = 'paginaInicial.html';
    });


    //scroll
    const navE1 = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navE1.classList.add('navbar-scrolled');
        } else if (window.scrollY < 56) {
            navE1.classList.remove('navbar-scrolled');
        }
    });

}

