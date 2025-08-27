import { supabase } from "./supabaseClient.js"

console.log("🔍 Script de login carregado")

// Função para login com debug
const form = document.querySelector("form")
if (form) {
  console.log("📝 Formulário encontrado, adicionando listener")
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log("🚀 Iniciando processo de login...")

    const email = form.querySelector("input[type='email']").value
    const password = form.querySelector("input[type='password']").value

    console.log("📧 Email:", email)
    console.log("🔐 Password length:", password.length)

    try {
      console.log("📡 Enviando requisição para Supabase...")
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      console.log("📊 Resposta do signInWithPassword:")
      console.log("- Data:", data)
      console.log("- User:", data?.user)
      console.log("- Session:", data?.session)
      console.log("- Error:", error)

      if (error) {
        console.error("❌ Erro de login:", error)
        alert("Erro: " + error.message)
      } else if (data.user && data.session) {
        console.log("✅ Login realizado com sucesso!")
        console.log("👤 Usuário:", data.user.email)
        console.log("🎟️ Session ID:", data.session.access_token.substring(0, 20) + "...")
        console.log("⏰ Expira em:", new Date(data.session.expires_at * 1000))
        
        // Verificar se a sessão foi salva
        setTimeout(async () => {
          const { data: checkData } = await supabase.auth.getSession()
          console.log("🔍 Verificando se sessão foi salva:", checkData.session ? "✅ SIM" : "❌ NÃO")
          
          if (checkData.session) {
            console.log("🔄 Redirecionando para dashboard...")
            window.location.href = "./dashboard.html"
          } else {
            console.error("💥 PROBLEMA: Sessão não foi salva!")
            alert("Erro: Sessão não foi salva corretamente")
          }
        }, 1000)
        
      } else {
        console.error("💥 Login sem erro, mas sem dados válidos")
        console.log("- Tem user?", !!data?.user)
        console.log("- Tem session?", !!data?.session)
      }
    } catch (err) {
      console.error("💥 Erro inesperado:", err)
      alert("Erro inesperado durante o login: " + err.message)
    }
  })
} else {
  console.error("❌ Formulário não encontrado!")
}

// Verificar estado inicial
console.log("🔍 Verificando estado inicial...")
supabase.auth.getSession().then(({ data, error }) => {
  console.log("📊 Estado inicial:")
  console.log("- Session:", data.session)
  console.log("- Error:", error)
})

// Listener para mudanças de estado
supabase.auth.onAuthStateChange((event, session) => {
  console.log("🔄 Auth state changed na página de login:")
  console.log("- Event:", event)
  console.log("- Session:", session?.user?.email)
  
  if (event === 'SIGNED_IN' && session) {
    console.log("✅ Login detectado, redirecionando...")
    window.location.href = "./dashboard.html"
  }
})

console.log("🏁 Script de login inicializado")
