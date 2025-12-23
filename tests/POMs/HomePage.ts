
import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly sortDropdown: Locator;
    readonly firstProduct: Locator;
    readonly navCart: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('[data-test="search-query"]');
        this.searchButton = page.locator('[data-test="search-submit"]');
        this.sortDropdown = page.locator('[data-test="sort"]');
        this.firstProduct = page.locator('[data-test="product-name"]').first();
        this.navCart = page.locator('[data-test="nav-cart"]');
        this.cartBadge = page.locator('[data-test="cart-item-count"]');
    }

    async goto() {
        await this.page.goto('/');
        await this.page.waitForLoadState('networkidle');
    }

    async search(query: string) {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }

    async sortBy(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    async openFirstProduct() {
        await this.firstProduct.click();
        await this.page.waitForLoadState('networkidle');
    }

    async goToCart() {
        await this.navCart.click();
        await this.page.waitForLoadState('networkidle');
    }
}