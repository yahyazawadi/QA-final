import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests/HMTests',  // Point directly to your tests folder
  timeout: 30000,              // 60 seconds per test
  fullyParallel: false,
  workers: 1,
  expect: { timeout: 15000 },
  retries: 1,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'https://practicesoftwaretesting.com',
    headless: true,            // ← Headless mode (no browser window)
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20000,
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