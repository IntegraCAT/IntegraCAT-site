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

const btnCriarOcorrencia = document.getElementById("btn-criarOcorrencia");

/*Entradas para pesquisar  ocorrencia**/
const btnPesquisa = document.getElementById("btn-pesquisa");

const containerResultados = document.getElementById("container-resultados");

const dataAtual = new Date();

function criarOcorrencia() {
  if (!inputTitulo.value) return alert("Insira um título para a Ocorrência!");

  const nomesFormatados = {
    /*Tipo da Ocorrência */
    "acidente_com_afastamento": "Acidente com Afastamento",
    "acidente_sem_afastamento": "Acidente sem Afastamento",
    "trajeto": "Acidente de Trajeto",
    "doenca_ocupacional": "Doença Ocupacional",
    "primeiros_socorros": "Atendimento de Primeiros Socorros",
    "risco_ambiental": "Risco Ambiental / Vazamento",

    /*Setor da Ocorrência*/
    "adm": "Administrativo / Escritório",
    "logistica": "Entregas / Logística",
    "producao": "Linha de Produção / Fábrica",
    "manutencao": "Manutenção / Oficina",
    "ti": "TI / Infraestrutura",
    "externo": "Campo / Operações Externas",

    /*Nivel da Ocorrência*/
    "alto": "Alto",
    "medio": "Médio",
    "baixo": "Baixo",

    /*Afastamento*/
    "sim": "Sim",
    "nao": "Não"
  };

  const novaOcorrencia = {
    titulo: inputTitulo.value,
    colaborador: inputColaborador.value,
    data: inputData.value || `${dataAtual.getDate()}-${dataAtual.getMonth() + 1}-${dataAtual.getFullYear()}`,
    horario: inputHorario.value  || `${dataAtual.getHours()}:${dataAtual.getMinutes()}`,
    descricao: inputDescricao.value,
    setor: nomesFormatados[inputSetor.value] || "Não definido",
    tipo: nomesFormatados[inputTipo.value] || "Não definido",
    nivel: nomesFormatados[inputNivel.value] || "Não definido",
    afastamento: nomesFormatados[inputAfastamento.value] || "Não definido",
    status: "Aberto"
  };

  ocorrenciasCadastradas.push(novaOcorrencia);

  sessionStorage.setItem("listaOcorrencias", JSON.stringify(ocorrenciasCadastradas));
  window.location.reload();
};

function mostrarResultados() {
  containerResultados.innerHTML = "";



  /* Verifica se há ocorrencias para mostrar*/
  if (ocorrenciasCadastradas.length > 0) {
    ocorrenciasCadastradas.forEach(item => {
      /*Onde o resultado será armazenado*/
      const secao = document.createElement("article");
      secao.classList.add("resultado");

      /* Monta o resultado*/
      secao.innerHTML = `
      <div>
        <h4>Título: ${item.titulo}</h4>
        <a href="">Ver</a>
      </div>
      <div class="resultado-grid">
        <p><strong>Colaborador:</strong> ${item.colaborador}</p>
        <p><strong>Setor:</strong> ${item.setor}</p>
        <p><strong>Tipo:</strong> ${item.tipo}</p>
        <p><strong>Data:</strong> ${item.data}</p>
        <p><strong>Nivel da ocorrência:</strong> ${item.nivel}</p>
        <p><strong>Status:</strong> ${item.status}</p>
      </div>
      <div>
        <h4>Descrição resumida:</h4>
        <p>${item.descricao}</p>
      </div>
      `;
      /* Adiciona ao container de Resultados*/
      containerResultados.appendChild(secao);
    });

    /*Caso não tenha nada para mostrar*/
  } else {

    /*Onde o resultado será armazenado*/
    const secaoAviso = document.createElement("article");
    secaoAviso.classList.add("resultado");

    secaoAviso.innerHTML = `
      <div>
        <h4>Não há Ocorrências</h4>
      </div>
    `;
    containerResultados.appendChild(secao);
  }
}


if (containerResultados) mostrarResultados();


btnPesquisa?.addEventListener("click", mostrarResultados);

btnCriarOcorrencia?.addEventListener("click", criarOcorrencia);
