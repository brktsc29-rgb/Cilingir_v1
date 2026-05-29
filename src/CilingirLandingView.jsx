import React, { useState, useEffect } from 'react';

const TEL = 'tel:+905426946920';
const TEL_DISPLAY = '0542 694 69 20';
const WA = 'https://wa.me/905426946920';
const WA_KONUM = 'https://wa.me/905426946920?text=Merhaba%2C%20konumumu%20payla%C5%9Fmak%20istiyorum.';

const GOLD = '#D4AF37';
const GOLD_LIGHT = '#FFD700';
const GOLD_DIM = '#C9A84C';
const GOLD_PALE = 'rgba(212,175,55,0.08)';
const GOLD_BORDER = 'rgba(212,175,55,0.2)';
const BLACK = '#080808';

const glass = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `1px solid ${GOLD_BORDER}`,
  borderRadius: 16,
};

const CSS = `
  @keyframes goldGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(212,175,55,0.22), 0 0 60px rgba(212,175,55,0.08); }
    50% { box-shadow: 0 0 40px rgba(212,175,55,0.48), 0 0 100px rgba(212,175,55,0.18); }
  }
  @keyframes floatKey {
    0%, 100% { transform: translateY(0px) rotate(-15deg); }
    33% { transform: translateY(-14px) rotate(-10deg); }
    66% { transform: translateY(-6px) rotate(-18deg); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes ringOut {
    0% { transform: translate(-50%,-50%) scale(0.8); opacity: 0.55; }
    100% { transform: translate(-50%,-50%) scale(1.45); opacity: 0; }
  }
  @keyframes pulseDot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.35; }
  }
  @keyframes ctaBounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.015); }
  }
  .cl-root * { box-sizing: border-box; }
  .cl-root { -webkit-tap-highlight-color: transparent; }
  .cl-root a { text-decoration: none; color: inherit; -webkit-tap-highlight-color: transparent; }
  .cl-scrollx { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .cl-scrollx::-webkit-scrollbar { display: none; }
  .cl-scrollx { scrollbar-width: none; }
  .cl-svc { transition: transform 0.2s ease; }
  .cl-svc:hover { transform: translateX(5px); }
  .cl-pill { transition: background 0.2s, border-color 0.2s; cursor: default; }
  .cl-pill:hover { background: rgba(212,175,55,0.16) !important; border-color: rgba(212,175,55,0.48) !important; }
  .cl-cta { animation: ctaBounce 3s ease-in-out infinite; }
  .cl-cta:active, .cl-wa:active, .cl-sb:active { transform: scale(0.97) !important; animation: none !important; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: #080808; }
  ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 2px; }
`;

export default function CilingirLandingView() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Taşcı Çilingir | İstanbul 7/24 Acil Çilingir Hizmeti';
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div
        className="cl-root"
        style={{
          background: BLACK,
          minHeight: '100vh',
          color: '#fff',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", sans-serif',
          overflowX: 'hidden',
          paddingBottom: 90,
        }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && <MobileMenu close={() => setMenuOpen(false)} />}
        <Hero />
        <TrustRow />
        <Services />
        <Districts />
        <SocialProof />
        <StickyBar />
      </div>
    </>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, height: 60, padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(8,8,8,0.93)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(212,175,55,0.08)' }}>
      <Logo />
      <HamburgerBtn open={menuOpen} onClick={() => setMenuOpen(o => !o)} />
    </nav>
  );
}

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width="34" height="38" viewBox="0 0 34 38" fill="none" aria-hidden="true">
        <path d="M17 1.5L32 7V21C32 30 17 37 17 37C17 37 2 30 2 21V7L17 1.5Z" fill="url(#sh)" stroke="rgba(212,175,55,0.35)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="sh" x1="2" y1="1" x2="32" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C9A84C" />
            <stop offset="0.5" stopColor="#FFD700" />
            <stop offset="1" stopColor="#C9A84C" />
          </linearGradient>
        </defs>
        <circle cx="17" cy="15" r="5.5" stroke="#080808" strokeWidth="2.8" fill="none" />
        <rect x="15" y="18.5" width="4" height="9" rx="1.5" fill="#080808" />
      </svg>
      <div>
        <div style={{ fontSize: 14, fontWeight: 800, color: GOLD_LIGHT, letterSpacing: '0.1em', lineHeight: 1 }}>TAŞCI</div>
        <div style={{ fontSize: 8.5, fontWeight: 700, color: GOLD_DIM, letterSpacing: '0.28em', lineHeight: 1.6 }}>ÇİLİNGİR</div>
      </div>
    </div>
  );
}

