import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="product-01KD69AHRDR4QD5C0A20ZZG2QP"]').click();
});