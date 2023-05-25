let http = new XMLHttpRequest();

http.open('get', 'museus.json', true);
let museus;
http.send();

http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		 museus = JSON.parse(this.responseText);

		let output = "";

		for(let item of museus){
			output += `
      <div class="row pt-5">
  <div class="col-12 col-md-6 text-center" style="padding-right: 10px;">
    <img src="${item.image}" alt="" class="img-fluid" style="max-width: 369px; height: auto;">
  </div>
  <div class="col-12 col-md-6 pt-3 text-left" style="left: -50px">
    <div class="row">
      <div class="col-12">
        <p style="font-size: 30px;"><strong>${item.title}</strong></p>
      </div>
    </div>
    <div class="row text-center">
      <p style="font-size: 15px;">${item.distancia} &emsp;&emsp;&emsp;&emsp;&emsp;<i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
      </p>
    </div>
    <div class="row text-left">
      <p style="font-size: 16px;">${item.descricao}</p>
    </div>
    <div class="row text-left">
      <p style="font-size: 15px;"> <i class="bi bi-telephone-fill"></i>&emsp;<strong>${item.telemovel}</strong></p>
    </div>
  </div>
</div>

    

		`;
		}

		document.querySelector(".museus").innerHTML = output;
	}
} 

const checkboxes = document.querySelectorAll('.categoria');
checkboxes.forEach(checkbox => checkbox.addEventListener('change', filtrarMuseus));

function filtrarMuseus() {
  const categoriasSelecionadas = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
  
  const museusFiltrados = museus.filter(museu => {
    if (categoriasSelecionadas.length === 0) {
      return true; // Mostrar todos se nenhuma categoria estiver selecionada
    } else {
      return categoriasSelecionadas.includes(museu.categoria);
    }
  });

  exibirMuseus(museusFiltrados);
}

function exibirMuseus(museus) {
  let output = "";

  for (let item of museus) {
    output += `
      <div class="row pt-5">
        <div class="col-12 col-md-6 text-center" style="padding-right: 10px;">
          <img src="${item.image}" alt="" class="img-fluid" style="max-width: 369px; height: auto;">
        </div>
        <div class="col-12 col-md-6 pt-3 text-left" style="left: -50px">
          <div class="row">
            <div class="col-12">
              <p style="font-size: 30px;"><strong>${item.title}</strong></p>
            </div>
          </div>
          <div class="row text-center">
            <p style="font-size: 15px;">${item.distancia} &emsp;&emsp;&emsp;&emsp;&emsp;<i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star"></i>
            </p>
          </div>
          <div class="row text-left">
            <p style="font-size: 16px;">${item.descricao}</p>
          </div>
          <div class="row text-left">
            <p style="font-size: 15px;"> <i class="bi bi-telephone-fill"></i>&emsp;<strong>${item.telemovel}</strong></p>
          </div>
        </div>
      </div>
    `;
  }

  document.querySelector(".museus").innerHTML = output;
}


