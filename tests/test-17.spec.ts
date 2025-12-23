import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="category-01KD62ETZM4WQMWY7SQACPKXV2"]').check();
  await expect(page.locator('#filters')).toMatchAriaSnapshot(`
    - checkbox "Hand Tools" [checked]
    - text: Hand Tools
    - list:
      - group "Categories":
        - text: ""
        - checkbox "Hammer" [checked]
        - text: ""
        - checkbox "Hand Saw" [checked]
        - text: ""
        - checkbox "Wrench" [checked]
        - text: ""
        - checkbox "Screwdriver" [checked]
        - text: Screwdriver
        - checkbox "Pliers" [checked]
        - text: ""
        - checkbox "Chisels" [checked]
        - text: ""
        - checkbox "Measures" [checked]
        - text: ""
    `);
});