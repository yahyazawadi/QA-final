import { test, expect } from '@playwright/test';

test.describe('Sort Feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.waitForLoadState('networkidle');
    });

    test('Sort by Name A-Z and Price High to Low', async ({ page }) => {
        // Sort by Name A-Z
        await page.locator('[data-test="sort"]').selectOption('name,asc');

        // Sort by Price High to Low
        await page.locator('[data-test="sort"]').selectOption('price,desc');

        // The dropdown shows the options (your exact assertion)
        await expect(page.locator('[data-test="sort"]')).toContainText('Name (A - Z)Name (Z - A)Price (High - Low)Price (Low - High)CO₂ Rating (A - E)CO₂ Rating (E - A)');
    });
});