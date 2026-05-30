import React, { useState } from 'react';
import { Clock, Phone, MessageCircle } from 'lucide-react';
import {
  CSS, TEL, TEL_DISPLAY, WA, GL, GD, BG,
  Navbar, MobileMenu, TrustCards, Services, Districts, SocialProof, StickyBar,
} from './shared';

export default function CilingirLandingView() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{CSS}</style>
      <div style={{
        background: BG, minHeight: '100vh', color: '#fff',
        fontFamily: '-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI","Helvetica Neue",sans-serif',
        overflowX: 'hidden', paddingBottom: 80,
      }}>
        <Navbar open={open} setOpen={setOpen} />
        {open && <MobileMenu onClose={() => setOpen(false)} />}
        <Hero />
        <TrustCards />
        <Services />
        <Districts />
        <SocialProof />
        <StickyBar />
      </div>
    </>
  );
}

function Hero() {
  return (
    <section style={{
      position: 'relative',
      paddingTop: 64,
      minHeight: '560px',
      display: 'flex',
      alignItems: 'center',
      background: BG,
    }}>
      {/* Arka plan görseli */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/10902595-E9CD-474F-BD7D-A076279C1A41.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />

      {/* Sol-sağ karartma */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.80) 30%,rgba(0,0,0,.20) 55%,transparent 72%)',
      }} />

      {/* Alt geçiş */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, zIndex: 2,
        background: 'linear-gradient(180deg,transparent 0%,rgba(0,0,0,.95) 100%)',
        pointerEvents: 'none',
      }} />

      {/* İçerik — ekranın sol %55’i, anahtar sağda */}
      <div style={{
        position: 'relative', zIndex: 3,
        width: '100%', maxWidth: 255,
        padding: '28px 12px 48px 20px',
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(212,175,55,.07)', border: '1px solid rgba(212,175,55,.24)',
          borderRadius: 100, padding: '7px 13px',
          fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.1em',
          marginBottom: 16, whiteSpace: 'nowrap',
        }}>
          <Clock size={11} color={GD} />
          7/24 ACİL ÇİLİNGİR
        </span>

        <h1 style={{
          fontSize: 'clamp(32px,9.5vw,52px)', fontWeight: 900, lineHeight: .9,
          marginBottom: 14, letterSpacing: '-.02em',
        }}>
          <span style={{ display: 'block', color: '#fff' }}>Kapıda mı</span>
          <span style={{
            display: 'block',
            background: `linear-gradient(90deg,${GD} 0%,${GL} 40%,#FFF5B0 55%,${GD} 100%)`,
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'shimmer 4s linear infinite',
          }}>kaldınız?</span>
        </h1>

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.62)', lineHeight: 1.55, marginBottom: 20 }}>
          Ortalama <span style={{ color: '#E5951E', fontWeight: 700 }}>20-30 dk</span> içinde profesyonel çözüm.
        </p>

        <a href={TEL} className="bp" style={{
          display: 'flex', alignItems: 'center', gap: 11,
          padding: '0 14px', height: 58, borderRadius: 12, marginBottom: 10,
          background: `linear-gradient(135deg,${GD} 0%,${GL} 50%,${GD} 100%)`,
          backgroundSize: '200% auto',
          boxShadow: '0 5px 22px rgba(212,175,55,.42),inset 0 1px 0 rgba(255,255,255,.25)',
        }}>
          <Phone size={17} color="#000" strokeWidth={2.5} />
          <div>
            <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(0,0,0,.7)', letterSpacing: '.12em', lineHeight: 1 }}>HEMEN ARA</div>
            <div style={{ fontSize: 14, fontWeight: 900, color: '#000' }}>{TEL_DISPLAY}</div>
          </div>
        </a>

        <a href={WA} className="bp" style={{
          display: 'flex', alignItems: 'center', gap: 11,
          padding: '0 14px', height: 58, borderRadius: 12,
          background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)',
        }}>
          <MessageCircle size={17} color="#25D366" />
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '.08em', lineHeight: 1 }}>WHATSAPP'TAN YAZ</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.42)', marginTop: 2 }}>Hızlı destek alın</div>
          </div>
        </a>
      </div>
    </section>
  );
}
