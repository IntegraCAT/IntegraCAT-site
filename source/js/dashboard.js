const logado = JSON.parse(sessionStorage.getItem("usuarioAtivo"));
if (logado) {
    document.getElementById("nome-usuario").innerText = `Bem-vindo, ${logado.identidade}`;
} else{
    document.getElementById("nome-usuario").innerText = `Você não está cadastrado!`;
}


const btnSair = document.getElementById("btn-sair");

btnSair.addEventListener("click", ()=>{
    sessionStorage.removeItem("usuarioAtivo")
})