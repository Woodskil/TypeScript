import { test, Page } from "@playwright/test";
import Button from "../elements/button";
import Input from "../elements/Input";
import Dropdown from "../elements/dropdown";

class DonateModalBase {
  constructor(public page: Page) {}
}

export class SelecAmountModal extends DonateModalBase {
    monthlyButton: Button;
    amountFiled: Input;
    currencyDropdown: Dropdown;

    constructor(public page: Page) {
        super(page);
        this.monthlyButton = new Button({
          name: "Monthly button",
          locator: page
            .frameLocator('iframe[title="Donate Button"]')
            .locator('[data-qa="fun-element"]'),
        });
        this.amountFiled = new Input({
          name: "Amount dield",
          locator: page
            .frameLocator('iframe[title="Donate Button"]')
            .locator('[data-qa="fun-element"]'),
        });
        this.currencyDropdown = new Dropdown({
          name: "Currency dropdown button",
          locator: page
            .frameLocator('iframe[title="Donate Button"]')
            .locator('[data-qa="fun-element"]'),
        });
      }
}
