function criarHeroDesktop() {
    const body = document.body;

    const section = document.createElement('section');
    section.id = 'hero';

    // Vídeo de fundo com poster fallback
    const video = document.createElement('video');
    video.id = 'background';
    video.src = 'estadio-web.webm';
    video.poster = 'fallback.jpg';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.playbackRate = 0.5;

    // Camada de gradiente
    const overflow = document.createElement('div');
    overflow.id = 'overflow';

    // Container do menu
    const containerMenu = document.createElement('header');
    containerMenu.id = 'container_menu';

    const logo = document.createElement('div');
    logo.id = 'logo';
    logo.textContent = 'Raphael Pitombo';

    const legenda = document.createElement('div');
    legenda.id = 'legenda';
    legenda.textContent = 'PT/EN';

    const lista = document.createElement('div');
    lista.id = 'lista';
    lista.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="lucide lucide-align-justify-icon lucide-align-justify">
            <path d="M3 12h18"/>
            <path d="M3 18h18"/>
            <path d="M3 6h18"/>
        </svg>
    `;

    // Nav menu
    const nav = document.createElement('nav');
    nav.id = 'menu';
    const ul = document.createElement('ul');
    const itensMenu = ['Inicio', 'Sobre', 'Atuações', 'Blog', 'Contato'];
    itensMenu.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    });
    nav.appendChild(ul);

    // Menu mobile reorganizado
    if (window.innerWidth <= 768) {
        const topRow = document.createElement('div');
        topRow.id = 'top-row';
        topRow.appendChild(logo);
        topRow.appendChild(legenda);
        topRow.appendChild(lista);
        containerMenu.appendChild(topRow);
    } else {
        containerMenu.appendChild(logo);
        containerMenu.appendChild(legenda);
        containerMenu.appendChild(lista);
    }

    containerMenu.appendChild(nav);

    // Texto principal com animação
    const h1 = document.createElement('h1');
    h1.id = 'chamada_principal';
    h1.textContent = 'Defesa jurídica de atletas, clubes e entidades esportivas com excelência e estratégia.';

    // Anexa os elementos na ordem correta
    section.appendChild(video);
    section.appendChild(overflow);
    section.appendChild(containerMenu);
    section.appendChild(h1);

    body.insertBefore(section, body.firstChild);

    aplicarEstilos();
    aplicarFuncionalidadeMenuMobile();
}

function aplicarFuncionalidadeMenuMobile() {
    const lista = document.getElementById('lista');
    const menu = document.getElementById('menu');

    if (!lista || !menu) return;

    lista.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
}

function aplicarEstilos() {
    const style = document.createElement('style');
    style.textContent = `
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
        transform: translate(-50%, -50%);
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
            flex-direction: row; /* <- Mantém lado a lado */
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
    `;
    document.head.appendChild(style);
}

// Inicialização
criarHeroDesktop();

