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
const btnInformacoes = document.getElementById("btn-informacoes"); //Informaçoews básicas
const btnDelete = document.getElementById("btn-excluir-conta");


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

function deletarCadastro(){
    const cadastroIndex = usuariosCadastrados.findIndex(user => user.id === logado.id);
    
    usuariosCadastrados.splice(cadastroIndex, 1);
    sessionStorage.setItem("listaCadastrados", JSON.stringify(usuariosCadastrados));
    sessionStorage.removeItem("usuarioAtivo");
    window.location.href = "/index.html";
}

function cancelarEnvio(){
    window.location.reload();
}

// Mostrar os valores atuais da conta do usuário
nomeInput.value = logado.identidade;
cargoInput.value = logado.cargo || "";
empresaInput.value = logado.empresaVinculado || "";
imagemInput.value  = logado.fotoPerfil ;

infoBasicas.addEventListener("submit", alterarCadastroBasico);
infoBasicas.addEventListener("reset", cancelarEnvio);

btnDelete.addEventListener("click", deletarCadastro);

const camposBasicos = [nomeInput, cargoInput, empresaInput, imagemInput];

camposBasicos.forEach(input => {
    input.addEventListener("input", () => {
        btnInformacoes.classList.remove("esconder");
    });
});