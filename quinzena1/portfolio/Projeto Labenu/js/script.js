
//console.log("chamou js");

var enviar = document.querySelector("#botao-enviar");
 
enviar.addEventListener("click", function(){
  //console.log("enviar clicado");

  var email = document.querySelector("#input-email").value;
  var emailValido = false;
  
   // console.log(email);

  if(email.length > 0){

    

    for(var i = 0; i < email.length; i++){
      
      var letraEmail = email[i];
     // console.log(letraEmail);
      var arroba = "@";
                
      if(letraEmail == arroba){

        emailValido = true;
      }     
    }

    if(emailValido == true){
      alert("Email válido\nBem-vindo " + email);
    }else{
      alert("Email inválido");
    }
  }else{
    alert("Campo Vazio");
  }
   
 
  


});