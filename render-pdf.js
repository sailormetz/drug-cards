const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const cards = [
    { name: 'epi-1000', file: 'epi-1000.html' },
    { name: 'amiodarone', file: 'amiodarone.html' },
  ];

  // Render each card as PNG first
  const pngPaths = [];
  for (const card of cards) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 });
    const htmlPath = path.resolve(__dirname, card.file);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 2500));
    const pngPath = path.resolve(__dirname, `${card.name}.png`);
    await page.screenshot({ path: pngPath, fullPage: false, type: 'png' });
    await page.close();
    pngPaths.push(pngPath);
    console.log(`Rendered: ${card.name}.png`);
  }

  // Build a combined HTML with both PNGs as pages and export as PDF
  const combinedHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #000; }
  .page {
    width: 1080px;
    height: 1920px;
    page-break-after: always;
    overflow: hidden;
  }
  .page img {
    width: 1080px;
    height: 1920px;
    display: block;
  }
</style>
</head>
<body>
${pngPaths.map(p => `<div class="page"><img src="file://${p}" /></div>`).join('\n')}
</body>
</html>`;

  const combinedPath = path.resolve(__dirname, '_combined.html');
  fs.writeFileSync(combinedPath, combinedHtml);

  const pdfPage = await browser.newPage();
  await pdfPage.setViewport({ width: 1080, height: 1920 });
  await pdfPage.goto(`file://${combinedPath}`, { waitUntil: 'networkidle0' });

  const pdfPath = path.resolve(__dirname, 'drug-cards.pdf');
  await pdfPage.pdf({
    path: pdfPath,
    width: '1080px',
    height: '1920px',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });

  await browser.close();

  // Cleanup temp file
  fs.unlinkSync(combinedPath);

  console.log(`Done: drug-cards.pdf (${cards.length} cards)`);
})();
