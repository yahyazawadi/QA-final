import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('[data-test="cart-item-count"]');
    }

    async goto() {
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }
}