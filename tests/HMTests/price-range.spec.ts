import { test, expect } from '@playwright/test';
import { ProductOverviewPage } from '../POMs/ProductOverviewPage';

test.describe('Price Range Feature', () => {
  let overview: ProductOverviewPage;

  test.beforeEach(async ({ page }) => {
    overview = new ProductOverviewPage(page);
    await overview.goto();
  });

  test('Adjust price range using slider keyboard arrows and verify filtered products', async ({ page }) => {
    const maxHandle = page.getByRole('slider', { name: 'ngx-slider-max' });
    const minHandle = page.getByRole('slider', { name: 'ngx-slider', exact: true });

    await maxHandle.click();

    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('ArrowRight');
    }

    await minHandle.click();
    for (let i = 1; i < 100; i++) {
      await page.keyboard.press('ArrowRight');
    }

    await maxHandle.click();

    // why does this taaakkee sooo looooonngggg
    await page.waitForTimeout(20000);

    await overview.expectAllPricesInRange(100, 120);


  });
});