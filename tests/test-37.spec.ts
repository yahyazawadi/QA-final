import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="category-01KD6G69E4KZ0BGGF3KFNKK0W5"]').check();
  await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Combination Pliers Combination Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FBN3WCRRBMVYYKFD5C
      - img "Combination Pliers"
      - heading "Combination Pliers" [level=5]
      - text: ""
    - 'link /Pliers Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FDN1WVG0EXTZS3677C
      - img "Pliers"
      - heading "Pliers" [level=5]
      - text: ""
    - 'link /Bolt Cutters Bolt Cutters CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FF513SJPJSES1FDDA5
      - img "Bolt Cutters"
      - heading "Bolt Cutters" [level=5]
      - text: ""
    - 'link /Long Nose Pliers Long Nose Pliers CO₂: A B C D E Out of stock \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FGZQP4X3V1Q5WTF3RA
      - img "Long Nose Pliers"
      - heading "Long Nose Pliers" [level=5]
      - text: ""
    - 'link /Slip Joint Pliers Slip Joint Pliers CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FHRE7M3DCBYD52HC7J
      - img "Slip Joint Pliers"
      - heading "Slip Joint Pliers" [level=5]
      - text: ""
    - 'link /Claw Hammer with Shock Reduction Grip Claw Hammer with Shock Reduction Grip CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FK9MN0YT10K75W3SAY
      - img "Claw Hammer with Shock Reduction Grip"
      - heading "Claw Hammer with Shock Reduction Grip" [level=5]
      - text: ""
    - 'link /Hammer Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FMJ8WVDJTH12P5JF8R
      - img "Hammer"
      - heading "Hammer" [level=5]
      - text: ""
    - 'link /Claw Hammer Claw Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FNMRB5PZF9YTXPW5NR
      - img "Claw Hammer"
      - heading "Claw Hammer" [level=5]
      - text: ""
    - 'link /Thor Hammer Thor Hammer CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69FNMRB5PZF9YTXPW5NS
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
  await page.locator('[data-test="category-01KD6G69E4KZ0BGGF3KFNKK0W6"]').check();
  await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Sheet Sander Sheet Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GXXRABR9WD1CM27RV4
      - img "Sheet Sander"
      - heading "Sheet Sander" [level=5]
      - text: ""
    - 'link /Belt Sander Belt Sander CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GY0862JA4FVMA4QY1F
      - img "Belt Sander"
      - heading "Belt Sander" [level=5]
      - text: ""
    - 'link /Circular Saw Circular Saw CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69H0PTKCB73Z746Y7352
      - img "Circular Saw"
      - heading "Circular Saw" [level=5]
      - text: ""
    - 'link /Cordless Drill 24V Cordless Drill 24V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69H3QQJTGVFNB1ES85AZ
      - img "Cordless Drill 24V"
      - heading "Cordless Drill 24V" [level=5]
      - text: ""
    - 'link /Cordless Drill 12V Cordless Drill 12V CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69H6YCE717A27BXXCJG4
      - img "Cordless Drill 12V"
      - heading "Cordless Drill 12V" [level=5]
      - text: ""
    `);
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="category-01KD6G69E4KZ0BGGF3KFNKK0W7"]').check();
  await expect(page.locator('app-overview')).toMatchAriaSnapshot(`
    - 'link /Safety Goggles ECO Safety Goggles CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69G9CGSBF9C4JXFKGEHC
      - img "Safety Goggles"
      - text: ""
      - heading "Safety Goggles" [level=5]
      - text: ""
    - 'link /Safety Helmet Face Shield ECO Safety Helmet Face Shield CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GBMPJPD01PCKBED2SN
      - img "Safety Helmet Face Shield"
      - text: ""
      - heading "Safety Helmet Face Shield" [level=5]
      - text: ""
    - 'link /Protective Gloves ECO Protective Gloves CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GCPFWG74RSR452RH2T
      - img "Protective Gloves"
      - text: ""
      - heading "Protective Gloves" [level=5]
      - text: ""
    - 'link /Super-thin Protection Gloves ECO Super-thin Protection Gloves CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GDSMHWNGY94F8AHJ7V
      - img "Super-thin Protection Gloves"
      - text: ""
      - heading "Super-thin Protection Gloves" [level=5]
      - text: ""
    - 'link /Construction Helmet ECO Construction Helmet CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GEG8PDWX39M6X6XT97
      - img "Construction Helmet"
      - text: ""
      - heading "Construction Helmet" [level=5]
      - text: ""
    - 'link /Ear Protection ECO Ear Protection CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GFSZEXM2G22VMB9HQ4
      - img "Ear Protection"
      - text: ""
      - heading "Ear Protection" [level=5]
      - text: ""
    - 'link /Screws Screws CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GGTM07YN3S0NEXET3M
      - img "Screws"
      - heading "Screws" [level=5]
      - text: ""
    - 'link /Nuts and bolts Nuts and bolts CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GH53M2VCZHW4Y842HN
      - img "Nuts and bolts"
      - heading "Nuts and bolts" [level=5]
      - text: ""
    - 'link /Cross-head screws Cross-head screws CO₂: A B C D E \\$\\d+\\.\\d+/':
      - /url: /product/01KD6G69GJ88GW77Q375EFFTWW
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