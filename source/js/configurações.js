const dadosNoStorage = sessionStorage.getItem("listaCadastrados");

// Caso usuários salvos não tenha nada salvo ainda
const usuarioPadrao = {
    identidade: "IntegraCAT",
    id: "123",
    cnpj: "",
    email: "entrar@integracat.com",
    senha: "123",
    cargo: "",
    empresaVinculado: "",
    fotoPerfil: ""
};

// Se houver dados, transforma em objeto. Se não, usa o padrão.
const usuariosCadastrados = dadosNoStorage 
    ? JSON.parse(dadosNoStorage) 
    : [usuarioPadrao];

const logado = JSON.parse(sessionStorage.getItem("usuarioAtivo"));

// Entradas
const nomeInput = document.getElementById("nome");
const cargoInput = document.getElementById("cargo");
const empresaInput = document.getElementById("empresa");
const imagemInput = document.getElementById("imagem");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

// Forms
const infoBasicas = document.getElementById("informacoes-basicas");
const infoAvancadas = document.getElementById("informacoes-avancadas");
// Botões
const btnBasicas = document.getElementById("btn-basicas"); //Informaçoews básicas
const btnAvancadas = document.getElementById("btn-avancadas");


/* Função para alterar informações básicas do Usuário*/
function alterarCadastroBasico(){
    const cadastroIndex = usuariosCadastrados.findIndex(user => user.id === logado.id);

    if(cadastroIndex !== -1) // -1 = não encontrado
    {
        // Dados que serão alterados
        usuariosCadastrados[cadastroIndex].identidade = nomeInput.value;
        usuariosCadastrados[cadastroIndex].cargo = cargoInput.value;
        usuariosCadastrados[cadastroIndex].empresaVinculado = empresaInput.value;
        usuariosCadastrados[cadastroIndex].fotoPerfil = imagemInput.value;
    
        // Atualizar lista global
        sessionStorage.setItem("listaCadastrados", JSON.stringify(usuariosCadastrados));

        // Atualizar o sessionStorage
        sessionStorage.setItem("usuarioAtivo", JSON.stringify(usuariosCadastrados[cadastroIndex]));

        alert("Informações Básicas atualizados com sucesso!");
    }
}

function cancelarEnvio(){
    window.location.reload();
}


function mostrarBotao() {
    btnBasicas.classList.remove("esconder");
}

// Mostrar os valores atuais da conta do usuário
nomeInput.value = logado.identidade;
cargoInput.value = logado.cargo || "";
empresaInput.value = logado.empresaVinculado || "";
imagemInput.value  = logado.fotoPerfil ;

infoBasicas.addEventListener("submit", alterarCadastroBasico);
infoBasicas.addEventListener("reset", cancelarEnvio);

const camposBasicos = [nomeInput, cargoInput, empresaInput, imagemInput];

camposBasicos.forEach(input => {
    input.addEventListener("input", () => {
        btnBasicas.classList.remove("esconder");
    });
});