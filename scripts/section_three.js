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
            background: linear-gradient(135deg, var(--preto) 0%, #1a1612 50%, var(--preto) 100%);
            color: var(--branco);
            padding: 5rem 2rem;
            font-family: 'Montserrat', sans-serif;
            width: 100%;
            position: relative;
            overflow: hidden;
            /* Removido display flex que poderia causar problemas de layout */
        }

        #areas-atuacao::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(173, 135, 93, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(139, 94, 60, 0.03) 0%, transparent 50%);
            pointer-events: none;
        }

        #areas-atuacao .container {
            width: 100%;
            margin: 0 auto; /* Centraliza o container */
            text-align: center;
            position: relative;
            z-index: 2;
        }

        #areas-atuacao h2 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--ouro);
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            position: relative;
        }

        #areas-atuacao h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, transparent, var(--ouro), transparent);
        }

        .subtitle {
            font-size: 1.1rem;
            color: rgba(237, 231, 222, 0.8);
            margin-bottom: 3.5rem;
            font-weight: 300;
        }

        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            perspective: 1000px;
        }

        .card {
            background: linear-gradient(145deg, rgba(173, 135, 93, 0.08) 0%, rgba(139, 94, 60, 0.12) 50%, rgba(43, 31, 26, 0.15) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(173, 135, 93, 0.2);
            color: var(--branco);
            border-radius: 20px;
            padding: 2.5rem 2rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(173, 135, 93, 0.1),
                transparent
            );
            transition: left 0.6s ease;
        }

        .card:hover::before {
            left: 100%;
        }

        .card:hover {
            transform: translateY(-12px) rotateX(5deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
                       0 0 0 1px rgba(173, 135, 93, 0.3),
                       inset 0 1px 0 rgba(255, 255, 255, 0.2);
            border-color: rgba(173, 135, 93, 0.4);
        }

        .card-icon {
            width: 90px;
            height: 90px;
            margin-bottom: 1.5rem;
            padding: 20px;
            background: linear-gradient(145deg, var(--ouro), var(--marrom));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 25px rgba(173, 135, 93, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .card-icon::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.6s ease;
            opacity: 0;
        }

        .card:hover .card-icon::before {
            opacity: 1;
            animation: shimmer 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .card:hover .card-icon {
            transform: scale(1.1) rotateY(10deg);
            box-shadow: 0 12px 35px rgba(173, 135, 93, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .card-icon img {
            width: 50px;
            height: 50px;
            filter: brightness(0) invert(1);
            transition: all 0.3s ease;
        }

        .card:hover .card-icon img {
            transform: scale(1.1);
            filter: brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.3));
        }

        .card h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            font-weight: 600;
            color: var(--ouro);
            transition: all 0.3s ease;
            line-height: 1.3;
        }

        .card:hover h3 {
            color: #c4956f;
            text-shadow: 0 2px 8px rgba(173, 135, 93, 0.3);
        }

        .card p {
            font-size: 1rem;
            line-height: 1.6;
            color: rgba(237, 231, 222, 0.9);
            text-align: center;
            flex-grow: 1;
            transition: all 0.3s ease;
        }

        .card:hover p {
            color: var(--branco);
        }

        .card-number {
            position: absolute;
            top: 15px;
            right: 20px;
            width: 30px;
            height: 30px;
            background: rgba(173, 135, 93, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: bold;
            color: var(--ouro);
            border: 1px solid rgba(173, 135, 93, 0.3);
        }

        @media (min-width: 1200px) {
            .cards-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width: 920px) {
            #areas-atuacao {
                padding: 4rem 1rem;
            }

            #areas-atuacao h2 {
                font-size: 2.2rem;
            }

            .subtitle {
                font-size: 1rem;
                margin-bottom: 2.5rem;
            }

            .cards-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .card {
                padding: 2rem 1.5rem;
                margin: 0 auto;
                max-width: 400px;
            }

            .card:hover {
                transform: translateY(-8px);
            }

            .card-icon {
                width: 80px;
                height: 80px;
                margin-bottom: 1.2rem;
            }

            .card-icon img {
                width: 45px;
                height: 45px;
            }
        }

        @media (max-width: 480px) {
            #areas-atuacao {
                padding: 3rem 0.5rem;
            }

            .card {
                padding: 1.8rem 1.2rem;
            }
        }
    `;
    document.head.appendChild(estilo);

const html = `
<section id="areas-atuacao">
  <div class="container">
    <h2>Áreas de Atuação</h2>
    <p class="subtitle">Soluções jurídicas estratégicas para atletas, clubes e empresas do esporte</p>
    <div class="cards-grid">

      <article class="card">
        <span class="card-number">01</span>
        <div class="card-icon">
          <i class="ph-fill ph-file-text" style="font-size:40px"></i>
        </div>
        <h3>Contratos, Carreira e Rescisões</h3>
        <p>Elaboração e negociação de contratos personalizados para atletas, técnicos e agentes, com foco em segurança jurídica, valorização de carreira e suporte completo em processos de rescisão contratual.</p>
      </article>

      <article class="card">
        <span class="card-number">02</span>
        <div class="card-icon">
          <i class="ph-fill ph-arrows-left-right" style="font-size:40px"></i>
        </div>
        <h3>Transferências e Registro de Atletas</h3>
        <p>Assessoria completa em transferências nacionais e internacionais, regularização documental e conformidade junto a federações e entidades reguladoras.</p>
      </article>

      <article class="card">
        <span class="card-number">03</span>
        <div class="card-icon">
          <i class="ph-fill ph-tag" style="font-size:40px"></i>
        </div>
        <h3>Direitos de Imagem e Marketing Esportivo</h3>
        <p>Proteção e negociação estratégica de direitos de imagem, contratos de patrocínio e projetos de marketing, fortalecendo marcas pessoais e institucionais.</p>
      </article>

      <article class="card">
        <span class="card-number">04</span>
        <div class="card-icon">
          <i class="ph-fill ph-shield-check" style="font-size:40px"></i>
        </div>
        <h3>Governança e Compliance Esportivo</h3>
        <p>Estruturação legal e regulatória de clubes e entidades, implementação de programas de compliance e conformidade com normas nacionais e internacionais.</p>
      </article>

    <article class="card">
  <span class="card-number">05</span>
  <div class="card-icon">
    <i class="ph-fill ph-lightbulb" style="font-size:40px"></i>
  </div>
  <h3>Inovação e Propriedade Intelectual</h3>
  <p>Proteção jurídica completa para marcas, tecnologias, plataformas digitais e soluções inovadoras no esporte. Atuação estratégica que garante exclusividade, segurança legal e maximização do valor econômico de ativos intangíveis, desde startups e academias até grandes clubes e projetos internacionais.</p>
</article>

      <article class="card">
        <span class="card-number">06</span>
        <div class="card-icon">
          <i class="ph-fill ph-handshake" style="font-size:40px"></i>
        </div>
        <h3>Consultoria Estratégica</h3>
        <p>Planejamento jurídico de longo prazo para atletas e clubes, incluindo gestão de carreira, expansão internacional e estruturação de negócios esportivos.</p>
      </article>

    </div>
  </div>
</section>


`;



    // Insere ao final do <body>
    document.body.insertAdjacentHTML("beforeend", html);

    // JavaScript para animações (SEM o efeito de paralaxe problemático)
    function inicializarAnimacoes() {
        const cards = document.querySelectorAll('#areas-atuacao .card');

        // Animação de entrada staggered
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // REMOVIDO: Efeito de paralaxe que causava problemas
    }

    // Inicializa quando o DOM estiver carregado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarAnimacoes);
    } else {
        inicializarAnimacoes();
    }
})();