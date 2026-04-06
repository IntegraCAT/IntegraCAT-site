// ================= SCROLL REVIEW =================

let ultimoScroll = 0; 
const headerNav = document.querySelector('.header-nav');

window.addEventListener('scroll', () => {
  // Pega a posição atual do scroll da tela
  const scrollAtual = window.scrollY;
  // Verifica se rolou para baixo E se já passou da altura do header (80px)
  if (scrollAtual > ultimoScroll && scrollAtual > 80) {
    // Rolou pra baixo: esconde o menu
    headerNav.classList.add('header-nav--escondido');
  } else {
    // Rolou pra cima: mostra o menu
    headerNav.classList.remove('header-nav--escondido');
  }
  // Atualiza a última posição para a próxima verificação
  ultimoScroll = scrollAtual;

  if(scrollAtual > 100){
    headerNav.classList.add('fundo');
  }else{
    headerNav.classList.remove('fundo');
  }  
});


//===================== MENU =====================

const btnMenu = document.querySelector('.menu');
const menuLista = document.querySelector('.header-nav ul');

btnMenu.addEventListener('click', () => {
  // se a classe não existe, o toggle coloca. Se existe, ele tira.
  menuLista.classList.toggle('menu-aberto');
});


/*Caso o usuário já esteja logado*/
const logado = JSON.parse(sessionStorage.getItem("usuarioAtivo"));
if (logado) {
  const btnEntrar = document.getElementById("btn-entrar-conta")
  btnEntrar.href = "./pages/dashboard.html"
}
