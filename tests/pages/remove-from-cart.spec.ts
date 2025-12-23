import { test, expect } from '@playwright/test';

test.describe('Remove from Cart Feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.waitForLoadState('networkidle');

        // First add something to cart so we can remove it
        await page.locator('[data-test="product-01KD5Z14DK2Y7054D0JH6Q2HMC"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.getByText('Product added to shopping cart').waitFor({ state: 'visible' });

        // Go to cart page
        await page.locator('[data-test="nav-cart"]').click();
        await page.waitForLoadState('networkidle');
    });

    test('Remove item from cart empties it', async ({ page }) => {

        // Remove the item
        await page.locator('.btn-danger').first().click(); // Remove button



        // Empty message appears
        const deleteToast = page.locator('div').filter({ hasText: 'Product deleted.' }).nth(2);
        await expect(deleteToast).toBeVisible({ timeout: 10000 });
    });
});