import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist', import.meta.url));

// Every built page except the 404: new pages are covered without editing the tests.
export function builtPages(dir = distDir): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return builtPages(path);
    if (!entry.name.endsWith('.html') || entry.name === '404.html') return [];
    const route = '/' + relative(distDir, path).split(sep).join('/');
    return [route.replace(/index\.html$/, '')];
  });
}
