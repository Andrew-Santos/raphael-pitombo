(function () {
  // Configuração Supabase
  const SUPABASE_URL = "https://owpboqevrtthsupugcrt.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cGJvcWV2cnR0aHN1cHVnY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjY4MDQsImV4cCI6MjA2OTUwMjgwNH0.7RjkVOUT6ByewP0D6FgHQjZDCoi4GYnGT6BMj794MfQ";

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

    .loading-state {
      text-align: center;
      padding: 4rem 2rem;
      color: var(--marrom);
      font-size: 1.1rem;
      font-weight: 500;
    }

    .loading-spinner {
      width: 50px;
      height: 50px;
      border: 4px solid rgba(139, 94, 60, 0.2);
      border-top: 4px solid var(--marrom);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1.5rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .error-state {
      text-align: center;
      padding: 4rem 2rem;
      color: #d32f2f;
      font-size: 1.1rem;
      font-weight: 500;
      background: rgba(211, 47, 47, 0.05);
      border-radius: 15px;
      border: 2px solid rgba(211, 47, 47, 0.1);
    }

    .carousel-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      width: 100%;
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

    .news-card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
      display: block;
    }

    .news-card:hover .news-card-image {
      transform: scale(1.08);
    }

    .news-source {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--preto);
      font-family: 'Montserrat', sans-serif;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      z-index: 15;
    }

    .news-card:hover .news-source {
      background: rgba(173, 135, 93, 0.95);
      color: white;
      transform: scale(1.05);
    }

    .news-source-icon {
      width: 16px !important;
      height: 16px !important;
      border-radius: 3px;
      object-fit: cover;
      flex-shrink: 0;
      display: block;
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

    .news-title {
      color: white;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.3;
      text-shadow: 0 2px 8px rgba(0,0,0,0.7);
      font-family: 'Montserrat', sans-serif;
      margin: 0 0 0.8rem 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .news-card.small .news-title {
      font-size: 1.1rem;
      -webkit-line-clamp: 2;
    }

    .news-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;
      width: 100%;
    }

    .news-date {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.85rem;
      font-weight: 300;
      margin: 0;
    }

    .news-author {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.85rem;
      font-weight: 300;
      text-align: right;
      margin: 0;
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
      left: 0;
    }

    .nav-arrow.next {
      right: 0;
    }

    .nav-arrow.disabled {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
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
        width: 100%;
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

      .news-source {
        top: 1rem;
        right: 1rem;
        padding: 0.4rem 0.8rem;
        font-size: 0.75rem;
      }

      .news-source-icon {
        width: 14px !important;
        height: 14px !important;
      }

      .nav-arrow {
        width: 50px;
        height: 50px;
        font-size: 1.1rem;
      }

      .nav-arrow.prev {
        left: 0;
      }

      .nav-arrow.next {
        right: 0;
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

      .news-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3rem;
      }

      .news-author {
        text-align: left;
      }
    }

    @media (max-width: 480px) {
      .nav-arrow {
        width: 45px;
        height: 45px;
        font-size: 1rem;
      }

      .news-card.large {
        width: 95%;
        height: 240px;
      }

      .news-source {
        padding: 0.3rem 0.6rem;
        font-size: 0.7rem;
      }

      .news-source-icon {
        width: 12px !important;
        height: 12px !important;
      }
    }
  `;
  document.head.appendChild(estilo);

  // HTML inicial com loading
  const html = `
    <section id="blog">
      <h2 class="blog-title">Fique por dentro</h2>
      <p class="blog-subtitle">Últimas novidades e insights do direito desportivo</p>
      
      <div id="carousel-content">
        <div class="loading-state">
          <div class="loading-spinner"></div>
          Carregando últimas notícias...
        </div>
      </div>
    </section>
  `;

  // Adiciona no final do <body>
  document.body.insertAdjacentHTML("beforeend", html);

  // Função para buscar notícias do Supabase
  async function fetchNews() {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/form_news?parceiro=eq.1&order=created_at.desc&limit=5`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
      throw error;
    }
  }

  // Função para formatar data
  function formatDate(dateString) {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch (error) {
      return 'Data não disponível';
    }
  }

  // Função para extrair nome da fonte
  function getSourceName(source) {
    if (!source) return 'Fonte';
    
    const sourceMap = {
      'globoesporte.globo.com': 'Globo Esporte',
      'ge.globo.com': 'GE',
      'esporte.uol.com.br': 'UOL Esporte',
      'www.uol.com.br': 'UOL',
      'espn.com.br': 'ESPN Brasil',
      'www.espn.com.br': 'ESPN',
      'lance.com.br': 'Lance!',
      'www.lance.com.br': 'Lance!',
      'sportv.globo.com': 'SporTV',
      'cbf.com.br': 'CBF',
      'www.cbf.com.br': 'CBF',
      'fifa.com': 'FIFA',
      'conmebol.com': 'CONMEBOL'
    };

    // Tenta encontrar correspondência exata
    if (sourceMap[source]) {
      return sourceMap[source];
    }

    // Busca por correspondência parcial
    const lowerSource = source.toLowerCase();
    for (const [key, name] of Object.entries(sourceMap)) {
      if (lowerSource.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerSource)) {
        return name;
      }
    }

    // Se não encontrar, retorna a própria fonte formatada
    return source.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0] || 'Fonte';
  }

  // Função para criar o HTML do carousel
  function createCarouselHTML(newsData) {
    if (!newsData || newsData.length === 0) {
      return `
        <div class="error-state">
          <h3>Nenhuma notícia encontrada</h3>
          <p>Não há notícias disponíveis no momento. Tente novamente mais tarde.</p>
        </div>
      `;
    }

    const indicators = newsData.map((_, index) => 
      `<span class="indicator ${index === 0 ? 'active' : ''}" onclick="blogCarousel.goToSlide(${index})" aria-label="Ir para notícia ${index + 1}"></span>`
    ).join('');

    const cards = Array.from({length: 3}, (_, index) => {
      const newsIndex = index % newsData.length;
      const news = newsData[newsIndex];
      const cardClass = index === 1 ? 'large' : 'small';
      const fallbackImage = 'https://via.placeholder.com/500x300/8c5e3c/ffffff?text=Sem+Imagem';
      const fallbackFavicon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIgZmlsbD0iI2FkODc1ZCIvPgo8dGV4dCB4PSI4IiB5PSIxMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5OZPC90ZXh0Pgo8L3N2Zz4K';
      
      return `
        <article class="news-card ${cardClass}" onclick="blogCarousel.goToNews(${newsIndex})">
          <img class="news-card-image" 
               src="${news.image || fallbackImage}" 
               alt="${news.title}" 
               onerror="this.src='${fallbackImage}'">
          
          <div class="news-source">
            <img class="news-source-icon" 
                 src="${news.favicon || fallbackFavicon}" 
                 alt="Ícone da fonte"
                 onerror="this.src='${fallbackFavicon}'">
            <span>${getSourceName(news.source)}</span>
          </div>

          <div class="news-overlay">
            <div class="news-content">
              <h3 class="news-title">${news.title}</h3>
              <div class="news-footer">
                <p class="news-date">${formatDate(news.published_date || news.created_at)}</p>
                ${news.news_author ? `<p class="news-author">Por: ${news.news_author}</p>` : ''}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    return `
      <div class="carousel-container">
        <button class="nav-arrow prev" onclick="blogCarousel.previousSlide()" aria-label="Notícia anterior">‹</button>
        ${cards}
        <button class="nav-arrow next" onclick="blogCarousel.nextSlide()" aria-label="Próxima notícia">›</button>
      </div>
      <div class="carousel-indicators">
        ${indicators}
      </div>
    `;
  }

  // Função para mostrar erro
  function showError(error) {
    const content = document.getElementById('carousel-content');
    if (content) {
      content.innerHTML = `
        <div class="error-state">
          <h3>Erro ao carregar notícias</h3>
          <p>Ocorreu um erro ao buscar as notícias. Por favor, tente novamente mais tarde.</p>
          <small>Erro: ${error.message}</small>
        </div>
      `;
    }
  }

  // Objeto global para controlar o carousel
  window.blogCarousel = {
    newsData: [],
    currentIndex: 0,
    totalNews: 0,
    autoPlayInterval: null,
    isTransitioning: false,

    async init() {
      try {
        // Busca as notícias
        this.newsData = await fetchNews();
        this.totalNews = this.newsData.length;

        if (this.totalNews === 0) {
          throw new Error('Nenhuma notícia encontrada');
        }

        // Atualiza o HTML
        const content = document.getElementById('carousel-content');
        if (content) {
          content.innerHTML = createCarouselHTML(this.newsData);
        }

        // Inicializa o carousel
        this.updateCarousel();
        this.startAutoPlay();
        this.setupEventListeners();

      } catch (error) {
        console.error('Erro ao inicializar carousel:', error);
        showError(error);
      }
    },

    updateCarousel() {
      if (this.isTransitioning || this.totalNews === 0) return;
      
      const cards = document.querySelectorAll('.news-card');
      const indicators = document.querySelectorAll('.indicator');
      const isMobile = window.innerWidth <= 768;
      
      this.isTransitioning = true;
      
      if (isMobile) {
        // Versão mobile: apenas um card visível por vez
        cards.forEach((card, index) => {
          if (index === 1) { // Card central
            const newsItem = this.newsData[this.currentIndex];
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

      // Atualiza botões de navegação
      const prevBtn = document.querySelector('.nav-arrow.prev');
      const nextBtn = document.querySelector('.nav-arrow.next');
      
      if (this.totalNews <= 1) {
        if (prevBtn) prevBtn.classList.add('disabled');
        if (nextBtn) nextBtn.classList.add('disabled');
      } else {
        if (prevBtn) prevBtn.classList.remove('disabled');
        if (nextBtn) nextBtn.classList.remove('disabled');
      }
      
      // Reset transition flag
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    },

    updateCardContent(card, newsItem, newsIndex) {
      if (!newsItem || !card) return;

      const img = card.querySelector('.news-card-image');
      const title = card.querySelector('.news-title');
      const sourceIcon = card.querySelector('.news-source-icon');
      const sourceName = card.querySelector('.news-source span');
      const date = card.querySelector('.news-date');
      let author = card.querySelector('.news-author');
      
      const fallbackImage = 'https://via.placeholder.com/500x300/8c5e3c/ffffff?text=Sem+Imagem';
      const fallbackFavicon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIgZmlsbD0iI2FkODc1ZCIvPgo8dGV4dCB4PSI4IiB5PSIxMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5OZPC90ZXh0Pgo8L3N2Zz4K';
      
      if (img) {
        img.src = newsItem.image || fallbackImage;
        img.alt = newsItem.title;
      }
      
      if (title) {
        title.textContent = newsItem.title;
      }
      
      if (sourceIcon) {
        sourceIcon.src = newsItem.favicon || fallbackFavicon;
        sourceIcon.alt = 'Ícone da fonte';
      }
      
      if (sourceName) {
        sourceName.textContent = getSourceName(newsItem.source);
      }
      
      if (date) {
        date.textContent = formatDate(newsItem.published_date || newsItem.created_at);
      }
      
      // Gerencia o elemento autor
      if (newsItem.news_author) {
        if (author) {
          author.textContent = `Por: ${newsItem.news_author}`;
          author.style.display = 'block';
        } else {
          // Cria elemento do autor se não existir
          const newsFooter = card.querySelector('.news-footer');
          if (newsFooter) {
            author = document.createElement('p');
            author.className = 'news-author';
            author.textContent = `Por ${newsItem.news_author}`;
            newsFooter.appendChild(author);
          }
        }
      } else if (author) {
        author.style.display = 'none';
      }
      
      card.setAttribute('onclick', `blogCarousel.goToNews(${newsIndex})`);
    },

    nextSlide() {
      if (this.isTransitioning || this.totalNews <= 1) return;
      this.currentIndex = (this.currentIndex + 1) % this.totalNews;
      this.updateCarousel();
      this.resetAutoPlay();
    },

    previousSlide() {
      if (this.isTransitioning || this.totalNews <= 1) return;
      this.currentIndex = (this.currentIndex - 1 + this.totalNews) % this.totalNews;
      this.updateCarousel();
      this.resetAutoPlay();
    },

    goToSlide(index) {
      if (this.isTransitioning || index === this.currentIndex || index >= this.totalNews) return;
      this.currentIndex = index;
      this.updateCarousel();
      this.resetAutoPlay();
    },

    goToNews(newsIndex) {
      if (!this.newsData[newsIndex]) return;

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
      
      // Abre a notícia em nova aba
      if (newsItem.url) {
        window.open(newsItem.url, '_blank', 'noopener,noreferrer');
      }
    },

    startAutoPlay() {
      if (this.totalNews <= 1) return;
      
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

    setupEventListeners() {
      const container = document.querySelector('.carousel-container');
      if (!container) return;

      // Para o auto-play quando o usuário interage
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