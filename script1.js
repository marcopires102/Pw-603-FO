let http = new XMLHttpRequest();

http.open('get', 'museus.json', true);

http.send();

http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		let museus = JSON.parse(this.responseText);

		let output = "";

		for(let item of museus){
			output += `
          <div class="row pt-5">
            <div class="col-2 col-md-7 text-center style="padding-right="10px">
              <img src="${item.image}" alt="" class="img-fluid" style="width: 369px; height-auto: 249px;">
            </div>
            <div class="col-10 col-md-5 pt-5 text-left ">
              <div class="row">
                <div class="col-12">
                  <p style="font-size: 40x;"><strong>${item.title}</strong></p>
                </div>
              </div>
              <div class="row text-center ">
                
                  <p style="font-size: 11px;">${item.distancia} &emsp;&emsp;&emsp;&emsp;&emsp;<i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i></p>
                  
                
              </div>
              <div class="row text-left">
                <p style="font-size: 10px;">${item.descricao}</p>
              </div>
              <div class="row text-center ">
                <p style="font-size: 11px;"> <i class="bi bi-telephone-fill"></i>&emsp;<strong>${item.telemovel}</strong></p>
            

              </div>
            </div>
          </div>

		`;
		}

		document.querySelector(".museus").innerHTML = output;
	}
} 
