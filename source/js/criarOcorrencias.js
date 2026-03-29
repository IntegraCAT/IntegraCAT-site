const ocorrenciasCadastradas = JSON.parse(sessionStorage.getItem("listaOcorrencias") || "[]");

/*Entradas para criar ocorrencia*/
const inputTitulo = document.getElementById("titulo");
const inputColaborador = document.getElementById("colaborador");
const inputData = document.getElementById("data");
const inputHorario = document.getElementById("horario");
const inputDescricao = document.getElementById("descricao");
const inputSetor = document.getElementById("setor");
const inputTipo = document.getElementById("tipo");
const inputNivel = document.getElementById("nivel");
const inputAfastamento = document.getElementById("afastamento");

/*Entradas para Salvar**/
const btnSalvarOcorrencia = document.getElementById("btn-salvar-ocorrencia");

const dataAtual = new Date();

function criarOcorrencia() {
  if (!inputTitulo.value) return alert("Insira um título para a Ocorrência!");

  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
  const dia = String(dataAtual.getDate()).padStart(2, '0'); 

  const dataFormatada = `${ano}-${mes}-${dia}`;

  const novaOcorrencia = {
    titulo: inputTitulo.value,
    colaborador: inputColaborador.value,
    data: inputData.value || `${dataFormatada}`,
    horario: inputHorario.value || `${dataAtual.getHours()}:${String(dataAtual.getMinutes()).padStart(2, '0')}`,
    descricao: inputDescricao.value,
    setor: inputSetor.value || "",
    tipo: inputTipo.value || "",
    nivel: inputNivel.value || "",
    afastamento: inputAfastamento.value || "",
    status: "aberto"
  };

  ocorrenciasCadastradas.push(novaOcorrencia);

  sessionStorage.setItem("listaOcorrencias", JSON.stringify(ocorrenciasCadastradas));
  window.location.reload();
};

btnSalvarOcorrencia?.addEventListener("click", criarOcorrencia);
