const diasH2 = document.getElementById('valor-dias');
const alertasH2 = document.getElementById('valor-alertas');
const riscoH2 = document.getElementById('valor-risco');
const treinamentosH2 = document.getElementById('valor-treinamentos');

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