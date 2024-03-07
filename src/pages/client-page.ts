import { test, Page } from "@playwright/test";
import Button from "../elements/button";
import { SelecAmountModal } from "../modals/donate-modal";

export default class ClientPage {
  readonly url: string;
  private giveNowButton: Button;

  constructor(public page: Page, url: string) {
    this.url = url;
    this.giveNowButton = new Button ({
      name: "Give Now button",
      locator: this.page
        .frameLocator('iframe[title="Donate Button"]')
        .locator('[data-qa="fun-element"]'),
    });
  }

  async open(): Promise<void> {
    await test.step(`Opening the url "${this.url}"`, async () => {
      await this.page.goto(this.url, { waitUntil: "networkidle" });
    });
  }

  async openDonateModal(): Promise<SelecAmountModal> {
    await test.step(`Opening the Donat Modal by clicking on the Give Now button`, async () => {
      await this.giveNowButton.click();
      await this.page.waitForEvent("frameattached", frameElement
    });
    let modal = new SelecAmountModal(this.page);
    return modal;
  }
}
