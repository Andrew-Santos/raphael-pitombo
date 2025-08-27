// Configuracao Supabase
const SUPABASE_URL = "https://owpboqevrtthsupugcrt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cGJvcWV2cnR0aHN1cHVnY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjY4MDQsImV4cCI6MjA2OTUwMjgwNH0.7RjkVOUT6ByewP0D6FgHQjZDCoi4GYnGT6BMj794MfQ";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Variaveis globais
let currentNewsData = {};
let allMessages = [];

// Navegacao entre secoes
function showSection(sectionName) {
    // Remove active das secoes
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active dos botoes
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adiciona active a secao selecionada
    document.getElementById(sectionName).classList.add('active');
    
    // Adiciona active ao botao correspondente
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
}

// Carregar mensagens do Supabase
async function loadMessages() {
    const loadingElement = document.querySelector('#messagesContainer .loading-state');
    loadingElement.classList.add('show');

    try {
        const { data, error } = await supabase
            .from('form_mensagem')
            .select('*')
            .eq('parceiro', 1)
            .order('criado_em', { ascending: false });

        if (error) throw error;

        allMessages = data || [];
        displayMessages(allMessages);
        updateStats(allMessages);

    } catch (error) {
        console.error('Erro ao carregar mensagens:', error);
        showError('Erro ao carregar mensagens do banco de dados.');
        document.getElementById('messagesContainer').innerHTML = `
            <div class="no-messages">
                <div class="icon">
                    <i class="ph ph-warning-circle"></i>
                </div>
                <h3>Erro ao carregar mensagens</h3>
                <p>Verifique a conexao com o banco de dados.</p>
            </div>
        `;
    } finally {
        loadingElement.classList.remove('show');
    }
}

