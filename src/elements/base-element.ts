import { test, Locator } from "@playwright/test";

export default abstract class Element {
  name: string;
  locator: Locator;

  abstract readonly elementType: string;

  constructor(properties: { name: string; locator: Locator }) {
    this.name = properties.name;
    this.locator = properties.locator;
  }

  async click(): Promise<void> {
    await test.step(`Clicking the ${this.elementType} with name "${this.name}"`, async () => {
      await this.locator.click();
    });
  }
}
