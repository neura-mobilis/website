import { defineConfig, devices } from '@playwright/test';

// Dedicated port: never reuse a dev server (astro dev defaults to 4321) by mistake.
const port = 4329;

export default defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: `http://localhost:${port}` },
  projects: [
    { name: 'light', use: { ...devices['Desktop Chrome'], colorScheme: 'light' } },
    { name: 'dark', use: { ...devices['Desktop Chrome'], colorScheme: 'dark' } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: `PORT=${port} bun tests/serve.ts`,
    url: `http://localhost:${port}`,
    reuseExistingServer: false,
  },
});
