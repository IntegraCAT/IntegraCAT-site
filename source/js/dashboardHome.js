const logado = JSON.parse(sessionStorage.getItem("usuarioAtivo"));
if (logado) {
    document.getElementById("nome-usuario").innerText = `Bem-vindo, ${logado.identidade}`;
}