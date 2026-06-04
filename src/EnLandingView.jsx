import React, { useState, useEffect } from 'react';
import {
  Phone, MessageCircle, MapPin, Clock, Zap, CheckCircle,
  ChevronRight, Menu, X, Star, Users, Tag, Car, Key, Lock, Shield,
} from 'lucide-react';
import { CSS, TEL, TEL_DISPLAY, WA, WA_KONUM, GL, GD, BG, BASE_URL, Navbar, setSEO, setHreflang, FAQSection, ReviewsSection, WhatsAppBubble } from './shared';

const SCHEMA_EN = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  'name': 'Taşcı Çilingir',
  'description': '24/7 emergency locksmith service in Istanbul. Door opening, lock replacement, auto locksmith.',
  'url': `${BASE_URL}/en`,
  'telephone': '+905426946920',
  'image': `${BASE_URL}/images/10902595-E9CD-474F-BD7D-A076279C1A41.png`,
  'priceRange': '₺₺',
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    'opens': '00:00',
    'closes': '23:59',
  },
  'areaServed': { '@type': 'City', 'name': 'Istanbul' },
  'address': { '@type': 'PostalAddress', 'addressLocality': 'Istanbul', 'addressCountry': 'TR' },
  'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'bestRating': '5', 'reviewCount': '127' },
};

export default function EnLandingView() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSEO({
      title: 'Istanbul Locksmith | 24/7 Emergency | Taşcı Çilingir',
      desc: '24/7 emergency locksmith in Istanbul. Door opening, lock replacement, auto locksmith. Average response: 20-30 min. Call now: 0542 694 69 20',
      url: `${BASE_URL}/en`,
      lang: 'en',
      schema: SCHEMA_EN,
    });
    setHreflang(`${BASE_URL}/`, `${BASE_URL}/en`);
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div style={{
        background: BG, minHeight: '100vh', color: '#fff',
        fontFamily: '-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI","Helvetica Neue",sans-serif',
        overflowX: 'hidden', paddingBottom: 80,
      }}>
        <Navbar open={open} setOpen={setOpen} lang="en" />
        {open && <EnMobileMenu onClose={() => setOpen(false)} />}
        <EnHero />
        <EnTrustCards />
        <EnServices />
        <EnDistricts />
        <ReviewsSection />
        <FAQSection lang="en" />
        <EnSocialProof />
        <WhatsAppBubble />
        <EnStickyBar />
      </div>
    </>
  );
}

function EnMobileMenu({ onClose }) {
  const goTo = (sectionId, fallback) => {
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    } else {
      window.location.href = fallback;
    }
  };

  const NAV = [
    { label: 'Services',  action: () => goTo('services', '/en#services') },
    { label: 'Districts', action: () => goTo('districts', '/en#districts') },
    { label: 'Contact',   href: TEL },
  ];

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99,
      background: 'rgba(7,9,14,.97)', backdropFilter: 'blur(24px)',
      padding: '72px 24px 32px',
    }}>
      {NAV.map(({ label, action, href }) =>
        href ? (
          <a key={label} href={href} onClick={onClose} style={{
            display: 'block', width: '100%', padding: '18px 0', textAlign: 'left',
            borderBottom: '1px solid rgba(255,255,255,.07)',
            fontSize: 18, fontWeight: 600, color: '#fff', textDecoration: 'none',
          }}>{label}</a>
        ) : (
          <button key={label} onClick={action} style={{
            display: 'block', width: '100%', padding: '18px 0', textAlign: 'left',
            background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,.07)',
            fontSize: 18, fontWeight: 600, color: '#fff', cursor: 'pointer',
          }}>{label}</button>
        )
      )}
      <a href={TEL} onClick={onClose} style={{
        display: 'flex', alignItems: 'center', gap: 14, marginTop: 28,
        padding: '16px 20px', borderRadius: 14,
        background: `linear-gradient(135deg,${GD},${GL})`,
        boxShadow: '0 4px 20px rgba(212,175,55,.35)',
      }}>
        <Phone size={20} color="#000" />
        <div>
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,.6)', fontWeight: 700 }}>EMERGENCY LINE</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: '#000' }}>{TEL_DISPLAY}</div>
        </div>
      </a>
    </div>
  );
}

