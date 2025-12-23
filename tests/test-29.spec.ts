import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01KD69AHRDR4QD5C0A20ZZG2QP"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.getByLabel('Product added to shopping')).toContainText('Product added to shopping cart.');
  await expect(page.locator('[data-test="cart-quantity"]')).toContainText('1');



});