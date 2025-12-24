import { test, expect } from '@playwright/test';

test.describe('Search Feature', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.waitForLoadState('networkidle');
    });

    test('Search for "pliers" shows relevant results', async ({ page }) => {
        await page.locator('[data-test="search-query"]').fill('pliers');
        await page.locator('[data-test="search-submit"]').click();

        await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'heading "Searched for: pliers" [level=3]'
    - 'link /Combination Pliers Combination Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Combination Pliers"
      - heading "Combination Pliers" [level=5]
      - text: ""
    - 'link /Pliers Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Pliers"
      - heading "Pliers" [level=5]
      - text: ""
    - 'link /Long Nose Pliers Long Nose Pliers CO₂: A B C D E Out of stock \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Long Nose Pliers"
      - heading "Long Nose Pliers" [level=5]
      - text: ""
    - 'link /Slip Joint Pliers Slip Joint Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Slip Joint Pliers"
      - heading "Slip Joint Pliers" [level=5]
      - text: ""
    `);
    });
});