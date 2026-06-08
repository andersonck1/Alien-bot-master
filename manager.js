const botsAtivos = []; // Aqui você guarda o estado do que está rodando

async function gerenciarBots(plataformas, proxies) {
    for (const p of plataformas) {
        // Verifica se esta plataforma já tem um IP alocado
        const ipAlocado = verificarAlocacao(p);
        
        if (!ipAlocado) {
            const novoIp = obterIpDisponivel(proxies);
            if (novoIp) {
                console.log(`Nova plataforma detectada: ${p}. Alocando IP: ${novoIp}`);
                iniciarBot(p, novoIp); // Lança o bot com aquele IP fixo
            }
        }
    }
}
