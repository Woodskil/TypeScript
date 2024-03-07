import { test, Locator } from "@playwright/test";
import Element from "./base-element";

export default class Dropdown extends Element {
  elementType: string = "dropdown selector";

  options: Array<Option>

  async select(value: string): Promise<void> {
    await test.step(`Select value "${value}" the ${this.elementType} with name "${this.name}" with text `, async () => {
      await this.locator.clear()
      await this.locator.fill(value);
    });
  }
}

class Option extends Element {
    elementType: string = "option of dropdown selector";
}