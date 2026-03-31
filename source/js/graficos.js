function calcularDadosPorSetor() {
    // 1. Busca a lista de ocorrências
    const listaOcorrencias = JSON.parse(sessionStorage.getItem("listaOcorrencias") || "[]");

    // 2. Cria o objeto base com todos os setores zerados
    const contagem = {
        adm: 0,
        logistica: 0,
        producao: 0,
        manutencao: 0,
        ti: 0,
        externo: 0
    };

    // 3. Percorre a lista e incrementa o setor correspondente
    listaOcorrencias.forEach(ocorrencia => {
        // Normaliza o nome do setor (tira espaços e deixa em minúsculo)
        const setor = ocorrencia.setor.toLowerCase().trim();

        // Se o setor existir no nosso objeto base, soma +1
        if (contagem.hasOwnProperty(setor)) {
            contagem[setor]++;
        }
    });

    return contagem;
}

// Para usar os dados atualizados:
const dadosSetores = calcularDadosPorSetor();

const tdAdm = document.getElementById('fatia-adm');
const tdLogistica = document.getElementById('fatia-logistica');
const tdProducao = document.getElementById('fatia-producao');
const tdManutencao = document.getElementById('fatia-manutencao');
const tdTi = document.getElementById('fatia-ti');
const tdExterno = document.getElementById('fatia-externo');

const textoAdm = document.getElementById('texto-adm');
const textoLogistica = document.getElementById('texto-logistica');
const textoProducao = document.getElementById('texto-producao');
const textoManutencao = document.getElementById('texto-manutencao');
const textoTi = document.getElementById('texto-ti');
const textoExterno = document.getElementById('texto-externo');

// Soma tudo para achar o total
const totalOcorrencias = dadosSetores.adm + dadosSetores.logistica + dadosSetores.producao + dadosSetores.manutencao + dadosSetores.ti + dadosSetores.externo;

// Calcula a porcentagem de cada um (Ex: 40 / 100 = 0.40)
const pctAdm = dadosSetores.adm / totalOcorrencias;
const pctLogistica = dadosSetores.logistica / totalOcorrencias;
const pctProducao = dadosSetores.producao / totalOcorrencias;
const pctManutencao = dadosSetores.manutencao / totalOcorrencias;
const pctTi = dadosSetores.ti / totalOcorrencias;
const pctExterno = dadosSetores.externo / totalOcorrencias;

// Atualiza os textos da legenda na tela (Multiplica por 100 pra virar "40%")
textoAdm.innerText = Math.round(pctAdm * 100) + '%';
textoLogistica.innerText = Math.round(pctLogistica * 100) + '%';
textoProducao.innerText = Math.round(pctProducao * 100) + '%';
textoManutencao.innerText = Math.round(pctManutencao * 100) + '%';
textoTi.innerText = Math.round(pctTi * 100) + '%';
textoExterno.innerText = Math.round(pctExterno * 100) + '%';

// Atualiza o gráfico de Pizza aplicando o CSS dinâmico
let inicio = 0;

// ADM
let fimAdm = inicio + pctAdm;
tdAdm.style.setProperty('--start', inicio.toFixed(2));
tdAdm.style.setProperty('--end', fimAdm.toFixed(2));

// LOGÍSTICA
let fimLogistica = fimAdm + pctLogistica;
tdLogistica.style.setProperty('--start', fimAdm.toFixed(2));
tdLogistica.style.setProperty('--end', fimLogistica.toFixed(2));

// PRODUÇÃO
let fimProducao = fimLogistica + pctProducao;
tdProducao.style.setProperty('--start', fimLogistica.toFixed(2));
tdProducao.style.setProperty('--end', fimProducao.toFixed(2));

// MANUTENÇÃO
let fimManutencao = fimProducao + pctManutencao;
tdManutencao.style.setProperty('--start', fimProducao.toFixed(2));
tdManutencao.style.setProperty('--end', fimManutencao.toFixed(2));

// TI
let fimTi = fimManutencao + pctTi;
tdTi.style.setProperty('--start', fimManutencao.toFixed(2));
tdTi.style.setProperty('--end', fimTi.toFixed(2));

// EXTERNO
let fimExterno = fimTi + pctExterno;
tdExterno.style.setProperty('--start', fimTi.toFixed(2));
tdExterno.style.setProperty('--end', fimExterno.toFixed(2));