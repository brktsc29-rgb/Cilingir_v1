/**
 * AnimatedHero — Apple / Stripe / Linear level polish
 * Lazy-loaded via React.lazy() — Framer Motion + GSAP land in a separate chunk.
 *
 * Animation map
 * ─────────────
 * Framer Motion  entrance stagger (badge, headline words, subtitle, CTAs)
 *                CTA hover shine sweep
 * GSAP           mouse-parallax on background image (desktop only)
 * CSS keyframes  key float, ring rotate ×2, particle float
 *                all paused by prefers-reduced-motion media query
 */

import { useEffect, useRef, memo, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { Clock, Phone, MessageCircle } from 'lucide-react';
import { TEL, TEL_DISPLAY, WA, GL, GD, BG } from '../shared';

// ─── Deterministic particle coords — never Math.random() in render ──────────

const PARTICLES = [
  { id: 0,  cx: 90,  cy: 15,  r: 1.9, dur: 3.2, del: 0.0  },
  { id: 1,  cx: 148, cy: 42,  r: 1.5, dur: 2.8, del: 0.45 },
  { id: 2,  cx: 168, cy: 92,  r: 2.2, dur: 3.7, del: 0.9  },
  { id: 3,  cx: 158, cy: 148, r: 1.7, dur: 3.1, del: 1.35 },
  { id: 4,  cx: 120, cy: 178, r: 1.4, dur: 2.6, del: 0.6  },
  { id: 5,  cx: 75,  cy: 185, r: 2.0, dur: 3.5, del: 1.8  },
  { id: 6,  cx: 22,  cy: 158, r: 1.6, dur: 2.9, del: 0.75 },
  { id: 7,  cx: 8,   cy: 100, r: 1.3, dur: 3.3, del: 1.1  },
  { id: 8,  cx: 20,  cy: 48,  r: 1.8, dur: 2.7, del: 0.25 },
  { id: 9,  cx: 58,  cy: 8,   r: 1.5, dur: 3.4, del: 1.55 },
  { id: 10, cx: 110, cy: 4,   r: 1.2, dur: 2.5, del: 0.85 },
  { id: 11, cx: 178, cy: 122, r: 1.7, dur: 3.0, del: 0.35 },
];

// ─── CSS keyframes injected once ─────────────────────────────────────────────

const KEYFRAMES = `
  /* Key float */
  @keyframes _hkf { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
  .hk-float { animation: _hkf 4.4s ease-in-out infinite; will-change:transform; }

  /* Ring clockwise */
  @keyframes _hkra { to{transform:rotate(360deg)} }
  .hk-ring-a {
    animation: _hkra 9s linear infinite;
    transform-origin: 110px 110px;
    will-change: transform;
  }

  /* Ring counter-clockwise */
  @keyframes _hkrb { to{transform:rotate(-360deg)} }
  .hk-ring-b {
    animation: _hkrb 15s linear infinite;
    transform-origin: 110px 110px;
    will-change: transform;
  }

  /* Particles */
  @keyframes _hkp { 0%,100%{transform:translate(0,0) scale(1);opacity:.5} 50%{transform:translate(0,-8px) scale(1.4);opacity:.95} }
  .hk-ptcl { animation: _hkp ease-in-out infinite; will-change:transform,opacity; }

  /* Desktop-only key sculpture */
  @media (max-width:639px) { .hk-sculpture { display:none!important } }

  /* CTA shine — CSS pseudo-element, triggered on parent hover */
  .hk-btn { position:relative; overflow:hidden; isolation:isolate; }
  .hk-btn::after {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.28) 50%,transparent 70%);
    transform:translateX(-112%);
    border-radius:12px;
    pointer-events:none;
  }
  @media (hover:hover) {
    .hk-btn:hover::after { animation:_hkshine .52s cubic-bezier(.4,0,.2,1) forwards; }
  }
  @keyframes _hkshine { to { transform:translateX(112%); } }

  /* Honour prefers-reduced-motion */
  @media (prefers-reduced-motion:reduce) {
    .hk-float,.hk-ring-a,.hk-ring-b,.hk-ptcl,.hk-btn::after { animation:none!important }
  }
`;

// ─── SVG: Golden key ──────────────────────────────────────────────────────────

const GoldKey = memo(() => (
  <svg
    viewBox="0 0 80 190"
    width="76"
    height="190"
    aria-hidden="true"
    focusable="false"
    style={{ display: 'block', filter: 'drop-shadow(0 0 10px rgba(255,215,0,.45))' }}
  >
    <defs>
      <linearGradient id="gk-lg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#A87820" />
        <stop offset="28%"  stopColor="#FFD700" />
        <stop offset="55%"  stopColor="#FFF5B0" />
        <stop offset="80%"  stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B8912E" />
      </linearGradient>
      <radialGradient id="gk-rg" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#FFE066" stopOpacity=".55" />
        <stop offset="100%" stopColor="#C9A84C" stopOpacity=".05" />
      </radialGradient>
      <filter id="gk-glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="2.5" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Soft outer glow halo */}
    <circle cx="40" cy="38" r="35" fill="none" stroke="#FFD700" strokeWidth="20" opacity=".06" />

    {/* Key head ring */}
    <circle cx="40" cy="38" r="28" fill="none" stroke="url(#gk-lg)" strokeWidth="13"
      filter="url(#gk-glow)" />

    {/* Key head centre fill */}
    <circle cx="40" cy="38" r="12" fill="url(#gk-rg)" />
    <circle cx="40" cy="38" r="5.5" fill="url(#gk-lg)" opacity=".7" />

    {/* Key shaft */}
    <rect x="37" y="66" width="6" height="104" rx="3" fill="url(#gk-lg)" />

    {/* Key teeth */}
    <rect x="43" y="90"  width="14" height="7" rx="2.5" fill="url(#gk-lg)" />
    <rect x="43" y="112" width="10" height="7" rx="2.5" fill="url(#gk-lg)" />
    <rect x="43" y="132" width="14" height="7" rx="2.5" fill="url(#gk-lg)" />

    {/* Key tip */}
    <rect x="34" y="162" width="12" height="7" rx="3" fill="url(#gk-lg)" />
  </svg>
));
GoldKey.displayName = 'GoldKey';

// ─── SVG: Rotating light rings ────────────────────────────────────────────────

const LightRings = memo(() => (
  <svg
    viewBox="0 0 220 220"
    width="220"
    height="220"
    aria-hidden="true"
    focusable="false"
    style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
  >
    <defs>
      <linearGradient id="rg-a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#FFD700" stopOpacity="0"   />
        <stop offset="25%"  stopColor="#FFD700" stopOpacity=".85" />
        <stop offset="55%"  stopColor="#FFF5B0" stopOpacity="1"   />
        <stop offset="80%"  stopColor="#C9A84C" stopOpacity=".5"  />
        <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
      </linearGradient>
      <linearGradient id="rg-b" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#FFD700" stopOpacity="0"   />
        <stop offset="40%"  stopColor="#FFD700" stopOpacity=".55" />
        <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
      </linearGradient>
    </defs>

    {/* Outer static halo */}
    <circle cx="110" cy="110" r="104" fill="none" stroke="#FFD700" strokeWidth=".7" opacity=".12" />

    {/* Primary arc — rotates CW */}
    <circle
      className="hk-ring-a"
      cx="110" cy="110" r="92"
      fill="none"
      stroke="url(#rg-a)"
      strokeWidth="2"
      strokeDasharray="145 434"
      strokeLinecap="round"
    />

    {/* Secondary arc — rotates CCW, offset phase */}
    <circle
      className="hk-ring-b"
      cx="110" cy="110" r="80"
      fill="none"
      stroke="url(#rg-b)"
      strokeWidth="1.5"
      strokeDasharray="68 434"
      strokeLinecap="round"
      opacity=".65"
    />
  </svg>
));
LightRings.displayName = 'LightRings';

// ─── SVG: Particle field ──────────────────────────────────────────────────────

const ParticleField = memo(({ reduced }) => {
  if (reduced) return null;
  return (
    <svg
      viewBox="0 0 190 200"
      aria-hidden="true"
      focusable="false"
      style={{ position: 'absolute', inset: -10, overflow: 'visible', pointerEvents: 'none' }}
    >
      <defs>
        <radialGradient id="pg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </radialGradient>
      </defs>
      {PARTICLES.map(p => (
        <circle
          key={p.id}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill="url(#pg)"
          className="hk-ptcl"
          style={{ animationDuration: `${p.dur}s`, animationDelay: `${p.del}s` }}
        />
      ))}
    </svg>
  );
});
ParticleField.displayName = 'ParticleField';

// ─── Framer Motion variants ───────────────────────────────────────────────────

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.18 },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromBottom = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const subtle = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

