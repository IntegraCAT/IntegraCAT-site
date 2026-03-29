if (logado) {
    document.getElementById("nome-usuario").innerText = `Bem-vindo, ${logado.identidade}`;
} else{
    document.getElementById("nome-usuario").innerText = `Você não está cadastrado!`;
}
