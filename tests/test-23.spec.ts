import { test, expect } from '@playwright/test';

test.describe('Price Range Feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('networkidle');
  });

  test('Set price range using slider handles', async ({ page }) => {
    // Locate the min and max slider handles using the names you found
    const minHandle = page.getByRole('slider', { name: 'ngx-slider-min' });
    const maxHandle = page.getByRole('slider', { name: 'ngx-slider-max' });

    // Drag min handle to ~50 (move right)
    await minHandle.dragTo(minHandle, { targetPosition: { x: 100, y: 0 } }); // Adjust x for desired position

    // Drag max handle to ~150 (move left from default)
    await maxHandle.dragTo(maxHandle, { targetPosition: { x: -100, y: 0 } });

    // Wait for products to update
    await page.waitForResponse(resp => resp.url().includes('/products') && resp.status() === 200);

    // All displayed products should be in the set range (approx 50-150)
    const pricesText = await page.locator('[data-test="product-price"]').allTextContents();
    for (const p of pricesText) {
      const price = parseFloat(p.replace('$', ''));
      expect(price).toBeGreaterThanOrEqual(40); // Slight tolerance for slider precision
      expect(price).toBeLessThanOrEqual(160);
    }
  });

  test('Set narrow range shows fewer or no products', async ({ page }) => {
    const minHandle = page.getByRole('slider', { name: 'ngx-slider-min' });
    const maxHandle = page.getByRole('slider', { name: 'ngx-slider-max' });

    // Drag min to high value, max to close
    await minHandle.dragTo(minHandle, { targetPosition: { x: 150, y: 0 } });
    await maxHandle.dragTo(maxHandle, { targetPosition: { x: 170, y: 0 } });

    await page.waitForResponse(resp => resp.url().includes('/products') && resp.status() === 200);

    // Expect fewer products or "No products found"
    const productCount = await page.locator('[data-test="product-name"]').count();
    expect(productCount).toBeLessThan(5); // Or check for no products message if range too narrow
  });
});