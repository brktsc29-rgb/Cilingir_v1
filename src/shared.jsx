import React, { useState, useEffect } from 'react';
import {
  Phone, MessageCircle, MapPin, Clock, Zap, CheckCircle,
  ChevronRight, ChevronDown, Menu, X, Star, Users, Tag, Car, Key, Lock, Shield,
} from 'lucide-react';

export const TEL = 'tel:+905426946920';
export const TEL_DISPLAY = '0542 694 69 20';
export const WA = 'https://wa.me/905426946920';
export const WA_KONUM = 'https://wa.me/905426946920?text=Merhaba%2C%20konumumu%20payla%C5%9Fmak%20istiyorum.%20L%C3%BCtfen%20en%20yak%C4%B1n%20ustay%C4%B1%20y%C3%B6nlendirebilir%20misiniz%3F';
export const GL = '#FFD700';
export const GD = '#C9A84C';
export const BG = '#07090e';
export const BASE_URL = 'https://cilingirciniz.com';

export const CSS = `
  @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:#07090e;-webkit-font-smoothing:antialiased}
  a{text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}
  button{-webkit-tap-highlight-color:transparent}
  .sx{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}
  .sx::-webkit-scrollbar{display:none}
  .svc{transition:transform .2s ease,border-color .2s ease}
  .svc:hover{transform:translateX(4px);border-color:rgba(212,175,55,.42)!important}
  .pill{transition:background .2s,border-color .2s}
  .pill:hover{background:rgba(212,175,55,.14)!important;border-color:rgba(212,175,55,.44)!important}
  .bp:active{transform:scale(.97)!important;transition:transform .1s!important}
`;

export function setSEO({ title, desc, url, lang, schema }) {
  document.title = title;
  const s = (sel, val) => { const el = document.querySelector(sel); if (el) el.setAttribute('content', val); };
  s('meta[name="description"]', desc);
  s('meta[property="og:title"]', title);
  s('meta[property="og:description"]', desc);
  if (url) s('meta[property="og:url"]', url);
  if (lang) document.documentElement.lang = lang;

  let can = document.querySelector('link[rel="canonical"]');
  if (!can) { can = document.createElement('link'); can.rel = 'canonical'; document.head.appendChild(can); }
  if (url) can.href = url;

  let ld = document.getElementById('ld-schema');
  if (!ld) { ld = document.createElement('script'); ld.id = 'ld-schema'; ld.type = 'application/ld+json'; document.head.appendChild(ld); }
  if (schema) ld.textContent = JSON.stringify(schema);
}

export function setHreflang(trUrl, enUrl) {
  const set = (hl, href) => {
    let el = document.querySelector(`link[hreflang="${hl}"]`);
    if (!el) { el = document.createElement('link'); el.rel = 'alternate'; el.setAttribute('hreflang', hl); document.head.appendChild(el); }
    el.href = href;
  };
  set('tr', trUrl);
  set('en', enUrl);
  set('x-default', trUrl);
}

function LogoMark() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
        <defs>
          <linearGradient id="lsg" x1="2" y1="1.5" x2="30" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C9A84C" /><stop offset=".5" stopColor="#FFD700" /><stop offset="1" stopColor="#C9A84C" />
          </linearGradient>
        </defs>
        <path d="M16 1.5L30 7V20C30 28.5 16 35 16 35C16 35 2 28.5 2 20V7L16 1.5Z"
          fill="url(#lsg)" stroke="rgba(212,175,55,.3)" strokeWidth=".5" />
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

export function Navbar({ open, setOpen, lang = 'tr' }) {
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
          <div style={{ fontSize: 8, color: GD, fontWeight: 700, letterSpacing: '.1em', lineHeight: 1 }}>
            {lang === 'en' ? '24/7 EMERGENCY' : '7/24 ACİL DESTEK'}
          </div>
          <div style={{ fontSize: 12.5, color: GL, fontWeight: 800, letterSpacing: '.03em', lineHeight: 1.4 }}>{TEL_DISPLAY}</div>
        </div>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        <a href="/" style={{
          fontSize: 10.5, fontWeight: 800, letterSpacing: '.06em',
          color: lang === 'tr' ? GL : 'rgba(255,255,255,.3)',
          padding: '4px 6px',
        }}>TR</a>
        <span style={{ color: 'rgba(255,255,255,.18)', fontSize: 9 }}>|</span>
        <a href="/en" style={{
          fontSize: 10.5, fontWeight: 800, letterSpacing: '.06em',
          color: lang === 'en' ? GL : 'rgba(255,255,255,.3)',
          padding: '4px 6px',
        }}>EN</a>
        <button onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 4px 8px 8px', display: 'flex', alignItems: 'center' }}
          aria-label="Menu">
          {open ? <X size={22} color={GL} /> : <Menu size={22} color={GD} />}
        </button>
      </div>
    </nav>
  );
}

