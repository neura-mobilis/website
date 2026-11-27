/// <reference types="bun" />
// Minimal static server for dist/ used by Playwright. `astro preview` detaches itself when not
// attached to a TTY, which Playwright reads as an early exit.
import { join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist', import.meta.url));
const port = Number(process.env.PORT ?? 4321);

// Same security headers as production (public/_headers, '/*' block), so a CSP violation fails the tests.
const headersFile = Bun.file(join(root, '_headers'));
const securityHeaders: Record<string, string> = {};
if (await headersFile.exists()) {
  for (const line of (await headersFile.text()).split('\n')) {
    const match = line.match(/^\s+([\w-]+):\s*(.+)$/);
    if (match) securityHeaders[match[1]] = match[2].trim();
  }
}

Bun.serve({
  port,
  async fetch(req: Request) {
    const path = normalize(decodeURIComponent(new URL(req.url).pathname));
    const candidates = path.endsWith('/') ? [join(root, path, 'index.html')] : [join(root, path), join(root, path, 'index.html')];
    for (const file of candidates) {
      if (!file.startsWith(root)) break;
      const f = Bun.file(file);
      if (await f.exists()) return new Response(f, { headers: securityHeaders });
    }
    return new Response('Not found', { status: 404 });
  },
});

console.log(`Serving dist on http://localhost:${port}`);
