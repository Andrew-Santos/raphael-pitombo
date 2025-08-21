


    // Configuração Supabase
    const SUPABASE_URL = "https://owpboqevrtthsupugcrt.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cGJvcWV2cnR0aHN1cHVnY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjY4MDQsImV4cCI6MjA2OTUwMjgwNH0.7RjkVOUT6ByewP0D6FgHQjZDCoi4GYnGT6BMj794MfQ";

    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Captura do formulário
    const form = document.getElementById("contato-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Pega os valores dos campos
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value;
        const parceiro = "1"

        // Envia para o Supabase
        const { data, error } = await supabase
        .from("form_mensagem")
        .insert([
            {
            nome,
            telefone,
            assunto,
            mensagem,
            parceiro
            }
        ]);

        if (error) {
        console.error("Erro ao enviar:", error.message);
        alert("❌ Erro ao enviar sua mensagem. Tente novamente.");
        } else {
        console.log("Enviado com sucesso:", data);
        document.getElementById("success-message").style.display = "block";
        form.reset();
        }
    });
