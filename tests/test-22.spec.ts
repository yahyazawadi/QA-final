import { test, expect } from '@playwright/test';

test.describe('Price Range Feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('networkidle');
  });

  test('Set price range with slider and filter products', async ({ page }) => {
    // Expand or focus on price range section if needed (click the arrow if collapsed)
    await page.locator('text=Price Range').click(); // If it's collapsible

    // Locate the slider handles (left for min, right for max)
    const minHandle = page.locator('.slider-handle').first(); // Left handle
    const maxHandle = page.locator('.slider-handle').last(); // Right handle

    // Drag left handle to ~50 (calculate position based on slider width)
    const sliderBounding = await page.locator('.slider').boundingBox(); // Slider bar
    if (sliderBounding) {
      const sliderX = sliderBounding.x;
      const sliderY = sliderBounding.y + sliderBounding.height / 2;
      const sliderWidth = sliderBounding.width;

      // Drag min handle to 25% of slider (approx 50 on 0-200 scale)
      await minHandle.hover();
      await page.mouse.down();
      await page.mouse.move(sliderX + sliderWidth * 0.25, sliderY);
      await page.mouse.up();
    }

    // Drag right handle to ~100 (50% of slider)
    if (sliderBounding) {
      const sliderX = sliderBounding.x;
      const sliderY = sliderBounding.y + sliderBounding.height / 2;
      const sliderWidth = sliderBounding.width;

      await maxHandle.hover();
      await page.mouse.down();
      await page.mouse.move(sliderX + sliderWidth * 0.5, sliderY);
      await page.mouse.up();
    }

    // Wait for products to reload after filter
    await page.waitForResponse(resp => resp.url().includes('products') && resp.status() === 200);

    // Check that all visible products have prices between 50 and 100
    const pricesText = await page.locator('[data-test="product-price"]').allTextContents();
    for (const p of pricesText) {
      const price = parseFloat(p.replace('$', ''));
      expect(price).toBeGreaterThanOrEqual(50);
      expect(price).toBeLessThanOrEqual(100);
    }

    // Optional: if no products, expect "No products found" text
    // await expect(page.getByText('No products found')).toBeVisible({ timeout: 10000 });
  });

  test('Set invalid range shows no products', async ({ page }) => {
    await page.locator('text=Price Range').click();

    const minHandle = page.locator('.slider-handle').first();
    const maxHandle = page.locator('.slider-handle').last();

    const sliderBounding = await page.locator('.slider').boundingBox();
    if (sliderBounding) {
      const sliderX = sliderBounding.x;
      const sliderY = sliderBounding.y + sliderBounding.height / 2;
      const sliderWidth = sliderBounding.width;

      // Drag max to 0 (invalid: min > max)
      await maxHandle.hover();
      await page.mouse.down();
      await page.mouse.move(sliderX, sliderY);
      await page.mouse.up();

      // Drag min to 200
      await minHandle.hover();
      await page.mouse.down();
      await page.mouse.move(sliderX + sliderWidth, sliderY);
      await page.mouse.up();
    }

    await page.waitForResponse(resp => resp.url().includes('products') && resp.status() === 200);

    await expect(page.getByText('No products found')).toBeVisible({ timeout: 10000 });
  });
});