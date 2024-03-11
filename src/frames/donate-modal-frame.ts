import { test, FrameLocator, Page, Frame } from "@playwright/test";
import { FiatDonatForm } from "../elements/forms/fiat-donate-form";
import { PaymentOption } from "../elements/forms/payment-option";
import { CreditCardForm } from "../elements/forms/credit-card-form";
import { PersonalInfoForm } from "../elements/forms/personal-info-form";
import { BaseElement } from "../elements/base-element";
import { url } from "inspector";
import { emitWarning } from "process";

export class DonateModal{
    readonly firstStepForm: FiatDonatForm;
    readonly secondStepForm: PaymentOption;
    readonly thirdStepForm: CreditCardForm;
    readonly fourthStepForm: PersonalInfoForm;

    protected readonly page: Page;
    protected readonly frame: Frame;
    protected static readonly thisXpath: string = 'iframe[title="Donation Widget"]';
    protected static readonly frameName: string = 'Donation Widget';

    
    constructor(page: Page) {
        this.page = page
        const frame = page.frame("__checkout2");

        if (!frame) {
            throw new Error(`Frame with name "${DonateModal.frameName}" not found`);
        } else {
            this.frame = frame;
            this.firstStepForm = new FiatDonatForm(this.frame);
            this.secondStepForm = new PaymentOption(this.frame);
            this.thirdStepForm = new CreditCardForm(this.frame);
            this.fourthStepForm = new PersonalInfoForm(this.frame);
        }
    } 

    static async waitingForFrameVisible(page): Promise<void> {
        await test.step(`Waiting for the '${this.name}' appears on the page.`, async () => {
            await page.waitForSelector(this.thisXpath, { state: 'visible' });
        });
    }

  }
  