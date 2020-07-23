import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root header span')).getText() as Promise<string>;
  }

  async clickOnStockBtn(): Promise<void> {
    const button = element(by.cssContainingText('button', 'Voir le stock'));
    await button.click();
  }
}
