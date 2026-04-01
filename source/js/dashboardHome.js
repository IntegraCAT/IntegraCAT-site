if (logado) {
  document.getElementById("nome-usuario").innerText = `Bem-vindo, ${logado.identidade}`;
} else {
  document.getElementById("nome-usuario").innerText = `Você não está cadastrado!`;
}

const containerAlertas = document.getElementById("container-cards");

/* Busca as ocorrencias que já existem*/
const ocorrenciasCadastradas = JSON.parse(sessionStorage.getItem("listaOcorrencias") || "[]");


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

function mostrarAlertas() {
  containerAlertas.innerHTML = "";

  if (ocorrenciasCadastradas.length > 0) {
    // 2. Calculamos o ponto de parada (ou o índice 0 ou 3 itens atrás)
    const total = ocorrenciasCadastradas.length;
    const limite = Math.max(0, total - 3);

    // 3. Loop decrescente: começa do último item e vai até o limite
    for (let i = total - 1; i >= limite; i--) {
      const item = ocorrenciasCadastradas[i];
      
      const card = document.createElement("article");
      card.classList.add("card-ocorrencia");
      
      // Adicionamos um link ou evento de clique para abrir os detalhes
      card.innerHTML = `
          <h3>${item.titulo}</h3>
          <p><b>Nível da ocorrência:</b> ${nomesFormatados[item.nivel] ?? item.nivel}</p>
          <p><b>Setor:</b> ${nomesFormatados[item.setor] ?? item.setor}</p>
          <p>${item.descricao}</p>
          <a href="../pages/dashboard-ocorrencia.html" onclick="ocorrenciaEmFoco(${i})">Ver detalhes</a>
      `;
      containerAlertas.appendChild(card);
    }

  } else {
    containerAlertas.innerHTML = `
      <article class="resultado">
        <h4>Não há Ocorrências recentes</h4>
      </article>
    `;
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

if (containerAlertas) mostrarAlertas();

