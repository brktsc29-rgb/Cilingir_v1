import React, { useEffect, useState } from 'react';
import { Clock, ArrowLeft, Phone, MessageCircle, MapPin, ChevronRight } from 'lucide-react';
import {
  CSS, BG, GL, GD, BASE_URL, TEL, TEL_DISPLAY, WA,
  Navbar, MobileMenu, StickyBar, setSEO,
} from './shared';
import { getPostBySlug, formatDate, BLOG_POSTS } from './blogPosts';

const DISTRICT_LINKS = [
  { name: 'Beşiktaş Çilingir',  path: 'besiktas-cilingir' },
  { name: 'Şişli Çilingir',     path: 'sisli-cilingir' },
  { name: 'Sarıyer Çilingir',   path: 'sariyer-cilingir' },
  { name: 'Kağıthane Çilingir', path: 'kagithane-cilingir' },
  { name: 'Eyüpsultan Çilingir',path: 'eyupsultan-cilingir' },
];

export default function BlogPostView({ slug }) {
  const [open, setOpen] = useState(false);
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) return;
    setSEO({
      title: `${post.title} | Taşcı Çilingir`,
      desc: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      lang: 'tr',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { '@type': 'Organization', name: 'Taşcı Çilingir' },
            publisher: { '@type': 'Organization', name: 'Taşcı Çilingir', url: BASE_URL },
            mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
            ],
          },
        ],
      },
    });
  }, [post]);

  if (!post) {
    return (
      <>
        <style>{CSS}</style>
        <div style={{ background: BG, minHeight: '100vh', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,.5)', marginBottom: 16 }}>Yazı bulunamadı.</p>
            <a href="/blog" style={{ color: GD }}>← Blog'a dön</a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{CSS}</style>
      <div style={{
        background: BG, minHeight: '100vh', color: '#fff',
        fontFamily: '-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI","Helvetica Neue",sans-serif',
        overflowX: 'hidden', paddingBottom: 100,
      }}>
        <Navbar open={open} setOpen={setOpen} />
        {open && <MobileMenu onClose={() => setOpen(false)} />}
        <article style={{ paddingTop: 80, maxWidth: 680, margin: '0 auto', padding: '80px 20px 0' }}>
          <a href="/blog" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, color: 'rgba(255,255,255,.4)', textDecoration: 'none',
            marginBottom: 24,
          }}>
            <ArrowLeft size={13} />Blog
          </a>

          <header style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.14em' }}>REHBER</span>
              <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 10 }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'rgba(255,255,255,.4)' }}>
                <Clock size={10} color="rgba(255,255,255,.4)" />
                {post.readMin} dk okuma
              </span>
              <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 10 }}>•</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,.3)' }}>{formatDate(post.date)}</span>
            </div>
            <h1 style={{
              fontSize: 'clamp(22px,6vw,34px)', fontWeight: 900,
              lineHeight: 1.2, letterSpacing: '-.02em', color: '#fff',
            }}>{post.title}</h1>
          </header>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <RelatedPosts currentSlug={post.slug} />

          <div style={{
            marginTop: 24, paddingTop: 24,
            borderTop: '1px solid rgba(212,175,55,.1)',
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.2em', marginBottom: 10 }}>
              HİZMET BÖLGELERİMİZ
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {DISTRICT_LINKS.map(d => (
                <a key={d.path} href={`/${d.path}`} className="pill" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  padding: '7px 12px', borderRadius: 100,
                  background: 'rgba(212,175,55,.06)', border: '1px solid rgba(212,175,55,.18)',
                  fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.7)',
                  textDecoration: 'none',
                }}>
                  <MapPin size={10} color={GD} />
                  {d.name}
                </a>
              ))}
            </div>
          </div>
        </article>
        <StickyBar />
      </div>
    </>
  );
}

