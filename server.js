const puppeteer = require('puppeteer');

async function rodarBot() {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
    });
    const page = await browser.newPage();
    
    // Bloquear carregamento de imagens e CSS para poupar RAM
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
            req.abort();
        } else {
            req.continue();
        }
    });

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
    await page.goto('https://alienpg.com/?id=965744771&currency=BRL&type=2', { waitUntil: 'domcontentloaded' });
    
    console.log("Página carregada (sem imagens/CSS).");
    await browser.close();
}

rodarBot();
