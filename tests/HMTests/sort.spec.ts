import { test } from '@playwright/test';
import { ProductOverviewPage } from '../POMs/ProductOverviewPage';

test.describe('Sort Feature', () => {
  let overview: ProductOverviewPage;

  test.beforeEach(async ({ page }) => {
    overview = new ProductOverviewPage(page);
    await overview.goto();
  });

  test('Sort by Name A-Z and Price High to Low', async () => {
    await overview.selectSort('name,asc');
    await overview.expectProductsSortedByNameAsc();

    await overview.selectSort('price,desc');
    await overview.expectProductsSortedByPriceDesc();
  });
});