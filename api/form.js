// backend: roda no servidor, nunca no navegador

import { createClient } from "@supabase/supabase-js";

// usa as variáveis de ambiente do Vercel ou .env.local
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  // só aceita POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    // pega os dados enviados pelo frontend
    const { nome, telefone, assunto, mensagem } = JSON.parse(req.body);

    // insere no Supabase
    const { data, error } = await supabase.from("form_mensagem").insert([
      { nome, telefone, assunto, mensagem, parceiro: "1" },
    ]);

    if (error) throw error;

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Erro API:", err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}
