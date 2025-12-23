// pages/ProductDetailPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class ProductDetailPage {
    readonly page: Page;
    readonly increaseQuantityButton: Locator;
    readonly addToCartButton: Locator;
    readonly cartQuantityBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.increaseQuantityButton = page.locator('[data-test="increase-quantity"]');
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
        this.cartQuantityBadge = page.locator('[data-test="cart-quantity"]');
    }

    async setQuantity(quantity: number) {
        // Click increase button (quantity - 1) times since default is 1
        for (let i = 1; i < quantity; i++) {
            await this.increaseQuantityButton.click();
        }
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async expectToast() {
        const toast = this.page.getByText('Product added to shopping cart');
        await expect(toast).toBeVisible({ timeout: 10000 });
    }

    async expectCartBadgeToShow(count: string) {
        await expect(this.cartQuantityBadge).toContainText(count);
    }
}