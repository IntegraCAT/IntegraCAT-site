const dadosNoStorage = sessionStorage.getItem("listaCadastrados");

// Caso usuários salvos não tenha nada salvo ainda
const usuarioPadrao = {
    identidade: "IntegraCAT",
    id: "123",
    cnpj: "",
    email: "entrar@integracat.com",
    senha: "123"
};

// Se houver dados, transforma em objeto. Se não, usa o padrão.
const usuariosCadastrados = dadosNoStorage 
    ? JSON.parse(dadosNoStorage) 
    : [usuarioPadrao];

const loginForm = document.getElementById("loginForm");

function entrarNoUsuario(event) {
  event.preventDefault();
  const idInput = document.getElementById("identidade").value;
  const emailInput = document.getElementById("email").value;
  const senhaInput = document.getElementById("senha").value;

  const verificandoUsuario = usuariosCadastrados.find(user =>
    user.id === idInput &&
    user.email === emailInput &&
    user.senha === senhaInput
  );

  if (verificandoUsuario) {
    console.log("Login sucesso");
    window.location.href = "/pages/dashboard.html"
  } else {
    console.log("Usuário não encontrado");
  }
}

loginForm?.addEventListener("submit", entrarNoUsuario);

