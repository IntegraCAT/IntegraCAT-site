/* Busca as ocorrencias que já existem*/
const ocorrenciasCadastradas = JSON.parse(sessionStorage.getItem("listaOcorrencias") || "[]");

/*Entradas para pesquisar ocorrencias*/
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

  /* Verifica se há ocorrencias para mostrar*/
  if (ocorrenciasCadastradas.length > 0) {

    /*Total de ocorrencias usado, para corrigir o indexReversed*/
    const totalOcorrencias = ocorrenciasCadastradas.length - 1;

    ocorrenciasCadastradas.toReversed().forEach((item, indexReversed) => {
      /*Onde o resultado será armazenado*/
      const secao = document.createElement("article");
      secao.classList.add("card-resultado");

      let dataFormatada = "";
      const [ano, mes, dia] = item.data.split('-');
      dataFormatada = `${dia}/${mes}/${ano}`;

      /* Monta o resultado*/
      secao.innerHTML = `
                <div class="title-header">
                  <h4>Título: ${item.titulo}</h4>
                  <a href="./dashboard-ocorrencia.html" onclick="ocorrenciaEmFoco(${totalOcorrencias - indexReversed})">Ver</a>
                </div>
                <div class="resultado-grid">
                  <div class="result-row">
                    <p><strong>Colaborador:</strong> ${item.colaborador || "Não definido"}</p>
                    <p><strong>Setor:</strong> ${nomesFormatados[item.setor] || "Não definido"}</p>
                    <p><strong>Tipo:</strong> ${nomesFormatados[item.tipo] || "Não definido"}</p>
                  </div>
                  <div class="result-row">
                    <p><strong>Data:</strong> ${dataFormatada}</p>
                    <p><strong>Nivel:</strong> ${nomesFormatados[item.nivel] || "Não definido"}</p>
                    <p><strong>Status:</strong> ${nomesFormatados[item.status] || "Não definido"}</p>
                  </div>
                </div>
                <div>
                  <h4>Descrição</h4>
                  <p>${item.descricao || "Esta ocorrência não tem uma descrição❗"}</p>
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
};

function ocorrenciaEmFoco(value) {
  // Verifica se o índice fornecido é válido
  if (value < 0 || value >= ocorrenciasCadastradas.length) {
    console.error("Índice inválido:", value);
    return;
  }
  sessionStorage.setItem("ocorrenciaSelecionada", JSON.stringify(ocorrenciasCadastradas[value]));
  sessionStorage.setItem("indexOcorrenciaSelecionada", JSON.stringify(value));
}


if (containerResultados) mostrarResultados();


btnPesquisa?.addEventListener("click", mostrarResultados);