function Block({ block }) {
  const prose = { fontSize: 15, lineHeight: 1.78, color: 'rgba(255,255,255,.72)', marginBottom: 20 };

  switch (block.type) {
    case 'lead':
      return (
        <p style={{
          ...prose, fontSize: 16, color: 'rgba(255,255,255,.82)',
          borderLeft: `3px solid ${GD}`, paddingLeft: 16, marginBottom: 28,
        }}>{block.text}</p>
      );

    case 'h2':
      return (
        <h2 style={{
          fontSize: 19, fontWeight: 800, color: '#fff',
          letterSpacing: '-.01em', marginTop: 32, marginBottom: 12,
        }}>{block.text}</h2>
      );

    case 'h3':
      return (
        <h3 style={{
          fontSize: 15, fontWeight: 700, color: GL,
          marginTop: 20, marginBottom: 8,
        }}>{block.text}</h3>
      );

    case 'p':
      return <p style={prose}>{block.text}</p>;

    case 'ul':
      return (
        <ul style={{ paddingLeft: 0, marginBottom: 20, listStyle: 'none' }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              display: 'flex', gap: 10, alignItems: 'flex-start',
              fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,.68)',
              marginBottom: 8, paddingLeft: 4,
            }}>
              <span style={{
                flexShrink: 0, width: 6, height: 6, borderRadius: '50%',
                background: GD, marginTop: 8,
              }} />
              {item}
            </li>
          ))}
        </ul>
      );

    case 'cta':
      return (
        <div style={{
          marginTop: 40, padding: '24px 20px',
          background: 'rgba(212,175,55,.07)',
          border: '1px solid rgba(212,175,55,.22)',
          borderRadius: 16,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.18em', marginBottom: 8 }}>
            7/24 ACİL HİZMET
          </div>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.4 }}>
            İstanbul Avrupa Yakası'nda kapıda kaldınız mı?<br />
            Ortalama 20-30 dakikada kapınızdayız.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href={TEL} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '12px 16px', borderRadius: 12, flex: 1,
              background: `linear-gradient(135deg,${GD},${GL})`,
              fontSize: 13, fontWeight: 800, color: '#000',
              textDecoration: 'none',
            }}>
              <Phone size={14} color="#000" strokeWidth={2.5} />
              {TEL_DISPLAY}
            </a>
            <a href={WA} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '12px 16px', borderRadius: 12, flex: 1,
              background: 'rgba(255,255,255,.06)', border: '1px solid rgba(37,211,102,.25)',
              fontSize: 13, fontWeight: 700, color: '#25D366',
              textDecoration: 'none',
            }}>
              <MessageCircle size={14} color="#25D366" />
              WhatsApp
            </a>
          </div>
        </div>
      );

    case 'districts':
      return (
        <div style={{ marginTop: 28, marginBottom: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.18em', marginBottom: 10 }}>
            {block.label || 'BÖLGELER'}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {block.items.map(d => (
              <a key={d.path} href={`/${d.path}`} className="pill" style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '7px 12px', borderRadius: 100,
                background: 'rgba(212,175,55,.06)', border: '1px solid rgba(212,175,55,.18)',
                fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.7)',
                textDecoration: 'none',
              }}>
                <MapPin size={10} color={GD} />
                {d.name}
              </a>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

function RelatedPosts({ currentSlug }) {
  const related = BLOG_POSTS.filter(p => p.slug !== currentSlug).slice(0, 3);
  if (!related.length) return null;
  return (
    <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(212,175,55,.1)' }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.2em', marginBottom: 12 }}>
        İLGİLİ YAZILAR
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {related.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            padding: '12px 14px', borderRadius: 10, textDecoration: 'none',
            background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.12)',
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 3 }}>
                {p.title}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock size={9} color={GD} /> {p.readMin} dk okuma
              </div>
            </div>
            <ChevronRight size={14} color={GD} style={{ flexShrink: 0 }} />
          </a>
        ))}
      </div>
    </div>
  );
}
