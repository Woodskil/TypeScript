import { test, expect } from "@playwright/test";
import { clientUrl } from "../test-data/url";
import { DonateModal } from "../src/frames/donate-modal-frame";
import { ClientPage } from "../src/pages/client-page";
import { creditCard } from "../test-data/credit-card";
import { personalInfo } from "../test-data/personal-info";

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);

  const helpingHandFoundationPage = new ClientPage(page);
  await helpingHandFoundationPage.goto(clientUrl.HelpingHandFoundation);
  await helpingHandFoundationPage.clickGiveNowButton();
  
});

test("Negative Credite Card Donation", async ({ page }) => {
  
  await DonateModal.waitingForFrameVisible(page);
  const donateModal = new DonateModal(page);

  await donateModal.firstStepForm.waitingForElementVisible();
  await donateModal.firstStepForm.clickMonthlyButton();
  await donateModal.firstStepForm.selectCurrencySelector("USD");
  await donateModal.firstStepForm.fillAmountField("100");
  await donateModal.firstStepForm.clickDonateButton();

  await donateModal.secondStepForm.waitingForElementVisible();
  await donateModal.secondStepForm.deselectCoverFeeCheckbox();
  await donateModal.secondStepForm.clickCreditCardButton();

  await donateModal.thirdStepForm.waitingForElementVisible();
  await donateModal.thirdStepForm.fillCreditCardForm(creditCard.valid);
  await donateModal.thirdStepForm.clickContinueButon();

  await donateModal.fourthStepForm.waitingForElementVisible();
  await donateModal.fourthStepForm.fillPersonalInfoForm(personalInfo.example);
  await donateModal.fourthStepForm.clickContinueButon();

  await page.waitForTimeout(5555);

  // Expect a title "to contain" a substring.
});
