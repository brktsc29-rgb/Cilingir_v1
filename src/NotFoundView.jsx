import React, { useEffect } from 'react';
import { Home, MessageCircle } from 'lucide-react';
import { CSS, BG, GL, GD, WA, StickyBar } from './shared';

export default function NotFoundView() {
  useEffect(() => {
    document.title = '404 Sayfa Bulunamadı | Çilingirciniz';
    let m = document.querySelector('meta[name="robots"]');
    if (!m) { m = document.createElement('meta'); m.name = 'robots'; document.head.appendChild(m); }
    m.content = 'noindex,nofollow';
    return () => { m.content = 'index,follow'; };
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div style={{
        background: BG, minHeight: '100vh', color: '#fff',
        fontFamily: '-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI","Helvetica Neue",sans-serif',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '24px 24px 100px', textAlign: 'center',
      }}>
        <div style={{
          fontSize: 80, fontWeight: 900, letterSpacing: '-.04em',
          background: `linear-gradient(135deg,${GD},${GL})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          lineHeight: 1, marginBottom: 8,
        }}>404</div>

        <div style={{
          fontSize: 11, fontWeight: 700, color: GD,
          letterSpacing: '.18em', marginBottom: 16,
        }}>SAYFA BULUNAMADI</div>

        <h1 style={{
          fontSize: 22, fontWeight: 800, color: '#fff',
          marginBottom: 12, lineHeight: 1.3,
        }}>
          Bu sayfa mevcut değil
        </h1>

        <p style={{
          fontSize: 14, color: 'rgba(255,255,255,.5)',
          lineHeight: 1.65, maxWidth: 320, marginBottom: 32,
        }}>
          Aradığınız sayfa kaldırılmış ya da taşınmış olabilir.
          Kapıda kaldıysanız bizi hemen arayabilirsiniz.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 20px', borderRadius: 12,
            background: `linear-gradient(135deg,${GD},${GL})`,
            fontSize: 13, fontWeight: 800, color: '#000', textDecoration: 'none',
          }}>
            <Home size={15} color="#000" />
            Ana Sayfaya Dön
          </a>
          <a href={WA} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 20px', borderRadius: 12,
            background: 'rgba(37,211,102,.06)', border: '1px solid rgba(37,211,102,.2)',
            fontSize: 13, fontWeight: 700, color: '#25D366', textDecoration: 'none',
          }}>
            <MessageCircle size={15} color="#25D366" />
            WhatsApp'tan Yaz
          </a>
        </div>
      </div>
      <StickyBar />
    </>
  );
}
