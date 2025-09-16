(function () {
  'use strict';

  const formElement = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  async function handleLogin(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      // salva token no localStorage
      const token = data.session.access_token;
      localStorage.setItem("token", token);

      // redireciona para o backend que valida o token
      window.location.href = "/dashboard";

    } catch (err) {
      alert("Erro no login: " + err.message);
    }
  }

  if (formElement) {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      handleLogin(email, password);
    });
  }
})();
