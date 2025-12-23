
import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly firstProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstProduct = page.locator('[data-test="product-name"]').first();
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.waitForLoadState('networkidle');
    }

    async openFirstProduct() {
        await this.firstProduct.click();
        await this.page.waitForLoadState('networkidle');
    }
}