function HamburgerBtn({ open, onClick }) {
  return (
    <button onClick={onClick} style={{ background: 'none', border: 'none', padding: 8, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-end' }} aria-label="Menü">
      {[22, 15, 22].map((w, i) => (
        <span key={i} style={{ display: 'block', height: 2, width: w, background: open ? GOLD_LIGHT : GOLD_DIM, borderRadius: 2, transition: 'all 0.28s ease', ...(open && i === 0 ? { transform: 'rotate(45deg) translate(5px, 5px)', width: 20 } : {}), ...(open && i === 1 ? { opacity: 0, width: 0 } : {}), ...(open && i === 2 ? { transform: 'rotate(-45deg) translate(5px, -5px)', width: 20 } : {}) }} />
      ))}
    </button>
  );
}

function MobileMenu({ close }) {
  return (
    <div style={{ position: 'fixed', top: 60, left: 0, right: 0, zIndex: 999, background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(212,175,55,0.1)', padding: '6px 24px 24px', animation: 'fadeUp 0.2s ease' }}>
      {['Hizmetler', 'Bölgeler', 'İletişim'].map(item => (
        <button key={item} onClick={close} style={{ display: 'block', width: '100%', padding: '16px 0', textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.82)', cursor: 'pointer' }}>{item}</button>
      ))}
      <a href={TEL} style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, padding: '14px 18px', background: GOLD_PALE, border: `1px solid ${GOLD_BORDER}`, borderRadius: 12 }}>
        <span style={{ fontSize: 20 }}>📞</span>
        <div>
          <div style={{ fontSize: 10.5, color: GOLD_DIM, fontWeight: 700, letterSpacing: '0.1em' }}>ACİL HATTI</div>
          <div style={{ fontSize: 17, fontWeight: 900, color: GOLD_LIGHT }}>{TEL_DISPLAY}</div>
        </div>
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: '88vh', position: 'relative', overflow: 'hidden', padding: '82px 24px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: '4%', right: '-18%', width: 380, height: 380, background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '12%', left: '-22%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(212,175,55,0.065) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
      <IstanbulBg />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 22, animation: 'fadeUp 0.55s ease both' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.26)', borderRadius: 100, padding: '6px 14px', fontSize: 10.5, fontWeight: 700, color: GOLD_DIM, letterSpacing: '0.13em' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }} />
            7/24 ACİL ÇİLİNGİR HİZMETİ
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{ flex: 1, animation: 'fadeUp 0.65s ease 0.1s both' }}>
            <h1 style={{ fontSize: 'clamp(38px, 11vw, 58px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 18, letterSpacing: '-0.025em' }}>
              <span style={{ color: '#fff' }}>Kapıda mı</span>
              <br />
              <span style={{ background: `linear-gradient(90deg, ${GOLD_DIM} 0%, ${GOLD_LIGHT} 40%, #FFFBB0 55%, ${GOLD_DIM} 100%)`, backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite', display: 'inline-block' }}>kaldınız?</span>
            </h1>
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.52)', lineHeight: 1.68, marginBottom: 30, maxWidth: 295 }}>
              İstanbul'un birçok noktasında ortalama{' '}
              <strong style={{ color: 'rgba(255,255,255,0.82)', fontWeight: 700 }}>20-30 dakika</strong>{' '}
              içinde profesyonel çözüm.
            </p>
            <a href={TEL} className="cl-cta" style={{ display: 'flex', flexDirection: 'column', padding: '17px 22px', borderRadius: 14, marginBottom: 12, background: `linear-gradient(135deg, ${GOLD_DIM} 0%, ${GOLD_LIGHT} 50%, ${GOLD_DIM} 100%)`, backgroundSize: '200% auto', boxShadow: '0 6px 28px rgba(212,175,55,0.38), inset 0 1px 0 rgba(255,255,255,0.22)', maxWidth: 300 }}>
              <span style={{ fontSize: 12.5, fontWeight: 800, color: 'rgba(0,0,0,0.65)', letterSpacing: '0.15em' }}>📞  HEMEN ARA</span>
              <span style={{ fontSize: 20, fontWeight: 900, color: '#000', letterSpacing: '0.04em', marginTop: 3 }}>{TEL_DISPLAY}</span>
            </a>
            <a href={WA} className="cl-wa" style={{ display: 'flex', flexDirection: 'column', padding: '14px 22px', borderRadius: 14, background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.28)', maxWidth: 300 }}>
              <span style={{ fontSize: 12.5, fontWeight: 800, color: '#25D366', letterSpacing: '0.12em' }}>💬  WHATSAPP'TAN YAZ</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', marginTop: 3 }}>Hızlı destek alın</span>
            </a>
          </div>
          <div style={{ flexShrink: 0, width: 108, marginTop: 8, animation: 'fadeUp 0.7s ease 0.2s both' }}>
            <GoldenKey />
          </div>
        </div>
      </div>
    </section>
  );
}

function GoldenKey() {
  return (
    <div style={{ position: 'relative', width: 108, height: 145 }}>
      {[130, 100, 72].map((sz, i) => (
        <div key={i} style={{ position: 'absolute', top: '40%', left: '50%', width: sz, height: sz, border: `1px solid rgba(212,175,55,${0.18 - i * 0.05})`, borderRadius: '50%', animation: `ringOut ${2.6 + i * 0.8}s ease-in-out infinite ${i * 0.45}s` }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'floatKey 4.2s ease-in-out infinite' }}>
        <svg width="92" height="92" viewBox="0 0 92 92" fill="none" style={{ filter: 'drop-shadow(0 0 18px rgba(212,175,55,0.58)) drop-shadow(0 2px 8px rgba(212,175,55,0.32))' }}>
          <defs>
            <linearGradient id="kg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B8860B" />
              <stop offset="28%" stopColor="#D4AF37" />
              <stop offset="52%" stopColor="#FFD700" />
              <stop offset="72%" stopColor="#FFFAA0" />
              <stop offset="100%" stopColor="#C9A84C" />
            </linearGradient>
            <linearGradient id="kg2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#C9A84C" />
            </linearGradient>
          </defs>
          <circle cx="33" cy="30" r="17" stroke="url(#kg)" strokeWidth="7" fill="none" />
          <circle cx="33" cy="30" r="6.5" fill="url(#kg2)" opacity="0.3" />
          <circle cx="33" cy="30" r="3" fill="#080808" />
          <rect x="48" y="27" width="33" height="6.5" rx="3.25" fill="url(#kg)" />
          <rect x="59" y="33.5" width="5.5" height="9.5" rx="2" fill="url(#kg2)" />
          <rect x="69.5" y="33.5" width="5" height="6.5" rx="2" fill="url(#kg2)" />
          <rect x="77" y="33.5" width="4.5" height="12" rx="2" fill="url(#kg2)" />
        </svg>
      </div>
    </div>
  );
}

function IstanbulBg() {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 110, zIndex: 0, pointerEvents: 'none', opacity: 0.045 }}>
      <svg width="100%" height="110" viewBox="0 0 800 110" preserveAspectRatio="xMidYMax slice" fill="rgba(212,175,55,1)">
        <path d="M0 110 L0 68 Q12 66 22 58 Q30 52 38 56 L44 47 Q51 40 57 44 L64 36 Q71 30 77 34 L84 27 Q91 22 97 26 L107 33 Q113 30 122 37 L132 44 Q138 41 146 50 L154 46 Q162 40 169 45 L180 53 Q187 50 195 45 L204 42 Q212 39 220 46 L230 53 Q238 49 248 56 L259 62 Q267 58 277 54 L289 50 Q299 53 309 59 L321 64 Q330 61 340 66 L354 71 Q363 68 373 73 L387 77 Q395 74 405 79 L418 82 Q427 79 438 75 L449 71 Q459 69 470 75 L484 79 Q493 77 504 81 L519 84 Q529 82 541 78 L555 74 Q565 77 575 81 L589 84 Q597 82 607 85 L621 88 Q629 86 639 89 L659 92 Q671 90 683 93 L699 95 Q711 94 723 96 L739 97 Q753 97 769 98 L800 99 L800 110 Z" />
      </svg>
    </div>
  );
}

function TrustRow() {
  const items = [
    { val: '20-30 DK', sub: 'Ortalama Varış Süresi', icon: '⚡' },
    { val: '7/24', sub: 'Kesintisiz Hizmet', icon: '🕐' },
    { val: '%100', sub: 'Müşteri Memnuniyeti', icon: '⭐' },
    { val: 'Şeffaf\nFiyat', sub: 'Sürpriz Ücret Yok', icon: '✓' },
  ];
  return (
    <div className="cl-scrollx" style={{ padding: '0 24px 36px', display: 'flex', gap: 12 }}>
      {items.map((t, i) => (
        <div key={i} style={{ ...glass, flexShrink: 0, width: 128, padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 22 }}>{t.icon}</span>
          <div style={{ fontSize: 17, fontWeight: 800, color: GOLD_LIGHT, lineHeight: 1.15, whiteSpace: 'pre-line' }}>{t.val}</div>
          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.44)', lineHeight: 1.42 }}>{t.sub}</div>
        </div>
      ))}
    </div>
  );
}

function Services() {
  const list = [
    { icon: '🚪', title: 'Kapı Açma', desc: 'Hasarsız ve hızlı kapı açma hizmeti.' },
    { icon: '🚗', title: 'Oto Çilingir', desc: 'Araç kapı açma ve anahtar çözümleri.' },
    { icon: '🔐', title: 'Kilit Değişimi', desc: 'Her türlü kilit değişimi ve tamiri.' },
    { icon: '🛡️', title: 'Çelik Kapı Sistemleri', desc: 'Yüksek güvenlikli kilit sistemleri.' },
  ];
  return (
    <section id="services" style={{ padding: '0 24px 40px' }}>
      <SectionHeader eyebrow="PROFESYONEL ÇÖZÜMLER" title="Hizmetlerimiz" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {list.map((s, i) => (
          <a key={i} href={TEL} className="cl-svc" style={{ ...glass, display: 'flex', alignItems: 'center', gap: 14, padding: '17px 16px', borderRadius: 14, borderColor: 'rgba(212,175,55,0.17)' }}>
            <div style={{ width: 46, height: 46, flexShrink: 0, background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.18)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{s.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: '#fff', marginBottom: 3 }}>{s.title}</div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.44)', lineHeight: 1.45 }}>{s.desc}</div>
            </div>
            <div style={{ width: 30, height: 30, flexShrink: 0, background: `linear-gradient(135deg, ${GOLD_DIM}, ${GOLD_LIGHT})`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#000', fontWeight: 900 }}>›</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Districts() {
  const list = ['Beşiktaş', 'Şişli', 'Sarıyer', 'Kadıköy', 'Üsküdar', 'Beyoğlu', 'Fatih', 'Bakırköy', 'Kağıthane', 'Eyüpsultan'];
  return (
    <section id="districts" style={{ padding: '0 24px 40px' }}>
      <SectionHeader eyebrow="TÜM İSTANBUL'DA" title="Hizmet Bölgelerimiz" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
        {list.map((d, i) => (
          <span key={i} className="cl-pill" style={{ padding: '9px 17px', borderRadius: 100, background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.18)', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.76)' }}>{d}</span>
        ))}
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { val: '10.000+', label: 'Mutlu Müşteri' },
    { val: '4.9 / 5', label: 'Müşteri Puanı' },
    { val: '20-30 DK', label: 'Ort. Varış' },
  ];
  return (
    <section style={{ padding: '0 24px 44px' }}>
      <div style={{ ...glass, padding: '28px 20px', background: 'linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(212,175,55,0.02) 100%)', border: '1px solid rgba(212,175,55,0.28)', animation: 'goldGlow 5s ease-in-out infinite' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: GOLD_LIGHT, lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.44)', marginTop: 5, lineHeight: 1.35 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StickyBar() {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderTop: '1px solid rgba(212,175,55,0.14)', padding: '10px 14px', paddingBottom: 'max(10px, env(safe-area-inset-bottom))', display: 'flex', gap: 9 }}>
      <a href={TEL} className="cl-sb" style={{ flex: 1, padding: '12px 6px', textAlign: 'center', borderRadius: 11, background: `linear-gradient(135deg, ${GOLD_DIM}, ${GOLD_LIGHT})`, fontSize: 11.5, fontWeight: 800, color: '#000', letterSpacing: '0.07em', display: 'block' }}>📞 HEMEN ARA</a>
      <a href={WA} className="cl-sb" style={{ flex: 1, padding: '12px 6px', textAlign: 'center', borderRadius: 11, background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.32)', fontSize: 11.5, fontWeight: 800, color: '#25D366', letterSpacing: '0.05em', display: 'block' }}>💬 WHATSAPP</a>
      <a href={WA_KONUM} className="cl-sb" style={{ flex: 1, padding: '12px 6px', textAlign: 'center', borderRadius: 11, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,0.72)', display: 'block' }}>📍 KONUM</a>
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: GOLD_DIM, letterSpacing: '0.22em', marginBottom: 7 }}>{eyebrow}</div>
      <h2 style={{ fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>{title}</h2>
    </div>
  );
}