export function MobileMenu({ onClose }) {
  const NAV = [
    { label: 'Hizmetler', href: '#services' },
    { label: 'Bölgeler',  href: '#districts' },
    { label: 'Fiyatlar',  href: '/fiyatlar' },
    { label: 'Blog',      href: '/blog' },
    { label: 'İletişim',  href: TEL },
  ];

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99,
      background: 'rgba(7,9,14,.97)', backdropFilter: 'blur(24px)',
      padding: '72px 24px 32px',
    }}>
      {NAV.map(({ label, href }) => (
        <a key={label} href={href} onClick={onClose} style={{
          display: 'block', width: '100%', padding: '18px 0', textAlign: 'left',
          borderBottom: '1px solid rgba(255,255,255,.07)',
          fontSize: 18, fontWeight: 600, color: '#fff', textDecoration: 'none',
        }}>{label}</a>
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

export function TrustCards() {
  const items = [
    { Icon: Zap,         val: '20-30 DK',    sub: 'Ortalama Varış Süresi' },
    { Icon: Clock,       val: '7/24',         sub: 'Kesintisiz Hizmet' },
    { Icon: CheckCircle, val: '%100',         sub: 'Müşteri Memnuniyeti' },
    { Icon: Tag,         val: 'ŞEFFAF FİYAT', sub: 'Sürpriz Ücret Yok' },
  ];
  return (
    <div className="sx" style={{ display: 'flex', gap: 10, padding: '0 20px 32px' }}>
      {items.map(({ Icon, val, sub }, i) => (
        <div key={i} style={{
          flexShrink: 0, width: 128, padding: '14px 12px',
          background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.2)',
          borderRadius: 14, backdropFilter: 'blur(16px)',
          boxShadow: '0 0 24px rgba(212,175,55,.06)',
        }}>
          <Icon size={18} color={GD} style={{ marginBottom: 8 }} />
          <div style={{ fontSize: 15.5, fontWeight: 800, color: GL, lineHeight: 1.1, marginBottom: 5 }}>{val}</div>
          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.43)', lineHeight: 1.38 }}>{sub}</div>
        </div>
      ))}
    </div>
  );
}

const SVC_DATA = [
  { grad: 'linear-gradient(160deg,#3d2010 0%,#2a1505 60%,#1a0c03 100%)', Icon: Key,    title: 'Kapı Açma',             desc: 'Hasarsız ve hızlı kapı açma hizmeti.' },
  { grad: 'linear-gradient(160deg,#0f1a2e 0%,#0d1520 60%,#081018 100%)', Icon: Car,    title: 'Oto Çilingir',          desc: 'Araç kapı açma ve anahtar çözümleri.' },
  { grad: 'linear-gradient(160deg,#1a1820 0%,#141318 60%,#0f0d12 100%)', Icon: Lock,   title: 'Kilit Değişimi',        desc: 'Her türlü kilit değişimi ve tamiri.' },
  { grad: 'linear-gradient(160deg,#1c1e22 0%,#15171a 60%,#0f1012 100%)', Icon: Shield, title: 'Çelik Kapı Sistemleri', desc: 'Yüksek güvenlikli kilit sistemleri.' },
];

function ServiceCard({ grad, Icon, title, desc }) {
  return (
    <a href={TEL} className="svc" style={{
      display: 'flex', alignItems: 'center',
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(212,175,55,.18)',
      borderRadius: 14,
    }}>
      <div style={{
        width: 74, flexShrink: 0, alignSelf: 'stretch', minHeight: 66,
        background: grad, position: 'relative',
        borderRadius: '14px 0 0 14px', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,transparent 55%,rgba(7,9,14,.7) 100%)' }} />
      </div>
      <div style={{
        width: 30, height: 30, flexShrink: 0, marginLeft: -15,
        background: `linear-gradient(135deg,${GD},${GL})`,
        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '2px solid #07090e', boxShadow: '0 0 10px rgba(212,175,55,.5)',
        position: 'relative', zIndex: 1,
      }}>
        <Icon size={13} color="#000" strokeWidth={2.5} />
      </div>
      <div style={{ flex: 1, padding: '11px 8px 11px 10px' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.43)', lineHeight: 1.4 }}>{desc}</div>
      </div>
      <div style={{ padding: '0 12px 0 4px', flexShrink: 0 }}>
        <div style={{
          width: 26, height: 26,
          background: `linear-gradient(135deg,${GD},${GL})`,
          borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ChevronRight size={14} color="#000" strokeWidth={2.5} />
        </div>
      </div>
    </a>
  );
}

export function Services() {
  return (
    <section id="services" style={{ padding: '0 20px 40px', scrollMarginTop: 72 }}>
      <SectionHeader eyebrow="HİZMETLERİMİZ" title="Profesyonel Çözümler" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {SVC_DATA.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>
    </section>
  );
}

export function Districts() {
  const items = [
    { name: 'Beşiktaş',   path: 'besiktas-cilingir' },
    { name: 'Şişli',      path: 'sisli-cilingir' },
    { name: 'Sarıyer',    path: 'sariyer-cilingir' },
    { name: 'Kağıthane',  path: 'kagithane-cilingir' },
    { name: 'Eyüpsultan', path: 'eyupsultan-cilingir' },
  ];
  return (
    <section id="districts" style={{ padding: '0 20px 36px', scrollMarginTop: 72 }}>
      <SectionHeader eyebrow="HİZMET VERİLEN BÖLGELER" title="Avrupa Yakası'nda Hizmetinizdeyiz!" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {items.map((d, i) => (
          <a key={i} href={`/${d.path}`} className="pill" style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '8px 13px', borderRadius: 100,
            background: 'rgba(212,175,55,.06)', border: '1px solid rgba(212,175,55,.18)',
            fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.76)',
          }}>
            <MapPin size={11} color={GD} />
            {d.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export function SocialProof() {
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

export function StickyBar() {
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
        height: 46, borderRadius: 12,
        background: `linear-gradient(135deg,${GD},${GL})`,
        boxShadow: '0 3px 14px rgba(212,175,55,.35)',
        fontSize: 11.5, fontWeight: 800, color: '#000',
      }}>
        <Phone size={14} color="#000" strokeWidth={2.5} /> HEMEN ARA
      </a>
      <a href={WA} className="bp" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        height: 46, borderRadius: 12,
        background: '#0d1e11', border: '1px solid rgba(37,211,102,.28)',
        fontSize: 11.5, fontWeight: 800, color: '#25D366',
      }}>
        <MessageCircle size={14} color="#25D366" /> WHATSAPP
      </a>
      <a href={WA_KONUM} className="bp" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
        height: 46, borderRadius: 12,
        background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
        fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,.78)',
      }}>
        <MapPin size={13} color="rgba(255,255,255,.78)" /> KONUM PAYLAŞ
      </a>
    </div>
  );
}

export function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 6 }}>{eyebrow}</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.01em' }}>{title}</h2>
    </div>
  );
}

