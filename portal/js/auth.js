import { supabase } from "./supabaseClient.js"

// Função para login
const form = document.querySelector("form")
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = form.querySelector("input[type='email']").value
    const password = form.querySelector("input[type='password']").value

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        console.error("Erro de login:", error)
        alert("Erro: " + error.message)
      } else if (data.user) {
        console.log("Login realizado com sucesso:", data.user)
        // redireciona para dashboard
        window.location.href = "./dashboard.html"
      }
    } catch (err) {
      console.error("Erro inesperado:", err)
      alert("Erro inesperado durante o login")
    }
  })
}

// Função para proteger dashboard
async function checkAuth() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error("Erro ao verificar sessão:", error)
      window.location.href = "./index.html"
      return
    }

    if (!session) {
      console.log("Nenhuma sessão encontrada, redirecionando para login")
      window.location.href = "./index.html"
      return
    }

    console.log("Sessão válida encontrada:", session.user.email)
  } catch (err) {
    console.error("Erro inesperado ao verificar auth:", err)
    window.location.href = "./index.html"
  }
}

// Executa proteção apenas se estiver na página dashboard
if (window.location.pathname.includes("dashboard.html") || 
    window.location.pathname.includes("dashboard")) {
  checkAuth()
}

// Listener para mudanças de estado de autenticação
supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth state changed:", event, session?.user?.email)
  
  if (event === 'SIGNED_OUT') {
    if (window.location.pathname.includes("dashboard")) {
      window.location.href = "./index.html"
    }
  }
  
  if (event === 'SIGNED_IN' && session) {
    if (window.location.pathname.includes("index.html") || 
        window.location.pathname === "/") {
      window.location.href = "./dashboard.html"
    }
  }
})