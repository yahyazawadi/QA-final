import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly firstProductName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstProductName = page.locator('[data-test="product-name"]').first();
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.waitForLoadState('networkidle');
    }

    async openFirstProduct() {
        await this.firstProductName.click();
        await this.page.waitForLoadState('networkidle');
    }
}