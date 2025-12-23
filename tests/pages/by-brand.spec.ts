import { test, expect } from '@playwright/test';

test.describe('By Brand Feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('networkidle');
  });

  test('Filter by brand shows correct products and supports multiple selection', async ({ page }) => {
    // First brand
    await page.getByText('ForgeFlex Tools').click();
    await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Claw Hammer with Shock Reduction Grip Claw Hammer with Shock Reduction Grip CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Claw Hammer with Shock Reduction Grip"
      - heading "Claw Hammer with Shock Reduction Grip" [level=5]
      - text: ""
    - 'link /Hammer Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Hammer"
      - heading "Hammer" [level=5]
      - text: ""
    - 'link /Thor Hammer Thor Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Thor Hammer"
      - heading "Thor Hammer" [level=5]
      - text: ""
    - 'link /Sledgehammer Sledgehammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Sledgehammer"
      - heading "Sledgehammer" [level=5]
      - text: ""
    - 'link /Claw Hammer with Fiberglass Handle Claw Hammer with Fiberglass Handle CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Claw Hammer with Fiberglass Handle"
      - heading "Claw Hammer with Fiberglass Handle" [level=5]
      - text: ""
    - 'link /Court Hammer Court Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Court Hammer"
      - heading "Court Hammer" [level=5]
      - text: ""
    - 'link /Wood Saw ECO Wood Saw CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Wood Saw"
      - text: ""
      - heading "Wood Saw" [level=5]
      - text: ""
    - 'link /Adjustable Wrench Adjustable Wrench CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Adjustable Wrench"
      - heading "Adjustable Wrench" [level=5]
      - text: ""
    - 'link /Angled Spanner Angled Spanner CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Angled Spanner"
      - heading "Angled Spanner" [level=5]
      - text: ""
    - navigation:
      - list:
        - listitem:
          - button "Previous"
        - listitem:
          - button "Page-1"
        - listitem:
          - button "Page-2"
        - listitem:
          - button "Page-3"
        - listitem:
          - button "Page-4"
        - listitem:
          - button "Next"
    `);

    // Second brand
    await page.getByText('MightyCraft Hardware').click();

    await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
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
    - 'link /Bolt Cutters Bolt Cutters CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Bolt Cutters"
      - heading "Bolt Cutters" [level=5]
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
    - 'link /Claw Hammer with Shock Reduction Grip Claw Hammer with Shock Reduction Grip CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Claw Hammer with Shock Reduction Grip"
      - heading "Claw Hammer with Shock Reduction Grip" [level=5]
      - text: ""
    - 'link /Hammer Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Hammer"
      - heading "Hammer" [level=5]
      - text: ""
    - 'link /Claw Hammer Claw Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Claw Hammer"
      - heading "Claw Hammer" [level=5]
      - text: ""
    - 'link /Thor Hammer Thor Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Thor Hammer"
      - heading "Thor Hammer" [level=5]
      - text: ""
    - navigation:
      - list:
        - listitem:
          - button "Previous"
        - listitem:
          - button "Page-1"
        - listitem:
          - button "Page-2"
        - listitem:
          - button "Page-3"
        - listitem:
          - button "Page-4"
        - listitem:
          - button "Page-5"
        - listitem:
          - button "Next"
    `);

    // Uncheck first brand
    await page.getByText('ForgeFlex Tools').click();
    await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Claw Hammer Claw Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Claw Hammer"
      - heading "Claw Hammer" [level=5]
      - text: ""
    - 'link /Bolt Cutters Bolt Cutters CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Bolt Cutters"
      - heading "Bolt Cutters" [level=5]
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
    - 'link /Chisels Set Chisels Set CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Chisels Set"
      - heading "Chisels Set" [level=5]
      - text: ""
    - 'link /Belt Sander Belt Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Belt Sander"
      - heading "Belt Sander" [level=5]
      - text: ""
    - 'link /Cordless Drill 12V Cordless Drill 12V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Cordless Drill 12V"
      - heading "Cordless Drill 12V" [level=5]
      - text: ""
    - 'link /Drawer Tool Cabinet ECO Drawer Tool Cabinet CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Drawer Tool Cabinet"
      - text: ""
      - heading "Drawer Tool Cabinet" [level=5]
      - text: ""
    - 'link /Screws Screws CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Screws"
      - heading "Screws" [level=5]
      - text: ""
    `);
  });
});