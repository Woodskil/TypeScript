import { test, Page, Locator, Frame } from "@playwright/test";
import { BaseElement } from "../base-element";

export class FiatDonatForm extends BaseElement{

  protected readonly thisXpath: string = 'form[data-qa="fiat-donate-form"]';
  protected readonly name: string = 'First Donation Step: Fiat Form';
  
  private readonly monthlyButton: Locator;
  private readonly currencySelector: Locator;
  private readonly amountField: Locator;
  private readonly donateButton: Locator;

  constructor(page: Page|Frame) {
      super(page);
      this.monthlyButton = page.locator('button[data-qa="more-frequent-button"]');
      this.currencySelector = page.locator('select[data-qa="currency-selector"]');
      this.amountField = page.locator('input[data-qa="amount"]');
      this.donateButton = page.locator('button[data-qa="donate-button"]');
  }

  async clickMonthlyButton(): Promise<void> {
    await test.step(`Click on the Monthly button.`, async () => {
      await this.monthlyButton.click();
    });
  }

  async selectCurrencySelector(currency: string): Promise<void> {
    await test.step(`Select a currency with text ${currency} in the Currency selector.`, async () => {
      await this.currencySelector.selectOption(currency);
    });
  }

  async fillAmountField(text: string): Promise<void> {
    await test.step(`Fill "${text}" in the Amount field.`, async () => {
      await this.amountField.fill(text);
    });
  }

  async clickDonateButton(): Promise<void> {
    await test.step(`Click on the Donate button.`, async () => {
      await this.donateButton.click();
    });
  }
}
