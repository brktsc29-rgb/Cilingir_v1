import React, { useEffect, useState } from 'react';
import { Clock, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import {
  CSS, BG, GL, GD, BASE_URL, TEL, TEL_DISPLAY, WA,
  Navbar, StickyBar, setSEO,
} from './shared';
import { getPostBySlug, formatDate } from './blogPosts';

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
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { '@type': 'Organization', name: 'Taşcı Çilingir' },
        publisher: {
          '@type': 'Organization',
          name: 'Taşcı Çilingir',
          url: BASE_URL,
        },
        mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
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

    default:
      return null;
  }
}
