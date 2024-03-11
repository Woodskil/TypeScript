import { test, Page, Locator } from "@playwright/test";

export class ClientPage {

  protected readonly page: Page;
  
  private readonly giveNowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.giveNowButton = page.frameLocator('iframe[title="Donate Button"]').locator('[data-qa="fun-element"]');
  }

  async goto(url: string): Promise<void> {
    await test.step(`Opening the url "${url}"`, async () => {
      await this.page.goto(url, { waitUntil: "networkidle" });
    });
  }

  async clickGiveNowButton(): Promise<void> {
    await test.step(`Click on the Give Now button`, async () => {
      await this.giveNowButton.click();
    });
  }
}
