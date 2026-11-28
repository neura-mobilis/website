/// <reference types="bun" />
// Renders the social preview images (public/og-fr.png, public/og-en.png) from the home headline.
// Run `bun run og` after changing the headline, then commit the images.
import { chromium } from '@playwright/test';
import { fileURLToPath } from 'node:url';
import { home } from '../src/i18n/home';
import { locales } from '../src/i18n/routes';
import { site } from '../src/data/site';

const fontPath = fileURLToPath(
  import.meta.resolve('@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2'),
);
const font = Buffer.from(await Bun.file(fontPath).arrayBuffer()).toString('base64');
const domain = new URL(site.url).host;

const page = (headline: string) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  @font-face { font-family: Atkinson; src: url(data:font/woff2;base64,${font}) format('woff2'); font-weight: 200 800; }
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; overflow: hidden; position: relative; background: #0b1322; color: #e7edf8;
    font-family: Atkinson, sans-serif; padding: 72px 80px; display: flex; flex-direction: column; justify-content: space-between; }
  .brand { display: flex; align-items: center; gap: 18px; font-size: 34px; font-weight: 800; letter-spacing: -0.01em; }
  h1 { max-width: 13ch; font-size: 76px; line-height: 1.05; font-weight: 800; letter-spacing: -0.03em; text-wrap: balance; position: relative; z-index: 1; }
  .domain { font-size: 26px; color: #a9b6cc; }
  .orb { position: absolute; right: -60px; top: 50%; translate: 0 -50%; width: 420px; height: 420px; border-radius: 50%;
    background: #2160c4; box-shadow: 0 0 0 40px rgb(80 140 255 / 0.12), 0 0 0 90px rgb(80 140 255 / 0.06), 0 0 160px 60px rgb(80 140 255 / 0.18); }
</style></head><body>
  <div class="brand"><svg width="48" height="48" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#2160c4"/><path d="M10 22V10l12 12V10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>${site.name}</div>
  <h1>${headline}</h1>
  <p class="domain">${domain}</p>
  <div class="orb"></div>
</body></html>`;

const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const lang of locales) {
  await tab.setContent(page(home[lang].h1));
  await tab.evaluate(() => document.fonts.ready);
  await tab.screenshot({ path: fileURLToPath(new URL(`../public/og-${lang}.png`, import.meta.url)) });
}
await browser.close();
