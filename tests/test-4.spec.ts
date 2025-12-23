import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('CamelliaIsGreat@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('wrongpass');
  await page.locator('[data-test="login-submit"]').click();
});