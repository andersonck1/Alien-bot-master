const axios = require('axios');
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
    console.log("Erro na conexão ou Token inválido."); 
  }
}

// O robô faz uma tentativa a cada 20 segundos
setInterval(rodarBot, 20000);
