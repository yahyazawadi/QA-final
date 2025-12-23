import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByRole('slider', { name: 'ngx-slider-max' }).click();
  await page.getByRole('slider', { name: 'ngx-slider', exact: true }).click();
  await page.locator('.ngx-slider-span.ngx-slider-bar-wrapper.ngx-slider-full-bar > .ngx-slider-span').click();
  await page.locator('.ngx-slider-span.ngx-slider-bar-wrapper.ngx-slider-full-bar').click();
  await page.locator('.ngx-slider-span.ngx-slider-bar-wrapper.ngx-slider-full-bar > .ngx-slider-span').click();
  await page.getByRole('slider', { name: 'ngx-slider', exact: true }).click();
  await page.getByRole('slider', { name: 'ngx-slider', exact: true }).click();
  await page.locator('.ngx-slider-span.ngx-slider-bar-wrapper.ngx-slider-selection-bar').click();
});