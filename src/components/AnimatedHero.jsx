/**
 * AnimatedHero — Apple / Stripe / Linear level polish
 * Lazy-loaded via React.lazy() — Framer Motion lands in a separate chunk.
 *
 * Animation map
 * ─────────────
 * CSS keyframes  image + ring + particles float together (same wrapper)
 *                ring rotate ×2 (CW / CCW)
 *                particle float, staggered
 *                CTA hover shine (::after pseudo-element)
 * Framer Motion  staggered entrance: badge → headline → subtitle → CTAs
 *                CTA scale on hover / tap
 * prefers-reduced-motion  all keyframes paused; Framer Motion skips entrance
 */

import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Phone, MessageCircle } from 'lucide-react';
import { TEL, TEL_DISPLAY, WA, GL, GD, BG } from '../shared';

// ─── Deterministic particle coords ───────────────────────────────────────────
// Placed around a 220×220 viewBox centered on the key in the photo.
// Never use Math.random() here — causes hydration mismatch.

const PARTICLES = [
  { id: 0,  cx: 110, cy: 18,  r: 1.2, dur: 3.2, del: 0.00 },
  { id: 1,  cx: 168, cy: 52,  r: 1.0, dur: 2.8, del: 0.45 },
  { id: 2,  cx: 196, cy: 110, r: 1.3, dur: 3.7, del: 0.90 },
  { id: 3,  cx: 178, cy: 170, r: 1.0, dur: 3.1, del: 1.35 },
  { id: 4,  cx: 135, cy: 200, r: 0.9, dur: 2.6, del: 0.60 },
  { id: 5,  cx: 75,  cy: 200, r: 1.1, dur: 3.5, del: 1.80 },
  { id: 6,  cx: 42,  cy: 170, r: 1.0, dur: 2.9, del: 0.75 },
  { id: 7,  cx: 24,  cy: 110, r: 0.9, dur: 3.3, del: 1.10 },
  { id: 8,  cx: 52,  cy: 52,  r: 1.1, dur: 2.7, del: 0.25 },
];

// ─── Injected CSS keyframes ───────────────────────────────────────────────────

const KEYFRAMES = `
  /* Float — image wrapper, ring, particles all share this */
  @keyframes _hkf { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  .hk-float { animation:_hkf 4.6s ease-in-out infinite; will-change:transform; }

  /* Ring — clockwise */
  @keyframes _hkra { to{transform:rotate(360deg)} }
  .hk-ring-a {
    animation:_hkra 9s linear infinite;
    transform-origin:110px 110px;
    will-change:transform;
  }

  /* Ring — counter-clockwise, offset phase */
  @keyframes _hkrb { to{transform:rotate(-360deg)} }
  .hk-ring-b {
    animation:_hkrb 15s linear infinite;
    transform-origin:110px 110px;
    will-change:transform;
  }

  /* Particles */
  @keyframes _hkp {
    0%,100%{transform:translate(0,0) scale(1);opacity:.45}
    50%{transform:translate(0,-8px) scale(1.5);opacity:.95}
  }
  .hk-ptcl { animation:_hkp ease-in-out infinite; will-change:transform,opacity; }

  /* CTA hover shine */
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

  /* Honour prefers-reduced-motion */
  @media (prefers-reduced-motion:reduce) {
    .hk-float,.hk-ring-a,.hk-ring-b,.hk-ptcl,.hk-btn::after {
      animation:none!important;
    }
  }
`;

// ─── Rotating gold rings (overlaid on photo key) ──────────────────────────────

