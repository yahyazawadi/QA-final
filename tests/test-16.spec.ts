import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="sort"]').selectOption('name,asc');
  await page.locator('[data-test="sort"]').selectOption('price,desc');
  await expect(page.locator('[data-test="sort"]')).toContainText('Name (A - Z)Name (Z - A)Price (High - Low)Price (Low - High)CO₂ Rating (A - E)CO₂ Rating (E - A)');
  // Recording...
});
