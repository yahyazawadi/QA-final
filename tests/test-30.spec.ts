import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01KD69AHRDR4QD5C0A20ZZG2QP"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('.btn.btn-danger').click();
  await expect(page.getByLabel('Product deleted.')).toContainText('Product deleted.');
});