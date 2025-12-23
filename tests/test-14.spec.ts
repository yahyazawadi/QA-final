import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/product/01KD5Z14DK2Y7054D0JH6Q2HMC');
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('div').filter({ hasText: 'Product added to shopping' }).nth(2).click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
});