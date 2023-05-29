
  // Função para carregar o footer
  function loadFooter() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'footer.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('footer-container').innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }

 



  
   
