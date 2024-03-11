import { test, Page, Locator, Frame, expect } from "@playwright/test";
import { CreditCard } from "../../../test-data/credit-card";
import { BaseElement } from "../base-element";
import { Tooltip } from "../../../test-data/tooltip";

export class CreditCardForm extends BaseElement{

  protected readonly thisXpath: string = 'form[data-qa="active-screen-credit-card"]';
  protected readonly name: string = 'Third Donation Step: Credit Card Form';

  private readonly cardNumberInput: Locator;
  private readonly expireInput: Locator;
  private readonly cvcInput: Locator;
  private readonly continueButton: Locator;
  private readonly cardContinueErrorTitle: Locator;
  private readonly cardContinueErrorMessage: Locator;

  constructor(page: Page|Frame) {
      super(page);
      this.cardNumberInput = page.frameLocator('iframe[title="Secure card number input frame"]').locator('input[data-elements-stable-field-name="cardNumber"]');
      this.expireInput = page.frameLocator('iframe[title="Secure expiration date input frame"]').locator('input[data-elements-stable-field-name="cardExpiry"]');
      this.cvcInput = page.frameLocator('iframe[title="Secure CVC input frame"]').locator('input[data-elements-stable-field-name="cardCvc"]');
      this.continueButton = page.locator('button[data-qa="card-continue"]');
      this.cardContinueErrorTitle = page.locator('p[data-qa="card-continue-error-title"]');
      this.cardContinueErrorMessage = page.locator('p[data-qa="card-continue-error-message"]');
    }

  async fillCreditCardForm(creditCard: CreditCard): Promise<void> {
    await test.step(`Fill the Credit Card form.`, async () => {
      await test.step(`Fill '${creditCard.cardNumber}' in the Card Number field`, async () => {
        await this.cardNumberInput.fill(creditCard.cardNumber);
      });
      await test.step(`Fill '${creditCard.expire}' in the Expire field`, async () => {
        await this.expireInput.fill(creditCard.expire);
      });
      await test.step(`Fill '${creditCard.cvc}' in the CVC field`, async () => {
        await this.cvcInput.fill(creditCard.cvc);
      });
    });
  }

  async clickContinueButon(): Promise<void> {
    await test.step(`Click on the Continue Button.`, async () => { 
      await this.continueButton.click();
    });
  }

  async verifyCardContinueError(error: Tooltip): Promise<void> {
    await test.step(`Verify the Card Continue Error Tooltip.`, async () => {
      await test.step(`Verify some error is appear`, async () => { 
        await expect(this.cardContinueErrorTitle).toBeVisible();
        await expect(this.cardContinueErrorMessage).toBeVisible();
      });
      await test.step(`Compare the appeared Title with expected "${error.title}"`, async () => { 
        await expect(this.cardContinueErrorTitle).toHaveText(error.title);
      });
      await test.step(`Compare the appeared Message with expected "${error.message}"`, async () => { 
        await expect(this.cardContinueErrorMessage).toHaveText(error.message);
      });
    });
  }
}
