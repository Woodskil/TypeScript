import { test, Page } from "@playwright/test";
import Button from "../elements/button";

export default class ClientPage {
  url: string;
  donatButton: Button;

  constructor(public page: Page, url: string) {
    this.url = url;
    this.donatButton = new Button({
      name: "Donate Button",
      locator: page.frameLocator('iframe[title="Donate Button"]').locator('[data-qa="fun-element"]'),
    });
  }

  async open(): Promise<void> {
    await test.step(`Opening the url "${this.url}"`, async () => {
      await this.page.goto(this.url, { waitUntil: "networkidle" });
    });
  }
}
