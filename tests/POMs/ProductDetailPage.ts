import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly increaseQuantity: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
        this.increaseQuantity = page.locator('[data-test="increase-quantity"]');
    }

    async addToCart(quantity = 1) {
        for (let i = 1; i < quantity; i++) {
            await this.increaseQuantity.click();
        }
        await this.addToCartButton.click();
    }
}