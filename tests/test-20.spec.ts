import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByRole('slider', { name: 'ngx-slider-max' }).click();
  await page.getByRole('slider', { name: 'ngx-slider-max' }).click();
  await page.getByRole('slider', { name: 'ngx-slider', exact: true }).click();
});