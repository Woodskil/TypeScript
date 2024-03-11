import { test, Page, Locator, Frame } from "@playwright/test";
import { BaseElement } from "../base-element";

export class PaymentOption extends BaseElement{

  protected readonly thisXpath: string = 'div[data-qa="active-screen-payment-method"]';
  protected readonly name: string = 'Second Donation Step: Payment option';
  
  private readonly coverFeeCheckbox: Locator;
  private readonly creditCardButton: Locator;

  constructor(page: Page|Frame) {
      super(page);
      this.coverFeeCheckbox = page.locator('div[data-qa="cover-fee-checkbox"]');
      this.creditCardButton = page.locator('button[data-qa="cc-button"]');
  }

  async deselectCoverFeeCheckbox(): Promise<void> {
    await test.step(`Select the "Cover transaction costs" checkbox unchecked.`, async () => {
      await this.coverFeeCheckbox.setChecked(false);
    });
  }

  async clickCreditCardButton(): Promise<void> {
    await test.step(`Click on the Credit Card button.`, async () => {
      await this.creditCardButton.click();
    });
  }
}
