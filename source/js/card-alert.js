const diasH2 = document.getElementById('valor-dias');
const alertasH2 = document.getElementById('valor-alertas');
const riscoH2 = document.getElementById('valor-risco');
const treinamentosH2 = document.getElementById('valor-treinamentos');

function atualizarContadorAlertas() {
    // filtra apenas as que estão com status "aberto"
    const ocorrenciasAbertas = ocorrenciasCadastradas.filter(o => o.status === "aberto");

    // atualiza o H2 com a quantidade (length)
    if (alertasH2) {
        alertasH2.innerText = ocorrenciasAbertas.length;
    }
}

function atualizarDiasSemAcidentes() {
    const diasH2 = document.getElementById('valor-dias');
    const listaOcorrencias = JSON.parse(sessionStorage.getItem("listaOcorrencias") || "[]");

    if (listaOcorrencias.length === 0) {
        diasH2.innerText = "Nenhuma ocorrência"; // Ou um valor padrão se nunca houve acidentes
        return;
    }

    // 1. Pegar todas as datas e converter para o formato Date do JS
    const datas = listaOcorrencias.map(o => new Date(o.data));

    // 2. Encontrar a data mais recente (a maior data)
    const dataMaisRecente = new Date(Math.max(...datas));

    // 3. Calcular a diferença entre HOJE e a data mais recente
    const hoje = new Date();
    
    // A diferença vem em milissegundos, precisamos converter para dias
    const diferencaEmMs = hoje - dataMaisRecente;
    const diasSemAcidentes = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24));

    if (diasH2) {
        diasH2.innerText = diasSemAcidentes >= 0 ? diasSemAcidentes : 0;
        
    }
}

function atualizarNivelRiscoGeral() {
    const listaOcorrencias = JSON.parse(sessionStorage.getItem("listaOcorrencias") || "[]");

    if (listaOcorrencias.length === 0) {
        riscoH2.innerText = "Baixo"; // Valor padrão se não houver dados
        return;
    }

    // 1. Mapeia os níveis textuais para números
    const pesos = {
        "baixo": 1,
        "médio": 2,
        "medio": 2,
        "alto": 3
    };

    // 2. Cria um array apenas com os números dos níveis encontrados
    const valoresNiveis = listaOcorrencias
        .map(o => pesos[o.nivel.toLowerCase()] || 1); // Padrão 1 se estiver vazio

    // 3. Calcula a média aritmética
    const soma = valoresNiveis.reduce((acc, val) => acc + val, 0);
    const media = soma / valoresNiveis.length;

    // 4. Converte a média de volta para texto
    let riscoFinal = "";
    if (media <= 1.5) {
        riscoFinal = "Baixo";
    } else if (media <= 2.5) {
        riscoFinal = "Médio";
    } else {
        riscoFinal = "Alto";
    }

    // 5. Atualiza o HTML e as cores
    if (riscoH2) {
        riscoH2.innerText = riscoFinal;
    }
}

atualizarDiasSemAcidentes();

atualizarNivelRiscoGeral();

atualizarContadorAlertas();

// --- LÓGICA DE CORES ---

// 1. Dias sem acidentes
const dias = parseInt(diasH2.innerText);
if (dias < 30) {
  diasH2.classList.add('texto-vermelho');
} else if (dias < 60) {
  diasH2.classList.add('texto-amarelo'); 
} else {
  diasH2.classList.add('texto-verde');
}

// 2. Alertas Recebidos (Vermelho se for > 0, Verde se for 0)
const alertas = parseInt(alertasH2.innerText);
if (alertas > 0) {
  alertasH2.classList.add('texto-vermelho');
} else {
  alertasH2.classList.add('texto-verde');
}

// 3. Treinamentos Vencendo (Amarelo se for > 0, Verde se for 0)
const treinamentos = parseInt(treinamentosH2.innerText);
if (treinamentos > 0) {
  treinamentosH2.classList.add('texto-amarelo');
} else {
  treinamentosH2.classList.add('texto-verde');
}

// 4. Nível de Risco (Lê a palavra e colore)
const risco = riscoH2.innerText.trim().toLowerCase();
if (risco === 'baixo') {
  riscoH2.classList.add('texto-verde');
} else if (risco === 'médio' || risco === 'medio') {
  riscoH2.classList.add('texto-amarelo');
} else if (risco === 'alto') {
  riscoH2.classList.add('texto-vermelho');
}