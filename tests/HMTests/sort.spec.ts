import { test, expect } from '@playwright/test';

test.describe('Sort Feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('networkidle');
  });

  test('Sort by Name A-Z and Price High to Low updates product list', async ({ page }) => {
    // Sort by Name A-Z
    await page.locator('[data-test="sort"]').selectOption('name,asc');

    await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
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
    - 'link /Belt Sander Belt Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Belt Sander"
      - heading "Belt Sander" [level=5]
      - text: ""
    - 'link /Bolt Cutters Bolt Cutters CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Bolt Cutters"
      - heading "Bolt Cutters" [level=5]
      - text: ""
    - 'link /Chisels Set Chisels Set CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Chisels Set"
      - heading "Chisels Set" [level=5]
      - text: ""
    - 'link /Circular Saw Circular Saw CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Circular Saw"
      - heading "Circular Saw" [level=5]
      - text: ""
    - 'link /Claw Hammer Claw Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Claw Hammer"
      - heading "Claw Hammer" [level=5]
      - text: ""
    - 'link /Claw Hammer with Fiberglass Handle Claw Hammer with Fiberglass Handle CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Claw Hammer with Fiberglass Handle"
      - heading "Claw Hammer with Fiberglass Handle" [level=5]
      - text: ""
    - 'link /Claw Hammer with Shock Reduction Grip Claw Hammer with Shock Reduction Grip CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Claw Hammer with Shock Reduction Grip"
      - heading "Claw Hammer with Shock Reduction Grip" [level=5]
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

    // Sort by Price High to Low
    await page.locator('[data-test="sort"]').selectOption('price,desc');

    await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Drawer Tool Cabinet ECO Drawer Tool Cabinet CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Drawer Tool Cabinet"
      - text: ""
      - heading "Drawer Tool Cabinet" [level=5]
      - text: ""
    - 'link /Tool Cabinet ECO Tool Cabinet CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Tool Cabinet"
      - text: ""
      - heading "Tool Cabinet" [level=5]
      - text: ""
    - 'link /Circular Saw Circular Saw CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Circular Saw"
      - heading "Circular Saw" [level=5]
      - text: ""
    - 'link /Belt Sander Belt Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Belt Sander"
      - heading "Belt Sander" [level=5]
      - text: ""
    - 'link /Cordless Drill 24V Cordless Drill 24V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Cordless Drill 24V"
      - heading "Cordless Drill 24V" [level=5]
      - text: ""
    - 'link /Leather toolbelt ECO Leather toolbelt CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Leather toolbelt"
      - text: ""
      - heading "Leather toolbelt" [level=5]
      - text: ""
    - 'link /Sheet Sander Sheet Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Sheet Sander"
      - heading "Sheet Sander" [level=5]
      - text: ""
    - 'link /Bolt Cutters Bolt Cutters CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Bolt Cutters"
      - heading "Bolt Cutters" [level=5]
      - text: ""
    - 'link /Cordless Drill 12V Cordless Drill 12V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Cordless Drill 12V"
      - heading "Cordless Drill 12V" [level=5]
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
  });
});