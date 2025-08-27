import { supabase } from "./supabaseClient.js"

const form = document.querySelector("form")
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = form.querySelector("input[type='email']").value
    const password = form.querySelector("input[type='password']").value

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert("Erro: " + error.message)
    } else {
      // redireciona para dashboard
      window.location.href = "./dashboard.html"
    }
  })
}

// proteger dashboard
async function checkAuth() {
  const { data } = await supabase.auth.getSession()
  if (!data.session) {
    window.location.href = "./index.html"
  }
}

// executa apenas na página dashboard
if (window.location.pathname.includes("dashboard.html")) {
  checkAuth()
}
