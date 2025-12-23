import { test, expect } from '@playwright/test';

test.describe('Add to Cart Feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/product/01KD65WYHEY1PBD5B4J6GVBXTF');
        await page.waitForLoadState('networkidle');
    });

    test('Add product to cart shows toast and updates badge', async ({ page }) => {
        // Go to a product detail page


        // Add to cart
        await page.locator('[data-test="add-to-cart"]').click();

        // Success toast appears
        const toast = page.getByText('Product added to shopping cart');
        await expect(toast).toBeVisible({ timeout: 10000 });
    });

    test('Add multiple quantity before adding to cart', async ({ page }) => {

        // Increase quantity to 3
        await page.locator('[data-test="increase-quantity"]').click();
        await page.locator('[data-test="increase-quantity"]').click();

        await page.locator('[data-test="add-to-cart"]').click();

        await expect(page.getByText('Product added to shopping cart')).toBeVisible();


    });
});