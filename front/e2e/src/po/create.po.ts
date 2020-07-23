import { by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class CreatePage {
  async fillForm(a: Article): Promise<void> {
    for (const key of Object.keys(a) as (keyof Article)[]) {
      const input = element(by.css(`input[formcontrolname="${key}"]`));
      await input.clear();
      await input.sendKeys(a[key] as string);
    }
  }

  async clickOnCreateBtn(): Promise<void> {
    await element(by.css('form button')).click();
  }
}
