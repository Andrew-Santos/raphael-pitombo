// Aguarda o Supabase ser carregado
let supabase = null;

function initializeSupabase() {
    if (typeof window.supabase !== 'undefined') {
        const supabaseUrl = 'https://owpboqevrtthsupugcrt.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cGJvcWV2cnR0aHN1cHVnY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjY4MDQsImV4cCI6MjA2OTUwMjgwNH0.7RjkVOUT6ByewP0D6FgHQjZDCoi4GYnGT6BMj794MfQ';
        
        supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
        console.log('Supabase inicializado com sucesso');
        return true;
    }
    return false;
}

// Tenta inicializar imediatamente
if (!initializeSupabase()) {
    // Se não conseguir, aguarda o DOM carregar
    document.addEventListener('DOMContentLoaded', () => {
        if (!initializeSupabase()) {
            // Se ainda não conseguir, aguarda um pouco mais
            setTimeout(() => {
                if (!initializeSupabase()) {
                    console.error('Erro: Não foi possível carregar o Supabase');
                }
            }, 1000);
        }
    });
}