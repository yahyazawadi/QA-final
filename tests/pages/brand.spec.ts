import { test, expect } from '@playwright/test';

test.describe('By Brand Feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.waitForLoadState('networkidle');
    });

    test('Filter by ForgeFlex Tools brand', async ({ page }) => {
        await page.locator('[data-test="brand-01KD65WY4FWTD3DCG29PYWQYKX"]').check();

        await expect(page.locator('#filters')).toMatchAriaSnapshot(`
    - checkbox "ForgeFlex Tools" [checked]
    - text: ForgeFlex Tools
    `);
    });
});