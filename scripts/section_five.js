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

    #duvidas-frequentes {
      background-color: var(--cinza);
      color: var(--branco);
      padding: 4rem 2rem;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
    }

    #duvidas-frequentes .container {
      max-width: 1000px;
      margin: 0 auto;
      text-align: center;
    }

    #duvidas-frequentes h2 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 3rem;
      color: var(--ouro);
    }

    .faq-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: left;
    }

    .faq-item {
      background-color: var(--preto);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    .faq-item:hover {
      box-shadow: 0 6px 20px rgba(173, 135, 93, 0.2);
    }

    .faq-question {
      padding: 1.5rem 2rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
      color: var(--branco);
      font-family: 'Montserrat', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .faq-question:hover {
      background-color: rgba(173, 135, 93, 0.1);
      color: var(--ouro);
    }

    .faq-icon {
      font-size: 1.2rem;
      transition: transform 0.3s ease;
      color: var(--ouro);
      font-weight: bold;
    }

    .faq-item.active .faq-icon {
      transform: rotate(45deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      background-color: rgba(173, 135, 93, 0.05);
    }

    .faq-answer.active {
      max-height: 500px;
      padding: 1.5rem 2rem 2rem 2rem;
    }

    .faq-answer p {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--branco);
      margin: 0;
    }

    .faq-answer ul {
      margin: 1rem 0;
      padding-left: 1.2rem;
    }

    .faq-answer li {
      margin-bottom: 0.5rem;
      color: var(--branco);
    }

    @media (max-width: 768px) {
      #duvidas-frequentes {
        padding: 3rem 1rem;
      }

      #duvidas-frequentes h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .faq-question {
        padding: 1.2rem 1.5rem;
        font-size: 1rem;
      }

      .faq-answer.active {
        padding: 1.2rem 1.5rem 1.8rem 1.5rem;
      }
    }
  `;
  document.head.appendChild(estilo);

  // HTML
  const html = `
    <section id="duvidas-frequentes">
      <div class="container">
        <h2>Dúvidas Frequentes</h2>
        
        <div class="faq-container">
          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              O que é o STJD e como funciona?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O Superior Tribunal de Justiça Desportiva do Futebol (STJD) é o órgão máximo da Justiça Desportiva no futebol brasileiro. É responsável por julgar questões disciplinares, infrações ao Código Brasileiro de Justiça Desportiva e recursos de decisões dos Tribunais de Justiça Desportiva estaduais.</p>
              <p>O tribunal atua em casos como:</p>
              <ul>
                <li>Infrações disciplinares de atletas, dirigentes e árbitros</li>
                <li>Casos de doping</li>
                <li>Questões relacionadas a fair play financeiro</li>
                <li>Recursos contra punições aplicadas pelos TJDs</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como funciona a transferência de jogadores entre clubes?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>A transferência de jogadores envolve aspectos contratuais, trabalhistas e regulamentares específicos do futebol. O processo inclui:</p>
              <ul>
                <li>Rescisão ou liberação do contrato atual</li>
                <li>Negociação dos valores e condições</li>
                <li>Registro na CBF e federação estadual</li>
                <li>Cumprimento das janelas de transferência</li>
                <li>Pagamento de taxas e impostos devidos</li>
              </ul>
              <p>É fundamental contar com assessoria jurídica especializada para garantir que todos os procedimentos sejam cumpridos corretamente.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quais são os direitos trabalhistas dos atletas profissionais?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Os atletas profissionais têm direitos específicos previstos na Lei Pelé (Lei 9.615/98) e na CLT, incluindo:</p>
              <ul>
                <li>Registro em carteira de trabalho</li>
                <li>Salário mínimo garantido</li>
                <li>13º salário e férias remuneradas</li>
                <li>FGTS e contribuição previdenciária</li>
                <li>Seguro de acidentes pessoais</li>
                <li>Assistência médica e odontológica</li>
                <li>Direito de imagem (negociação separada)</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              O que são as SAFs e como impactam os clubes?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>As Sociedades Anônimas do Futebol (SAFs) são uma nova modalidade jurídica criada pela Lei 14.193/21, que permite a transformação de clubes em empresas com gestão profissional e captação de investimentos.</p>
              <p>Principais características:</p>
              <ul>
                <li>Gestão empresarial profissional</li>
                <li>Possibilidade de abertura de capital</li>
                <li>Regimes tributários diferenciados</li>
                <li>Parcelamento de dívidas com a União</li>
                <li>Separação entre atividade social e futebolística</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como funciona o Fair Play Financeiro no Brasil?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O Fair Play Financeiro brasileiro foi implementado pela CBF para promover a sustentabilidade financeira dos clubes. As principais regras incluem:</p>
              <ul>
                <li>Limite de gastos com salários (70% da receita bruta)</li>
                <li>Comprovação de quitação de débitos trabalhistas</li>
                <li>Apresentação de certidões negativas</li>
                <li>Auditoria independente das demonstrações financeiras</li>
                <li>Sanções por descumprimento (multas, perda de pontos, etc.)</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quando é necessário contratar um advogado desportivo?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>A assessoria jurídica especializada é fundamental em diversas situações:</p>
              <ul>
                <li>Elaboração e análise de contratos</li>
                <li>Processos disciplinares nos tribunais desportivos</li>
                <li>Transferências nacionais e internacionais</li>
                <li>Questões trabalhistas específicas do esporte</li>
                <li>Negociação de direitos de imagem e patrocínio</li>
                <li>Regularização junto às entidades desportivas</li>
                <li>Casos de doping ou outras infrações</li>
              </ul>
              <p>A prevenção através de consultoria preventiva evita problemas futuros e garante segurança jurídica.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;

  // Adiciona no final do <body>
  document.body.insertAdjacentHTML("beforeend", html);

  // Funcionalidades JavaScript
  function inicializarFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Fecha todas as outras perguntas
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').classList.remove('active');
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });
        
        // Toggle da pergunta atual
        if (isActive) {
          item.classList.remove('active');
          answer.classList.remove('active');
          question.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          answer.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // Inicializa quando o DOM estiver carregado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarFAQ);
  } else {
    inicializarFAQ();
  }
})();