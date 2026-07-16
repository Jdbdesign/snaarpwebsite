const puppeteer = require('puppeteer');

const pages = [
  ['/products/mail', 'Mail'],
  ['/products/teams', 'Teams'],
  ['/products/kalender', 'Kalender'],
  ['/products/contacts', 'Contacts'],
  ['/products/business-card', 'BusinessCard'],
];

const selectors = [
  'h1', '.bento-heading', '.sec-step-title', '.sec-step-desc', '.sec-step-number',
  '.sec-alt-row-heading', '.sec-alt-row-eyebrow', '.sec-alt-row-subtext',
  '.sec-alt-row-item-title', '.sec-alt-row-item-desc', '.sec-alt-row-number',
  '.sec-demo-eyebrow', '.sec-demo-heading', '.sec-demo-subtext',
  '.sec-logo-strip-label', '.sec-logo-strip-tile-label',
  '.sec-stat-number', '.sec-stat-label', '.sec-icons-heading',
];

(async () => {
  const b = await puppeteer.launch({ headless: 'new', args:['--no-sandbox'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 1000 });
  await p.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);

  for (const [path, name] of pages) {
    await p.goto(`http://localhost:3000${path}`, { waitUntil: 'networkidle0' });
    const r = await p.evaluate((sels) => {
      const out = {};
      for (const s of sels) {
        const el = document.querySelector(s);
        if (el) out[s] = getComputedStyle(el).fontSize + ' | ' + (el.textContent||'').trim().slice(0,40);
      }
      return out;
    }, selectors);
    console.log(`\n=== ${name} (${path}) ===`);
    console.log(JSON.stringify(r, null, 1));
  }
  await b.close();
})();
