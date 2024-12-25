import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export class HomePage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        firstNameBox: `//input[@id="firstName"]`,
        lastNameBox: `//input[@id="lastName"]`,
        emailBox: `//input[@id="email"]`,
        checkBox: `//span[@class="checkmark"]`,
        submitBox: `//button[text()="Continue with email"]`,
        validateBox: `//div[text()="Surprise! You've got a 14-day PRO Plan trial!"]`,
    };

    async navigateToHomePage() {
        await this.base.goto("https://app.leadsbridge.com/signup");
    }

    async fillOutForm(firstName: string, lastName: string, email: string) {
        await this.page.locator(this.Elements.firstNameBox).fill(firstName);
        await this.page.locator(this.Elements.lastNameBox).fill(lastName);
        await this.page.locator(this.Elements.emailBox).fill(email);
        await this.page.locator(this.Elements.checkBox).click();
        await this.page.locator(this.Elements.submitBox).click();
    }

    async Validate() {
        const successMessage = this.page.locator(this.Elements.validateBox);
        await expect(successMessage).toBeVisible();
    }
}
