import { test, Page, Locator, Frame } from "@playwright/test";
import { PersonalInfo } from "../../../test-data/personal-info";
import { BaseElement } from "../base-element";

export class PersonalInfoForm extends BaseElement {
  protected readonly thisXpath: string =
    'form[data-qa="active-screen-privacy"]';
  protected readonly name: string = "Fourth Donation Step: Personal Info Form";

  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly email: Locator;
  private readonly donateButton: Locator;

  constructor(page: Page | Frame) {
    super(page);
    this.firstName = page.locator('input[data-qa="personal-first-name"]');
    this.lastName = page.locator('input[data-qa="personal-last-name"]');
    this.email = page.locator('input[data-qa="personal-email"]');
    this.donateButton = page.locator('button[data-qa="privacy-continue"]');
  }

  async fillPersonalInfoForm(personalInfo: PersonalInfo): Promise<void> {
    await test.step(`Fill the Personal Information form.`, async () => {
      await test.step(`Fill '${personalInfo.firstName}' in the First Name field`, async () => {
        await this.firstName.fill(personalInfo.firstName);
      });
      await test.step(`Fill '${personalInfo.lastName}' in the Last Name field`, async () => {
        await this.lastName.fill(personalInfo.lastName);
      });
      await test.step(`Fill '${personalInfo.email}' in the Email Address field`, async () => {
        await this.email.fill(personalInfo.email);
      });
    });
  }

  async clickContinueButon(): Promise<void> {
    await test.step(`Click on the Donate Button.`, async () => {
      await this.donateButton.click();
    });
  }
}
