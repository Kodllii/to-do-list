document.getElementById("przyciskDodaj").addEventListener('click',function(){
    const nowyElement = document.getElementById('element').value.trim();
   console.log(nowyElement);
    
    if  (nowyElement !='')
    { 

      document.getElementById("komunikat").textContent = '';
      document.getElementById('listaZadan').innerHTML += '<li>' +nowyElement+ '</li>';
      document.getElementById('element').value = '';
    }
    else 
    {
      document.getElementById("komunikat").textContent = "uzupełnij pole!";
    }
      
      
      
  });
  document.getElementById('listaZadan').addEventListener('click', function(e) {
    const elementListy = e.target;
    this.removeChild(elementListy);
  });
  
  document.getElementById('przyciskDrukuj').addEventListener('click', function(){
    const obszarWydruku = document.getElementById("doWydrukowania").innerHTML;
    document.body.innerHTML = obszarWydruku;
    window.print();
    window.location.reload();
  });