function EnHero() {
  return (
    <section style={{
      position: 'relative', paddingTop: 64,
      minHeight: '560px', display: 'flex', alignItems: 'center',
      background: BG,
    }}>
      <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <source srcSet="/images/hero.webp" type="image/webp" />
        <img
          src="/images/10902595-E9CD-474F-BD7D-A076279C1A41.png"
          alt="24/7 emergency locksmith service in Istanbul, Taşcı Çilingir"
          fetchPriority="high"
          style={{
            width: '100%', height: '100%',
            objectFit: 'contain', objectPosition: 'right center',
          }}
        />
      </picture>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.80) 30%,rgba(0,0,0,.20) 55%,transparent 72%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, zIndex: 2,
        background: 'linear-gradient(180deg,transparent 0%,rgba(0,0,0,.95) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'relative', zIndex: 3,
        width: '100%', maxWidth: 'clamp(255px, 34vw, 380px)',
        padding: '28px 12px 48px clamp(20px, 7vw, 80px)',
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(212,175,55,.07)', border: '1px solid rgba(212,175,55,.24)',
          borderRadius: 100, padding: '7px 13px',
          fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.1em',
          marginBottom: 16, whiteSpace: 'nowrap',
        }}>
          <Clock size={11} color={GD} />
          24/7 EMERGENCY LOCKSMITH
        </span>
        <h1 style={{
          fontSize: 'clamp(32px,9.5vw,52px)', fontWeight: 900, lineHeight: .9,
          marginBottom: 14, letterSpacing: '-.02em',
        }}>
          <span style={{ display: 'block', color: '#fff' }}>Are you</span>
          <span style={{
            display: 'block',
            background: `linear-gradient(90deg,${GD} 0%,${GL} 40%,#FFF5B0 55%,${GD} 100%)`,
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'shimmer 4s linear infinite',
          }}>locked out?</span>
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.62)', lineHeight: 1.55, marginBottom: 20 }}>
          Professional locksmith service in Istanbul.
          Average response:{' '}
          <span style={{ color: '#E5951E', fontWeight: 700 }}>20–30 min</span>.
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
            <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(0,0,0,.7)', letterSpacing: '.12em', lineHeight: 1 }}>CALL NOW</div>
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
            <div style={{ fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '.08em', lineHeight: 1 }}>CHAT ON WHATSAPP</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.42)', marginTop: 2 }}>Quick support</div>
          </div>
        </a>
      </div>
    </section>
  );
}

function EnTrustCards() {
  const items = [
    { Icon: Zap,         val: '20–30 MIN',    sub: 'Average Arrival Time' },
    { Icon: Clock,       val: '24/7',         sub: 'Nonstop Service' },
    { Icon: CheckCircle, val: '100%',         sub: 'Customer Satisfaction' },
    { Icon: Tag,         val: 'FAIR PRICE',   sub: 'No Hidden Fees' },
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

const EN_SVC = [
  { grad: 'linear-gradient(160deg,#3d2010 0%,#2a1505 60%,#1a0c03 100%)', Icon: Key,    title: 'Door Opening',       desc: 'Fast & damage-free door unlocking.' },
  { grad: 'linear-gradient(160deg,#0f1a2e 0%,#0d1520 60%,#081018 100%)', Icon: Car,    title: 'Auto Locksmith',     desc: 'Car door opening & key solutions.' },
  { grad: 'linear-gradient(160deg,#1a1820 0%,#141318 60%,#0f0d12 100%)', Icon: Lock,   title: 'Lock Replacement',   desc: 'All types of lock change & repair.' },
  { grad: 'linear-gradient(160deg,#1c1e22 0%,#15171a 60%,#0f1012 100%)', Icon: Shield, title: 'Steel Door Systems', desc: 'High-security lock installations.' },
];

function EnServiceCard({ grad, Icon, title, desc }) {
  return (
    <a href={TEL} className="svc" style={{
      display: 'flex', alignItems: 'center',
      background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.18)', borderRadius: 14,
    }}>
      <div style={{
        width: 74, flexShrink: 0, alignSelf: 'stretch', minHeight: 66,
        background: grad, position: 'relative', borderRadius: '14px 0 0 14px', overflow: 'hidden',
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
          width: 26, height: 26, background: `linear-gradient(135deg,${GD},${GL})`,
          borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ChevronRight size={14} color="#000" strokeWidth={2.5} />
        </div>
      </div>
    </a>
  );
}

function EnServices() {
  return (
    <section id="services" style={{ padding: '0 20px 40px' }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 6 }}>OUR SERVICES</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.01em' }}>Professional Solutions</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {EN_SVC.map((s, i) => <EnServiceCard key={i} {...s} />)}
      </div>
    </section>
  );
}

function EnDistricts() {
  const districts = ['Beşiktaş', 'Şişli', 'Sarıyer', 'Kağıthane', 'Eyüpsultan'];
  return (
    <section id="districts" style={{ padding: '0 20px 36px' }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 6 }}>SERVICE AREAS</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.01em' }}>European Side of Istanbul!</h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {districts.map((d, i) => (
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

function EnSocialProof() {
  const items = [
    { Icon: Users, val: '1,000+',  label: 'Jobs Completed' },
    { Icon: Star,  val: '4.9/5',   label: 'Customer Rating' },
    { Icon: Clock, val: '20–30m',  label: 'Avg. Response' },
  ];
  return (
    <section style={{ padding: '0 20px 40px' }}>
      <div style={{
        background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.24)',
        borderRadius: 16, padding: '22px 16px', display: 'flex', justifyContent: 'space-around',
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

function EnStickyBar() {
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
        height: 46, borderRadius: 12, background: `linear-gradient(135deg,${GD},${GL})`,
        boxShadow: '0 3px 14px rgba(212,175,55,.35)', fontSize: 11.5, fontWeight: 800, color: '#000',
      }}>
        <Phone size={14} color="#000" strokeWidth={2.5} /> CALL NOW
      </a>
      <a href={WA} className="bp" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        height: 46, borderRadius: 12, background: '#0d1e11', border: '1px solid rgba(37,211,102,.28)',
        fontSize: 11.5, fontWeight: 800, color: '#25D366',
      }}>
        <MessageCircle size={14} color="#25D366" /> WHATSAPP
      </a>
      <a href={WA_KONUM} className="bp" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
        height: 46, borderRadius: 12, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
        fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,.78)',
      }}>
        <MapPin size={13} color="rgba(255,255,255,.78)" /> SHARE LOCATION
      </a>
    </div>
  );
}
