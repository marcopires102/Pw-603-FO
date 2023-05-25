let http = new XMLHttpRequest();

http.open('get', 'restaurantes.json', true);
let restaurantes;
http.send();

http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		 restaurantes = JSON.parse(this.responseText);

		let output = "";

		for(let item of restaurantes){
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
    <div class="row text-left pt-4">
    <a style="font-size: 18px;"><i class="bi bi-geo-alt-fill" style="font-size:25px;"></i>${item.localizacao}</a>

    </div>
    <div class="row text-left pt-5">
      <p style="font-size: 20px;"> <i class="bi bi-telephone-fill"></i>&emsp;${item.telemovel}</p>
    </div>
  </div>
</div>

    

		`;
		}

		document.querySelector(".restaurantes").innerHTML = output;
	}
} 

