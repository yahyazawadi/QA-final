import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly removeButton: Locator;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.removeButton = page.locator('.btn-danger').first();
        this.emptyCartMessage = page.getByText('Your cart is empty');
    }

    async goto() {
        await this.page.locator('[data-test="nav-cart"]').click();
        await this.page.waitForLoadState('networkidle');
    }

    async removeFirstItem() {
        await this.removeButton.click();
    }

    async expectCartEmpty() {
        await expect(this.emptyCartMessage).toBeVisible({ timeout: 10000 });
    }

    async expectRemoveToast() {
        const toast = this.page.getByText('Product deleted');
        await expect(toast).toBeVisible({ timeout: 10000 });
    }
}