import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Phone, MessageCircle } from 'lucide-react';
import { TEL, TEL_DISPLAY, WA, GL, GD, BG, gtagEvent } from '../shared';

const KEYFRAMES = `
  .hk-btn { position:relative; overflow:hidden; isolation:isolate; }
  .hk-btn::after {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.26) 50%,transparent 70%);
    transform:translateX(-112%);
    border-radius:12px;
    pointer-events:none;
  }
  @media (hover:hover) {
    .hk-btn:hover::after { animation:_hkshine .5s cubic-bezier(.4,0,.2,1) forwards; }
  }
  @keyframes _hkshine { to{transform:translateX(112%)} }
  @media (prefers-reduced-motion:reduce) {
    .hk-btn::after { animation:none!important; }
  }
  @media (min-width:641px) {
    .hero-img {
      transform: scale(0.88);
      transform-origin: center center;
    }
  }
  @media (max-width:640px) {
    .hero-img {
      object-position: 70% center !important;
      transform: none;
    }
    .hero-grad {
      background: linear-gradient(90deg,
        rgba(0,0,0,.97) 0%,
        rgba(0,0,0,.93) 35%,
        rgba(0,0,0,.65) 60%,
        rgba(0,0,0,.18) 82%,
        transparent 95%
      ) !important;
    }
    .hero-glow {
      display: block !important;
    }
  }
`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};
const fromLeft = {
  hidden: { opacity: 0, x: -22 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fromBottom = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const subtle = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

const CTAButton = memo(({ href, primary, icon, label, sub, reduced }) => {
  const handleClick = () => {
    if (href && href.startsWith('tel:')) gtagEvent('phone_click');
    else if (href && (href.includes('wa.me') || href.includes('whatsapp'))) gtagEvent('whatsapp_click');
  };
  return (
  <motion.a
    href={href}
    onClick={handleClick}
    className="bp hk-btn"
    variants={fromBottom}
    whileHover={reduced ? undefined : { scale: 1.028, transition: { duration: 0.2, ease: 'easeOut' } }}
    whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
    style={{
      display: 'flex', alignItems: 'center', gap: 11,
      padding: '0 18px', height: 58, borderRadius: 12,
      textDecoration: 'none',
      ...(primary ? {
        background: `linear-gradient(135deg,${GD} 0%,${GL} 50%,${GD} 100%)`,
        backgroundSize: '200% auto',
        boxShadow: '0 5px 22px rgba(212,175,55,.42),inset 0 1px 0 rgba(255,255,255,.25)',
      } : {
        background: 'rgba(255,255,255,.05)',
        border: '1px solid rgba(255,255,255,.12)',
      }),
    }}
  >
    {icon}
    <div>
      <div style={{
        fontSize: 11, fontWeight: 900, letterSpacing: '.1em', lineHeight: 1,
        color: primary ? 'rgba(0,0,0,.72)' : '#fff',
      }}>{label}</div>
      <div style={{
        fontSize: 11, marginTop: 2, lineHeight: 1.3,
        color: primary ? 'rgba(0,0,0,.55)' : 'rgba(255,255,255,.42)',
      }}>{sub}</div>
    </div>
  </motion.a>
  );
});
CTAButton.displayName = 'CTAButton';

export default function AnimatedHero() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      <style>{KEYFRAMES}</style>

      <section style={{
        position: 'relative',
        paddingTop: 64,
        minHeight: '560px',
        display: 'flex',
        alignItems: 'center',
        background: BG,
        overflow: 'hidden',
      }}>

        {/* Background image — static */}
        <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
          <source type="image/webp" srcSet="/images/hero.webp" />
          <img
            src="/images/hero.png"
            alt="İstanbul'da 7/24 acil çilingir hizmeti, Çilingirciniz kapı açma uzmanı"
            fetchPriority="high"
            width="1536" height="1024"
            className="hero-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }}
          />
        </picture>

        {/* Left gradient */}
        <div className="hero-grad" style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(90deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.80) 30%,rgba(0,0,0,.20) 55%,transparent 72%)',
          pointerEvents: 'none',
        }} />

        {/* Mobile golden glow — hidden on desktop */}
        <div className="hero-glow" style={{
          display: 'none',
          position: 'absolute', zIndex: 2,
          top: '30%', right: '18%',
          width: 180, height: 180,
          background: 'radial-gradient(circle, rgba(212,175,55,.18) 0%, rgba(212,175,55,.08) 40%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translateY(-50%)',
        }} />

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, zIndex: 2,
          background: 'linear-gradient(180deg,transparent 0%,rgba(0,0,0,.95) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Left content */}
        <motion.div
          variants={container}
          initial={shouldReduce ? 'show' : 'hidden'}
          animate="show"
          style={{
            position: 'relative', zIndex: 3,
            width: '100%',
            maxWidth: 'clamp(255px, 34vw, 380px)',
            padding: 'clamp(28px,5vw,44px) 12px 48px clamp(20px,7vw,80px)',
          }}
        >
          <motion.span
            variants={fromLeft}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(212,175,55,.07)',
              border: '1px solid rgba(212,175,55,.24)',
              borderRadius: 100, padding: '7px 13px',
              fontSize: 10, fontWeight: 700, color: GD,
              letterSpacing: '.1em', marginBottom: 16,
              whiteSpace: 'nowrap',
            }}
          >
            <Clock size={11} color={GD} />
            7/24 ACİL ÇİLİNGİR
          </motion.span>

          <h1 style={{
            fontSize: 'clamp(32px,9.5vw,52px)',
            fontWeight: 900, lineHeight: .9,
            marginBottom: 14, letterSpacing: '-.02em',
          }}>
            <motion.span variants={fromBottom} style={{ display: 'block', color: '#fff' }}>
              Kapıda mı
            </motion.span>
            <motion.span
              variants={fromBottom}
              style={{
                display: 'block',
                background: `linear-gradient(90deg,${GD} 0%,${GL} 40%,#FFF5B0 55%,${GD} 100%)`,
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: shouldReduce ? undefined : 'shimmer 4s linear infinite',
              }}
            >
              kaldınız?
            </motion.span>
          </h1>

          <motion.p
            variants={subtle}
            style={{ fontSize: 13, color: 'rgba(255,255,255,.62)', lineHeight: 1.55, marginBottom: 20 }}
          >
            Ortalama{' '}
            <span style={{ color: '#E5951E', fontWeight: 700 }}>20-30 dk</span>{' '}
            içinde profesyonel çözüm.
          </motion.p>

          <motion.div variants={fromBottom} style={{ marginBottom: 10 }}>
            <CTAButton
              href={TEL} primary reduced={shouldReduce}
              icon={<Phone size={17} color="#000" strokeWidth={2.5} />}
              label="HEMEN ARA"
              sub={TEL_DISPLAY}
            />
          </motion.div>

          <motion.div variants={fromBottom}>
            <CTAButton
              href={WA} reduced={shouldReduce}
              icon={<MessageCircle size={17} color="#25D366" />}
              label="WHATSAPP'TAN YAZ"
              sub="Hızlı destek alın"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
