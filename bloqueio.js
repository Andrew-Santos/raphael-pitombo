(function () {
  const senhaCorreta = "0321";

  // CSS
  const style = document.createElement("style");
  style.textContent = `
    #tela-bloqueio {
      position: fixed;
      inset: 0;
      background-color: #2b1f1a;
      color: #ede7de;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      font-family: 'Montserrat', sans-serif;
    }

    #tela-bloqueio .box {
      background-color: #3c3c3c;
      padding: 2rem 2.5rem;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0,0,0,0.4);
      text-align: center;
      max-width: 300px;
      width: 100%;
    }

    #tela-bloqueio h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    #senha-input {
      padding: 0.7rem 1rem;
      font-size: 1.5rem;
      width: 100%;
      border: none;
      border-radius: 8px;
      outline: none;
      text-align: center;
      letter-spacing: 6px;
      background-color: #fff;
      color: #000;
    }

    #senha-input:focus {
      outline: 2px solid #ad875d;
    }

    #mensagem-erro {
      color: #ff6b6b;
      font-size: 0.9rem;
      margin-top: 0.7rem;
      display: none;
    }
  `;
  document.head.appendChild(style);

  // HTML
  const tela = document.createElement("div");
  tela.id = "tela-bloqueio";
  tela.innerHTML = `
    <div class="box">
      <h1>Digite a senha para acessar</h1>
      <input type="password" id="senha-input" placeholder="____" maxlength="4" inputmode="numeric" autofocus />
      <div id="mensagem-erro">Senha incorreta</div>
    </div>
  `;
  document.body.appendChild(tela);

  // Controle
  const input = document.getElementById("senha-input");
  const erro = document.getElementById("mensagem-erro");

  input.focus();

  input.addEventListener("input", function () {
    const valor = input.value;
    if (valor.length === 4) {
      if (valor === senhaCorreta) {
        document.getElementById("tela-bloqueio").remove();
      } else {
        erro.style.display = "block";
        input.value = "";
        input.focus();
      }
    } else {
      erro.style.display = "none";
    }
  });
})();
