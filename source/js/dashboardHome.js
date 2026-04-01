if (logado) {
  document.getElementById("nome-usuario").innerText = `Bem-vindo, ${logado.identidade}`;
} else {
  document.getElementById("nome-usuario").innerText = `Você não está cadastrado!`;
}

const containerAlertas = document.getElementById("container-cards");



/* Busca as ocorrencias que já existem*/
const alertasNoStorage = sessionStorage.getItem("listaOcorrencias");

// Caso usuários salvos não tenha nada salvo ainda
const alertasPadrao = [
  {
    titulo: "Queda no setor de produção",
    colaborador: "João Silva",
    data: "2026-03-01",
    horario: "08:45",
    descricao: "Colaborador escorregou próximo à máquina 3.",
    setor: "producao",
    tipo: "acidente_sem_afastamento",
    nivel: "medio",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Corte leve na mão",
    colaborador: "Maria Souza",
    data: "2026-03-02",
    horario: "10:15",
    descricao: "Pequeno corte durante manuseio de material.",
    setor: "producao",
    tipo: "primeiros_socorros",
    nivel: "baixo",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Falha elétrica no escritório",
    colaborador: "Carlos Pereira",
    data: "2026-03-03",
    horario: "14:20",
    descricao: "Queda de energia em parte do setor administrativo.",
    setor: "adm",
    tipo: "risco_ambiental",
    nivel: "medio",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Quase acidente com empilhadeira",
    colaborador: "Ana Lima",
    data: "2026-02-04",
    horario: "16:05",
    descricao: "Empilhadeira passou muito próxima de pedestre.",
    setor: "logistica",
    tipo: "incidente_quase_acidente",
    nivel: "alto",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Dor lombar relatada",
    colaborador: "Pedro Santos",
    data: "2026-03-05",
    horario: "09:30",
    descricao: "Colaborador relatou dor após esforço repetitivo.",
    setor: "producao",
    tipo: "doenca_ocupacional",
    nivel: "medio",
    afastamento: "sim",
    status: "aberto"
  },
  {
    titulo: "Acidente de trajeto",
    colaborador: "Fernanda Rocha",
    data: "2026-03-06",
    horario: "07:50",
    descricao: "Colaboradora sofreu queda a caminho do trabalho.",
    setor: "externo",
    tipo: "trajeto",
    nivel: "medio",
    afastamento: "sim",
    status: "aberto"
  },
  {
    titulo: "Vazamento de óleo",
    colaborador: "Lucas Martins",
    data: "2026-03-07",
    horario: "11:40",
    descricao: "Identificado vazamento em equipamento.",
    setor: "manutencao",
    tipo: "risco_ambiental",
    nivel: "alto",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Queda de material",
    colaborador: "Juliana Alves",
    data: "2026-01-08",
    horario: "13:10",
    descricao: "Material caiu de prateleira sem feridos.",
    setor: "logistica",
    tipo: "incidente_quase_acidente",
    nivel: "medio",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Atendimento por mal-estar",
    colaborador: "Ricardo Gomes",
    data: "2026-02-09",
    horario: "15:25",
    descricao: "Colaborador apresentou tontura.",
    setor: "adm",
    tipo: "primeiros_socorros",
    nivel: "baixo",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Acidente com afastamento",
    colaborador: "Patrícia Fernandes",
    data: "2026-02-10",
    horario: "17:00",
    descricao: "Fratura após queda durante atividade.",
    setor: "producao",
    tipo: "acidente_com_afastamento",
    nivel: "alto",
    afastamento: "sim",
    status: "aberto"
  },
  {
    titulo: "Escorregão na área externa",
    colaborador: "Bruno Carvalho",
    data: "2026-03-11",
    horario: "08:10",
    descricao: "Colaborador escorregou devido ao piso molhado.",
    setor: "externo",
    tipo: "acidente_sem_afastamento",
    nivel: "baixo",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Ruído excessivo na produção",
    colaborador: "Aline Mendes",
    data: "2026-03-12",
    horario: "11:20",
    descricao: "Equipamento emitindo ruído acima do normal.",
    setor: "producao",
    tipo: "risco_ambiental",
    nivel: "medio",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Quase queda de altura",
    colaborador: "Rafael Teixeira",
    data: "2026-02-13",
    horario: "15:00",
    descricao: "Colaborador quase caiu ao subir escada sem proteção.",
    setor: "manutencao",
    tipo: "incidente_quase_acidente",
    nivel: "alto",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Contato com produto químico",
    colaborador: "Camila Ribeiro",
    data: "2026-03-14",
    horario: "09:50",
    descricao: "Respingo de produto químico na pele.",
    setor: "producao",
    tipo: "primeiros_socorros",
    nivel: "medio",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Colisão leve com equipamento",
    colaborador: "Diego Fernandes",
    data: "2026-02-15",
    horario: "17:30",
    descricao: "Colaborador esbarrou em equipamento em movimento.",
    setor: "logistica",
    tipo: "acidente_sem_afastamento",
    nivel: "baixo",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Falha no sistema de TI",
    colaborador: "Julio Cesar",
    data: "2026-03-16",
    horario: "10:40",
    descricao: "Sistema interno ficou indisponível por 20 minutos.",
    setor: "ti",
    tipo: "risco_ambiental",
    nivel: "medio",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Esforço físico excessivo",
    colaborador: "Marcos Vinicius",
    data: "2026-02-17",
    horario: "14:15",
    descricao: "Colaborador relatou dor após levantamento de carga.",
    setor: "logistica",
    tipo: "doenca_ocupacional",
    nivel: "medio",
    afastamento: "sim",
    status: "aberto"
  },
  {
    titulo: "Objeto solto em área de circulação",
    colaborador: "Patrícia Lima",
    data: "2026-03-18",
    horario: "13:05",
    descricao: "Objeto encontrado no chão podendo causar acidentes.",
    setor: "limpeza",
    tipo: "incidente_quase_acidente",
    nivel: "baixo",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Atendimento por corte superficial",
    colaborador: "Eduardo Rocha",
    data: "2026-02-19",
    horario: "16:45",
    descricao: "Corte leve durante uso de ferramenta manual.",
    setor: "manutencao",
    tipo: "primeiros_socorros",
    nivel: "baixo",
    afastamento: "nao",
    status: "aberto"
  },
  {
    titulo: "Acidente com afastamento na fábrica",
    colaborador: "Sandra Alves",
    data: "2026-03-20",
    horario: "07:55",
    descricao: "Colaboradora sofreu lesão ao operar máquina.",
    setor: "producao",
    tipo: "acidente_com_afastamento",
    nivel: "alto",
    afastamento: "sim",
    status: "aberto"
  }
];

let ocorrenciasCadastradas;

if (alertasNoStorage) {
  ocorrenciasCadastradas = JSON.parse(alertasNoStorage);
} else {
  ocorrenciasCadastradas = alertasPadrao;

  // salva no storage
  sessionStorage.setItem(
    "listaOcorrencias",
    JSON.stringify(alertasPadrao)
  );
}

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

