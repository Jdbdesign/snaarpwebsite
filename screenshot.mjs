import puppeteer from 'puppeteer';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || 'shot';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0' });
await page.screenshot({ path: `screenshot-${label}.png`, fullPage: true });
await browser.close();
console.log('saved', `screenshot-${label}.png`);
