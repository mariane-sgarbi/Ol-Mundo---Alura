let nomeUsuario = ""
let elemento = document.querySelector("#user-name");

while (nomeUsuario == "") {
    nomeUsuario = prompt("Qual é o seu nome?");
}

if (nomeUsuario == null){
    elemento.textContent = "Bem vindo!";    

} else{

    elemento.textContent = nomeUsuario; 
}