// Exibir mensagens
function displayMessages(messages) {
    const container = document.getElementById('messagesContainer');
    
    if (!messages.length) {
        container.innerHTML = `
            <div class="no-messages">
                <div class="icon">
                    <i class="ph ph-chat-circle"></i>
                </div>
                <h3>Nenhuma mensagem encontrada</h3>
                <p>Nao ha mensagens do parceiro selecionado.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = messages.map(message => {
        const date = new Date(message.criado_em);
        const formattedDate = date.toLocaleString('pt-BR');
        const urgenciaClass = message.urgencia ? message.urgencia.toLowerCase() : 'baixa';

        return `
            <div class="message-card">
                <div class="message-header">
                    <div class="message-info">
                        <div class="info-item">
                            <span class="info-label">Nome</span>
                            <span class="info-value">${message.nome || 'Nao informado'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Telefone</span>
                            <span class="info-value">${message.telefone || 'Nao informado'}</span>
                        </div>
                    </div>
                    <div class="message-date">${formattedDate}</div>
                </div>
                <div class="message-content">
                    <div class="content-row">
                        <span class="content-label">Assunto</span>
                        <div class="content-text">${message.assunto || 'Sem assunto'}</div>
                    </div>
                    <div class="content-row">
                        <span class="content-label">Mensagem</span>
                        <div class="content-text">${message.mensagem || 'Sem conteudo'}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Atualizar estatisticas
function updateStats(messages) {
    const total = messages.length;
    
    const today = new Date().toDateString();
    const todayCount = messages.filter(m => {
        const messageDate = new Date(m.criado_em).toDateString();
        return messageDate === today;
    }).length;

    // Animacao dos numeros
    animateNumber('totalMessages', total);
    animateNumber('todayMessages', todayCount);
}

// Animacao dos numeros das estatisticas
function animateNumber(elementId, finalNumber) {
    const element = document.getElementById(elementId);
    const startNumber = parseInt(element.textContent) || 0;
    const increment = Math.ceil((finalNumber - startNumber) / 20);
    let currentNumber = startNumber;

    const timer = setInterval(() => {
        currentNumber += increment;
        if (increment > 0 && currentNumber >= finalNumber) {
            currentNumber = finalNumber;
            clearInterval(timer);
        } else if (increment < 0 && currentNumber <= finalNumber) {
            currentNumber = finalNumber;
            clearInterval(timer);
        }
        element.textContent = currentNumber;
    }, 50);
}

// Carregar dados da noticia
async function loadNewsData() {
    const url = document.getElementById('newsUrl').value.trim();
    const loading = document.getElementById('loading');

    if (!url) {
        showError('Por favor, insira uma URL valida.');
        return;
    }

    hideMessages();
    loading.classList.add('show');

    try {
        // Fazer as duas requisicoes em paralelo
        const [metadataResponse, htmlResponse] = await Promise.allSettled([
            fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=false&embed=false&insights=false`),
            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        ]);

        // Processar metadados basicos
        let metadata = {};
        if (metadataResponse.status === 'fulfilled' && metadataResponse.value.ok) {
            const data = await metadataResponse.value.json();
            if (data.status === 'success') {
                metadata = data.data;
            }
        }

        // Processar HTML para extrair autores
        let newsAuthor = '';
        let photoAuthor = '';
        
        if (htmlResponse.status === 'fulfilled' && htmlResponse.value.ok) {
            try {
                const htmlData = await htmlResponse.value.json();
                const html = htmlData.contents || '';
                
                // Extrair autor da noticia
                newsAuthor = extractAuthorFromHtml(html) || metadata.author || '';
                
                // Extrair credito da foto
                photoAuthor = extractPhotoCreditFromHtml(html);
                
            } catch (htmlError) {
                console.warn('Erro ao processar HTML:', htmlError);
            }
        }

        // Preencher todos os campos de uma vez
        document.getElementById('newsTitle').value = metadata.title || '';
        document.getElementById('newsImage').value = metadata.image?.url || '';
        document.getElementById('newsFavicon').value = metadata.logo?.url || `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`;
        document.getElementById('newsSource').value = metadata.publisher || new URL(url).hostname.replace('www.', '');

        // Preencher campos de autor
        const newsAuthorField = document.getElementById('newsAuthor');
        const photoAuthorField = document.getElementById('photoAuthor');
        
        if (newsAuthorField) {
            newsAuthorField.value = newsAuthor;
        }
        
        if (photoAuthorField) {
            photoAuthorField.value = photoAuthor;
        }

        // Data
        const publishDate = new Date(metadata.date || metadata.datePublished);
        if (!isNaN(publishDate.getTime())) {
            document.getElementById('newsDate').value = formatForDatetimeLocal(publishDate);
        }

        currentNewsData = metadata;
        updatePreview();
        
        // Mensagem de sucesso mais detalhada
        let successMsg = 'Dados extraidos com sucesso!';
        if (newsAuthor) successMsg += ' Autor encontrado.';
        if (photoAuthor) successMsg += ' Credito da foto encontrado.';
        
        showSuccess(successMsg);

    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        try {
            const domain = new URL(url).hostname;
            document.getElementById('newsFavicon').value = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
            document.getElementById('newsSource').value = domain.replace('www.', '').split('.')[0];
            showError('Alguns dados nao puderam ser extraidos automaticamente. Complete os campos manualmente.');
            updatePreview();
        } catch {
            showError('URL invalida. Verifique o link e tente novamente.');
        }
    } finally {
        loading.classList.remove('show');
    }
}

// Extrair autor da noticia do HTML
function extractAuthorFromHtml(html) {
    const patterns = [
        /<meta\s+name="author"\s+content="([^"]+)"/i,
        /<meta\s+property="article:author"\s+content="([^"]+)"/i,
        /<span[^>]*class="[^"]*author[^"]*"[^>]*>([^<]+)<\/span>/i,
        /<div[^>]*class="[^"]*author[^"]*"[^>]*>([^<]+)<\/div>/i,
        /<p[^>]*class="[^"]*byline[^"]*"[^>]*>.*?por\s+([^<]+)<\/p>/i,
        /por\s+<[^>]*>([^<]+)<\//i
    ];

    for (let pattern of patterns) {
        const match = html.match(pattern);
        if (match && match[1]) {
            let author = match[1].trim();
            author = author.replace(/^por\s+/i, '');
            author = author.replace(/<[^>]*>/g, ''); // Remove HTML tags
            if (author && author.length > 2 && author.length < 100) {
                return author;
            }
        }
    }
    return '';
}

// Extrair credito da foto do HTML
function extractPhotoCreditFromHtml(html) {
    const patterns = [
        /<figcaption[^>]*>([^<]+)<\/figcaption>/i,
        /<div[^>]*class="[^"]*photo-credit[^"]*"[^>]*>([^<]+)<\/div>/i,
        /<span[^>]*class="[^"]*credit[^"]*"[^>]*>([^<]+)<\/span>/i,
        /<p[^>]*class="[^"]*image-credit[^"]*"[^>]*>([^<]+)<\/p>/i,
        /<div[^>]*class="[^"]*caption[^"]*"[^>]*>.*?foto[:\s]*([^<]+)<\/div>/i,
        /<span[^>]*>.*?foto[:\s]*([^<]+)<\/span>/i
    ];

    for (let pattern of patterns) {
        const match = html.match(pattern);
        if (match && match[1]) {
            let credit = match[1].trim();
            // Remove HTML tags
            credit = credit.replace(/<[^>]*>/g, '');
            // Remove prefixos comuns
            credit = credit.replace(/^(foto|credito|por|by|imagem)[:|\s]*/i, '');
            // Remove caracteres estranhos comuns
            credit = credit.replace(/[^\w\s\-\.\,]/g, '');
            // Verifica se e um credito valido
            if (credit && 
                credit.length > 2 && 
                credit.length < 80 &&
                !credit.includes('//') &&
                !credit.includes('mobile') &&
                !credit.includes('-->') &&
                !credit.includes('function') &&
                !credit.includes('var ')) {
                return credit;
            }
        }
    }
    return '';
}

// Atualizar preview
function updatePreview() {
    const preview = document.getElementById('newsPreview');
    const previewCard = document.getElementById('previewCard');
    
    const title = document.getElementById('newsTitle').value;
    const image = document.getElementById('newsImage').value;
    const favicon = document.getElementById('newsFavicon').value;
    const source = document.getElementById('newsSource').value;
    const date = document.getElementById('newsDate').value;
    
    // Verificar se os campos de autor existem antes de tentar acessa-los
    const newsAuthorField = document.getElementById('newsAuthor');
    const photoAuthorField = document.getElementById('photoAuthor');
    
    const newsAuthor = newsAuthorField ? newsAuthorField.value : '';
    const photoAuthor = photoAuthorField ? photoAuthorField.value : '';

    if (!title && !image && !source) {
        preview.classList.remove('show');
        return;
    }

    const formattedDate = date ? new Date(date).toLocaleString('pt-BR') : 'Data nao informada';

    previewCard.innerHTML = `
        <div class="preview-header">
            ${favicon ? `<img src="${favicon}" alt="Favicon" class="preview-favicon" onerror="this.style.display='none'">` : ''}
            <span class="preview-source">${source || 'Fonte nao informada'}</span>
        </div>
        ${image ? `
            <div class="preview-image-container">
                <img src="${image}" alt="Imagem da noticia" class="preview-image" onerror="this.style.display='none'">
                ${photoAuthor ? `<div class="preview-photo-credit">Foto: ${photoAuthor}</div>` : ''}
            </div>
        ` : ''}
        <div class="preview-title">${title || 'Titulo nao informado'}</div>
        <div class="preview-meta">
            <div class="preview-date">${formattedDate}</div>
            ${newsAuthor ? `<div class="preview-author">Por: ${newsAuthor}</div>` : ''}
        </div>
    `;

    preview.classList.add('show');
}

// Submeter noticia
async function submitNews(e) {
    e.preventDefault();
    
    // Verificar se os campos existem antes de tentar acessa-los
    const newsAuthorField = document.getElementById('newsAuthor');
    const photoAuthorField = document.getElementById('photoAuthor');
    
    const formData = {
        url: document.getElementById('newsUrl').value.trim(),
        title: document.getElementById('newsTitle').value.trim(),
        image: document.getElementById('newsImage').value.trim() || null,
        favicon: document.getElementById('newsFavicon').value.trim() || null,
        source: document.getElementById('newsSource').value.trim() || null,
        news_author: newsAuthorField ? newsAuthorField.value.trim() || null : null,
        photo_author: photoAuthorField ? photoAuthorField.value.trim() || null : null,
        published_date: document.getElementById('newsDate').value || null
    };

    // Validacao obrigatoria
    if (!formData.url || !formData.title) {
        showError('URL e titulo sao obrigatorios.');
        return;
    }

    // Validar URL
    try {
        new URL(formData.url);
    } catch {
        showError('URL invalida. Verifique o formato da URL.');
        return;
    }

    // Mostrar loading
    const submitBtn = document.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Salvando...';
    submitBtn.disabled = true;

    try {
        // Verificar se ja existe uma noticia com a mesma URL
        const { data: existingData, error: checkError } = await supabase
            .from('form_news')
            .select('id')
            .eq('url', formData.url)
            .limit(1);

        if (checkError) {
            console.error('Erro ao verificar URL existente:', checkError);
            throw new Error('Erro ao verificar se a noticia ja existe.');
        }

        if (existingData && existingData.length > 0) {
            throw new Error('Esta URL ja foi cadastrada anteriormente.');
        }

        // Inserir no banco de dados
        const { data, error } = await supabase
            .from('form_news')
            .insert([formData])
            .select();

        if (error) {
            console.error('Erro do Supabase:', error);
            throw new Error(`Erro ao salvar: ${error.message}`);
        }

        console.log('Noticia salva com sucesso:', data);
        
        // Limpar formulario
        document.getElementById('newsForm').reset();
        document.getElementById('newsPreview').classList.remove('show');
        
        // Mostrar sucesso
        showSuccess(`Noticia cadastrada com sucesso! ID: ${data[0].id}`);
        
        // Limpar dados globais
        currentNewsData = {};

    } catch (error) {
        console.error('Erro ao cadastrar noticia:', error);
        showError(error.message || 'Erro ao cadastrar a noticia. Tente novamente.');
    } finally {
        // Restaurar botao
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
}

// Utilitarios para mensagens
function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.classList.add('show');
    setTimeout(() => { 
        errorElement.classList.remove('show'); 
    }, 6000);
}

function showSuccess(message) {
    const successElement = document.getElementById('successMessage');
    successElement.textContent = message;
    successElement.classList.add('show');
    setTimeout(() => { 
        successElement.classList.remove('show'); 
    }, 6000);
}

function hideMessages() {
    document.getElementById('errorMessage').classList.remove('show');
    document.getElementById('successMessage').classList.remove('show');
}

// Formatar data para datetime-local
function formatForDatetimeLocal(date) {
    const pad = n => n.toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    const mm = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const min = pad(date.getMinutes());
    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portal Criativa iniciado!');
    
    // Carregar mensagens inicialmente
    loadMessages();
    
    // Listeners para preview em tempo real - verificar se os elementos existem
    const newsTitle = document.getElementById('newsTitle');
    const newsImage = document.getElementById('newsImage');
    const newsFavicon = document.getElementById('newsFavicon');
    const newsSource = document.getElementById('newsSource');
    const newsDate = document.getElementById('newsDate');
    const newsAuthor = document.getElementById('newsAuthor');
    const photoAuthor = document.getElementById('photoAuthor');
    
    if (newsTitle) newsTitle.addEventListener('input', updatePreview);
    if (newsImage) newsImage.addEventListener('input', updatePreview);
    if (newsFavicon) newsFavicon.addEventListener('input', updatePreview);
    if (newsSource) newsSource.addEventListener('input', updatePreview);
    if (newsDate) newsDate.addEventListener('input', updatePreview);
    if (newsAuthor) newsAuthor.addEventListener('input', updatePreview);
    if (photoAuthor) photoAuthor.addEventListener('input', updatePreview);
    
    // Listener para form de noticias
    const newsForm = document.getElementById('newsForm');
    if (newsForm) {
        newsForm.addEventListener('submit', submitNews);
    }
});

// Atualizar mensagens automaticamente a cada 30 segundos
setInterval(loadMessages, 30000);