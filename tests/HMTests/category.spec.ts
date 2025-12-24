import { test, expect } from '@playwright/test';
import { ProductOverviewPage } from '../POMs/ProductOverviewPage';

test.describe('By Category Feature', () => {
  let overview: ProductOverviewPage;

  test.beforeEach(async ({ page }) => {
    overview = new ProductOverviewPage(page);
    await overview.goto();
  });

  test('Hand Tools category shows correct products', async () => {
    await overview.filterByCategory('Hand Tools');

    await overview.expectContainsProduct('Combination Pliers');
    await overview.expectContainsProduct('Pliers');
    await overview.expectContainsProduct('Bolt Cutters');
    await overview.expectContainsProduct('Long Nose Pliers');
    await overview.expectContainsProduct('Slip Joint Pliers');
    await overview.expectContainsProduct('Claw Hammer with Shock Reduction Grip');
    await overview.expectContainsProduct('Hammer');
    await overview.expectContainsProduct('Claw Hammer');
    await overview.expectContainsProduct('Thor Hammer');
  });

  test('Power Tools category shows correct products', async () => {
    await overview.filterByCategory('Power Tools');

    await overview.expectContainsProduct('Sheet Sander');
    await overview.expectContainsProduct('Belt Sander');
    await overview.expectContainsProduct('Circular Saw');
    await overview.expectContainsProduct('Cordless Drill 24V');
    await overview.expectContainsProduct('Cordless Drill 12V');
  });

  test('Other category shows correct products', async () => {
    await overview.filterByCategory('Other');

    await overview.expectContainsProduct('Safety Goggles');
    await overview.expectContainsProduct('Safety Helmet Face Shield');
    await overview.expectContainsProduct('Protective Gloves');
    await overview.expectContainsProduct('Super-thin Protection Gloves');
    await overview.expectContainsProduct('Construction Helmet');
    await overview.expectContainsProduct('Ear Protection');
    await overview.expectContainsProduct('Screws');
    await overview.expectContainsProduct('Nuts and bolts');
    await overview.expectContainsProduct('Cross-head screws');
  });
});