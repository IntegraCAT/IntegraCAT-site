class SidebarIntegraCat extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button id="btn-abrir">
        <img src="../source/img/icons/menu.svg" alt="Abrir menu" width="30px">
      </button>
      <nav class="sidebar-nav">
        <div class="title-logo">
          <img src="../source/img/logo integraCAT-nolet.svg" alt="logo - IntegraCAT" />
          <img src="../source/img/lettering integraCAT.svg" alt="letreiro - IntegraCAT" />
          <button id="btn-fechar">
            <img src="../source/img/icons/backArrow2.svg" alt="voltar" width="24px" />
          </button>
        </div>
        <ul>
          <li><a href="dashboard.html"><img src="../source/img/icons/dashboard-icons/dashboard-icon.svg" /><p>Dashboard</p></a></li>
          <li><a href="dashboard-historico.html"><img src="../source/img/icons/dashboard-icons/historic-icon.svg" /><p>Histórico</p></a></li>
          <li><a href="dashboard-criarOcorrencia.html"><img src="../source/img/icons/dashboard-icons/create-icon.svg" /><p>Criar Ocorrências</p></a></li>
          <li><a href="dashboard-palestras.html"><img src="../source/img/icons/dashboard-icons/lecture-icon.svg" /><p>Palestras</p></a></li>
          <li><a href="dashboard-conteudos.html"><img src="../source/img/icons/dashboard-icons/content-icon.svg" /><p>Conteúdos</p></a></li>
          <li><a href="dashboard-configuracoes.html"><img src="../source/img/icons/dashboard-icons/config-icon.svg" /><p>Configurações</p></a></li>
          <li><a id="btn-sair" onclick="sairDaConta()" href="../index.html"><img src="../source/img/icons/dashboard-icons/leave-icon.svg" /><p>Sair</p></a></li>
        </ul>
      </nav>
    `;

    this.setActiveLink();
    this.setupEventListeners();
  }

  setActiveLink() {
    const currentPath = window.location.pathname;
    const links = this.querySelectorAll('ul li a');

    links.forEach(link => {
      const linkHref = link.getAttribute('href');
      // Lógica: se o nome do arquivo no href estiver na URL atual
      if (linkHref && currentPath.includes(linkHref.split('/').pop())) {
        link.parentElement.classList.add('btn-selecionado');
      }
    });
  }

  setupEventListeners() {
    const sidebar = this.querySelector('.sidebar-nav');
    const btnAbrir = this.querySelector('#btn-abrir');
    const btnFechar = this.querySelector('#btn-fechar');

    btnFechar?.addEventListener('click', () => {
      sidebar.classList.add('escondida');
      btnAbrir.style.display = 'block';
    });

    btnAbrir?.addEventListener('click', () => {
      sidebar.classList.remove('escondida');
      btnAbrir.style.display = 'none';
    });
  }
}

customElements.define('app-sidebar', SidebarIntegraCat);