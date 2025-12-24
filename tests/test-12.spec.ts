import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('#filters').getByText('Hand Tools').click();
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
          - button "Next"
    `);
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('#filters').getByText('Power Tools').click();
  await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Sheet Sander Sheet Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Sheet Sander"
      - heading "Sheet Sander" [level=5]
      - text: ""
    - 'link /Belt Sander Belt Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Belt Sander"
      - heading "Belt Sander" [level=5]
      - text: ""
    - 'link /Circular Saw Circular Saw CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Circular Saw"
      - heading "Circular Saw" [level=5]
      - text: ""
    - 'link /Cordless Drill 24V Cordless Drill 24V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Cordless Drill 24V"
      - heading "Cordless Drill 24V" [level=5]
      - text: ""
    - 'link /Cordless Drill 12V Cordless Drill 12V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Cordless Drill 12V"
      - heading "Cordless Drill 12V" [level=5]
      - text: ""
    `);
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('#filters').getByText('Other').click();
  await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Safety Goggles ECO Safety Goggles CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Safety Goggles"
      - text: ""
      - heading "Safety Goggles" [level=5]
      - text: ""
    - 'link /Safety Helmet Face Shield ECO Safety Helmet Face Shield CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Safety Helmet Face Shield"
      - text: ""
      - heading "Safety Helmet Face Shield" [level=5]
      - text: ""
    - 'link /Protective Gloves ECO Protective Gloves CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Protective Gloves"
      - text: ""
      - heading "Protective Gloves" [level=5]
      - text: ""
    - 'link /Super-thin Protection Gloves ECO Super-thin Protection Gloves CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Super-thin Protection Gloves"
      - text: ""
      - heading "Super-thin Protection Gloves" [level=5]
      - text: ""
    - 'link /Construction Helmet ECO Construction Helmet CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Construction Helmet"
      - text: ""
      - heading "Construction Helmet" [level=5]
      - text: ""
    - 'link /Ear Protection ECO Ear Protection CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Ear Protection"
      - text: ""
      - heading "Ear Protection" [level=5]
      - text: ""
    - 'link /Screws Screws CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Screws"
      - heading "Screws" [level=5]
      - text: ""
    - 'link /Nuts and bolts Nuts and bolts CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Nuts and bolts"
      - heading "Nuts and bolts" [level=5]
      - text: ""
    - 'link /Cross-head screws Cross-head screws CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: \/product\/.*/
      - img "Cross-head screws"
      - heading "Cross-head screws" [level=5]
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
          - button "Next"
    `);
});