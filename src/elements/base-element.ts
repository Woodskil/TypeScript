import { test, Page, Frame } from "@playwright/test";

export abstract class BaseElement{

    protected abstract thisXpath: string;
    protected abstract name: string;
    
    protected readonly page: Page|Frame;
    
    constructor(page: Page|Frame) {
        this.page = page;
    }
  
    async waitingForElementVisible(): Promise<void> {
        await test.step(`Waiting for the '${this.name}' appears on the page.`, async () => {
            await this.page.waitForSelector(this.thisXpath, { state: 'visible' });
        });
    }
}
