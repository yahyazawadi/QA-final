import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="search-query"]').click();
  await page.locator('[data-test="search-query"]').fill('pliers');
  await page.locator('[data-test="search-submit"]').click();
  await page.locator('[data-test="search-term"]').click();
});