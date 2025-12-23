import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="category-01KD6CRDV2GDG2X1JJ4PCHNKE8"]').check();
  await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Combination Pliers Combination Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWDK1RW14P4BV801QK9
      - img "Combination Pliers"
      - heading "Combination Pliers" [level=5]
      - text: ""
    - 'link /Pliers Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWGW07CSTCE2T8TNJRB
      - img "Pliers"
      - heading "Pliers" [level=5]
      - text: ""
    - 'link /Bolt Cutters Bolt Cutters CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWHE8HWBXNG0WSV1XC9
      - img "Bolt Cutters"
      - heading "Bolt Cutters" [level=5]
      - text: ""
    - 'link /Long Nose Pliers Long Nose Pliers CO₂: A B C D E Out of stock \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWKZ8ZB8NM7XPHHVR0M
      - img "Long Nose Pliers"
      - heading "Long Nose Pliers" [level=5]
      - text: ""
    - 'link /Slip Joint Pliers Slip Joint Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWMQCTWZ23B7XKA9EP7
      - img "Slip Joint Pliers"
      - heading "Slip Joint Pliers" [level=5]
      - text: ""
    - 'link /Claw Hammer with Shock Reduction Grip Claw Hammer with Shock Reduction Grip CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWP9Y8Y76E3C0NMTR9R
      - img "Claw Hammer with Shock Reduction Grip"
      - heading "Claw Hammer with Shock Reduction Grip" [level=5]
      - text: ""
    - 'link /Hammer Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWQ8CHQVJ0QEW102MXJ
      - img "Hammer"
      - heading "Hammer" [level=5]
      - text: ""
    - 'link /Claw Hammer Claw Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWR9N4FCKAPKCE3M106
      - img "Claw Hammer"
      - heading "Claw Hammer" [level=5]
      - text: ""
    - 'link /Thor Hammer Thor Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6CRDWTNZ967EGZZVEQ9TXD
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
  await page.locator('[data-test="category-01KD6CRDVD26WXY74W95E640VR"]').check();
  await page.locator('[data-test="category-01KD6CRDVD26WXY74W95E640VS"]').check();
  await page.locator('[data-test="category-01KD6CRDVD26WXY74W95E640VT"]').check();
  await page.locator('[data-test="category-01KD6CRDVD26WXY74W95E640VQ"]').check();
  await page.locator('[data-test="filter_completed"]').click();
});