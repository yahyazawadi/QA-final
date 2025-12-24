import { Page, Locator, expect } from '@playwright/test';

export class ProductOverviewPage {
    readonly page: Page;
    readonly productCards: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productCards = page.locator('app-product-card');
        // FIXED: Scope names INSIDE each card only (first h5 per card = name)
        this.productNames = this.productCards.locator('h5').first();  // h5[0] per card = clean name (from your snapshots: level=5 headings)
        // FIXED: Scope prices INSIDE each card
        this.productPrices = this.productCards.locator('[data-test="product-price"]');
    }

    async getProductNames(): Promise<string[]> {
        await this.page.waitForSelector('app-product-card', { timeout: 5000 });  // Wait for cards
        const count = await this.productCards.count();
        const names: string[] = [];
        for (let i = 0; i < count; i++) {
            const name = await this.productCards.nth(i).locator('h5').first().innerText();
            names.push(name.trim());
        }
        return names;
    }

    async getProductPrices(): Promise<number[]> {
        await this.page.waitForSelector('app-product-card', { timeout: 5000 });
        const count = await this.productCards.count();
        const prices: number[] = [];
        for (let i = 0; i < count; i++) {
            const text = await this.productCards.nth(i).locator('[data-test="product-price"]').innerText();
            const num = parseFloat(text.replace('$', '').trim().replace(/[^\d.]/g, ''));  // Clean $14.15 or "Out of stock $14.15"
            if (!isNaN(num)) prices.push(num);
        }
        return prices;
    }

    async getProductCount(): Promise<number> {
        await this.page.waitForSelector('app-product-card');
        return await this.productCards.count();
    }

    async expectProductsSortedByNameAsc() {
        await this.page.waitForLoadState('networkidle');  // FIXED: Wait post-sort
        await this.page.waitForTimeout(1500);  // Angular reload buffer

        const names = await this.getProductNames();
        console.log('DEBUG Names:', names);  // See in terminal what it grabs

        // FIXED: Stable sort check (every consecutive pair is sorted, handles ties)
        for (let i = 0; i < names.length - 1; i++) {
            const curr = names[i].toLowerCase();
            const next = names[i + 1].toLowerCase();
            expect(curr <= next).toBeTruthy();
        }
    }

    async expectProductsSortedByPriceDesc() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(1500);

        const prices = await this.getProductPrices();
        console.log('DEBUG Prices:', prices);  // Debug

        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i] >= prices[i + 1]).toBeTruthy();
        }
    }

    async expectAllPricesInRange(min: number, max: number) {
        const prices = await this.getProductPrices();
        for (const price of prices) {
            expect(price).toBeGreaterThanOrEqual(min);
            expect(price).toBeLessThanOrEqual(max);
        }
    }

    async expectContainsProduct(name: string) {
        const names = await this.getProductNames();
        expect(names).toContain(name);
    }
}