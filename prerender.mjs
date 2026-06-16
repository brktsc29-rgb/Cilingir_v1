/**
 * Static prerender: runs after `vite build`.
 * For every known route, creates dist/{route}/index.html
 * with the correct <title>, <meta description>, <link rel="canonical">
 * and per-page hreflang tags so Googlebot sees accurate meta before JS runs.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { ALL_PAGES } from './src/districts.js';
import { BLOG_POSTS } from './src/blogPosts.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL  = 'https://cilingirciniz.com';
const DIST      = join(__dirname, 'dist');
const template  = readFileSync(join(DIST, 'index.html'), 'utf8');

function escAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function patchHTML(html, { title, desc, url, trUrl, enUrl }) {
  const safeTitle = title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeDesc  = escAttr(desc);

  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/,         `$1${safeDesc}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/,               `$1${url}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/,        `$1${escAttr(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/,  `$1${safeDesc}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/,          `$1${url}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,       `$1${escAttr(title)}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,  `$1${safeDesc}$2`);

  // Per-page hreflang
  const tr = trUrl || url;
  if (enUrl) {
    // Bilingual page (homepage, /en)
    out = out
      .replace(/(<link\s+rel="alternate"\s+hreflang="tr"\s+href=")[^"]*(")/,         `$1${tr}$2`)
      .replace(/(<link\s+rel="alternate"\s+hreflang="en"\s+href=")[^"]*(")/,         `$1${enUrl}$2`)
      .replace(/(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/,  `$1${tr}$2`);
  } else {
    // Turkish-only page: point tr + x-default to self, remove en hreflang
    out = out
      .replace(/(<link\s+rel="alternate"\s+hreflang="tr"\s+href=")[^"]*(")/,         `$1${tr}$2`)
      .replace(/(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/,  `$1${tr}$2`)
      .replace(/\n?\s*<link\s+rel="alternate"\s+hreflang="en"[^>]*>/g,               '');
  }

  return out;
}

function write(routePath, meta) {
  const html = patchHTML(template, meta);
  const dir  = join(DIST, routePath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf8');
  process.stdout.write(`  ✓ /${routePath}\n`);
}

let count = 0;

// District + neighborhood pages — Turkish-only, hreflang points to self
for (const page of ALL_PAGES) {
  const url = `${BASE_URL}/${page.path}`;
  write(page.path, {
    title: page.metaTitle,
    desc:  page.metaDesc,
    url,
  });
  count++;
}

// Blog list — Turkish-only
write('blog', {
  title: 'Çilingir Blog | Kilit, Güvenlik ve Tavsiyeler | Çilingirciniz',
  desc:  'Çilingir hizmetleri, kilit güvenliği ve acil durum tavsiyeleri hakkında uzman içerikler. İstanbul Avrupa Yakası çilingir bilgi rehberi.',
  url:   `${BASE_URL}/blog`,
});
count++;

// Blog post pages — Turkish-only
for (const post of BLOG_POSTS) {
  const excerpt = (post.excerpt || '').slice(0, 160);
  write(`blog/${post.slug}`, {
    title: `${post.title} | Çilingirciniz`,
    desc:  excerpt,
    url:   `${BASE_URL}/blog/${post.slug}`,
  });
  count++;
}

// Static pages
const staticPages = [
  {
    path:  'locksmith-istanbul',
    title: 'Istanbul Locksmith | 24/7 Emergency | Çilingirciniz',
    desc:  '24/7 emergency locksmith in Istanbul. Door opening, lock replacement, auto locksmith. Average response: 20-30 min. Call now: 0538 059 01 73',
    url:   `${BASE_URL}/locksmith-istanbul`,
    enUrl: `${BASE_URL}/locksmith-istanbul`,
    trUrl: `${BASE_URL}/`,
  },
  {
    path:  'fiyatlar',
    title: 'Çilingir Fiyatları İstanbul | Çilingirciniz',
    desc:  'İstanbul Avrupa Yakası çilingir hizmet fiyatları. Kapı açma, kilit değişimi, oto çilingir. Şeffaf fiyat garantisi, telefonda net bilgi.',
    url:   `${BASE_URL}/fiyatlar`,
  },
];

for (const p of staticPages) {
  write(p.path, { title: p.title, desc: p.desc, url: p.url, enUrl: p.enUrl, trUrl: p.trUrl });
  count++;
}

console.log(`\nPrerendered ${count} pages into dist/\n`);
