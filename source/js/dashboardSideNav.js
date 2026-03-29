const logado = JSON.parse(sessionStorage.getItem("usuarioAtivo"));

const btnSair = document.getElementById("btn-sair");

btnSair.addEventListener("click", ()=>{
    sessionStorage.removeItem("usuarioAtivo");
})