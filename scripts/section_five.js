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

  const html = `
    <section id="duvidas-frequentes">
      <div class="container">
        <h2>Dúvidas Frequentes</h2>
        
        <div class="faq-container">

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              O que é o STJD e qual sua função no futebol brasileiro?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O STJD (Superior Tribunal de Justiça Desportiva) é o órgão máximo da Justiça Desportiva no futebol brasileiro. Ele funciona como um tribunal especializado, responsável por aplicar o Código Brasileiro de Justiça Desportiva (CBJD) em competições organizadas pela CBF.</p>
              <ul>
                <li>Julga infrações disciplinares cometidas por atletas, dirigentes, técnicos e árbitros;</li>
                <li>Análise de recursos contra decisões de Tribunais de Justiça Desportiva Estaduais (TJDs);</li>
                <li>Processa casos de doping e manipulação de resultados;</li>
                <li>Garante a disciplina e a integridade esportiva em todas as competições nacionais.</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como funcionam as transferências nacionais e internacionais de jogadores?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>As transferências seguem regras contratuais, trabalhistas e regulamentos da CBF e da FIFA. São etapas obrigatórias:</p>
              <ul>
                <li>Rescisão ou liberação do contrato com o clube atual;</li>
                <li>Negociação entre clubes e atleta sobre valores, salários e condições;</li>
                <li>Registro na CBF (no caso de transferências nacionais) ou uso do sistema TMS (Transfer Matching System) da FIFA para internacionais;</li>
                <li>Respeito às janelas de transferências estabelecidas;</li>
                <li>Pagamento de taxas, impostos e eventuais direitos de solidariedade e formação;</li>
                <li>Homologação final pela federação competente.</li>
              </ul>
              <p>Sem o cumprimento de todas essas etapas, a transferência não é reconhecida oficialmente.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quais são os direitos e deveres dos atletas profissionais?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Os atletas profissionais possuem direitos garantidos pela CLT, pela Lei Pelé e pelos contratos assinados. Entre os principais:</p>
              <ul>
                <li>Direitos: salário, férias, 13º, FGTS, direito de imagem, seguro de vida, condições seguras de trabalho, assistência médica e previdenciária;</li>
                <li>Deveres: cumprir treinamentos e jogos, respeitar regulamentos internos e disciplinares, manter conduta profissional dentro e fora de campo.</li>
              </ul>
              <p>O equilíbrio entre direitos e deveres é fundamental para evitar conflitos trabalhistas e preservar a carreira.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quais obrigações trabalhistas os clubes têm em relação aos seus jogadores?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Os clubes são empregadores e, portanto, devem seguir a legislação trabalhista e esportiva. Suas obrigações incluem:</p>
              <ul>
                <li>Pagamento de salários em dia, 13º, férias, FGTS e encargos sociais;</li>
                <li>Garantir a inscrição dos atletas em federações e competições;</li>
                <li>Oferecer infraestrutura adequada de treinos e jogos;</li>
                <li>Providenciar assistência médica, odontológica e seguros;</li>
                <li>Respeitar contratos e condições acordadas, incluindo direitos de imagem;</li>
                <li>Manter regularidade fiscal e trabalhista para evitar punições.</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              O que são as SAFs e quais os impactos para clubes e investidores?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>A Sociedade Anônima do Futebol (SAF) é um modelo jurídico criado pela Lei 14.193/21. Permite que clubes de futebol se transformem em empresas, profissionalizando a gestão e atraindo investimentos privados.</p>
              <ul>
                <li>Separação entre clube associativo e a SAF, com regras próprias de governança;</li>
                <li>Possibilidade de captação de recursos via investidores e mercado financeiro;</li>
                <li>Responsabilidade limitada sobre dívidas antigas;</li>
                <li>Gestão empresarial profissional e transparente;</li>
                <li>Maior segurança jurídica para investidores.</li>
              </ul>
              <p>Esse modelo pode salvar clubes endividados e modernizar a administração do futebol brasileiro.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como funciona o Fair Play Financeiro e quais sanções podem ser aplicadas?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O Fair Play Financeiro é um mecanismo de controle que busca equilibrar receitas e despesas dos clubes, evitando dívidas descontroladas.</p>
              <ul>
                <li>Exige comprovação de pagamento de dívidas trabalhistas e tributárias;</li>
                <li>Define limites de gastos com elenco (como percentual da receita bruta);</li>
                <li>Exige relatórios financeiros auditados;</li>
                <li>Proíbe registros de atletas quando houver pendências financeiras.</li>
              </ul>
              <p>As sanções podem variar de multas e advertências até perda de pontos, bloqueio de registros e exclusão de competições.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quando um clube, atleta ou agente deve procurar um advogado desportivo?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>A assessoria jurídica desportiva é fundamental em situações que envolvem contratos, disputas ou interpretações legais. Exemplos:</p>
              <ul>
                <li>Assinatura ou rescisão de contratos;</li>
                <li>Processos disciplinares perante a Justiça Desportiva;</li>
                <li>Transferências nacionais e internacionais;</li>
                <li>Questões trabalhistas específicas do esporte;</li>
                <li>Direito de imagem, marketing e patrocínios;</li>
                <li>Casos de doping ou punições por infrações.</li>
              </ul>
              <p>A prevenção é sempre melhor que o litígio: um advogado especializado evita prejuízos futuros.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como funciona a rescisão de contrato por justa causa entre clube e atleta?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>A rescisão por justa causa pode ocorrer por descumprimento grave do contrato por qualquer das partes:</p>
              <ul>
                <li>Por parte do clube: atraso reiterado de salários, falta de condições adequadas de trabalho, não registro de contrato;</li>
                <li>Por parte do atleta: atos de indisciplina, abandono de treinos/jogos, fraude ou má conduta.</li>
              </ul>
              <p>É necessário comprovar a justa causa juridicamente para evitar indenizações ou punições.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              O que acontece se o clube não registrar o contrato do atleta?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Sem registro, o contrato não tem validade perante federações e a CBF, o que gera riscos sérios:</p>
              <ul>
                <li>O atleta não pode atuar em competições oficiais;</li>
                <li>O clube pode sofrer punições administrativas;</li>
                <li>O jogador fica desprotegido em relação a direitos trabalhistas;</li>
                <li>Podem ocorrer litígios por vínculo não reconhecido.</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como funciona o direito de imagem no futebol para atletas e clubes?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O direito de imagem é um contrato à parte do vínculo empregatício. Ele garante ao clube a utilização da imagem do atleta em campanhas, transmissões e publicidade.</p>
              <ul>
                <li>Não pode ser confundido com salário, embora muitos clubes utilizem como forma de remuneração;</li>
                <li>Deve respeitar limites legais para não configurar fraude trabalhista;</li>
                <li>Garante ao atleta remuneração adicional pela exploração de sua imagem.</li>
              </ul>
              <p>É essencial redigir cláusulas claras para evitar questionamentos judiciais.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quanto tempo costuma durar um processo no STJD ou em tribunais arbitrais?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>A duração varia conforme a complexidade do caso. Em geral:</p>
              <ul>
                <li>Processos disciplinares urgentes (como suspensões) podem ser julgados em poucos dias;</li>
                <li>Casos de doping ou disputas contratuais podem levar semanas ou meses;</li>
                <li>Em tribunais arbitrais, a tramitação é geralmente mais rápida que na Justiça comum, mas depende das provas e recursos.</li>
              </ul>
              <p>A celeridade é uma característica da Justiça Desportiva para não comprometer competições em andamento.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quais cuidados um agente deve ter ao intermediar contratos e transferências?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O agente esportivo deve atuar de forma ética e transparente. Cuidados essenciais:</p>
              <ul>
                <li>Estar registrado na CBF/FIFA como intermediário;</li>
                <li>Evitar conflito de interesses, representando apenas uma das partes em negociações;</li>
                <li>Garantir que os contratos respeitem a legislação nacional e internacional;</li>
                <li>Preservar os interesses do atleta, garantindo cláusulas de proteção;</li>
                <li>Manter registros documentados de todas as tratativas.</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como registrar um jovem atleta e quais documentos são exigidos?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O registro de jovens atletas segue critérios específicos das federações. São exigidos:</p>
              <ul>
                <li>Contrato de formação ou aprendizagem;</li>
                <li>Autorização por escrito dos pais ou responsáveis;</li>
                <li>Exames médicos para comprovar aptidão física;</li>
                <li>Documentos de identidade do atleta e dos responsáveis;</li>
                <li>Registro junto à federação estadual e, posteriormente, à CBF.</li>
              </ul>
              <p>O processo garante segurança jurídica ao clube e ao atleta em formação.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quais riscos dirigentes assumem em caso de má gestão administrativa?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Dirigentes podem ser responsabilizados civil, trabalhista e até criminalmente em casos de gestão temerária. Exemplos:</p>
              <ul>
                <li>Fraudes contábeis e fiscais;</li>
                <li>Omissão no pagamento de tributos e encargos;</li>
                <li>Contratações irregulares que gerem prejuízos;</li>
                <li>Descumprimento de regulamentos desportivos;</li>
                <li>Responsabilidade solidária por dívidas trabalhistas.</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como funcionam as penalidades para manipulação de resultados?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>A manipulação de resultados é uma das infrações mais graves do esporte. As penalidades incluem:</p>
              <ul>
                <li>Multas pesadas aos envolvidos;</li>
                <li>Suspensão ou banimento de atletas e dirigentes;</li>
                <li>Perda de pontos ou exclusão de competições para clubes;</li>
                <li>Consequências criminais, já que é considerada fraude esportiva.</li>
              </ul>
              <p>O combate à manipulação é prioridade para preservar a credibilidade do futebol.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Clubes podem ser responsabilizados por dívidas trabalhistas antigas?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Sim. Mesmo com troca de gestão, o clube permanece responsável por dívidas antigas. A SAF trouxe mecanismos de separação parcial:</p>
              <ul>
                <li>Parte das dívidas permanece com a associação original;</li>
                <li>A SAF assume compromissos correntes e pode negociar parcelamentos;</li>
                <li>Apesar disso, existe responsabilidade subsidiária em muitos casos.</li>
              </ul>
              <p>O modelo não elimina passivos, apenas organiza o pagamento.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como patrocinadores e empresas devem se proteger em contratos esportivos?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Para garantir retorno sobre o investimento, patrocinadores precisam de contratos sólidos. Recomenda-se:</p>
              <ul>
                <li>Definir claramente os direitos de exposição da marca;</li>
                <li>Prever métricas de entrega (número de jogos, mídias, transmissões);</li>
                <li>Estabelecer penalidades em caso de descumprimento;</li>
                <li>Exigir garantias contratuais do clube;</li>
                <li>Incluir cláusulas de rescisão por má conduta ou rebaixamento da equipe.</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quais são as principais diferenças entre contrato de formação e contrato profissional?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O contrato de formação é voltado para jovens atletas em desenvolvimento. Já o profissional estabelece vínculo empregatício. Diferenças:</p>
              <ul>
                <li><strong>Formação:</strong> natureza educativa, sem salário (pode haver bolsa auxílio), não gera vínculo empregatício, foco em treinar e preparar;</li>
                <li><strong>Profissional:</strong> vínculo trabalhista, registro em carteira, salário, férias, FGTS, direito de imagem e benefícios legais.</li>
              </ul>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Quais são os mecanismos de solidariedade e formação da FIFA e como beneficiam os clubes?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>A FIFA instituiu mecanismos para valorizar clubes formadores:</p>
              <ul>
                <li><strong>Mecanismo de Solidariedade:</strong> até 5% do valor de transferências internacionais é repartido entre clubes que participaram da formação do atleta;</li>
                <li><strong>Indenização por Formação:</strong> clubes têm direito a compensação quando o jogador assina seu primeiro contrato profissional em outro país.</li>
              </ul>
              <p>Esses mecanismos incentivam o investimento em categorias de base.</p>
            </div>
          </article>

          <article class="faq-item">
            <button class="faq-question" aria-expanded="false">
              Como funcionam os processos de antidoping e quais são as consequências jurídicas?
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>O antidoping é regulamentado pela FIFA, CBF e WADA (Agência Mundial Antidoping). O processo funciona assim:</p>
              <ul>
                <li>Atletas podem ser testados a qualquer momento, em treinos ou jogos;</li>
                <li>As amostras são coletadas e analisadas em laboratórios credenciados;</li>
                <li>Resultados positivos podem gerar suspensão temporária, multas ou perda de títulos;</li>
                <li>Há possibilidade de recurso dentro dos prazos legais;</li>
                <li>Os clubes também podem ser responsabilizados se houver falha na supervisão ou na educação dos atletas.</li>
              </ul>
              <p>O objetivo é manter a integridade esportiva e a saúde dos atletas, prevenindo o uso de substâncias proibidas.</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  `;

  // Adiciona no final do <body>
  document.body.insertAdjacentHTML("beforeend", html);

  // Funcionalidades JavaScript (CORRIGIDO)
  function inicializarFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      question.addEventListener('click', () => {
        // Verifica se o item atual está ativo
        const isCurrentlyActive = answer.classList.contains('active');
        
        // Fecha todas as outras perguntas primeiro
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').classList.remove('active');
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });
        
        // Agora abre ou fecha o item atual
        if (isCurrentlyActive) {
          // Se estava ativo, fecha
          item.classList.remove('active');
          answer.classList.remove('active');
          question.setAttribute('aria-expanded', 'false');
        } else {
          // Se não estava ativo, abre
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