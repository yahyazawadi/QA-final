import { test, expect } from '@playwright/test';

test.describe('Price Range Feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('networkidle');
  });

  test('Adjust price range using slider keyboard arrows and verify filtered products', async ({ page }) => {
    // Focus and move max handle right (increase max price)
    const maxHandle = page.getByRole('slider', { name: 'ngx-slider-max' });
    await maxHandle.click();
    for (let i = 0; i < 50; i++) {
      await page.keyboard.press('ArrowRight');
    }

    // Focus and move min handle right (increase min price, narrow range)
    const minHandle = page.getByRole('slider', { name: 'ngx-slider', exact: true });
    await minHandle.click();
    for (let i = 0; i < 100; i++) {
      await page.keyboard.press('ArrowRight');
    }

    // Wait for products to update
    await page.waitForResponse(resp => resp.url().includes('/products') && resp.status() === 200);

    // Use regex for URLs to ignore changing IDs
    await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Random Orbit Sander Random Orbit Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Random Orbit Sander"
      - heading "Random Orbit Sander" [level=5]
      - text: ""
    - 'link /Cordless Drill 18V Cordless Drill 18V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Cordless Drill 18V"
      - heading "Cordless Drill 18V" [level=5]
      - text: ""
    - 'link /Cordless Drill 20V Cordless Drill 20V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Cordless Drill 20V"
      - heading "Cordless Drill 20V" [level=5]
      - text: ""
    `);
  });
});