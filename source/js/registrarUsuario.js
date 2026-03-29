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

// Sse houver dados, transforma em objeto. Se não, usa o padrão.
const usuariosCadastrados = dadosNoStorage 
    ? JSON.parse(dadosNoStorage) 
    : [usuarioPadrao];

const registerForm = document.getElementById("register-form");

const senhaCheckbox = document.getElementById("mostrar-senha");

function mostrarSenha() {
  const senhaInput = document.getElementById("senha");
  const senhaRepetirInput = document.getElementById("repetir-senha");

  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    senhaRepetirInput.type = "text";
  } else {
    senhaInput.type = "password";
    senhaRepetirInput.type = "password";
  }

}

function criarUsuario(event) {
  event.preventDefault();
  const identidadeInput = document.getElementById("identidade");
  const emailInput = document.getElementById("email").value;
  const senhaInput = document.getElementById("senha");
  const senhaRepetirInput = document.getElementById("repetir-senha");


  //Verificar se já existe um id/identidate igual
  const usuarioExiste = usuariosCadastrados.some(user => 
    user.id === identidadeInput.value
  );

  if (usuarioExiste) {
    alert("Erro: Nome já está sendo usado.");
    identidadeInput.classList.add("senhas-diferentes");
    return;
  } else identidadeInput.classList.remove("senhas-diferentes");

  // Verifica as entradas de senha
  if (senhaInput.value !== senhaRepetirInput.value) {
    senhaInput.classList.add("senhas-diferentes");
    senhaRepetirInput.classList.add("senhas-diferentes");
    return;
  } else {
    senhaInput.classList.remove("senhas-diferentes");
    senhaRepetirInput.classList.remove("senhas-diferentes");
  }

  const novoUsuario =
  {
    identidade: identidadeInput.value,
    id: identidadeInput.value,
    cnpj: "",
    email: emailInput,
    senha: senhaInput.value,
    cargo: "",
    empresaVinculado: "",
    fotoPerfil: ""
  };

  usuariosCadastrados.push(novoUsuario);
  sessionStorage.setItem("listaCadastrados", JSON.stringify(usuariosCadastrados));
  sessionStorage.setItem("usuarioAtivo", JSON.stringify(novoUsuario));
  
  /* Manda para a dashboard*/
  window.location.href = "/pages/dashboard.html"
}



registerForm?.addEventListener("submit", criarUsuario);

