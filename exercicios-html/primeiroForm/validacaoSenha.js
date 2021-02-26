let senhaForte = document.getElementById("senhaForte")
let senha = document.getElementById("senha");

function validarSenha (){
  if(senhaForte.value != senha.value) {
    senha.setCustomValidity("Senhas diferentes!");
  } else {
    senha.setCustomValidity('');
  }
}

senhaForte.onchange = validarSenha;
senha.onkeyup = validarSenha;