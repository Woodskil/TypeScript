import { test } from "@playwright/test";
import Element from "./base-element";

export default class Input extends Element {
  elementType: string = "input field";

  async fill(text: string): Promise<void> {
    await test.step(`Fill the ${this.elementType} with name "${this.name}" with text "${text}"`, async () => {
      await this.locator.clear()
      await this.locator.fill(text);
    });
  }
}
