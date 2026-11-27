import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Every built page is tested: a new page is covered without touching this file.
const distDir = fileURLToPath(new URL('../dist', import.meta.url));

function builtPages(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return builtPages(path);
    if (!entry.name.endsWith('.html') || entry.name === '404.html') return [];
    const route = '/' + relative(distDir, path).split(sep).join('/');
    return [route.replace(/index\.html$/, '')];
  });
}

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

for (const route of builtPages(distDir)) {
  test.describe(route, () => {
    test('has no WCAG 2.2 A/AA violations', async ({ page }) => {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
      expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
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
