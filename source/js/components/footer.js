class FooterIntegraCat extends HTMLElement {
  
  connectedCallback() {
    
    this.innerHTML = `
      <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="/IntegraCAT-site/source/img/logo integraCAT.svg" alt="Logo - IntegraCAT"/>
          <p>Segurança do Trabalho sem burocracia.</p>
        </div>
        <div class="footer-columns">
          <section>
            <h4>Links Úteis</h4>

            <nav>
              <ul>
                <li><a href="/IntegraCAT-site/index.html#home">Início</a></li>
                <li><a href="/IntegraCAT-site/index.html#beneficios">Benefícios</a></li>
                <li><a href="/IntegraCAT-site/index.html#sistema">Sistema</a></li>
                <li><a href="/IntegraCAT-site/index.html#palestras">Palestras e Conteúdos</a></li>
                <li><a href="/IntegraCAT-site/index.html#precos">Preços</a></li>
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
                  <a href=""><img src="/IntegraCAT-site/source/img/icons/linkedin.svg" alt=""/IntegraCAT-site/a>
                  <a href=""><img src="/IntegraCAT-site/source/img/icons/instagram.svg" alt=""/IntegraCAT-site/a>
                  <a href=""><img src="/IntegraCAT-site/source/img/icons/youtube.svg" alt=""/IntegraCAT-site/a>
                </div>
              </ul>
            </nav>
          </section>
        </div>
        <small
          >© 2026 IntegraCAT. Todos os direitos reservados |
          CNPJ: 45.890.123/0001-99</small>
      </div>
    </footer>
    `;
  }
}
customElements.define('app-footer', FooterIntegraCat);