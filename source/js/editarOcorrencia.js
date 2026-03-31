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
const inputStatus = document.getElementById("status");

/*Entradas para Salvar**/
const btnSalvarOcorrencia = document.getElementById("btn-salvar-ocorrencia");

/* Busca a ocorrencia em Foco*/
const ocorrenciasEmFoco = JSON.parse(sessionStorage.getItem("ocorrenciaSelecionada") || "[]");
const indexOcorrencia = JSON.parse(sessionStorage.getItem("indexOcorrenciaSelecionada") || "[]");


function editarOcorrencia() {
    if (!inputTitulo.value) return alert("Insira um título para a Ocorrência!");

    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');

    const dataFormatada = `${ano}-${mes}-${dia}`;

    const ocorrenciaEditada = {
        titulo: inputTitulo.value,
        colaborador: inputColaborador.value,
        data: inputData.value || `${dataFormatada}`,
        horario: inputHorario.value || `${dataAtual.getHours()}:${String(dataAtual.getMinutes()).padStart(2, '0')}`,
        descricao: inputDescricao.value,
        setor: inputSetor.value || "",
        tipo: inputTipo.value || "",
        nivel: inputNivel.value || "",
        afastamento: inputAfastamento.value || "",
        status: inputStatus.value || ""
    };
    ocorrenciasCadastradas[indexOcorrencia] = ocorrenciaEditada;



    // Atualizar lista global
    sessionStorage.setItem("listaOcorrencias", JSON.stringify(ocorrenciasCadastradas));

    // Atualizar o sessionStorage
    sessionStorage.setItem("ocorrenciaSelecionada", JSON.stringify(ocorrenciaEditada));

    window.location.href = "../pages/dashboard-ocorrencia.html";
};


inputTitulo.value = ocorrenciasEmFoco.titulo || "";
inputColaborador.value = ocorrenciasEmFoco.colaborador || "";
inputData.value = ocorrenciasEmFoco.data || ""; // O formato deve ser AAAA-MM-DD
inputHorario.value = ocorrenciasEmFoco.horario || "";
inputDescricao.value = ocorrenciasEmFoco.descricao || "";

// Para os Selects, o valor de item.setor deve ser o "value" do <option> (ex: "adm", "logistica")
inputSetor.value = ocorrenciasEmFoco.setor_key || ocorrenciasEmFoco.setor;
inputTipo.value = ocorrenciasEmFoco.tipo_key || ocorrenciasEmFoco.tipo;
inputNivel.value = ocorrenciasEmFoco.nivel_key || ocorrenciasEmFoco.nivel;
inputAfastamento.value = ocorrenciasEmFoco.afastamento || ocorrenciasEmFoco.afastamento;


inputStatus.value = ocorrenciasEmFoco.status || "";


btnSalvarOcorrencia?.addEventListener("click", editarOcorrencia);
