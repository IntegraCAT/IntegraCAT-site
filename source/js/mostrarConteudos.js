const containerConteudos = document.getElementById("container-conteudos");
const selectCategoria = document.getElementById("categoria");
const selectOrdem = document.getElementById("ordem");

// Exemplo de dados populados para teste
const listaConteudos = [
{
    titulo: "Importância do EPI",
    imagemCapa: "../source/img/epi.png",
    descricao: "Texto sobre equipamentos de proteção.",
    tempoLeitura: "5 min",
    categoria: ["seguranca", "epi"],
    dataPostagem: "2026-03-20",
},
{
    titulo: "Ergonomia no Trabalho",
    imagemCapa: "../source/img/ergonomia.png",
    descricao: "Dicas para melhorar a postura e evitar lesões no ambiente de trabalho.",
    tempoLeitura: "6 min",
    categoria: ["ergonomia", "qualidade_de_vida"],
    dataPostagem: "2026-03-22",
},
{
    titulo: "Saúde Mental no Ambiente Corporativo",
    imagemCapa: "../source/img/saude_mental.png",
    descricao: "A importância do cuidado com a saúde mental dos colaboradores.",
    tempoLeitura: "7 min",
    categoria: ["saude_mental", "qualidade_de_vida"],
    dataPostagem: "2026-03-25",
},
{
    titulo: "Treinamentos de Segurança: Por que investir?",
    imagemCapa: "../source/img/treinamento.png",
    descricao: "Como os treinamentos impactam na prevenção de acidentes.",
    tempoLeitura: "5 min",
    categoria: ["treinamento", "seguranca"],
    dataPostagem: "2026-03-27",
},
{
    titulo: "Gestão de Riscos nas Empresas",
    imagemCapa: "../source/img/riscos.png",
    descricao: "Identificação e mitigação de riscos no ambiente corporativo.",
    tempoLeitura: "8 min",
    categoria: ["gestao_de_riscos", "compliance"],
    dataPostagem: "2026-03-29",
},
{
    titulo: "O papel da CIPA nas organizações",
    imagemCapa: "../source/img/cipa.png",
    descricao: "Entenda como a CIPA contribui para a segurança do trabalho.",
    tempoLeitura: "4 min",
    categoria: ["cipa", "seguranca"],
    dataPostagem: "2026-03-30",
}
];

const categoriasFormatadas = {
    "seguranca": "Segurança",
    "epi": "EPI",
    "cipa": "CIPA",
    "ergonomia": "Ergonomia",
    "saude_do_trabalhador": "Saúde do Trabalhador",
    "saude_mental": "Saúde Mental",
    "qualidade_de_vida": "Qualidade de Vida",
    "treinamento": "Treinamento",
    "lideranca": "Liderança",
    "cultura_organizacional": "Cultura Organizacional",
    "compliance": "Compliance",
    "legistalacao_trabalhista": "Legislação Trabalhista",
    "gestao_de_riscos": "Gestão de Riscos",
};

function mostrarConteudos() {
    containerConteudos.innerHTML = "";

    const categoriaSelecionada = selectCategoria.value;
    
    // 1. Filtragem
    const conteudosFiltrados = listaConteudos.filter((item) => {
        // Verifica se a categoria selecionada está incluída no array de categorias do item
        const correspondeCategoria = categoriaSelecionada === "" || item.categoria.includes(categoriaSelecionada);
        return correspondeCategoria;
    });

    // 2. Ordenação (Exemplo simples por data)
    const ordemValor = selectOrdem.value;

    if (ordemValor === "mais-recente") {
        conteudosFiltrados.sort((a, b) => new Date(b.dataPostagem) - new Date(a.dataPostagem));
    } else if (ordemValor === "mais-antigo"){
      conteudosFiltrados.sort((a, b) => new Date(a.dataPostagem) - new Date(b.dataPostagem));
    }

    // 3. Renderização
    if (conteudosFiltrados.length > 0) {
        conteudosFiltrados.forEach((item) => {
            const secao = document.createElement("article");
            secao.classList.add("conteudo-card");

            // Traduz as chaves de categoria para nomes legíveis
            const nomesCategorias = item.categoria
                .map(cat => categoriasFormatadas[cat] || cat)
                .join(", ");

            const [ano, mes, dia] = item.dataPostagem.split('-');
            const dataFormatada = `${dia}/${mes}/${ano}`;

            secao.innerHTML = `
                <img src="${item.imagemCapa || '../source/img/people/user-default.png'}" alt="${item.titulo}" />
                <div>
                    <h3>${item.titulo}</h3>
                    <p><strong>Categorias: </strong>${nomesCategorias}</p>
                    <p><strong>Tempo para leitura: </strong>${item.tempoLeitura}</p>
                    <p>Postado em: ${dataFormatada}</p>
                    <div class="acoes">
                        <button class="btn-green">ACESSAR</button>
                    </div>
                </div>
            `;
            containerConteudos.appendChild(secao);
        });
    } else {
        containerConteudos.innerHTML = `<article class="conteudo-card"><h3>Não há conteúdos encontrados</h3></article>`;
    }
}

// Escutadores de eventos para atualizar a lista automaticamente
selectCategoria.addEventListener("change", mostrarConteudos);
selectOrdem.addEventListener("change", mostrarConteudos);

// Chamada inicial
mostrarConteudos();