import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export class HomePage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }


    async navigateToHomePage() {
        await this.base.goto("https://www.nasdaq.com/");

    }

    async searchGoogleFinance(Search:string) 
    {
     await this.page.fill(`//input[@placeholder="Search for symbols, news or products" and @class="primary-nav__search primary-nav__search--ai" and @type="text"]`,Search)
     await this.page.press(`//input[@placeholder="Search for symbols, news or products" and @class="primary-nav__search primary-nav__search--ai" and @type="text"]`, 'Enter');
    }

    async Validate(searchValidation:string) {
        const validXpath = this.page.locator(`//div[(text() = "${searchValidation}")]`)
        await expect(validXpath).toBeVisible();
    }
}
