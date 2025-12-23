import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01KD5Z14DK2Y7054D0JH6Q2HMC"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('.btn.btn-danger').click();
  await page.getByText('The cart is empty. Nothing to').click();
});