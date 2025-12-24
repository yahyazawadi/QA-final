// tests/by-brand.spec.ts
import { test, expect } from '@playwright/test';
import { ProductOverviewPage } from '../POMs/ProductOverviewPage';

test.describe('By Brand Feature', () => {
  let overview: ProductOverviewPage;

  test.beforeEach(async ({ page }) => {
    overview = new ProductOverviewPage(page);
    await overview.goto();
  });

  test('Filter by brand shows correct products and supports multiple selection', async ({ page }) => {

    await overview.filterByBrand('ForgeFlex Tools');
    await page.waitForTimeout(4000); // Buffer

    await overview.expectContainsProduct('Claw Hammer with Shock Reduction Grip');
    await overview.expectContainsProduct('Hammer');
    await overview.expectContainsProduct('Thor Hammer');
    await overview.expectContainsProduct('Sledgehammer');
    await overview.expectContainsProduct('Claw Hammer with Fiberglass Handle');
    await overview.expectContainsProduct('Court Hammer');
    await overview.expectContainsProduct('Wood Saw');
    await overview.expectContainsProduct('Adjustable Wrench');
    await overview.expectContainsProduct('Angled Spanner');

    await overview.filterByBrand('MightyCraft Hardware');
    await page.waitForTimeout(4000);

    await overview.expectContainsProduct('Combination Pliers');
    await overview.expectContainsProduct('Pliers');
    await overview.expectContainsProduct('Bolt Cutters');
    await overview.expectContainsProduct('Long Nose Pliers');
    await overview.expectContainsProduct('Slip Joint Pliers');
    await overview.expectContainsProduct('Thor Hammer');
    await overview.expectContainsProduct('Claw Hammer with Shock Reduction Grip');

    await overview.filterByBrand('ForgeFlex Tools'); // Click again to uncheck
    await page.waitForTimeout(4000);

    await overview.expectContainsProduct('Claw Hammer');
    await overview.expectContainsProduct('Bolt Cutters');
    await overview.expectContainsProduct('Long Nose Pliers');
    await overview.expectContainsProduct('Screws');

    const names = await overview.getProductNames();
    expect(names).not.toContain('Thor Hammer');
    expect(names).not.toContain('Sledgehammer');
    expect(names).not.toContain('Claw Hammer with Fiberglass Handle');
  });
});