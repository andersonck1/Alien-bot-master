const puppeteer = require('puppeteer');

async function rodarBot() {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Fingir ser um navegador real
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
    
    await page.goto('https://alienpg.com/?id=965744771&currency=BRL&type=2');
    
    console.log("Página carregada, aguardando botão...");
    
    // Aqui o código esperaria o botão de "Apostar" aparecer e clicaria nele
    // await page.click('#id-do-botao-apostar'); 
    
    await browser.close();
}

rodarBot();
