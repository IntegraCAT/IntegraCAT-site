// Simulando os dados reais 
const dadosSetores = {
  producao: 40,
  logistica: 30,  
  escritorio: 30  
};

const tdProducao = document.getElementById('fatia-producao');
const tdLogistica = document.getElementById('fatia-logistica');
const tdEscritorio = document.getElementById('fatia-escritorio');

const textoProducao = document.getElementById('texto-producao');
const textoLogistica = document.getElementById('texto-logistica');
const textoEscritorio = document.getElementById('texto-escritorio');

// Soma tudo para achar o total
const totalOcorrencias = dadosSetores.producao + dadosSetores.logistica + dadosSetores.escritorio;

// Calcula a porcentagem de cada um (Ex: 40 / 100 = 0.40)
const pctProducao = dadosSetores.producao / totalOcorrencias;
const pctLogistica = dadosSetores.logistica / totalOcorrencias;
const pctEscritorio = dadosSetores.escritorio / totalOcorrencias;

// Atualiza os textos da legenda na tela (Multiplica por 100 pra virar "40%")
textoProducao.innerText = Math.round(pctProducao * 100) + '%';
textoLogistica.innerText = Math.round(pctLogistica * 100) + '%';
textoEscritorio.innerText = Math.round(pctEscritorio * 100) + '%';

// Atualiza o gráfico de Pizza aplicando o CSS dinâmico
// Produção: do 0 até o final da sua porcentagem
let fimProducao = pctProducao;
tdProducao.style.setProperty('--start', '0.0');
tdProducao.style.setProperty('--end', fimProducao.toFixed(2));

// Logística: Começa de onde a Produção parou, e soma a fatia dela
let fimLogistica = fimProducao + pctLogistica;
tdLogistica.style.setProperty('--start', fimProducao.toFixed(2));
tdLogistica.style.setProperty('--end', fimLogistica.toFixed(2));

// Escritório: Começa de onde a Logística parou, e vai até o final (1.0)
tdEscritorio.style.setProperty('--start', fimLogistica.toFixed(2));
tdEscritorio.style.setProperty('--end', '1.0');