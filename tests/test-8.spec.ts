import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01KD5VK89576KACP5ZR5PPVTRQ"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('div').filter({ hasText: 'Product added to shopping' }).nth(2).click();
});