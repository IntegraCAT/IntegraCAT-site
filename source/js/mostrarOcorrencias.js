/* Busca as ocorrencias que já existem*/
const ocorrenciasCadastradas = JSON.parse(sessionStorage.getItem("listaOcorrencias") || "[]");

/*Entradas para pesquisar ocorrencias*/
const pesquisaInput = document.getElementById("pesquisa");
const periodoInput = document.getElementById("periodo");
const setorInput = document.getElementById("setor");
const nivelInput = document.getElementById("nivel");
const tipoInput = document.getElementById("tipo");
const statusInput = document.getElementById("status");

const btnPesquisa = document.getElementById("btn-pesquisa");

const containerResultados = document.getElementById("container-resultados");

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
  "nao": "Não",

  /*Status*/
  "fechado": "Fechado",
  "aberto": "Aberto"
};

function mostrarResultados() {
  containerResultados.innerHTML = "";

  /* ormatação das entradas*/
  const buscaTexto = pesquisaInput?.value.toLowerCase().trim() || "";
  const buscaSetor = setorInput?.value || "";
  const buscaNivel = nivelInput?.value || "";
  const buscaTipo = tipoInput?.value || "";
  const buscaStatus = statusInput?.value || "";
  const buscaPeriodo = periodoInput?.value || "todos";

  /* data atual para comparação*/
  const agora = new Date();
  const anoAtual = agora.getFullYear();
  const mesAtual = agora.getMonth();

  /* a lista que será usada para filtrar*/
  const ocorrenciasFiltradas = ocorrenciasCadastradas.filter((item) => {

    const correspondeTexto = buscaTexto === "" ||
      item.titulo.toLowerCase().includes(buscaTexto) ||
      (item.colaborador && item.colaborador.toLowerCase().includes(buscaTexto));

    const correspondeSetor = buscaSetor === "" || item.setor === buscaSetor;
    const correspondeNivel = buscaNivel === "" || item.nivel === buscaNivel;
    const correspondeTipo = buscaTipo === "" || item.tipo === buscaTipo;
    const correspondeStatus = buscaStatus === "" || item.status === buscaStatus;

    /* filtros */
    const dataOcorrencia = new Date(item.data + "T00:00:00");
    let correspondePeriodo = true;

    if (buscaPeriodo === "mes") {
      correspondePeriodo = dataOcorrencia.getMonth() === mesAtual &&
        dataOcorrencia.getFullYear() === anoAtual;
    } else if (buscaPeriodo === "semestre") {
      
      const seisMesesAtras = new Date();
      seisMesesAtras.setMonth(agora.getMonth() - 6);
      correspondePeriodo = dataOcorrencia >= seisMesesAtras;
    } else if (buscaPeriodo === "neste_ano") {
      correspondePeriodo = dataOcorrencia.getFullYear() === anoAtual;
    } else if (buscaPeriodo === "todos") {
      correspondePeriodo = true;
    }

    return correspondeTexto && correspondeSetor && correspondeNivel && correspondeTipo && correspondeStatus && correspondePeriodo;
  });

  /* mostrar os resultado*/
  if (ocorrenciasFiltradas.length > 0) {
    ocorrenciasFiltradas.toReversed().forEach((item) => {
      const indexOriginal = ocorrenciasCadastradas.indexOf(item);

      const secao = document.createElement("article");
      secao.classList.add("card-resultado");

      const [ano, mes, dia] = item.data.split('-');
      const dataFormatada = `${dia}/${mes}/${ano}`;

      secao.innerHTML = `
                <div class="title-header">
                  <h4>Título: ${item.titulo}</h4>
                  <a href="./dashboard-ocorrencia.html" onclick="ocorrenciaEmFoco(${indexOriginal})">Ver</a>
                </div>
                <div class="resultado-grid">
                  <div class="result-row">
                    <p><strong>Colaborador:</strong> ${item.colaborador || "Não definido"}</p>
                    <p><strong>Setor:</strong> ${nomesFormatados[item.setor] || "Não definido"}</p>
                    <p><strong>Tipo:</strong> ${nomesFormatados[item.tipo] || "Não definido"}</p>
                  </div>
                  <div class="result-row">
                    <p><strong>Data:</strong> ${dataFormatada}</p>
                    <p><strong>Nível:</strong> ${nomesFormatados[item.nivel] || "Não definido"}</p>
                    <p><strong>Status:</strong> ${nomesFormatados[item.status] || "Não definido"}</p>
                  </div>
                </div>
                <div>
                  <h4>Descrição</h4>
                  <p>${item.descricao || "Esta ocorrência não tem uma descrição❗"}</p>
                </div>
            `;
      containerResultados.appendChild(secao);
    });
  } else {
    /*Onde o resultado será armazenado*/
    const secaoAviso = document.createElement("article");
    secaoAviso.classList.add("resultado");
    secaoAviso.innerHTML = `
      <div>
        <h4>Não há Ocorrências</h4>
      </div>
    `;

    containerResultados.appendChild(secaoAviso);
  }
}

function ocorrenciaEmFoco(value) {
  if (value < 0 || value >= ocorrenciasCadastradas.length) {
    console.error("Índice inválido:", value);
    return;
  }

  sessionStorage.setItem("ocorrenciaSelecionada", JSON.stringify(ocorrenciasCadastradas[value]));
  sessionStorage.setItem("indexOcorrenciaSelecionada", JSON.stringify(value));
}


if (containerResultados) mostrarResultados();


btnPesquisa?.addEventListener("click", mostrarResultados);
