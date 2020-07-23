import { AppPage } from './po/app.po';
import { StockPage } from './po/stock.po';
import { CreatePage } from './po/create.po';
import { browser, logging } from 'protractor';
import { a1 } from '../../src/app/mock/data';

describe('workspace-project App', () => {
  let page: AppPage;
  let stockPage: StockPage;
  let createPage: CreatePage;

  beforeEach(() => {
    page = new AppPage();
    stockPage = new StockPage();
    createPage = new CreatePage();
  });

  it('should create one article', async () => {
    await page.navigateTo();
    await page.clickOnStockBtn();
    await stockPage.clickOnAddBtn();
    await createPage.fillForm(a1);
    await createPage.clickOnCreateBtn();
    const article = await stockPage.getLastArticle();
    expect(article).toEqual(a1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
