function loadFooter() {
    const footerContainer = document.querySelector('#footer-container');
    footerContainer.innerHTML = `
    <footer class="text-center text-lg-start  text-muted " style="background-color: rgb(226, 226, 226); margin-top: 50px;" id="footer-container">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-2 ">
      <!-- Left -->
      
      <!-- Right -->
    </section>
    <!-- Section: Social media -->
  
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-2">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h5 class="text-uppercase fw-bold mb-4">
              BRAGA Tourism
            </h5>
            <p>
            (+351 253 987 654)  <br><br> info@bragatourism.com <br><br> Azurém, Guimarães
            </p>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Planear Rota
            </h6>
            <p>
              <a href="tourorganizados.html" class="text-reset">Tours Organizados</a>
            </p>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Descobrir Braga
            </h6>
            <p>
              <a href="porquebraga.html" class="text-reset">Porquê Braga</a>
            </p>
            <p>
              <a href="alojamentos.html" class="text-reset">Alojamentos</a>
            </p>
            <p>
              <a href="bares.html" class="text-reset">Bares/Discotecas</a>
            </p>
            <p>
              <a href="museus.html" class="text-reset">Museus</a>
            </p>
            <p>
                <a href="restaurantes.html" class="text-reset">Restaurantes</a>
              </p>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
                Informaçoes
            </h6>
            <p>
                <a href="informacoesuteis.html" class="text-reset">Informações Uteis</a>
              </p>
              <p>
                <a href="rent.html" class="text-reset">Rent-A-Car</a>
              </p>
              <p>
                <a href="sobrenos.html" class="text-reset">Sobre Nós</a>
              </p>
              <p>
                <a href="contactos.html" class="text-reset">Contacta-nos</a>
              </p>
             
            
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>

      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.1);">
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="http://127.0.0.1:5500/paginaInicial.html#">BragaTourism.com</a>
      </div>
    </section>
    <!-- Section: Links  -->
  
    
  </footer>
    
    `;
  

}