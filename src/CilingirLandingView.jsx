import React, { useState } from 'react';
import {
  Phone, MessageCircle, MapPin, Clock, Zap, CheckCircle,
  ChevronRight, Menu, X, Star, Users, Shield, Tag, Car,
  Key, Lock,
} from 'lucide-react';

const TEL = 'tel:+905426946920';
const TEL_DISPLAY = '0542 694 69 20';
const WA = 'https://wa.me/905426946920';
const WA_KONUM = 'https://wa.me/905426946920?text=Merhaba%2C%20konumumu%20payla%C5%9Fmak%20istiyorum.';
const GOLD = '#D4AF37';
const GL = '#FFD700';
const GD = '#C9A84C';
const BG = '#07090e';

const CSS = `
  @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulseDot{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.45)}50%{box-shadow:0 0 0 5px rgba(34,197,94,0)}}
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:#07090e;-webkit-font-smoothing:antialiased}
  a{text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}
  button{-webkit-tap-highlight-color:transparent}
  .sx{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .sx::-webkit-scrollbar{display:none}
  .sx{scrollbar-width:none}
  .svc{transition:transform .2s ease,border-color .2s ease}
  .svc:hover{transform:translateX(4px);border-color:rgba(212,175,55,.42)!important}
  .pill{transition:background .2s,border-color .2s;cursor:default}
  .pill:hover{background:rgba(212,175,55,.14)!important;border-color:rgba(212,175,55,.44)!important}
  .bp:active{transform:scale(.97)!important;transition:transform .1s!important}
`;

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

/* ─── NAVBAR ─── */
function Navbar({ open, setOpen }) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 64, padding: '0 16px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(7,9,14,.95)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212,175,55,.09)',
    }}>
      <LogoMark />
      <a href={TEL} className="bp" style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '7px 12px',
        background: 'rgba(212,175,55,.08)', border: '1px solid rgba(212,175,55,.2)', borderRadius: 10,
      }}>
        <Phone size={13} color={GL} strokeWidth={2.5} />
        <div>
          <div style={{ fontSize: 8, color: GD, fontWeight: 700, letterSpacing: '.1em', lineHeight: 1 }}>7/24 ACİL DESTEK</div>
          <div style={{ fontSize: 12.5, color: GL, fontWeight: 800, letterSpacing: '.03em', lineHeight: 1.4 }}>{TEL_DISPLAY}</div>
        </div>
      </a>
      <button onClick={() => setOpen(o => !o)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', alignItems: 'center' }}
        aria-label="Menü">
        {open ? <X size={22} color={GL} /> : <Menu size={22} color={GD} />}
      </button>
    </nav>
  );
}

function LogoMark() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
        <path d="M16 1.5L30 7V20C30 28.5 16 35 16 35C16 35 2 28.5 2 20V7L16 1.5Z" fill="url(#lsg)"
          stroke="rgba(212,175,55,.3)" strokeWidth=".5" />
        <defs>
          <linearGradient id="lsg" x1="2" y1="1.5" x2="30" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C9A84C" /><stop offset=".5" stopColor="#FFD700" /><stop offset="1" stopColor="#C9A84C" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="13.5" r="5.2" stroke="#07090e" strokeWidth="2.5" fill="none" />
        <rect x="14" y="17" width="4" height="8.5" rx="1.5" fill="#07090e" />
      </svg>
      <div>
        <div style={{ fontSize: 13.5, fontWeight: 800, color: GL, letterSpacing: '.09em', lineHeight: 1.1 }}>TAŞCI</div>
        <div style={{ fontSize: 7.5, fontWeight: 700, color: GD, letterSpacing: '.3em', lineHeight: 1 }}>ÇİLİNGİR</div>
      </div>
    </div>
  );
}

