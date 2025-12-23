import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01KD5VK89576KACP5ZR5PPVTRQ"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('.btn.btn-danger').click();
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01KD5VK89576KACP5ZR5PPVTRQ"]').click();
  await page.locator('[data-test="increase-quantity"]').dblclick();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('[data-test="proceed-1"]').click();
  await page.locator('[data-test="email"]').click();
});