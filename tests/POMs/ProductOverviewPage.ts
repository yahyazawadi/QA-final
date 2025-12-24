import { Page, Locator, expect } from '@playwright/test';

export class ProductOverviewPage {
    readonly page: Page;
    readonly sortDropdown: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    private productNameLocators: Locator;
    private productPriceLocators: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortDropdown = page.locator('[data-test="sort"]');
        this.searchInput = page.locator('[data-test="search-query"]');
        this.searchButton = page.locator('[data-test="search-submit"]');

        this.productNameLocators = page.locator('[data-test="product-name"]');
        this.productPriceLocators = page.locator('[data-test="product-price"]');
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.waitForLoadState('networkidle');
    }

    async selectSort(option: 'name,asc' | 'name,desc' | 'price,asc' | 'price,desc') {
        await this.sortDropdown.selectOption(option);
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000); 
    }

    async searchFor(query: string) {
        await this.searchInput.fill(query);
        await this.searchButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000);
    }

    async filterByCategory(category: string) {
        await this.page.locator('#filters').getByText(category, { exact: true }).click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000);
    }

    async filterByBrand(brand: string) {
        await this.page.getByText(brand, { exact: true }).click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000);
    }

    async getProductNames(): Promise<string[]> {
        await expect(this.productNameLocators.first()).toBeVisible({ timeout: 15000 });
        return await this.productNameLocators.allTextContents();
    }

    async getProductPrices(): Promise<number[]> {
        await expect(this.productPriceLocators.first()).toBeVisible({ timeout: 15000 });
        const priceTexts = await this.productPriceLocators.allTextContents();
        return priceTexts
            .map(text => parseFloat(text.replace(/[^\d.]/g, '')))
            .filter(n => !isNaN(n));
    }

    async expectProductsSortedByNameAsc() {
        const names = await this.getProductNames();
        const sorted = [...names].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        expect(names).toEqual(sorted);
    }

    async expectProductsSortedByPriceDesc() {
        const prices = await this.getProductPrices();
        const sorted = [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sorted);
    }


    async expectAllPricesInRange(min: number, max: number) {
        const prices = await this.getProductPrices();

        if (prices.length === 0) {
            throw new Error('No products visible after filtering - check slider movement');
        }

        for (const price of prices) {
            expect(price, `Price ${price} is below minimum ${min}`).toBeGreaterThanOrEqual(min);
            expect(price, `Price ${price} is above maximum ${max}`).toBeLessThanOrEqual(max);
        }
    }
    async expectContainsProduct(namePart: string) {
        const names = await this.getProductNames();
        const found = names.some(name => name.toLowerCase().includes(namePart.toLowerCase()));
        expect(found, `Product containing "${namePart}" not found`).toBeTruthy();
    }

    async getProductCount(): Promise<number> {
        await expect(this.productNameLocators.first()).toBeVisible({ timeout: 15000 });
        return await this.productNameLocators.count();
    }
}