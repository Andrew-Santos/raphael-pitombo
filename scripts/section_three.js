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

    #areas-atuacao {
      background-color: var(--branco);
      color: var(--preto);
      min-height: 100vh;
      padding: 4rem 2rem;
      font-family: 'Montserrat', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    #areas-atuacao .container {
      max-width: 1200px;
      width: 100%;
      text-align: center;
    }

    #areas-atuacao h2 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
      color: var(--preto);
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2.5rem;
    }

    .card {
      background-color: #fefcf7;
      color: var(--preto);
      border-radius: 14px;
      padding: 1.8rem 1.6rem;
      box-shadow: 0 4px 12px rgba(43, 31, 26, 0.07);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      cursor: default;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 8px 24px rgba(43, 31, 26, 0.1);
    }

    .card img {
      width: 50px;
      height: 50px;
      margin-bottom: 1rem;
    }

    .card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.6rem;
      font-weight: 600;
      color: var(--preto);
    }

    .card p {
      font-size: 1rem;
      line-height: 1.5;
      color: var(--cinza);
      text-align: center;
      flex-grow: 1;
    }

    @media (min-width: 921px) {
      #areas-atuacao {
        height: 100vh;
      }
    }

    @media (max-width: 920px) {
      #areas-atuacao {
        padding: 3rem 1rem;
      }

      #areas-atuacao h2 {
        font-size: 2rem;
      }
    }
  `;
  document.head.appendChild(estilo);

  // HTML
  const html = `
    <section id="areas-atuacao">
      <div class="container">
        <h2>Áreas de Atuação</h2>
        <div class="cards-grid">
          <article class="card">
            <img src="icons/stjd.png" alt="Tribunais Desportivos" />
            <h3>Defesa em tribunais desportivos</h3>
            <p>Atuação no STJD, TJD com defesa especializada.</p>
          </article>
          <article class="card">
            <img src="icons/contratos.svg" alt="Contratos" />
            <h3>Contratos de atletas e treinadores</h3>
            <p>Elaboração e análise de contratos robustos.</p>
          </article>
          <article class="card">
            <img src="icons/transferencias.svg" alt="Transferências" />
            <h3>Transferências e registros</h3>
            <p>Gestão completa para transferência e registro.</p>
          </article>
          <article class="card">
            <img src="icons/patrocinios.svg" alt="Patrocínios" />
            <h3>Patrocínios e imagem</h3>
            <p>Negociação e proteção de direitos de imagem.</p>
          </article>
          <article class="card">
            <img src="icons/regularizacao.svg" alt="Regularização" />
            <h3>Regularização de clubes e atletas</h3>
            <p>Consultoria para conformidade legal.</p>
          </article>
          <article class="card">
            <img src="icons/trabalho.svg" alt="Direito do Trabalho" />
            <h3>Direito do trabalho aplicado ao esporte</h3>
            <p>Assessoria jurídica trabalhista especializada.</p>
          </article>
        </div>
      </div>
    </section>
  `;

  // Insere ao final do <body>
  document.body.insertAdjacentHTML("beforeend", html);
})();
