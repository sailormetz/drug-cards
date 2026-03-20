const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 });
  
  const htmlPath = path.resolve(__dirname, 'dobutamine.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Wait for fonts
  await new Promise(r => setTimeout(r, 2000));
  
  await page.screenshot({
    path: path.resolve(__dirname, 'dobutamine.png'),
    fullPage: false,
    type: 'png'
  });
  
  await browser.close();
  console.log('Done: dobutamine.png');
})();