// ─── CTA button with hover shine ─────────────────────────────────────────────

const CTAButton = memo(({ href, primary, icon, label, sub, reduced }) => (
  <motion.a
    href={href}
    className="bp hk-btn"
    variants={fromBottom}
    whileHover={reduced ? undefined : { scale: 1.028, transition: { duration: 0.22, ease: 'easeOut' } }}
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
));
CTAButton.displayName = 'CTAButton';

// ─── Main component ───────────────────────────────────────────────────────────

export default function AnimatedHero() {
  const shouldReduce = useReducedMotion();
  const bgRef        = useRef(null);
  const gsapCtxRef   = useRef(null);

  /* Mouse parallax — desktop only, GSAP driven */
  const onMouseMove = useCallback((e) => {
    if (!bgRef.current) return;
    const dx = (e.clientX / window.innerWidth  - 0.5) * 14;
    const dy = (e.clientY / window.innerHeight - 0.5) * 8;
    gsap.to(bgRef.current, { x: dx, y: dy, duration: 1.4, ease: 'power2.out' });
  }, []);

  useEffect(() => {
    if (shouldReduce) return;

    const isTouch = window.matchMedia('(hover:none)').matches;
    if (isTouch) return;

    gsapCtxRef.current = gsap.context(() => {});
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsapCtxRef.current?.revert();
    };
  }, [shouldReduce, onMouseMove]);

  return (
    <>
      {/* Inject keyframe CSS once */}
      <style>{KEYFRAMES}</style>

      <section
        style={{
          position: 'relative',
          paddingTop: 64,
          minHeight: '560px',
          display: 'flex',
          alignItems: 'center',
          background: BG,
          contain: 'layout',
        }}
      >
        {/* ── Background image (parallax target) ── */}
        <picture
          ref={bgRef}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            zIndex: 0,
            willChange: 'transform',
          }}
        >
          <source srcSet="/images/hero.webp" type="image/webp" />
          <img
            src="/images/10902595-E9CD-474F-BD7D-A076279C1A41.png"
            alt="İstanbul'da 7/24 acil çilingir hizmeti, Çilingirciniz kapı açma uzmanı"
            fetchPriority="high"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right center' }}
          />
        </picture>

        {/* ── Gradient overlays ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(90deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.80) 30%,rgba(0,0,0,.20) 55%,transparent 72%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, zIndex: 2,
          background: 'linear-gradient(180deg,transparent 0%,rgba(0,0,0,.95) 100%)',
          pointerEvents: 'none',
        }} />

        {/* ── Golden key sculpture — desktop only ── */}
        <div
          className="hk-sculpture"
          style={{
            position: 'absolute',
            right: 'clamp(6%, 13vw, 20%)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            width: 220,
            height: 220,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          {/* Particles */}
          <ParticleField reduced={shouldReduce} />

          {/* Rotating rings */}
          <LightRings />

          {/* Floating key */}
          <div
            className={shouldReduce ? undefined : 'hk-float'}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <GoldKey />
          </div>
        </div>

        {/* ── Left content panel (Framer Motion stagger) ── */}
        <motion.div
          variants={container}
          initial={shouldReduce ? 'show' : 'hidden'}
          animate="show"
          style={{
            position: 'relative', zIndex: 4,
            width: '100%',
            maxWidth: 'clamp(255px, 34vw, 380px)',
            padding: 'clamp(28px,5vw,44px) 12px 48px clamp(20px,7vw,80px)',
          }}
        >
          {/* Badge */}
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

          {/* Headline — word-by-word stagger */}
          <h1 style={{
            fontSize: 'clamp(32px,9.5vw,52px)',
            fontWeight: 900, lineHeight: .9,
            marginBottom: 14, letterSpacing: '-.02em',
          }}>
            <motion.span
              variants={fromBottom}
              style={{ display: 'block', color: '#fff' }}
            >
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

          {/* Subtitle */}
          <motion.p
            variants={subtle}
            style={{ fontSize: 13, color: 'rgba(255,255,255,.62)', lineHeight: 1.55, marginBottom: 20 }}
          >
            Ortalama{' '}
            <span style={{ color: '#E5951E', fontWeight: 700 }}>20-30 dk</span>{' '}
            içinde profesyonel çözüm.
          </motion.p>

          {/* CTA — phone */}
          <motion.div variants={fromBottom} style={{ marginBottom: 10 }}>
            <CTAButton
              href={TEL}
              primary
              icon={<Phone size={17} color="#000" strokeWidth={2.5} />}
              label="HEMEN ARA"
              sub={TEL_DISPLAY}
              reduced={shouldReduce}
            />
          </motion.div>

          {/* CTA — WhatsApp */}
          <motion.div variants={fromBottom}>
            <CTAButton
              href={WA}
              icon={<MessageCircle size={17} color="#25D366" />}
              label="WHATSAPP'TAN YAZ"
              sub="Hızlı destek alın"
              reduced={shouldReduce}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
