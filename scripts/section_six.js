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

    #contatos {
      background: linear-gradient(135deg, var(--preto) 0%, var(--cinza) 100%);
      color: var(--branco);
      padding: 4rem 2rem;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
    }

    #contatos .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    #contatos h2 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 3rem;
      color: var(--ouro);
      text-align: center;
    }

    .contatos-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 3rem;
      align-items: start;
    }

    .contatos-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-card {
      background: rgba(173, 135, 93, 0.1);
      padding: 2rem;
      border-radius: 15px;
      border-left: 4px solid var(--ouro);
      transition: all 0.3s ease;
    }

    .info-card:hover {
      background: rgba(173, 135, 93, 0.15);
      transform: translateX(5px);
    }

    .info-card h3 {
      font-size: 1.3rem;
      color: var(--ouro);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .info-card p {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 0.8rem;
    }

    .info-card a {
      color: var(--branco);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .info-card a:hover {
      color: var(--ouro);
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background: var(--marrom);
      border-radius: 50%;
      color: var(--branco);
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--ouro);
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(173, 135, 93, 0.3);
    }

    .formulario-container {
      background: var(--branco);
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .formulario-container h3 {
      font-size: 1.8rem;
      color: var(--preto);
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--preto);
      font-weight: 600;
      font-size: 0.95rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: white;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--marrom);
      box-shadow: 0 0 0 3px rgba(139, 94, 60, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .btn-enviar {
      width: 100%;
      background: linear-gradient(135deg, var(--marrom), var(--ouro));
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 10px;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .btn-enviar:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(139, 94, 60, 0.3);
    }

    .btn-enviar:active {
      transform: translateY(0);
    }

    .success-message {
      display: none;
      background: #4CAF50;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      text-align: center;
    }

    .icon {
      font-size: 1.4rem;
    }

    @media (max-width: 768px) {
      #contatos {
        padding: 3rem 1rem;
      }

      #contatos h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .contatos-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .formulario-container {
        padding: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .social-links {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .info-card {
        padding: 1.5rem;
      }

      .formulario-container {
        padding: 1.5rem;
      }
    }
  `;
  document.head.appendChild(estilo);

  // HTML
  const html = `
    <section id="contatos">
      <div class="container">
        <h2>Entre em Contato</h2>
        
        <div class="contatos-grid">
          <div class="contatos-info">
            <div class="info-card">
              <h3>
                <span class="icon">📍</span>
                Localização
              </h3>
              <p>Feira de Santana - BA<br>
              Centro Empresarial<br>
              Atendimento presencial e online</p>
            </div>

            <div class="info-card">
              <h3>
                <span class="icon">📞</span>
                Telefone & WhatsApp
              </h3>
              <p>
                <a href="tel:+5575999999999">(75) 9 9999-9999</a><br>
                <a href="tel:+5575333333333">(75) 3333-3333</a><br>
                <small>Seg a Sex: 8h às 18h</small>
              </p>
            </div>

            <div class="info-card">
              <h3>
                <span class="icon">📧</span>
                E-mail
              </h3>
              <p>
                <a href="mailto:contato@raphaelpitombo.adv.br">contato@raphaelpitombo.adv.br</a><br>
                <a href="mailto:raphael@pitomboadv.com.br">raphael@pitomboadv.com.br</a>
              </p>
            </div>

            <div class="info-card">
              <h3>
                <span class="icon">🌐</span>
                Redes Sociais
              </h3>
              <p>Acompanhe nosso trabalho e fique por dentro das novidades do direito desportivo:</p>
              <div class="social-links">
                <a href="https://instagram.com/raphaelpitombo.adv" target="_blank" class="social-link" title="Instagram">
                  📷
                </a>
                <a href="https://linkedin.com/in/raphaelpitombo" target="_blank" class="social-link" title="LinkedIn">
                  💼
                </a>
                <a href="https://wa.me/5575999999999" target="_blank" class="social-link" title="WhatsApp">
                  💬
                </a>
              </div>
            </div>
          </div>

          <div class="formulario-container">
            <h3>Envie sua Dúvida</h3>
            
            <form id="contato-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="nome">Nome Completo *</label>
                  <input type="text" id="nome" name="nome" required>
                </div>
                
                <div class="form-group">
                  <label for="telefone">Telefone/WhatsApp *</label>
                  <input type="tel" id="telefone" name="telefone" required>
                </div>
              </div>

              <div class="form-group">
                <label for="email">E-mail *</label>
                <input type="email" id="email" name="email" required>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="tipo-cliente">Você é:</label>
                  <select id="tipo-cliente" name="tipo-cliente">
                    <option value="">Selecione...</option>
                    <option value="atleta">Atleta</option>
                    <option value="clube">Clube/Entidade</option>
                    <option value="treinador">Treinador/Staff</option>
                    <option value="agente">Agente/Empresário</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="urgencia">Urgência:</label>
                  <select id="urgencia" name="urgencia">
                    <option value="baixa">Baixa - Consulta geral</option>
                    <option value="media">Média - Necessito orientação</option>
                    <option value="alta">Alta - Situação urgente</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="assunto">Assunto *</label>
                <input type="text" id="assunto" name="assunto" placeholder="Ex: Contrato de jogador, Processo STJD, Transferência..." required>
              </div>

              <div class="form-group">
                <label for="mensagem">Descreva sua situação *</label>
                <textarea id="mensagem" name="mensagem" placeholder="Descreva detalhadamente sua dúvida ou situação jurídica..." required></textarea>
              </div>

              <button type="submit" class="btn-enviar">
                Enviar Mensagem
              </button>

              <div id="success-message" class="success-message">
                ✅ Mensagem enviada com sucesso! Retornaremos em breve.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  // Adiciona no final do <body>
  document.body.insertAdjacentHTML("beforeend", html);

  // Funcionalidades JavaScript
  function inicializarContatos() {
    const form = document.getElementById('contato-form');
    const successMessage = document.getElementById('success-message');

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simula o envio do formulário
        const btnEnviar = form.querySelector('.btn-enviar');
        const originalText = btnEnviar.textContent;
        
        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;
        
        // Simula delay de envio
        setTimeout(() => {
          successMessage.style.display = 'block';
          form.reset();
          btnEnviar.textContent = originalText;
          btnEnviar.disabled = false;
          
          // Esconde a mensagem após 5 segundos
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }, 1500);
      });
    }

    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
      telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
          if (value.length <= 2) {
            value = value.replace(/(\d{0,2})/, '($1');
          } else if (value.length <= 7) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
          } else {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
          }
        }
        
        e.target.value = value;
      });
    }

    // Validação em tempo real
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
          this.style.borderColor = '#e74c3c';
        } else {
          this.style.borderColor = '#27ae60';
        }
      });
    });
  }

  // Inicializa quando o DOM estiver carregado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarContatos);
  } else {
    inicializarContatos();
  }
})();