const LightRings = memo(() => (
  <svg
    viewBox="0 0 220 220"
    width="220"
    height="220"
    aria-hidden="true"
    focusable="false"
    style={{ display: 'block', overflow: 'visible' }}
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
        <stop offset="40%"  stopColor="#FFD700" stopOpacity=".5"  />
        <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"   />
      </linearGradient>
      <radialGradient id="rg-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#FFD700" stopOpacity=".12" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0"   />
      </radialGradient>
    </defs>

    {/* Soft core glow — very subtle */}
    <circle cx="110" cy="110" r="55" fill="url(#rg-core)" opacity=".45" />

    {/* Static outer halo */}
    <circle cx="110" cy="110" r="104" fill="none"
      stroke="#FFD700" strokeWidth=".5" opacity=".06" />

    {/* Primary arc — rotates CW */}
    <circle className="hk-ring-a"
      cx="110" cy="110" r="92"
      fill="none"
      stroke="url(#rg-a)"
      strokeWidth="1.4"
      strokeDasharray="100 434"
      strokeLinecap="round"
      opacity=".5"
    />

    {/* Secondary arc — rotates CCW */}
    <circle className="hk-ring-b"
      cx="110" cy="110" r="78"
      fill="none"
      stroke="url(#rg-b)"
      strokeWidth="1"
      strokeDasharray="50 434"
      strokeLinecap="round"
      opacity=".3"
    />
  </svg>
));
LightRings.displayName = 'LightRings';

// ─── Particle field ───────────────────────────────────────────────────────────

const ParticleField = memo(({ reduced }) => {
  if (reduced) return null;
  return (
    <svg
      viewBox="0 0 220 220"
      width="220"
      height="220"
      aria-hidden="true"
      focusable="false"
      style={{
        position: 'absolute', inset: 0,
        overflow: 'visible', pointerEvents: 'none',
      }}
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
          cx={p.cx} cy={p.cy} r={p.r}
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

// ─── CTA button ───────────────────────────────────────────────────────────────

const CTAButton = memo(({ href, primary, icon, label, sub, reduced }) => (
  <motion.a
    href={href}
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
));
CTAButton.displayName = 'CTAButton';

// ─── Main component ───────────────────────────────────────────────────────────

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
        contain: 'layout',
      }}>

        {/*
         * ── Background image wrapper ───────────────────────────────────────
         * The wrapper floats with the CSS animation.
         * Inside it: the photo + the ring/particle overlay.
         * Because they share the same animated parent, the effects stay
         * locked on the key in the photo as it moves up and down.
         */}
        <div
          className={shouldReduce ? undefined : 'hk-float'}
          style={{
            position: 'absolute', inset: 0,
            zIndex: 0,
            willChange: 'transform',
          }}
        >
          {/* Photo */}
          <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            
            <img
              src="/images/hero.png"
              alt="İstanbul'da 7/24 acil çilingir hizmeti, Çilingirciniz kapı açma uzmanı"
              fetchPriority="high"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right center' }}
            />
          </picture>

          {/*
           * ── Key overlay ─────────────────────────────────────────────────
           * Positioned over the key in the photo.
           * Adjust right/top if the ring doesn't align with the key.
           * right: ~15-20% puts it in the right-center area where the
           * key is visible after the left gradient cuts in.
           */}
          {/*
           * Overlay centered on the key in the photo.
           * translate(-50%,-50%) anchors the center of the 220px ring
           * to the (left, top) coordinate — easy to tune.
           * left: ~72% = just past the gradient's transparent edge,
           * where the key in the photo sits.
           */}
          <div
            style={{
              position: 'absolute',
              left: '72%',
              top: '48%',
              transform: 'translate(-50%, -50%)',
              width: 220,
              height: 220,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            <ParticleField reduced={shouldReduce} />
            <LightRings />
          </div>
        </div>

        {/* ── Left gradient overlay ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(90deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.80) 30%,rgba(0,0,0,.20) 55%,transparent 72%)',
          pointerEvents: 'none',
        }} />

        {/* ── Bottom fade ── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, zIndex: 2,
          background: 'linear-gradient(180deg,transparent 0%,rgba(0,0,0,.95) 100%)',
          pointerEvents: 'none',
        }} />

        {/* ── Left content (Framer Motion stagger) ── */}
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
              href={TEL} primary reduced={shouldReduce}
              icon={<Phone size={17} color="#000" strokeWidth={2.5} />}
              label="HEMEN ARA"
              sub={TEL_DISPLAY}
            />
          </motion.div>

          {/* CTA — WhatsApp */}
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
