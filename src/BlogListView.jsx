import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { CSS, BG, GL, GD, BASE_URL, Navbar, MobileMenu, StickyBar, setSEO } from './shared';
import { BLOG_POSTS, formatDate } from './blogPosts';

export default function BlogListView() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSEO({
      title: 'Çilingir Blog | Kilit, Güvenlik ve Tavsiyeler | Çilingirciniz',
      desc: 'Çilingir hizmetleri, kilit güvenliği ve acil durum tavsiyeleri hakkında uzman içerikler. İstanbul Avrupa Yakası çilingir bilgi rehberi.',
      url: `${BASE_URL}/blog`,
      lang: 'tr',
    });
  }, []);

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
        <div style={{ paddingTop: 80, padding: '80px 20px 0' }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{
              fontSize: 10, fontWeight: 700, color: GD,
              letterSpacing: '.22em', marginBottom: 8,
            }}>UZMAN İÇERİKLER</div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: '-.01em', marginBottom: 8 }}>
              Çilingir Bilgi Rehberi
            </h1>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', lineHeight: 1.6, maxWidth: 480 }}>
              Güvenliğiniz için doğru kararlar almanıza yardımcı olacak uzman içerikler.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {BLOG_POSTS.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
        <StickyBar />
      </div>
    </>
  );
}

function PostCard({ post }) {
  return (
    <a href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article style={{
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(212,175,55,.15)',
        borderRadius: 16,
        padding: '20px 18px',
        transition: 'border-color .2s, background .2s',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(212,175,55,.4)';
          e.currentTarget.style.background = 'rgba(255,255,255,.06)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(212,175,55,.15)';
          e.currentTarget.style.background = 'rgba(255,255,255,.04)';
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 12,
        }}>
          <span style={{
            fontSize: 10, fontWeight: 700, color: GD,
            letterSpacing: '.1em', textTransform: 'uppercase',
          }}>Rehber</span>
          <span style={{ color: 'rgba(255,255,255,.2)', fontSize: 10 }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'rgba(255,255,255,.4)' }}>
            <Clock size={10} color="rgba(255,255,255,.4)" />
            {post.readMin} dk okuma
          </span>
        </div>

        <h2 style={{
          fontSize: 17, fontWeight: 800, color: '#fff',
          lineHeight: 1.3, marginBottom: 8, letterSpacing: '-.01em',
        }}>{post.title}</h2>

        <p style={{
          fontSize: 13, color: 'rgba(255,255,255,.48)',
          lineHeight: 1.6, marginBottom: 14,
        }}>{post.excerpt}</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,.3)' }}>
            {formatDate(post.date)}
          </span>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: 12, fontWeight: 700, color: GD,
          }}>
            Oku <ChevronRight size={13} color={GD} />
          </div>
        </div>
      </article>
    </a>
  );
}
