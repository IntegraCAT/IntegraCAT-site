const logado = JSON.parse(sessionStorage.getItem("usuarioAtivo"));

function sairDaConta(){
    sessionStorage.removeItem("usuarioAtivo");
}