class FooterIntegraCat extends HTMLElement {
  connectedCallback() {
    // 1. Verifica se estamos na index ou na raiz
    const isIndex = window.location.pathname.includes("index.html") || window.location.pathname === "/";
    
    // 2. Define o prefixo: se for index, não volta pasta. Se não, usa ../
    const pfx = isIndex ? "./" : "../";

    this.innerHTML = `
      <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="${pfx}source/img/logo integraCAT.svg" alt="Logo - IntegraCAT"/>
          <p>Segurança do Trabalho sem burocracia.</p>
        </div>
        <div class="footer-columns">
          <section>
            <h4>Links Úteis</h4>
            <nav>
              <ul>
                <li><a href="${isIndex ? '#home' : pfx + 'index.html#home'}">Início</a></li>
                <li><a href="${isIndex ? '#beneficios' : pfx + 'index.html#beneficios'}">Benefícios</a></li>
                <li><a href="${isIndex ? '#sistema' : pfx + 'index.html#sistema'}">Sistema</a></li>
                <li><a href="${isIndex ? '#palestras' : pfx + 'index.html#palestras'}">Palestras e Conteúdos</a></li>
                <li><a href="${isIndex ? '#precos' : pfx + 'index.html#precos'}">Preços</a></li>
              </ul>
            </nav>
          </section>

          <section>
            <h4>Suporte</h4>
            <nav>
              <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Fale Conosco</a></li>
                <li><a href="">Termos de Uso</a></li>
                <li><a href="">Política de Privacidade</a></li>
              </ul>
            </nav>
          </section>

          <section>
            <h4>Contato</h4>
            <nav>
              <ul>
                <li><a href="">integracat@gmail.com</a></li>
                <li><a href="">Av. Paulista, 1000 - SP</a></li>
                <div class="redes">
                  <a href=""><img src="${pfx}source/img/icons/linkedin.svg" alt=""></a>
                  <a href=""><img src="${pfx}source/img/icons/instagram.svg" alt=""></a>
                  <a href=""><img src="${pfx}source/img/icons/youtube.svg" alt=""></a>
                </div>
              </ul>
            </nav>
          </section>
        </div>
        <small>© 2026 IntegraCAT. Todos os direitos reservados | CNPJ: 45.890.123/0001-99</small>
      </div>
    </footer>
    `;
  }
}
customElements.define('app-footer', FooterIntegraCat);