import { test, expect } from '@playwright/test';

test.describe('Register Feature', () => {
    test('Successful registration', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/auth/register');
        await page.waitForLoadState('networkidle');

        await page.locator('[data-test="first-name"]').fill('test');
        await page.locator('[data-test="last-name"]').fill('test');
        await page.locator('[data-test="dob"]').fill('1990-08-23');
        await page.locator('[data-test="street"]').fill('test street');
        await page.locator('[data-test="postal_code"]').fill('123');
        await page.locator('[data-test="city"]').fill('test');
        await page.locator('[data-test="state"]').fill('test');
        await page.locator('[data-test="country"]').selectOption('AU');
        await page.locator('[data-test="phone"]').fill('094342342');
        await page.locator('[data-test="email"]').fill(`test${Date.now()}@gmail.com`); // unique each time
        await page.locator('[data-test="password"]').fill('Password!2asd@$@$');
        await page.locator('[data-test="register-submit"]').click();

        // Success = redirected to login page
        await expect(page).toHaveURL(/.*\/auth\/login/, { timeout: 15000 });

    });
});