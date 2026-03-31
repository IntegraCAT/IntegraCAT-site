class SidebarIntegraCat extends HTMLElement {
  
  connectedCallback() {
    
    this.innerHTML = `
      <button id="btn-abrir">
        <img src="../source/img/icons/menu.svg" alt="Abrir menu" width="30px">
      </button>
      <nav class="sidebar-nav">
        <div class="title-logo">
          <img
            src="/source/img/logo integraCAT-nolet.svg"
            alt="logo - IntegraCAT"
          />
          <img
            src="/source/img/lettering integraCAT.svg"
            alt="letreiro - IntegraCAT"
          />
          <button id="btn-fechar">
            <img
              src="/source/img/icons/backArrow2.svg"
              alt="voltar"
              width="24px"
            />
          </button>
        </div>
        <ul>
          <li>
            <a href="/pages/dashboard.html">
              <img
                src="/source/img/icons/dashboard-icons/dashboard-icon.svg"
                alt="dashboard-icon"
              />
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="/pages/dashboard-historico.html">
              <img
                src="/source/img/icons/dashboard-icons/historic-icon.svg"
                alt="historico-icon"
              />
              <p>Histórico de Ocorrências</p>
            </a>
          </li>
          <li>
            <a href="/pages/dashboard-criarOcorrencia.html">
              <img
                src="/source/img/icons/dashboard-icons/create-icon.svg"
                alt="criar-icon"
              />
              <p>Criar Ocorrências</p>
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="/source/img/icons/dashboard-icons/lecture-icon.svg"
                alt="palestras-icon"
              />
              <p>Palestras</p>
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="/source/img/icons/dashboard-icons/content-icon.svg"
                alt="conteudos-icon"
              />
              <p>Conteúdos</p>
            </a>
          </li>
          <li>
            <a href="/pages/dashboard-configuracoes.html">
              <img
                src="/source/img/icons/dashboard-icons/config-icon.svg"
                alt="configuracaes-icon"
              />
              <p>Configurações</p>
            </a>
          </li>
          <li>
            <a id="btn-sair" href="/index.html">
              <img
                src="/source/img/icons/dashboard-icons/leave-icon.svg"
                alt="sair-icon"
              />
              <p>Sair da Conta</p>
            </a>
          </li>
        </ul>
      </nav>
    `;

    const sidebar = this.querySelector('.sidebar-nav');
    const btnAbrir = this.querySelector('#btn-abrir');
    const btnFechar = this.querySelector('#btn-fechar');

    if (btnFechar && btnAbrir && sidebar) {
      btnFechar.addEventListener('click', () => {
        sidebar.classList.add('escondida');
        btnAbrir.style.display = 'block';
      });

      btnAbrir.addEventListener('click', () => {
        sidebar.classList.remove('escondida');
        btnAbrir.style.display = 'none';
      });
    }
  }
}

customElements.define('app-sidebar', SidebarIntegraCat);