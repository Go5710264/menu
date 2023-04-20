import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Сhecking the menu display', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('submenu display', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('.list_links_company');
    await page.click('.list_links_company');
    await page.click('.company_info');

    const listLinksCompany = '.list_links_company';

    await page.evaluate((selector) => {
      const navigationItem = document.querySelector(selector);
      const activeSubmenu = navigationItem.nextElementSibling.classList.contains('menu_active');

      if (!activeSubmenu) return alert('error in submenu display test');
      return true;
    }, listLinksCompany);
  });

  test('hidden submenus when opening another submenu', async () => {
    await page.goto(baseUrl);

    await page.waitForSelector('.list_links_company');
    await page.click('.list_links_company');

    const listLinksCompany = '.list_links_company';

    await page.evaluate((selector) => {
      const navigationItem = document.querySelector(selector);
      const activeSubmenu = navigationItem.nextElementSibling.classList.contains('menu_active');

      if (!activeSubmenu) return alert('error in the appearance of the first submenu');
      return true;
    }, listLinksCompany);

    await page.waitForSelector('.list_links_service');
    await page.click('.list_links_service');
    await page.click('.service_item');

    const listLinksService = '.list_links_service';

    await page.evaluate((selector) => {
      const navigationItem = document.querySelector(selector);
      const activeSubmenu = navigationItem.nextElementSibling.classList.contains('menu_active');

      const hiddenListLinks = document.querySelector('.list_links_company');
      const noActiveSubmenuCompany = hiddenListLinks.nextElementSibling.classList.contains('menu_active');

      if (!activeSubmenu) return alert('error in the appearance of the second submenu');
      if (noActiveSubmenuCompany) return alert('first submenu should disappear');
      return true;
    }, listLinksService);
  });
});
