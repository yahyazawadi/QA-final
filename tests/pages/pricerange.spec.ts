import { test, expect } from '@playwright/test';

test.describe('Price Range Feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('networkidle');
  });

  test('Adjust price range using slider keyboard arrows and verify page structure', async ({ page }) => {
    // Focus and move max handle right (increase max price)
    const maxHandle = page.getByRole('slider', { name: 'ngx-slider-max' });
    await maxHandle.click();
    for (let i = 0; i < 50; i++) { // Adjust count based on how much you want to move
      await page.keyboard.press('ArrowRight');
    }

    // Focus and move min handle right (increase min price, narrow range)
    const minHandle = page.getByRole('slider', { name: 'ngx-slider', exact: true });
    await minHandle.click();
    for (let i = 1; i < 100; i++) { // Your many presses — narrows the range
      await page.keyboard.press('ArrowRight');
    }

    // Wait for products to update
    await page.waitForResponse(resp => resp.url().includes('/products') && resp.status() === 200);

    // Your exact ARIA snapshot assertion on the main overview
    await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Random Orbit Sander Random Orbit Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD65WYNT1Y1T55NZV4K3QH46
      - img "Random Orbit Sander"
      - heading "Random Orbit Sander" [level=5]
      - text: ""
    - 'link /Cordless Drill 18V Cordless Drill 18V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD65WYP624BBA258GA9RK404
      - img "Cordless Drill 18V"
      - heading "Cordless Drill 18V" [level=5]
      - text: ""
    - 'link /Cordless Drill 20V Cordless Drill 20V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD65WYNXK7DNR32YY2YCAJW1
      - img "Cordless Drill 20V"
      - heading "Cordless Drill 20V" [level=5]
      - text: ""
    `);
  });
});
