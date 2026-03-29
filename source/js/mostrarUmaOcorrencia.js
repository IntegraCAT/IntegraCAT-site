/* Busca a ocorrencia em Foco*/
const ocorrenciasEmFoco = JSON.parse(sessionStorage.getItem("ocorrenciaSelecionada") || "[]");

/* Raiz para conteúdo da página */
const mainContainer = document.getElementById("main-container");

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

let dataExibicao = ocorrenciasEmFoco.data;
if (ocorrenciasEmFoco.data.includes('-')) {
    const [ano, mes, dia] = ocorrenciasEmFoco.data.split('-');
    dataExibicao = `${dia}/${mes}/${ano}`;
}

mainContainer.innerHTML = `
    <!-- Gerada por script -->
    <div class="title-header">
        <h1>${ocorrenciasEmFoco.titulo}</h1>
        <a href="/pages/dashboard-historico.html">← Voltar</a>
    </div>

    <section class="content-section">
        <h2 class="visually-hidden">Ocorrência</h2>
        <article class="card-resultado-expandido">
            <div class="resultado-grid">
                <div class="result-row">
                    <p><b>Colaborador:</b> ${ocorrenciasEmFoco.colaborador}</p>
                    <p><b>Setor:</b> ${nomesFormatados[ocorrenciasEmFoco.setor] || "Não definido"}</p>
                    <p><b>Tipo:</b> ${nomesFormatados[ocorrenciasEmFoco.tipo] || "Não definido"}</p>
                    <p><b>Horário:</b> ${ocorrenciasEmFoco.horario}</p>
                </div>
                <div class="result-row">
                    <p><b>Data:</b> ${dataExibicao}</p>
                    <p><b>Nível da ocorrência:</b> ${nomesFormatados[ocorrenciasEmFoco.nivel] || "Não definido"}</p>
                    <p><b>Houve afastamento:</b> ${nomesFormatados[ocorrenciasEmFoco.afastamento] || "Não definido"}</p>
                    <p><b>Status:</b> ${nomesFormatados[ocorrenciasEmFoco.status] || "Não definido"}</p>
                </div>
            </div>

            <div class="descricao">
                <h3>Descrição:</h3>
                <p>${ocorrenciasEmFoco.descricao || "Esta ocorrência não tem uma descrição❗"}</p>
            </div>
        </article>
        
        <a href="/pages/dashboard-editarOcorrencia.html" class="btn-green">EDITAR</a>
    </section>
    <!-- Gerada por script -->
`;