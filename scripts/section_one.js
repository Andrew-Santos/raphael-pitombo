(function () {
  // CSS
  const estilo = document.createElement('style');
  estilo.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
    }

    :root {
      --preto: #2b1f1a;
      --branco: #ede7de;
      --cinza: #3c3c3c;
      --marrom: #8c5e3c;
      --ouro: #ad875d;
    }

    body {
      background-color: black;
      color: var(--branco);
    }

    #hero {
      width: 100%;
      height: 100vh;
      position: relative;
      overflow: hidden;
    }

    #container_menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 10px 50px;
      position: relative;
      z-index: 3;
    }

    #logo {
      font-family: Montserrat, sans-serif;
      color: var(--branco);
      z-index: 3;
      font-weight: 500;
    }

    #logo:hover {
      transition: all 0.3s ease;
      cursor: pointer;
      color: var(--marrom);
    }

    #logo:active {
      color: var(--cinza);
      transform: scale(0.98);
    }

    li {
      font-family: Montserrat, sans-serif;
      font-size: 0.8em;
      z-index: 3;
      color: var(--branco);
      transition: all 0.3s ease;
    }

    li:hover {
      cursor: pointer;
      color: var(--ouro);
    }

    li:active {
      color: var(--marrom);
      transform: scale(0.95);
    }

    #legenda {
      background-color: var(--ouro);
      color: var(--preto);
      padding: 4px 10px;
      border-radius: 15px;
      font-size: 0.75em;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
      transition: all 0.3s ease;
      z-index: 3;
    }

    #legenda:hover {
      cursor: pointer;
      background-color: var(--marrom);
    }

    #legenda:active {
      background-color: var(--cinza);
      transform: scale(0.95);
    }

    #overflow {
      position: absolute;
      width: 100%;
      height: 100vh;
      background: linear-gradient(to bottom, #0000008f, #2b1f1ae0);
      top: 0;
      z-index: 2;
    }

    video#background {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    #chamada_principal {
      position: absolute;
      color: var(--branco);
      z-index: 3;
      text-align: center;
      margin: auto;
      width: 800px;
      font-family: Inter, sans-serif;
      font-size: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) !important;
      animation: fadeInUp 1s ease-out forwards;
      opacity: 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate(-50%, -60%);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }

    #lista {
      display: none;
      cursor: pointer;
    }

    nav#menu ul {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }

    nav#menu.ativo {
      display: flex !important;
    }

    @media (max-width: 768px) {
      #container_menu {
        flex-direction: column;
        align-items: center;
        padding: 20px;
        gap: 10px;
      }

      #top-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 20px;
        gap: 10px;
      }

      #logo,
      #legenda,
      #lista {
        margin-bottom: 0;
      }

      #lista {
        display: flex;
        justify-content: center;
      }

      nav#menu {
        display: none;
        flex-direction: row !important;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: linear-gradient(to top, #8c5d3cb6, #8c5d3ce0);
        border-radius: 12px;
      }

      nav#menu ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
        padding: 10px;
      }

      #chamada_principal {
        width: 90%;
        font-size: 40px;
        font-weight: bold;
      }

      #logo {
        font-weight: 600;
      }
    }

    a{
      color: var(--branco);
      text-decoration: none;
    }
  `;
  document.head.appendChild(estilo);

  // HTML
  const html = `
    <section id="hero">
      <video id="background" src="midias/estadio-web.webm" autoplay muted loop playsinline preload="auto"></video>
      <div id="overflow"></div>
      <header id="container_menu">
        <div id="logo">Raphael Pitombo</div>
        <div id="lista">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-align-justify-icon lucide-align-justify">
              <path d="M3 12h18"/>
              <path d="M3 18h18"/>
              <path d="M3 6h18"/>
          </svg>
        </div>
        <nav id="menu">
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#sobre-advogado">Sobre</a></li>
            <li><a href="#areas-atuacao">Atuações</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contatos">Contato</a></li>
          </ul>
        </nav>
      </header>
      <h1 id="chamada_principal">Defesa jurídica de atletas, clubes e entidades esportivas com excelência e estratégia.</h1>
    </section>
  `;

  // Adiciona no final do <body>
  document.body.insertAdjacentHTML("beforeend", html);

  // Funcionalidades JavaScript
  function inicializarFuncionalidades() {
    if (window.innerWidth <= 768) {
      const containerMenu = document.getElementById('container_menu');
      const logo = document.getElementById('logo');
      const legenda = document.getElementById('legenda');
      const lista = document.getElementById('lista');

      if (containerMenu && logo && legenda && lista) {
        logo.remove();
        legenda.remove();
        lista.remove();

        const topRow = document.createElement('div');
        topRow.id = 'top-row';
        topRow.appendChild(logo);
        topRow.appendChild(legenda);
        topRow.appendChild(lista);

        containerMenu.insertBefore(topRow, containerMenu.firstChild);
      }
    }

    const video = document.getElementById('background');
    if (video) {
      video.playbackRate = 0.5;
    }

    const lista = document.getElementById('lista');
    const menu = document.getElementById('menu');

    if (lista && menu) {
      lista.addEventListener('click', () => {
        menu.classList.toggle('ativo');
      });
    }
  }

  inicializarFuncionalidades();
})();


document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("html body section header div#logo");
  
  if (logo) {
    logo.addEventListener("click", () => {
      location.reload();
    });
  }
});
