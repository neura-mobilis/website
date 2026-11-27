import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

import { builtPages } from './pages';

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

for (const route of builtPages()) {
  test.describe(route, () => {
    test('loads without console errors (CSP included)', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()));
      page.on('pageerror', (err) => errors.push(err.message));
      await page.goto(route);
      await page.waitForLoadState('networkidle');
      expect(errors).toEqual([]);
    });

    test('has no WCAG 2.2 A/AA violations', async ({ page }) => {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
      expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
    });

    test('has no horizontal scroll', async ({ page }) => {
      await page.goto(route);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(overflow).toBe(false);
    });

    test('first Tab reaches the skip link, which moves focus to main', async ({ page }) => {
      await page.goto(route);
      await page.keyboard.press('Tab');
      const skip = page.locator('a.skip-link');
      await expect(skip).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(page).toHaveURL(/#main$/);
    });
  });
}

test.describe('phone demo', () => {
  for (const route of ['/', '/en/']) {
    test(`${route} answers by keyboard and announces it`, async ({ page }) => {
      await page.goto(route);
      const demo = page.locator('[data-phone-demo]').first();
      await demo.locator('.talk').focus();
      await page.keyboard.press('Enter');
      await expect(demo.locator('[role="log"] .answer')).toHaveCount(1, { timeout: 5000 });
      await expect(demo.locator('.talk')).toBeFocused();
    });
  }
});

test('theme toggle switches and persists', async ({ page }) => {
  await page.goto('/');
  const toggle = page.locator('[data-theme-toggle]');
  const before = await toggle.getAttribute('aria-pressed');
  await toggle.click();
  await expect(toggle).not.toHaveAttribute('aria-pressed', before!);
  await page.goto('/mobilis/');
  await expect(page.locator('[data-theme-toggle]')).not.toHaveAttribute('aria-pressed', before!);
});
