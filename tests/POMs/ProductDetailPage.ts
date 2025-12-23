// pages/ProductDetailPage.ts
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

  async increaseQuantity(times: number = 1) {
    for (let i = 0; i < times; i++) {
      await this.increaseQuantity.click();
    }
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}