import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').press('ControlOrMeta+ر');
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('CamelliaIsGreat@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('CamelliaIsGreat!2123');
  await page.locator('[data-test="login-submit"]').click();

  await page.locator('[data-test="login-error"]').click();
  await expect(page.locator('[data-test="login-error"]')).toBeVisible({ timeout: 10000 });
});
