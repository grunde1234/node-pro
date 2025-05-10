import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // headless: false shows the browser
  const page = await browser.newPage();
  
  await page.goto('https://fp.lmu.edu.ng');

  // Use the real selectors from the login form
  await page.type('input[name="username"]', 'yourMatricNumber');
  await page.type('input[name="password"]', 'yourPassword');
  await page.click('button[type="submit"]'); // or actual login button selector

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  console.log('Logged in and redirected to:', page.url());
  // await browser.close(); // keep open for debugging
})();
