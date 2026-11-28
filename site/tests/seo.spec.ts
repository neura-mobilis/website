import { test, expect } from '@playwright/test';
import { builtPages } from './pages';

const pages = builtPages();
const titles = new Map<string, string>();

for (const route of pages) {
  test(`${route} has complete SEO metadata`, async ({ page }) => {
    await page.goto(route);

    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe(route.startsWith('/en/') ? 'en' : 'fr');

    await expect(page.locator('h1')).toHaveCount(1);

    const title = await page.title();
    expect(title.length, 'title length').toBeGreaterThan(10);
    expect(title.length, 'title length').toBeLessThanOrEqual(70);
    expect(titles.get(title), `title duplicated with ${titles.get(title)}`).toBeUndefined();
    titles.set(title, route);

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description?.length ?? 0, 'description length').toBeGreaterThanOrEqual(50);
    expect(description?.length ?? 0, 'description length').toBeLessThanOrEqual(170);

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(new URL(canonical!).pathname).toBe(route);

    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect((await page.request.get(new URL(ogImage!).pathname)).ok(), 'og:image is served').toBe(true);

    // fr, en and x-default alternates, each pointing to a page that exists.
    const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) =>
      links.map((l) => [l.getAttribute('hreflang'), l.getAttribute('href')]),
    );
    expect(alternates.map(([h]) => h).sort()).toEqual(['en', 'fr', 'x-default']);
    for (const [, href] of alternates) expect(pages).toContain(new URL(href!).pathname);
  });
}
