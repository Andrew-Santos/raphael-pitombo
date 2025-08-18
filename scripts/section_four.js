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

    #blog {
      background: linear-gradient(135deg, var(--branco) 0%, #f5f0e8 50%, var(--branco) 100%);
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 5rem 2rem;
    }

    #blog::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 15% 85%, rgba(139, 94, 60, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 85% 15%, rgba(173, 135, 93, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .blog-title {
      font-size: 2.8rem;
      font-weight: 700;
      color: var(--preto);
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 1rem;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .blog-title::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, var(--marrom), var(--ouro), var(--marrom));
      border-radius: 2px;
    }

    .blog-subtitle {
      font-size: 1.1rem;
      color: var(--cinza);
      text-align: center;
      margin-bottom: 3.5rem;
      font-weight: 300;
      position: relative;
      z-index: 2;
    }

    .carousel-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      width: 90%;
      max-width: 1400px;
      height: 380px;
      position: relative;
      overflow: visible;
      z-index: 2;
    }

    .news-card {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
      background: white;
      box-shadow: 0 10px 40px rgba(43, 31, 26, 0.1);
    }

    .news-card.small {
      width: 350px;
      height: 250px;
      filter: blur(0.5px) brightness(0.8);
      opacity: 0.8;
      transform: scale(0.85);
    }

    .news-card.small:hover {
      filter: blur(0px) brightness(1);
      opacity: 0.95;
      transform: scale(0.9);
      box-shadow: 0 15px 50px rgba(43, 31, 26, 0.15);
    }

    .news-card.large {
      width: 500px;
      height: 320px;
      filter: blur(0px) brightness(1);
      opacity: 1;
      transform: scale(1);
      z-index: 10;
      box-shadow: 
        0 20px 60px rgba(43, 31, 26, 0.2),
        0 0 0 1px rgba(173, 135, 93, 0.1);
    }

    .news-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
    }

    .news-card:hover img {
      transform: scale(1.08);
    }

    .news-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(
        to top,
        rgba(43, 31, 26, 0.95) 0%,
        rgba(43, 31, 26, 0.8) 30%,
        rgba(43, 31, 26, 0.4) 60%,
        transparent 100%
      );
      display: flex;
      align-items: flex-end;
      padding: 2rem 1.8rem;
      transition: all 0.6s ease;
    }

    .news-card:hover .news-overlay {
      background: linear-gradient(
        to top,
        rgba(139, 94, 60, 0.95) 0%,
        rgba(139, 94, 60, 0.8) 30%,
        rgba(139, 94, 60, 0.4) 60%,
        transparent 100%
      );
    }

    .news-content {
      width: 100%;
    }

    .news-category {
      display: inline-block;
      background: var(--ouro);
      color: var(--preto);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.8rem;
      font-family: 'Montserrat', sans-serif;
    }

    .news-title {
      color: white;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.3;
      text-shadow: 0 2px 8px rgba(0,0,0,0.7);
      font-family: 'Montserrat', sans-serif;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .news-card.small .news-title {
      font-size: 1.1rem;
      -webkit-line-clamp: 2;
    }

    .news-date {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.85rem;
      margin-top: 0.5rem;
      font-weight: 300;
    }

    .carousel-indicators {
      display: flex;
      gap: 1rem;
      margin-top: 3rem;
      justify-content: center;
      z-index: 2;
      position: relative;
    }

    .indicator {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: rgba(139, 94, 60, 0.3);
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;
    }

    .indicator::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: var(--ouro);
      border-radius: 50%;
      transition: all 0.4s ease;
      transform: translate(-50%, -50%);
    }

    .indicator.active::before,
    .indicator:hover::before {
      width: 100%;
      height: 100%;
    }

    .indicator.active {
      background: var(--ouro);
      transform: scale(1.3);
      border-color: rgba(173, 135, 93, 0.3);
      box-shadow: 0 0 0 3px rgba(173, 135, 93, 0.2);
    }

    .indicator:hover {
      background: rgba(173, 135, 93, 0.6);
      transform: scale(1.1);
    }

    .nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(135deg, var(--marrom), var(--ouro));
      color: white;
      border: none;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      z-index: 20;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      box-shadow: 
        0 8px 25px rgba(139, 94, 60, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
    }

    .nav-arrow::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .nav-arrow:hover::before {
      opacity: 1;
    }

    .nav-arrow:hover {
      background: linear-gradient(135deg, var(--ouro), #c4956f);
      transform: translateY(-50%) scale(1.1);
      box-shadow: 
        0 12px 35px rgba(173, 135, 93, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    .nav-arrow:active {
      transform: translateY(-50%) scale(1.05);
    }

    .nav-arrow.prev {
      left: 2rem;
    }

    .nav-arrow.next {
      right: 2rem;
    }

    @media (max-width: 768px) {
      #blog {
        padding: 4rem 1rem;
        min-height: 80vh;
      }

      .blog-title {
        font-size: 2.2rem;
        margin-bottom: 0.8rem;
      }

      .blog-subtitle {
        font-size: 1rem;
        margin-bottom: 2.5rem;
      }

      .carousel-container {
        height: 320px;
        gap: 0;
        justify-content: center;
      }

      .news-card {
        position: absolute;
        transition: all 0.6s ease;
      }

      .news-card.small {
        width: 300px;
        height: 220px;
        opacity: 0;
        transform: scale(0.7);
        pointer-events: none;
        filter: blur(0px);
      }

      .news-card.large {
        width: 320px;
        height: 260px;
        opacity: 1;
        transform: scale(1);
        filter: blur(0px);
        z-index: 10;
        position: relative;
      }

      .news-card.small.entering {
        opacity: 0.4;
        transform: translateX(80px) scale(0.8);
      }

      .news-card.small.exiting {
        opacity: 0.4;
        transform: translateX(-80px) scale(0.8);
      }

      .nav-arrow {
        width: 50px;
        height: 50px;
        font-size: 1.1rem;
      }

      .nav-arrow.prev {
        left: 1rem;
      }

      .nav-arrow.next {
        right: 1rem;
      }

      .carousel-indicators {
        margin-top: 2.5rem;
        gap: 0.8rem;
      }

      .indicator {
        width: 12px;
        height: 12px;
      }

      .news-overlay {
        padding: 1.5rem 1.5rem;
      }

      .news-title {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 480px) {
      .nav-arrow {
        width: 45px;
        height: 45px;
        font-size: 1rem;
      }

      .news-card.large {
        width: 280px;
        height: 240px;
      }
    }
  `;
  document.head.appendChild(estilo);

  // HTML
  const html = `
    <section id="blog">
      <h2 class="blog-title">Fique por dentro</h2>
      <p class="blog-subtitle">Últimas novidades e insights do direito desportivo</p>
      
      <div class="carousel-container">
        <!-- Seta de navegação esquerda -->
        <button class="nav-arrow prev" onclick="blogCarousel.previousSlide()" aria-label="Notícia anterior">‹</button>
        
        <!-- Cards de notícias -->
        <article class="news-card small" onclick="blogCarousel.goToNews(0)">
          <img src="https://live.staticflickr.com/65535/54547723823_021b288a9d_5k.jpg" alt="Doping e Sanções">
          <div class="news-overlay">
            <div class="news-content">
              <span class="news-category">Legislação</span>
              <h3 class="news-title">Doping e Sanções: Análise da Legislação Vigente</h3>
              <p class="news-date">14 de Agosto, 2025</p>
            </div>
          </div>
        </article>

        <article class="news-card large" onclick="blogCarousel.goToNews(1)">
          <img src="https://live.staticflickr.com/65535/54546607912_eec6d61fe4_5k.jpg" alt="Fair Play Financeiro">
          <div class="news-overlay">
            <div class="news-content">
              <span class="news-category">CBF</span>
              <h3 class="news-title">CBF Implementa Novas Regras de Fair Play Financeiro</h3>
              <p class="news-date">12 de Agosto, 2025</p>
            </div>
          </div>
        </article>

        <article class="news-card small" onclick="blogCarousel.goToNews(2)">
          <img src="https://live.staticflickr.com/65535/54648407064_365b8dae17_5k.jpg" alt="Lei de Transferências">
          <div class="news-overlay">
            <div class="news-content">
              <span class="news-category">Contratos</span>
              <h3 class="news-title">Contrato de Jogador: Mudanças na Lei de Transferências</h3>
              <p class="news-date">10 de Agosto, 2025</p>
            </div>
          </div>
        </article>

        <!-- Seta de navegação direita -->
        <button class="nav-arrow next" onclick="blogCarousel.nextSlide()" aria-label="Próxima notícia">›</button>
      </div>

      <!-- Indicadores -->
      <div class="carousel-indicators">
        <span class="indicator" onclick="blogCarousel.goToSlide(0)" aria-label="Ir para notícia 1"></span>
        <span class="indicator active" onclick="blogCarousel.goToSlide(1)" aria-label="Ir para notícia 2"></span>
        <span class="indicator" onclick="blogCarousel.goToSlide(2)" aria-label="Ir para notícia 3"></span>
        <span class="indicator" onclick="blogCarousel.goToSlide(3)" aria-label="Ir para notícia 4"></span>
        <span class="indicator" onclick="blogCarousel.goToSlide(4)" aria-label="Ir para notícia 5"></span>
      </div>
    </section>
  `;

  // Adiciona no final do <body>
  document.body.insertAdjacentHTML("beforeend", html);

  // Objeto global para controlar o carousel
  window.blogCarousel = {
    // Dados das notícias (você substituirá por dados do banco)
    newsData: [
      {
        id: 1,
        title: "Flávio Dino determina que PF investigue fraudes em jogos de futebol",
        category: "Investigação",
        image: "https://imagens.ebc.com.br/aw-I_Y2OkUmA5Cdd6ZJmEYb1tko=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/trofeu_campeonato_brasileiro_serie_a.jpeg?itok=uQmZd0io",
        date: "15 de Agosto, 2025",
        url: "/noticia/1"
      },
      {
        id: 2,
        title: "Contrato de Jogador: Mudanças na Lei de Transferências",
        category: "Contratos",
        image: "https://live.staticflickr.com/65535/54648407064_365b8dae17_5k.jpg",
        date: "10 de Agosto, 2025",
        url: "/noticia/2"
      },
      {
        id: 3,
        title: "Tribunal de Arbitragem do Esporte: Casos Recentes",
        category: "Tribunais",
        image: "https://live.staticflickr.com/65535/54692778271_c468506013_5k.jpg",
        date: "08 de Agosto, 2025",
        url: "/noticia/3"
      },
      {
        id: 4,
        title: "Mercado do futebol exige atenção jurídica: SAFs, imagem de atletas e apostas",
        category: "SAFs",
        image: "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/NRKPQJEA4VCR5HKS4JGAXVKELU.jpeg?auth=0b651a971ca36f96a1b22c9716c35258af47961a1f31948c1c7992ccb858a30c&width=1600&height=896",
        date: "05 de Agosto, 2025",
        url: "/noticia/4"
      },
      {
        id: 5,
        title: "Doping e Sanções: Análise da Legislação Vigente",
        category: "Legislação",
        image: "https://live.staticflickr.com/65535/54547723823_021b288a9d_5k.jpg",
        date: "14 de Agosto, 2025",
        url: "/noticia/5"
      }
    ],

    currentIndex: 0,
    totalNews: 5,
    autoPlayInterval: null,
    isTransitioning: false,

    updateCarousel() {
      if (this.isTransitioning) return;
      
      const cards = document.querySelectorAll('.news-card');
      const indicators = document.querySelectorAll('.indicator');
      const isMobile = window.innerWidth <= 768;
      
      this.isTransitioning = true;
      
      if (isMobile) {
        // Versão mobile: apenas um card visível por vez
        cards.forEach((card, index) => {
          const newsItem = this.newsData[this.currentIndex];
          
          if (index === 1) { // Card central
            this.updateCardContent(card, newsItem, this.currentIndex);
            card.className = 'news-card large';
          } else {
            card.className = 'news-card small';
          }
        });
      } else {
        // Versão desktop: três cards visíveis
        const leftIndex = (this.currentIndex - 1 + this.totalNews) % this.totalNews;
        const centerIndex = this.currentIndex;
        const rightIndex = (this.currentIndex + 1) % this.totalNews;
        
        const positions = [leftIndex, centerIndex, rightIndex];
        
        cards.forEach((card, index) => {
          const newsIndex = positions[index];
          const newsItem = this.newsData[newsIndex];
          
          this.updateCardContent(card, newsItem, newsIndex);
          card.className = 'news-card ' + (index === 1 ? 'large' : 'small');
        });
      }
      
      // Atualiza indicadores
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === this.currentIndex);
      });
      
      // Reset transition flag
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    },

    updateCardContent(card, newsItem, newsIndex) {
      const img = card.querySelector('img');
      const title = card.querySelector('.news-title');
      const category = card.querySelector('.news-category');
      const date = card.querySelector('.news-date');
      
      if (img) {
        img.src = newsItem.image;
        img.alt = newsItem.title;
      }
      
      if (title) {
        title.textContent = newsItem.title;
      }
      
      if (category) {
        category.textContent = newsItem.category;
      }
      
      if (date) {
        date.textContent = newsItem.date;
      }
      
      card.setAttribute('onclick', `blogCarousel.goToNews(${newsIndex})`);
    },

    nextSlide() {
      if (this.isTransitioning) return;
      this.currentIndex = (this.currentIndex + 1) % this.totalNews;
      this.updateCarousel();
      this.resetAutoPlay();
    },

    previousSlide() {
      if (this.isTransitioning) return;
      this.currentIndex = (this.currentIndex - 1 + this.totalNews) % this.totalNews;
      this.updateCarousel();
      this.resetAutoPlay();
    },

    goToSlide(index) {
      if (this.isTransitioning || index === this.currentIndex) return;
      this.currentIndex = index;
      this.updateCarousel();
      this.resetAutoPlay();
    },

    goToNews(newsIndex) {
      const newsItem = this.newsData[newsIndex];
      console.log(`Navegando para notícia ${newsItem.id}: ${newsItem.url}`);
      
      // Animação de feedback
      const cards = document.querySelectorAll('.news-card');
      const targetCard = Array.from(cards).find(card => 
        card.getAttribute('onclick')?.includes(newsIndex.toString())
      );
      
      if (targetCard) {
        targetCard.style.transform += ' scale(0.98)';
        setTimeout(() => {
          targetCard.style.transform = targetCard.style.transform.replace(' scale(0.98)', '');
        }, 150);
      }
      
      // Aqui você pode implementar a navegação real
      // window.location.href = newsItem.url;
      alert(`Navegando para: ${newsItem.title}`);
    },

    startAutoPlay() {
      this.stopAutoPlay();
      this.autoPlayInterval = setInterval(() => {
        if (!document.hidden && !this.isTransitioning) {
          this.nextSlide();
        }
      }, 6000);
    },

    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    },

    resetAutoPlay() {
      this.stopAutoPlay();
      setTimeout(() => this.startAutoPlay(), 1000);
    },

    init() {
      this.updateCarousel();
      this.startAutoPlay();
      
      // Para o auto-play quando o usuário interage
      const container = document.querySelector('.carousel-container');
      if (container) {
        container.addEventListener('mouseenter', () => this.stopAutoPlay());
        container.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Touch events para mobile
        let startX = 0;
        let endX = 0;
        
        container.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
          this.stopAutoPlay();
        }, { passive: true });
        
        container.addEventListener('touchend', (e) => {
          endX = e.changedTouches[0].clientX;
          const deltaX = startX - endX;
          
          if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
              this.nextSlide();
            } else {
              this.previousSlide();
            }
          }
          
          setTimeout(() => this.startAutoPlay(), 1000);
        }, { passive: true });
      }
      
      // Atualiza o carousel quando a tela é redimensionada
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => this.updateCarousel(), 250);
      });
      
      // Navegação por teclado
      document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.previousSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.nextSlide();
        }
      });
      
      // Pausa auto-play quando a página não está visível
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.stopAutoPlay();
        } else {
          this.startAutoPlay();
        }
      });
    }
  };

  // Inicializa quando o DOM estiver carregado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      blogCarousel.init();
    });
  } else {
    blogCarousel.init();
  }
})();