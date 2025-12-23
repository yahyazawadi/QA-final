import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="brand-01KD65WY4FWTD3DCG29PYWQYKX"]').check();
  await expect(page.locator('#filters')).toMatchAriaSnapshot(`
    - checkbox "ForgeFlex Tools" [checked]
    - text: ForgeFlex Tools
    `);
});