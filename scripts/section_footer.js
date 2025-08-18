(function () {
  // CSS
  const estilo = document.createElement('style');
  estilo.textContent = `
    :root {
      --preto: #2b1f1a;
      --branco: #ede7de;
      --cinza: #3c3c3c;
      --marrom: #8c5e3c;
      --ouro: #ad875d;
    }

    #footer {
      background: linear-gradient(180deg, var(--cinza) 0%, var(--preto) 100%);
      color: var(--branco);
      font-family: 'Montserrat', sans-serif;
      position: relative;
      overflow: hidden;
    }

    #footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 30% 20%, rgba(173, 135, 93, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(139, 94, 60, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .footer-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--ouro), transparent);
      margin-bottom: 3rem;
      position: relative;
      z-index: 2;
    }

    .footer-main {
      padding: 4rem 2rem 2rem 2rem;
      position: relative;
      z-index: 2;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .footer-section h3 {
      font-size: 1.4rem;
      color: var(--ouro);
      margin-bottom: 1.5rem;
      font-weight: 600;
      position: relative;
    }

    .footer-section h3::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background: var(--ouro);
      border-radius: 1px;
    }

    .footer-about {
      grid-column: span 1;
    }

    .footer-about .logo {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--ouro);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }



    .footer-about p {
      line-height: 1.6;
      color: rgba(237, 231, 222, 0.9);
      margin-bottom: 1.5rem;
    }

    .footer-social {
      display: flex;
      gap: 1rem;
    }

    .social-icon {
      width: 45px;
      height: 45px;
      background: linear-gradient(135deg, var(--marrom), var(--ouro));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .social-icon::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s ease;
    }

    .social-icon:hover::before {
      left: 100%;
    }

    .social-icon:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 20px rgba(173, 135, 93, 0.3);
    }

    .footer-links ul {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 0.8rem;
    }

    .footer-links a {
      color: rgba(237, 231, 222, 0.9);
      text-decoration: none;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.3rem 0;
    }

    .footer-links a::before {
      content: '→';
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
      color: var(--ouro);
    }

    .footer-links a:hover::before {
      opacity: 1;
      transform: translateX(0);
    }

    .footer-links a:hover {
      color: var(--ouro);
      transform: translateX(10px);
    }

    .footer-contact p {
      margin-bottom: 0.8rem;
      color: rgba(237, 231, 222, 0.9);
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .footer-contact .icon {
      font-size: 1.1rem;
      color: var(--ouro);
      min-width: 20px;
    }

    .footer-contact a {
      color: rgba(237, 231, 222, 0.9);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-contact a:hover {
      color: var(--ouro);
    }

    .footer-bottom {
      background: linear-gradient(135deg, var(--preto), #1a1612);
      padding: 2rem 2rem;
      border-top: 1px solid rgba(173, 135, 93, 0.2);
      position: relative;
      z-index: 2;
    }

    .footer-bottom-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .copyright {
      color: rgba(237, 231, 222, 0.7);
      font-size: 0.9rem;
    }

    .developer-credit {
      display: flex;
      align-items: flex-end;
      gap: 0.5rem;
      color: rgba(237, 231, 222, 0.7);
      font-size: 0.9rem;
    }

    .developer-credit a {
      color: var(--ouro);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: flex;
    }
      .developer-credit a svg{
        width: 150px;
      
      }

    .developer-credit a:hover {
      color: #c4956f;
      text-shadow: 0 0 8px rgba(173, 135, 93, 0.3);
    }

    .back-to-top {
      position: fixed;
      bottom: 5rem;
      right: 4rem;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--marrom), var(--ouro));
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      z-index: 1000;
      box-shadow: 0 8px 25px rgba(139, 94, 60, 0.3);
    }

    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
    }

    .back-to-top:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 12px 35px rgba(173, 135, 93, 0.4);
    }

    .back-to-top:active {
      transform: translateY(-1px) scale(1.05);
    }

    @media (max-width: 768px) {
      .footer-main {
        padding: 3rem 1rem 2rem 1rem;
      }

      .footer-container {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
      }

      .footer-section h3::after {
        left: 50%;
        transform: translateX(-50%);
      }

      .footer-social {
        justify-content: center;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .back-to-top {
        bottom: 1.5rem;
        right: 1.5rem;
        width: 50px;
        height: 50px;
        font-size: 1.3rem;
      }
    }

    @media (max-width: 480px) {
      .footer-main {
        padding: 2.5rem 0.5rem 1.5rem 0.5rem;
      }

      .footer-about .logo {
        font-size: 1.5rem;
      }

      .footer-section h3 {
        font-size: 1.2rem;
      }
    }

    /* Animação de fade-in para o footer */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .footer-animate {
      animation: fadeInUp 0.8s ease-out both;
    }

    /* Efeito de brilho sutil */
    @keyframes glow {
      0%, 100% {
        text-shadow: 0 0 5px rgba(173, 135, 93, 0.3);
      }
      50% {
        text-shadow: 0 0 10px rgba(173, 135, 93, 0.5);
      }
    }

    .footer-about .logo:hover {
      animation: glow 2s ease-in-out infinite;
    }

 
  `;
  document.head.appendChild(estilo);

  // HTML
  const html = `
    <footer id="footer">
      <div class="footer-divider"></div>
      
      <div class="footer-main">
        <div class="footer-container">
          <!-- Sobre o Advogado -->
          <div class="footer-section footer-about">
            <div class="logo">Raphael Pitombo</div>
            <p>
              Advocacia especializada em Direito Desportivo com mais de 17 anos de experiência. 
              Defesa jurídica estratégica para atletas, clubes e entidades esportivas.
            </p>
            <div class="footer-social">
              <a href="https://instagram.com/raphaelpitombo.adv" target="_blank" class="social-icon" title="Instagram">
                <i class="ph ph-instagram-logo" style="font-size:25px"></i>
              </a>
              <a href="https://linkedin.com/in/raphaelpitombo" target="_blank" class="social-icon" title="LinkedIn">
                <i class="ph ph-linkedin-logo" style="font-size:25px"></i>
              </a>
              <a href="https://wa.me/5575999999999" target="_blank" class="social-icon" title="WhatsApp">
                <i class="ph ph-whatsapp-logo" style="font-size:25px"></i>
              </a>
              <a href="mailto:contato@raphaelpitombo.adv.br" class="social-icon" title="E-mail">
                <i class="ph ph-envelope" style="font-size:25px"></i>
              </a>
            </div>
          </div>

          <!-- Links Úteis -->
          <div class="footer-section footer-links">
            <h3>Navegação</h3>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#sobre-advogado">Sobre</a></li>
              <li><a href="#areas-atuacao">Áreas de Atuação</a></li>
              <li><a href="#blog">Blog & Notícias</a></li>
              <li><a href="#duvidas-frequentes">FAQ</a></li>
              <li><a href="#contatos">Contato</a></li>
            </ul>
          </div>

          <!-- Contato -->
          <div class="footer-section footer-contact">
            <h3>Contato</h3>
            <p>
              <i class="ph ph-map-trifold"></i>
                Edifício Multiplace - Av. João Durval Carneiro - Cel. Jose Pinto, Feira de Santana - BA
            </p>
            <p>
              <i class="ph ph-phone"></i>
              <a href="tel:+5575999999999">(75) 9 9999-9999</a>
            </p>
            <p>
              <i class="ph ph-envelope-open"></i>
              <a href="mailto:contato@raphaelpitombo.adv.br">contato@raphaelpitombo.adv.br</a>
            </p>
            <p>
              <i class="ph ph-clock"></i>
              Seg a Sex: 8h às 18h
            </p>
            <p>
              <i class="ph ph-scales"></i>
              OAB: 25185/BA
            </p>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            © 2025 Dr. Raphael Pitombo - Advocacia Desportiva. Todos os direitos reservados.
          </div>
          <div class="developer-credit">
            Desenvolvido por<a href="https://seusite.com" target="_blank"><img id="logo"></a> 
          </div>
        </div>
      </div>

      <!-- Botão Voltar ao Topo -->
      <button class="back-to-top" onclick="scrollToTop()" title="Voltar ao topo">
        ↑
      </button>
    </footer>
  `;

  // Adiciona no final do <body>
  document.body.insertAdjacentHTML("beforeend", html);

  // JavaScript para funcionalidades
  function inicializarFooter() {
    // Animação do footer quando entra na viewport
    const footer = document.getElementById('footer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('footer-animate');
        }
      });
    }, {
      threshold: 0.1
    });

    if (footer) {
      observer.observe(footer);
    }

    // Botão voltar ao topo
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    // Smooth scroll para links internos
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    footerLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Efeito de digitação no logo
    const logo = document.querySelector('.footer-about .logo');
    if (logo) {
      let text = logo.textContent;
      logo.textContent = '';
      
      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let i = 0;
            const typeWriter = () => {
              if (i < text.length) {
                logo.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
              }
            };
            typeWriter();
            observer2.unobserve(entry.target);
          }
        });
      });
      
      observer2.observe(logo);
    }
  }

  // Função global para voltar ao topo
  window.scrollToTop = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Inicializa quando o DOM estiver carregado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarFooter);
  } else {
    inicializarFooter();
  }
})();