function MobileMenu({ onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99,
      background: 'rgba(7,9,14,.97)', backdropFilter: 'blur(24px)',
      paddingTop: 72, padding: '72px 24px 32px',
    }}>
      {['Hizmetler', 'Bölgeler', 'İletişim'].map(item => (
        <button key={item} onClick={onClose} style={{
          display: 'block', width: '100%', padding: '18px 0', textAlign: 'left',
          background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,.07)',
          fontSize: 18, fontWeight: 600, color: '#fff', cursor: 'pointer',
        }}>{item}</button>
      ))}
      <a href={TEL} onClick={onClose} style={{
        display: 'flex', alignItems: 'center', gap: 14, marginTop: 28,
        padding: '16px 20px', borderRadius: 14,
        background: `linear-gradient(135deg,${GD},${GL})`,
        boxShadow: '0 4px 20px rgba(212,175,55,.35)',
      }}>
        <Phone size={20} color="#000" />
        <div>
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,.6)', fontWeight: 700 }}>ACİL HATTI</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: '#000' }}>{TEL_DISPLAY}</div>
        </div>
      </a>
    </div>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section style={{
      position: 'relative',
      paddingTop: 64,
      minHeight: 720,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/hero-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />

      {/* Left-to-right overlay: text readable on left, key visible on right */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.65) 35%,rgba(0,0,0,.20) 70%,rgba(0,0,0,.10) 100%)',
      }} />

      {/* Bottom fade: smooth transition into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, zIndex: 2,
        background: 'linear-gradient(180deg,transparent 0%,rgba(0,0,0,.95) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content — left side only */}
      <div style={{
        position: 'relative', zIndex: 3,
        width: '100%',
        maxWidth: 380,
        padding: '28px 20px 48px',
      }}>
        {/* Badge */}
        <div style={{ marginBottom: 18, animation: 'fadeUp .55s ease both' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(212,175,55,.07)', border: '1px solid rgba(212,175,55,.24)',
            borderRadius: 100, padding: '7px 14px',
            fontSize: 11, fontWeight: 700, color: GD, letterSpacing: '.1em',
          }}>
            <Clock size={12} color={GD} />
            7/24 ACİL ÇİLİNGİR
          </span>
        </div>

        {/* Heading */}
        <div style={{ animation: 'fadeUp .65s ease .1s both' }}>
          <h1 style={{
            fontSize: 'clamp(36px,10.5vw,52px)',
            fontWeight: 900, lineHeight: 1.05,
            marginBottom: 14, letterSpacing: '-.02em',
          }}>
            <span style={{ display: 'block', color: '#fff' }}>Kapıda mı</span>
            <span style={{
              display: 'block',
              background: `linear-gradient(90deg,${GD} 0%,${GL} 40%,#FFF5B0 55%,${GD} 100%)`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s linear infinite',
            }}>kaldınız?</span>
          </h1>

          <p style={{
            fontSize: 14, color: 'rgba(255,255,255,.6)',
            lineHeight: 1.65, marginBottom: 24, maxWidth: 270,
          }}>
            İstanbul'un birçok noktasında ortalama{' '}
            <span style={{ color: '#E5951E', fontWeight: 700 }}>20-30 dakika</span>{' '}
            içinde profesyonel çözüm.
          </p>

          {/* Primary CTA */}
          <a href={TEL} className="bp" style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 18px', borderRadius: 12, marginBottom: 10,
            background: `linear-gradient(135deg,${GD} 0%,${GL} 50%,${GD} 100%)`,
            backgroundSize: '200% auto',
            boxShadow: '0 5px 22px rgba(212,175,55,.42),inset 0 1px 0 rgba(255,255,255,.25)',
            maxWidth: 290,
          }}>
            <Phone size={18} color="#000" strokeWidth={2.5} />
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 900, color: 'rgba(0,0,0,.7)', letterSpacing: '.12em', lineHeight: 1 }}>HEMEN ARA</div>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#000', letterSpacing: '.04em' }}>{TEL_DISPLAY}</div>
            </div>
          </a>

          {/* Secondary CTA */}
          <a href={WA} className="bp" style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '12px 18px', borderRadius: 12,
            background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)',
            maxWidth: 290,
          }}>
            <MessageCircle size={18} color="#25D366" />
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: '#fff', letterSpacing: '.08em', lineHeight: 1 }}>WHATSAPP'TAN YAZ</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.42)', marginTop: 2 }}>Hızlı destek alın</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── TRUST CARDS ─── */
function TrustCards() {
  const items = [
    { Icon: Zap,          val: '20-30 DK',      sub: 'Ortalama Varış Süresi' },
    { Icon: Clock,        val: '7/24',           sub: 'Kesintisiz Hizmet' },
    { Icon: CheckCircle,  val: '%100',           sub: 'Müşteri Memnuniyeti' },
    { Icon: Tag,          val: 'ŞEFFAF FİYAT',   sub: 'Sürpriz Ücret Yok' },
  ];
  return (
    <div className="sx" style={{ display: 'flex', gap: 10, padding: '0 20px 32px' }}>
      {items.map(({ Icon, val, sub }, i) => (
        <div key={i} style={{
          flexShrink: 0, width: 128, padding: '14px 12px',
          background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.2)',
          borderRadius: 14, backdropFilter: 'blur(16px)',
        }}>
          <Icon size={18} color={GD} style={{ marginBottom: 8 }} />
          <div style={{ fontSize: 15.5, fontWeight: 800, color: GL, lineHeight: 1.1, marginBottom: 5 }}>{val}</div>
          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.43)', lineHeight: 1.38 }}>{sub}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── SERVICES ─── */
const SVC_DATA = [
  { grad: 'linear-gradient(160deg,#3d2010 0%,#2a1505 60%,#1a0c03 100%)', Icon: Key,    title: 'Kapı Açma',            desc: 'Hasarsız ve hızlı kapı açma hizmeti.' },
  { grad: 'linear-gradient(160deg,#0f1a2e 0%,#0d1520 60%,#081018 100%)', Icon: Car,    title: 'Oto Çilingir',         desc: 'Araç kapı açma ve anahtar çözümleri.' },
  { grad: 'linear-gradient(160deg,#1a1820 0%,#141318 60%,#0f0d12 100%)', Icon: Lock,   title: 'Kilit Değişimi',        desc: 'Her türlü kilit değişimi ve tamiri.' },
  { grad: 'linear-gradient(160deg,#1c1e22 0%,#15171a 60%,#0f1012 100%)', Icon: Shield, title: 'Çelik Kapı Sistemleri', desc: 'Yüksek güvenlikli kilit sistemleri.' },
];

function Services() {
  return (
    <section id="services" style={{ padding: '0 20px 40px' }}>
      <SectionHeader eyebrow="HİZMETLERİMİZ" title="Profesyonel Çözümler" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {SVC_DATA.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>
    </section>
  );
}

function ServiceCard({ grad, Icon, title, desc }) {
  return (
    <a href={TEL} className="svc" style={{
      display: 'flex', alignItems: 'center',
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(212,175,55,.18)',
      borderRadius: 14, overflow: 'hidden',
    }}>
      <div style={{
        width: 82, flexShrink: 0, alignSelf: 'stretch', minHeight: 74,
        background: grad, position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,transparent 55%,rgba(7,9,14,.6) 100%)' }} />
      </div>
      <div style={{
        width: 32, height: 32, flexShrink: 0, marginLeft: -16,
        background: `linear-gradient(135deg,${GD},${GL})`,
        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '2px solid #07090e',
        boxShadow: '0 0 10px rgba(212,175,55,.5)',
      }}>
        <Icon size={14} color="#000" strokeWidth={2.5} />
      </div>
      <div style={{ flex: 1, padding: '13px 8px 13px 10px' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.43)', lineHeight: 1.42 }}>{desc}</div>
      </div>
      <div style={{ padding: '0 14px 0 4px', flexShrink: 0 }}>
        <div style={{
          width: 28, height: 28,
          background: `linear-gradient(135deg,${GD},${GL})`,
          borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ChevronRight size={15} color="#000" strokeWidth={2.5} />
        </div>
      </div>
    </a>
  );
}

/* ─── DISTRICTS ─── */
function Districts() {
  const list = ['Beşiktaş', 'Şişli', 'Sarıyer', 'Kadıköy', 'Üsküdar', 'Beyoğlu', 'Fatih', 'Bakırköy', 'Kağıthane', 'Eyüpsultan'];
  return (
    <section id="districts" style={{ padding: '0 20px 36px' }}>
      <SectionHeader eyebrow="HİZMET VERİLEN BÖLGELER" title="Tüm İstanbul'da Hizmetinizdeyiz!" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {list.map((d, i) => (
          <span key={i} className="pill" style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '8px 13px', borderRadius: 100,
            background: 'rgba(212,175,55,.06)', border: '1px solid rgba(212,175,55,.18)',
            fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.76)',
          }}>
            <MapPin size={11} color={GD} />
            {d}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─── SOCIAL PROOF ─── */
function SocialProof() {
  const items = [
    { Icon: Users, val: '10.000+',  label: 'Mutlu Müşteri' },
    { Icon: Star,  val: '4.9/5',    label: 'Müşteri Puanı' },
    { Icon: Clock, val: '20-30 DK', label: 'Ortalama Varış' },
  ];
  return (
    <section style={{ padding: '0 20px 40px' }}>
      <div style={{
        background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.24)',
        borderRadius: 16, padding: '22px 16px',
        display: 'flex', justifyContent: 'space-around',
      }}>
        {items.map(({ Icon, val, label }, i) => (
          <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <Icon size={18} color={GL} />
            <div style={{ fontSize: 17, fontWeight: 900, color: GL, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.44)', lineHeight: 1.3 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── STICKY BAR ─── */
function StickyBar() {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
      background: 'rgba(7,9,14,.97)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(212,175,55,.12)',
      padding: '10px 12px',
      paddingBottom: 'max(10px,env(safe-area-inset-bottom))',
      display: 'flex', gap: 8,
    }}>
      <a href={TEL} className="bp" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        padding: '13px 4px', borderRadius: 12,
        background: `linear-gradient(135deg,${GD},${GL})`,
        boxShadow: '0 3px 14px rgba(212,175,55,.35)',
        fontSize: 11.5, fontWeight: 800, color: '#000',
      }}>
        <Phone size={14} color="#000" strokeWidth={2.5} /> HEMEN ARA
      </a>
      <a href={WA} className="bp" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        padding: '13px 4px', borderRadius: 12,
        background: '#0d1e11', border: '1px solid rgba(37,211,102,.28)',
        fontSize: 11.5, fontWeight: 800, color: '#25D366',
      }}>
        <MessageCircle size={14} color="#25D366" /> WHATSAPP
      </a>
      <a href={WA_KONUM} className="bp" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
        padding: '13px 4px', borderRadius: 12,
        background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
        fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,.78)',
      }}>
        <MapPin size={13} color="rgba(255,255,255,.78)" /> KONUM GÖNDER
      </a>
    </div>
  );
}

/* ─── HELPER ─── */
function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 6 }}>{eyebrow}</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.01em' }}>{title}</h2>
    </div>
  );
}
