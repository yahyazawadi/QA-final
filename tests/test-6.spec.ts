import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="search-query"]').click();
  await page.locator('[data-test="search-query"]').fill('pliers');
  await page.locator('[data-test="search-submit"]').click();
  await page.locator('[data-test="product-01KD3XSRCPM568CRHZQTR75HQJ"]').click();

});