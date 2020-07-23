import { by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class StockPage {
  async clickOnAddBtn(): Promise<void> {
    await element(by.css('button.add')).click();
  }

  async getLastArticle(): Promise<Article> {
    const name = await element(
      by.css('table tbody tr:last-child td.name')
    ).getText();
    const priceStr = await element(
      by.css('table tbody tr:last-child td.price')
    ).getText();
    const qtyStr = await element(
      by.css('table tbody tr:last-child td.qty')
    ).getText();

    const article: Article = {
      name,
      price: +priceStr
        .substring(0, priceStr.length - ' €'.length)
        .replace(',', '.'),
      qty: +qtyStr,
    };
    return article;
  }
}
