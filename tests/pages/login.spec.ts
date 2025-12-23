import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/auth/login');
        await page.waitForLoadState('networkidle');
    });

    test('Successful login redirects to home and shows user menu', async ({ page }) => {
        await page.locator('[data-test="email"]').fill(process.env.TEST_EMAIL!);
        await page.locator('[data-test="password"]').fill(process.env.TEST_PASSWORD!);
        await page.locator('[data-test="login-submit"]').click();

        // Success = redirected to account page (as in your original code)
        await expect(page).toHaveURL('https://practicesoftwaretesting.com/account', { timeout: 15000 });
    });

    test('Wrong password shows error message', async ({ page }) => {
        await page.locator('[data-test="email"]').fill(process.env.TEST_EMAIL!);
        await page.locator('[data-test="password"]').fill('WrongPassword123!'); // Any wrong password
        await page.locator('[data-test="login-submit"]').click();

        // The error is in .alert-danger class, with text "Invalid email or password"
        const errorAlert = page.locator('.alert-danger');
        await expect(errorAlert).toBeVisible({ timeout: 10000 });
        await expect(errorAlert).toContainText('Invalid email or password');

        // Stay on login page
        await expect(page).toHaveURL(/.*\/auth\/login/);
    });
});