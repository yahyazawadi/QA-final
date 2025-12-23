import { test, expect } from '@playwright/test';

test.describe('Search Feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.waitForLoadState('networkidle');
    });

    test('Search for "pliers" shows results and search term', async ({ page }) => {
        await page.locator('[data-test="search-query"]').fill('pliers');
        await page.locator('[data-test="search-submit"]').click();

        // The searched term is displayed
        const searchTerm = page.locator('[data-test="search-term"]');
        await expect(searchTerm).toHaveText('pliers');

        // At least one product result appears
        const productCount = await page.locator('[data-test="product-name"]').count();
        expect(productCount).toBeGreaterThan(0);

        // Optional: check that results contain the word "pliers"
        const productNames = await page.locator('[data-test="product-name"]').allTextContents();
        expect(productNames.some(name => name.toLowerCase().includes('pliers'))).toBeTruthy();
    });

    test('Search with invalid term shows no results message', async ({ page }) => {
        await page.locator('[data-test="search-query"]').fill('nonexistentxyz123');
        await page.locator('[data-test="search-submit"]').click();

        // No products found message appears
        await expect(page.getByText('No products found')).toBeVisible({ timeout: 10000 });

        // No product cards
        await expect(page.locator('[data-test="product-name"]')).toHaveCount(0);
    });
});