let http = new XMLHttpRequest();
http.open('get', 'rent.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let rent = JSON.parse(this.responseText);
      let output = "";
      for(let item of rent){
         output += `
            <div class="product">
               <img src="${item.image}" alt="">
               <p class="title">${item.title}</p>
               <p class="description"><strong>Website:</strong> ${item.website}</p>

            </div>
         `;
      }
      document.querySelector(".rent").innerHTML = output;
   }
}
