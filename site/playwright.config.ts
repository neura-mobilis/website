import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://localhost:4321' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'bun tests/serve.ts',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
  },
});
