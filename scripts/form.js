// frontend: roda no navegador, não precisa de chave

const form = document.getElementById("contato-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // evita a página recarregar

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  try {
    // chama a API que você criou
    const res = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ nome, telefone, assunto, mensagem }),
    });

    const result = await res.json();

    if (!result.success) {
      alert("❌ Erro ao enviar sua mensagem. Tente novamente.");
    } else {
      document.getElementById("success-message").style.display = "block";
      form.reset();
    }
  } catch (err) {
    console.error("Erro frontend:", err.message);
    alert("⚠️ Ocorreu um erro inesperado. Tente mais tarde.");
  }
});
