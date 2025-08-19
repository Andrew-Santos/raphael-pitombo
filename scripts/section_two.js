(function () {
  // CSS
  const estilo = document.createElement("style");
  estilo.textContent = `
    :root {
      --preto: #2b1f1a;
      --branco: #ede7de;
      --cinza: #3c3c3c;
      --marrom: #8c5e3c;
      --ouro: #ad875d;
    }

    #sobre-advogado {
      background-color: var(--preto);
      color: var(--branco);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
      overflow-x: hidden;
    }

    #sobre-advogado .container {
      display: flex;
      flex-direction: row-reverse;
      gap: 3rem;
      max-width: 1400px;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      animation: fadeIn 1.4s ease-out both;
    }

    .foto {
      flex: 1;
      max-width: 400px;
    }

    .foto img {
      width: 100%;
      border-radius: 20px;
      box-shadow:
        0 4px 8px rgba(173, 135, 93, 0.15),
        0 12px 24px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .foto img:hover {
      transform: scale(1.015);
      box-shadow:
        0 6px 12px rgba(173, 135, 93, 0.2),
        0 20px 30px rgba(0, 0, 0, 0.7);
    }

    .conteudo {
      flex: 2;
    }

    .conteudo h2 {
      font-size: 2rem;
      margin-bottom: 1.2rem;
      font-weight: 700;
      color: var(--ouro);
    }

    .conteudo .descricao {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.8rem;
      color: var(--branco);
    }

    .info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
      margin-bottom: 1.8rem;
    }

    .info div {
      background-color: var(--marrom);
      color: var(--branco);
      padding: 0.9rem 1rem;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      text-align: center;
    }

    .info div span {
      display: block;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .info div small {
      font-size: 0.8rem;
      display: block;
      margin-top: 0.2rem;
      color: var(--branco);
    }

    .frase {
      font-style: italic;
      font-size: 1rem;
      color: var(--branco);
      border-left: 4px solid var(--ouro);
      padding-left: 0.8rem;
    }

    @media (max-width: 920px) {
      #sobre-advogado .container {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
      }

      .foto {
        max-width: 280px;
        margin: 0 auto;
      }

      .info {
        grid-template-columns: 1fr;
      }

      .frase {
        font-size: 0.95rem;
        border-left: none;
        border-top: 2px solid var(--ouro);
        padding: 1rem 0 0 0;
      }
    }

    @media (min-width: 921px) {
      #sobre-advogado {
        height: 100vh;
        min-height: unset;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(60px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(estilo);

  // HTML
  const html = `
    <section id="sobre-advogado">
      <div class="container">
        <div class="foto">
          <img src="midias/pitombo_palma_serio.jpg" alt="Dr. Raphael Pitombo - Advogado" />
        </div>
        <div class="conteudo">
          <h2>Dr. Raphael Pitombo</h2>
          <p class="descricao">
            Advogado com sólida atuação há mais de 18 anos nas áreas trabalhista e desportiva. Ex-presidente da OAB Feira de Santana, atual Secretário-Geral Adjunto da OAB/BA e Procurador no Superior Tribunal de Justiça Desportiva do Futebol (STJD). Especialista em Direito Desportivo pelo CEDIN/MG. Reconhecido por sua defesa firme da advocacia e sua contribuição institucional para o fortalecimento da justiça no interior da Bahia.
          </p>
          <div class="info">
            <div>
              <span>+18</span>
              <small>Anos de atuação jurídica</small>
            </div>
            <div>
              <span>STJD</span>
              <small>Procurador Nacional do Futebol</small>
            </div>
            <div>
              <span>CEDIN-MG</span>
              <small>Especialista em Direito Desportivo</small>
            </div>
            <div>
              <span>OAB/BA</span>
              <small>Gestão, liderança e independência</small>
            </div>
          </div>
          <p class="frase">
            “A advocacia é a alma da defesa dos direitos. Tecnologia nenhuma substitui coragem, ética e compromisso.”
          </p>
        </div>
      </div>
    </section>
  `;

  // Adiciona ao final do <body>
  document.body.insertAdjacentHTML("beforeend", html);
})();
