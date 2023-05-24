
let http = new XMLHttpRequest();

http.open('get', 'bares.json', true);

http.send();

http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		let bares = JSON.parse(this.responseText);

		let output = "";

		for(let item of bares){
			output += `
			<div class="row justify-content-center pt-5">
			<div class="col-10 col-md-6 text-end">
			  <img src="${item.image}" alt="" class="img-fluid" style="width: 369px; height: 249px;">
			</div>
			<div class="col-10 col-md-6">
			  <div class="row">
				<div class="col-2">
				  <p style="font-size: 40px;"><strong>${item.title}</strong></p>
				</div>
				<div class="col-3 pr-md-5 pt-1 pl-5 pt-3">
				  <img src="${item.estrelas}" alt="" class="img-fluid" >
				</div>
			  </div>
			  <div class="row pt-4">
				<div class="col-1 ">
				  <img src="${item.imglocalização}" alt="" style="width: 40px;" class="img-fluid">
				</div>
				<div class="col-3">
				  <p style="font-size: 21px;">${item.morada}</p>
				</div>
			  </div>
			</div>
		  </div>
		`;
		}

		document.querySelector(".bares").innerHTML = output;
	}
} 

