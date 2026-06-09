/**
 * Static prerender: runs after `vite build`.
 * For every known route, creates dist/{route}/index.html
 * with the correct <title>, <meta description>, and <link rel="canonical">
 * so Googlebot sees accurate per-page meta before JavaScript runs.
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

function patchHTML(html, { title, desc, url }) {
  const safeTitle = title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeDesc  = escAttr(desc);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/,         `$1${safeDesc}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/,               `$1${url}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/,        `$1${escAttr(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/,  `$1${safeDesc}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/,          `$1${url}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,       `$1${escAttr(title)}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,  `$1${safeDesc}$2`);
}

function write(routePath, meta) {
  const html = patchHTML(template, meta);
  const dir  = join(DIST, routePath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf8');
  process.stdout.write(`  ✓ /${routePath}\n`);
}

let count = 0;

// District + neighborhood pages (74 pages)
for (const page of ALL_PAGES) {
  write(page.path, {
    title: page.metaTitle,
    desc:  page.metaDesc,
    url:   `${BASE_URL}/${page.path}`,
  });
  count++;
}

// Blog list
write('blog', {
  title: 'Çilingir Blog | Kilit, Güvenlik ve Tavsiyeler | Çilingirciniz',
  desc:  'Çilingir hizmetleri, kilit güvenliği ve acil durum tavsiyeleri hakkında uzman içerikler. İstanbul Avrupa Yakası çilingir bilgi rehberi.',
  url:   `${BASE_URL}/blog`,
});
count++;

// Blog post pages
for (const post of BLOG_POSTS) {
  const excerpt = (post.excerpt || '').slice(0, 160);
  write(`blog/${post.slug}`, {
    title: `${post.title} | Çilingirciniz`,
    desc:  excerpt,
    url:   `${BASE_URL}/blog/${post.slug}`,
  });
  count++;
}

// Other static pages
const staticPages = [
  {
    path:  'en',
    title: 'Istanbul Locksmith | 24/7 Emergency | Çilingirciniz',
    desc:  '24/7 emergency locksmith in Istanbul. Door opening, lock replacement, auto locksmith. Average response: 20-30 min. Call now: 0542 694 69 20',
    url:   `${BASE_URL}/en`,
  },
  {
    path:  'fiyatlar',
    title: 'Çilingir Fiyatları İstanbul | Çilingirciniz',
    desc:  'İstanbul Avrupa Yakası çilingir hizmet fiyatları. Kapı açma, kilit değişimi, oto çilingir. Şeffaf fiyat garantisi, telefonda net bilgi.',
    url:   `${BASE_URL}/fiyatlar`,
  },
];

for (const p of staticPages) {
  write(p.path, { title: p.title, desc: p.desc, url: p.url });
  count++;
}

console.log(`\nPrerendered ${count} pages into dist/\n`);
