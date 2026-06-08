const axios = require('axios');
const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Bot Online"));
app.listen(process.env.PORT || 3000, () => console.log("Servidor ativo"));

async function realizarAposta() {
    // URL da API que recebe as apostas
    const URL_ALVO = 'https://alienpg.com/api/game/bet'; 
    const TOKEN = process.env.TOKEN;

    try {
        const response = await axios.post(URL_ALVO, {
            amount: 1.00,
            gameId: 'crash-game'
        }, {
            headers: { 
                'Authorization': 'Bearer ' + TOKEN,
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        console.log("SUCESSO:", response.data);
    } catch (e) {
        console.log("ERRO DETALHADO:", e.response ? e.response.data : e.message);
    }
}

// O bot tenta apostar a cada 30 segundos
setInterval(realizarAposta, 30000);