const FAQ_ITEMS = [
  {
    q: 'Çilingir kaç dakikada gelir?',
    a: 'Beşiktaş, Şişli, Sarıyer, Kağıthane ve Eyüpsultan\'da ortalama 20-30 dakika içinde kapınızdayız. Yoğun trafik saatlerinde bu süre biraz uzayabilir, telefonda tahmini süreyi bildiririz.',
  },
  {
    q: 'Gece de hizmet veriyor musunuz?',
    a: 'Evet, 7/24 kesintisiz hizmet veriyoruz. Gece yarısı, hafta sonu veya resmi tatil fark etmeksizin arayabilirsiniz. Gece tarifesi hakkında bilgiyi telefonda önceden bildiririz.',
  },
  {
    q: 'Kapı açma işlemi kapıya zarar verir mi?',
    a: 'Profesyonel ekipmanlarımızla büyük çoğunlukla kilidi ve kapıyı hasarsız açıyoruz. Eğer hasar verilmesi gerekecekse işlem öncesi sizi bilgilendiririz ve onayınızı alırız.',
  },
  {
    q: 'Ücret ne kadar?',
    a: 'Ücret işlemin türüne, saatine ve ilçeye göre değişir. Net fiyat bilgisi için sizi arayın — telefonda şeffaf fiyat veriyoruz, kapı açıldıktan sonra sürpriz ücret çıkmaz.',
  },
  {
    q: 'Oto çilingir hizmeti de yapıyor musunuz?',
    a: 'Evet, araç kapısı açma ve oto kilit hizmetleri de veriyoruz. Araç marka ve modelini telefonda belirtin, doğru ekipmanla gelelim.',
  },
  {
    q: 'Kilit değişimi de yapıyor musunuz?',
    a: 'Evet. Kapı açma işleminin yanı sıra kilit değişimi, çelik kapı kilidi kurulumu ve silindir yenileme hizmetleri de sunuyoruz. Markalı ve garantili ürünler kullanıyoruz.',
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    };
    let el = document.getElementById('ld-faq');
    if (!el) {
      el = document.createElement('script');
      el.id = 'ld-faq';
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => { el.remove(); };
  }, []);

  return (
    <section id="faq" style={{ padding: '0 20px 40px', scrollMarginTop: 72 }}>
      <SectionHeader eyebrow="SIKÇA SORULAN SORULAR" title="Merak Ettikleriniz" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {FAQ_ITEMS.map((item, i) => (
          <div key={i}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            style={{
              background: 'rgba(255,255,255,.04)',
              border: `1px solid ${openIdx === i ? 'rgba(212,175,55,.4)' : 'rgba(212,175,55,.15)'}`,
              borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 16px', gap: 12,
            }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{item.q}</span>
              <ChevronDown size={16} color={GD} style={{
                flexShrink: 0,
                transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform .25s',
              }} />
            </div>
            {openIdx === i && (
              <div style={{
                padding: '0 16px 14px',
                fontSize: 13.5, color: 'rgba(255,255,255,.62)', lineHeight: 1.7,
                borderTop: '1px solid rgba(212,175,55,.1)',
                paddingTop: 12,
              }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  { name: 'Ayşe D.',  district: 'Beşiktaş', text: 'Gece 01:30\'da kapıda kaldım, 25 dakikada geldi. Fiyatı önceden söyledi, fazlasını almadı. Çok teşekkürler!' },
  { name: 'Murat K.', district: 'Şişli',    text: 'Araç anahtarım içerde kaldı. Kapıya hiç zarar vermeden açtı. Oto çilingir konusunda gerçekten uzman.' },
  { name: 'Selin Y.', district: 'Sarıyer',  text: 'İstinye\'deyiz, tahmin ettiğimden hızlı geldi. Profesyonel davranış, temiz iş. Kesinlikle tavsiye ederim.' },
  { name: 'Emre T.',  district: 'Kağıthane',text: 'Kilit değişimi yaptırdım. Kaliteli ürün taktı, uygun fiyat. Bir sonraki ihtiyaçta yine arayacağım.' },
  { name: 'Fatma Ö.',district: 'Eyüpsultan',text: 'Komşuma da tavsiye ettim, o da memnun kaldı. 7/24 gerçekten açık, tatil günü de geldi.' },
  { name: 'Can B.',   district: 'Beşiktaş', text: 'Etiler\'de kapıda kaldık. Tam söylenen sürede geldi, sorunsuz açtı. Güvenilir bir numara kaydetmek istedim.' },
];

export function ReviewsSection() {
  return (
    <section style={{ padding: '0 0 40px' }}>
      <div style={{ padding: '0 20px' }}>
        <SectionHeader eyebrow="MÜŞTERİ YORUMLARI" title="Memnun Müşterilerimiz" />
      </div>
      <div className="sx" style={{ display: 'flex', gap: 12, padding: '0 20px 4px' }}>
        {REVIEWS.map((r, i) => (
          <div key={i} style={{
            flexShrink: 0, width: 240,
            background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.15)',
            borderRadius: 14, padding: '16px 14px',
          }}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
              {[...Array(5)].map((_, s) => <Star key={s} size={12} color={GL} fill={GL} />)}
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.6, marginBottom: 12 }}>
              "{r.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: `linear-gradient(135deg,${GD},${GL})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: '#000',
              }}>{r.name[0]}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{r.name}</div>
                <div style={{ fontSize: 10, color: GD }}>{r.district}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhatsAppBubble() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <a href={WA} className="bp" style={{
      position: 'fixed', right: 16, bottom: 90, zIndex: 150,
      width: 52, height: 52, borderRadius: '50%',
      background: '#25D366',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 18px rgba(37,211,102,.5)',
      animation: 'pulse 2.5s infinite',
    }}>
      <MessageCircle size={24} color="#fff" fill="#fff" />
    </a>
  );
}
