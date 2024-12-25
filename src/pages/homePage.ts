import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export class HomePage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }


    async navigateToHomePage() {
        await this.base.goto("https://www.youtube.com/");

    }

    async searchYoutube(Search:string) 
    {
     await this.page.fill(`//input[@class="ytSearchboxComponentInput yt-searchbox-input title"]`,Search)
     await this.page.press('//button[@aria-label="Search" and @title="Search"][1]', 'Enter');
    }

    async Validate(searchValidation:string) {
        const validXpath = this.page.locator(`//yt-formatted-string[contains(text(), "${searchValidation}")]`)
        await expect(validXpath).toBeVisible();
    }
}
