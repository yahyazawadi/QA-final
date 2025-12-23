import { test, expect } from '@playwright/test';

test.describe('Register Feature', () => {
    test('Successful registration', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/auth/register');
        await page.waitForLoadState('networkidle');

        await page.locator('[data-test="first-name"]').fill(process.env.TEST_FIRST_NAME!);
        await page.locator('[data-test="last-name"]').fill(process.env.TEST_LAST_NAME!);
        await page.locator('[data-test="dob"]').fill(process.env.TEST_DATE_OF_BIRTH!);
        await page.locator('[data-test="street"]').fill(process.env.TEST_ADDRESS!);        // note: original used "street"
        await page.locator('[data-test="postal_code"]').fill(process.env.TEST_POSTCODE!);   // original used "postal_code"
        await page.locator('[data-test="city"]').fill(process.env.TEST_CITY!);
        await page.locator('[data-test="state"]').fill('Test State');                       // not in env, but safe default
        await page.locator('[data-test="country"]').selectOption('NL');                     // safe default (Netherlands)
        await page.locator('[data-test="phone"]').fill('1234567890');                       // safe phone

        // Using the fixed email from .env (exactly as you requested)
        await page.locator('[data-test="email"]').fill(process.env.TEST_EMAIL!);
        await page.locator('[data-test="password"]').fill(process.env.TEST_PASSWORD!);
        await page.locator('[data-test="register-submit"]').click();

        // Success = redirected to login page (same as your original assertion)
        await expect(page).toHaveURL(/.*\/auth\/login/, { timeout: 15000 });
    });
});