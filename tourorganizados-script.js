let http = new XMLHttpRequest();

http.open('get', 'tourorganizados.json', true);
let tourorganizados;
http.send();

http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		 tourorganizados = JSON.parse(this.responseText);

		let output = "";

		for(let item of tourorganizados){
			output += `
            <div class="container-tours">
            <div class="row gx-0 justify-content-center">
              <div class="col-md-3 image-column">
                <img src="${item.image}" alt="Imagem">
              </div>
  
              <div class="col-md-3 gray-column">
                <h3>${item.title}</h3>
                <p>${item.descricao}</p>
              </div>
  
              <div class="col-md-2 blue-column">
                <h1>${item.preco}</h1>
                <p>/por pessoa</p>
                <div class="d-flex justify-content-center">
                    <a href="${item.pagina}"<button class="btn btn-outline-light custom-button" alt="">Ver Tour</button></a>
                  </div>
              </div>
            </div>
  
          </div>

    

		`;
		}

		document.querySelector(".tourorganizados").innerHTML = output;
	}
} 

