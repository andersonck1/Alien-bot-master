const // Substitua o trecho do axios.post por isto:
try {
    const response = await axios.post('https://alienpg.com/api/game/bet', {
        amount: 1.00,
        gameId: 'crash-game'
    }, {
        headers: { 
            'Authorization': 'Bearer ' + process.env.TOKEN, // Adicionamos o 'Bearer '
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });
    console.log("Sucesso:", response.data);
} catch (e) {
    console.log("Erro detalhado:", e.response ? e.response.data : e.message);
}
const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Bot Online"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor ativo"));

async function rodarBot() {
  try {
    const res = await axios.post('https://alienpg.com/api/v1/bet', 
      { amount: 1.00, gameId: 'crash-game' },
      { headers: { 'Authorization': process.env.TOKEN } }
    );
    console.log("Aposta enviada com sucesso!");
  } catch (e) { 
    c console.log("Erro detalhado:", e.response ? e.response.data : e.message);

  }
}

// O robô faz uma tentativa a cada 20 segundos
setInterval(rodarBot, 20000);
