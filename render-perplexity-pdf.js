const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // iPhone dimensions
  const W = 390;
  const H = 844;

  await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 });

  const filePath = path.resolve(__dirname, 'perplexity-cards.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

  // Inject the actual CSS (since the external stylesheet path may not resolve)
  const cssPath = path.resolve(__dirname, 'perplexity-style.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  await page.addStyleTag({ content: cssContent });

  // Override layout for PDF: remove overflow/snap, stack cards, add page breaks
  await page.addStyleTag({ content: `
    body {
      height: auto !important;
      overflow: visible !important;
      display: block !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    .scroll-container {
      width: ${W}px !important;
      max-width: ${W}px !important;
      height: auto !important;
      overflow: visible !important;
      scroll-snap-type: none !important;
    }
    .card {
      width: ${W}px !important;
      max-width: ${W}px !important;
      height: ${H}px !important;
      min-height: ${H}px !important;
      max-height: ${H}px !important;
      overflow: hidden !important;
      page-break-after: always !important;
      break-after: page !important;
      scroll-snap-align: none !important;
    }
  `});

  const outputPath = path.resolve(__dirname, 'perplexity-cards.pdf');

  await page.pdf({
    path: outputPath,
    width: `${W}px`,
    height: `${H}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log('PDF saved to:', outputPath);
})();
