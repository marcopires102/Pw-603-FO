let http = new XMLHttpRequest();

http.open('get', 'bares.json', true);
let bares;
http.send();

http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		 bares = JSON.parse(this.responseText);

		let output = "";

		for(let item of bares){
			output += `
      <div class="row pt-5">
  <div class="col-12 col-md-6 text-center" style="padding-right: 10px;">
    <img src="${item.image}" alt="" class="img-fluid" style="max-width: 369px; height: auto;">
  </div>
  <div class="col-12 col-md-6 pt-3 text-left" style="left: -50px">
    <div class="row">
      <div class="col-3">
        <p style="font-size: 30px;"><strong>${item.title}</strong>
        </p>
      </div>
      <div class="col-9 text-center pt-2">
      <p><i class="bi bi-star-fill" style="font-size: 19px; margin-left:157px;"></i>
      <i class="bi bi-star-fill" style="font-size: 19px;"></i>
      <i class="bi bi-star-fill" style="font-size: 19px;"></i>
      <i class="bi bi-star-fill" style="font-size: 19px;"></i>
      <i class="bi bi-star-fill" style="font-size: 19px;"></i><p>
      </div>
    </div>
    <div class="row text-left pt-4">
    <a style="font-size: 18px; text-decoration: none; color: black;" href="${item.link}"><i class="bi bi-geo-alt-fill" style="font-size:25px;"></i>&emsp;${item.localizacao}</a>

    </div>
  </div>
</div>

    

		`;
		}

		document.querySelector(".bares").innerHTML = output;
	}
} 