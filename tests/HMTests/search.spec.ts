import { test, expect } from '@playwright/test';
import { ProductOverviewPage } from '../POMs/ProductOverviewPage';

test.describe('Search Feature', () => {
  let overview: ProductOverviewPage;

  test.beforeEach(async ({ page }) => {
    overview = new ProductOverviewPage(page);
    await overview.goto();
  });

  test('Search for "pliers" shows relevant results', async () => {
    await overview.searchFor('pliers');

    await expect(overview.page.getByRole('heading', { name: 'Searched for: pliers' })).toBeVisible();

    await overview.expectContainsProduct('Combination Pliers');
    await overview.expectContainsProduct('Pliers');
    await overview.expectContainsProduct('Long Nose Pliers');
    await overview.expectContainsProduct('Slip Joint Pliers');


  });
});