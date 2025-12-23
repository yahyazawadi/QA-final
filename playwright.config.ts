import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';
export default defineConfig({
  testDir: './tests',
  timeout: 60000, // 60 seconds per test
  expect: { timeout: 15000 },
  retries: 1,
  reporter: 'html',
  use: {

    baseURL: process.env.BASE_URL || 'https://practicesoftwaretesting.com',


    headless: false, // IMPORTANT: Show the browser so you can see it load!
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20000, // Extra wait for actions
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});