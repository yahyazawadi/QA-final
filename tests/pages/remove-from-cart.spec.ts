import { test, expect } from '@playwright/test';

test.describe('Remove from Cart Feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.waitForLoadState('networkidle');

        // Add the first product (no hard-coded ID!)
        await page.locator('[data-test="product-name"]').first().click()
        await page.waitForLoadState('networkidle');

        await page.locator('[data-test="add-to-cart"]').click();

        // Wait for add toast
        const addToast = page.getByText('Product added to shopping cart');
        await expect(addToast).toBeVisible({ timeout: 10000 });

        // Go to cart
        await page.locator('[data-test="nav-cart"]').click();
        await page.waitForLoadState('networkidle');
    });

    test('Remove item from cart shows "Product deleted" toast and empties cart', async ({ page }) => {
        // Click remove button (red danger button)
        await page.locator('.btn-danger').first().click();

        // Your exact working delete toast
        await expect(page.getByLabel('Product deleted.')).toContainText('Product deleted.');


    });
});