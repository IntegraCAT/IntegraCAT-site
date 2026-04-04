const containerPalestrantes = document.getElementById("container-palestras");

const selectOrdem = document.getElementById("ordem");

// Exemplo de dados 
const listaPalestrantes = [
    {
        nome: "Ana Silva",
        imagemPerfil: "../source/img/ana.png",
        especialidades: ["seguranca", "epi"],
        descricao: "Especialista em normas regulamentadoras com 10 anos de experiência",
        avaliacao: 4,
        participacoes: 130
    },
    {
        nome: "Carlos Souza",
        imagemPerfil: "",
        especialidades: ["saude_mental", "qualidade_de_vida"],
        descricao: "Psicólogo organizacional focado em bem-estar no ambiente laboral",
        avaliacao: 3,
        participacoes: 85
    },
    {
        nome: "Fernanda Lima",
        imagemPerfil: "../source/img/fernanda.png",
        especialidades: ["ergonomia", "saude_do_trabalhador"],
        descricao: "Fisioterapeuta especialista em ergonomia e prevenção de lesões",
        avaliacao: 5,
        participacoes: 95
    },
    {
        nome: "Roberto Alves",
        imagemPerfil: "../source/img/roberto.png",
        especialidades: ["gestao_de_riscos", "compliance"],
        descricao: "Consultor em gestão de riscos corporativos e conformidade legal",
        avaliacao: 4,
        participacoes: 110
    },
    {
        nome: "Juliana Martins",
        imagemPerfil: "../source/img/juliana.png",
        especialidades: ["lideranca", "cultura_organizacional"],
        descricao: "Especialista em desenvolvimento de lideranças e cultura empresarial",
        avaliacao: 3,
        participacoes: 70
    },
    {
        nome: "Paulo Henrique",
        imagemPerfil: "../source/img/paulo.png",
        especialidades: ["treinamento", "seguranca"],
        descricao: "Instrutor de treinamentos corporativos voltados à segurança do trabalho",
        avaliacao: 4,
        participacoes: 120
    },
    {
        nome: "Mariana Costa",
        imagemPerfil: "../source/img/mariana.png",
        especialidades: ["cipa", "legistalacao_trabalhista"],
        descricao: "Advogada especializada em legislação trabalhista e atuação da CIPA",
        avaliacao: 2,
        participacoes: 60
    }
];


const especialidadesFormatadas = {
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

function mostrarPalestrantes() {
    containerPalestrantes.innerHTML = "";

    const ordemValor = selectOrdem.value;

    if (ordemValor === "melhor-avaliado") {
        listaPalestrantes.sort((a, b) => b.avaliacao - a.avaliacao);
    } else if (ordemValor === "mais-participacoes"){
        listaPalestrantes.sort((a, b) => b.participacoes - a.participacoes);
    }

    if (listaPalestrantes.length > 0) {
        listaPalestrantes.forEach((item) => {

            let containerEstrelas = ``;

            for (let i = 1; i <= 5; i++) {
                if (i <= item.avaliacao) {
                    containerEstrelas += `<img class="estrela" src="../source/img/icons/scoreStar.svg" alt="estrela"/>`;
                } else {
                    containerEstrelas += `<img class="estrela" src="../source/img/icons/scoreStar-cinza.svg" alt="estrela cinza"/>`;
                }
            }

            const nomesEspecialidades = item.especialidades
                .map(cat => especialidadesFormatadas[cat] || cat)
                .join(", ");

            const secao = document.createElement("article");
            secao.classList.add("palestra-card");

            secao.innerHTML = `
                <img src="${item.imagemPerfil || '../source/img/people/user-default.png'}" alt="${item.nome}" />
                <div>
                <h3>${item.nome}</h3>
                <p>${nomesEspecialidades}</p>
                <div class="container-estrelas">
                    ${containerEstrelas}
                </div>
                <p>${item.descricao.substring(0, 200)}${item.descricao.length > 200 ? '...' : ''}.</p>
                <div class="acoes">
                  <button class="btn-green">AGENDAR PALESTRA</button>
                </div>
              </?div>
            `;
            containerPalestrantes.appendChild(secao);
        });
    } else {
        containerPalestrantes.innerHTML = `<article class="conteudo-card"><h3>Não há palestrantes encontrados</h3></article>`;
    }
}

// Escutadores de eventos para atualizar a lista automaticamente
selectOrdem.addEventListener("change", mostrarPalestrantes);

// Chamada inicial
mostrarPalestrantes();