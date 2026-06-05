import React, { useState, useEffect } from 'react';
import { Clock, Phone, MessageCircle, MapPin, ChevronRight, CheckCircle, Zap, Shield, Key } from 'lucide-react';
import {
  CSS, TEL, TEL_DISPLAY, WA, GL, GD, BG, BASE_URL,
  Navbar, MobileMenu, TrustCards, SocialProof, StickyBar, SectionHeader, Footer,
  setSEO,
} from './shared';

const DISTRICT_CTX = {
  'Beşiktaş':   'Avrupa yakasının prestijli ilçelerinden Beşiktaş',
  'Şişli':      'İstanbul\'un iş ve eğlence merkezi Şişli',
  'Sarıyer':    'Boğaz kıyısındaki doğal güzellikte Sarıyer',
  'Kağıthane':  'Gelişen yapısıyla öne çıkan Kağıthane',
  'Eyüpsultan': 'Tarihi ve kültürel dokusuyla Eyüpsultan',
};

export default function DistrictPage({ page }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}/${page.path}`;

    const breadcrumbItems = [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/` },
    ];
    if (page.isNeighborhood) {
      breadcrumbItems.push({ '@type': 'ListItem', position: 2, name: `${page.districtName} Çilingir`, item: `${BASE_URL}/${page.districtPath}` });
      breadcrumbItems.push({ '@type': 'ListItem', position: 3, name: `${page.name} Çilingir`, item: url });
    } else {
      breadcrumbItems.push({ '@type': 'ListItem', position: 2, name: `${page.name} Çilingir`, item: url });
    }

    const pageFaq = (page.content?.faq || []).map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }));

    const graph = [
      {
        '@type': ['LocalBusiness', 'Locksmith'],
        '@id': `${BASE_URL}/#business`,
        name: `Çilingirciniz - ${page.name}`,
        description: page.metaDesc,
        url,
        telephone: '+905426946920',
        image: `${BASE_URL}/images/hero.webp`,
        priceRange: '₺₺',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        areaServed: { '@type': 'Place', name: `${page.name}, İstanbul` },
        address: { '@type': 'PostalAddress', addressLocality: 'İstanbul', addressCountry: 'TR' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', bestRating: '5', reviewCount: '127' },
      },
      { '@type': 'BreadcrumbList', itemListElement: breadcrumbItems },
    ];

    if (pageFaq.length > 0) {
      graph.push({ '@type': 'FAQPage', mainEntity: pageFaq });
    }

    setSEO({
      title: page.metaTitle,
      desc: page.metaDesc,
      url,
      lang: 'tr',
      schema: { '@context': 'https://schema.org', '@graph': graph },
    });
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <style>{CSS}</style>
      <div style={{
        background: BG, minHeight: '100vh', color: '#fff',
        fontFamily: '-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI","Helvetica Neue",sans-serif',
        overflowX: 'hidden', paddingBottom: 80,
      }}>
        <header>
          <Navbar open={open} setOpen={setOpen} />
          {open && <MobileMenu onClose={() => setOpen(false)} />}
        </header>
        <main>
          <DistrictHero page={page} />
          <Breadcrumb page={page} />
          <article>
            <DistrictIntro page={page} />
            <TrustCards />
            {!page.isNeighborhood && page.content?.services?.length > 0 && (
              <ServicesList services={page.content.services} name={page.name} />
            )}
            <HowItWorks />
            {(page.content?.landmarks || page.content?.transport) && (
              <LocalContext page={page} />
            )}
            <NearbyAreas page={page} />
            {page.content?.faq?.length > 0 && (
              <PageFAQ faq={page.content.faq} name={page.name} />
            )}
          </article>
          <SocialProof />
        </main>
        <Footer />
        <StickyBar />
      </div>
    </>
  );
}

/* ── Breadcrumb ─────────────────────────────────────────────────────────────── */
function Breadcrumb({ page }) {
  return (
    <nav aria-label="breadcrumb" style={{ padding: '10px 20px', background: 'rgba(255,255,255,.03)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
      <ol style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', flexWrap: 'wrap' }}>
        <li>
          <a href="/" style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Ana Sayfa</a>
        </li>
        <li><ChevronRight size={10} color="rgba(255,255,255,.3)" /></li>
        {page.isNeighborhood ? (
          <>
            <li>
              <a href={`/${page.districtPath}`} style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>
                {page.districtName} Çilingir
              </a>
            </li>
            <li><ChevronRight size={10} color="rgba(255,255,255,.3)" /></li>
            <li><span style={{ fontSize: 12, color: GD, fontWeight: 600 }}>{page.name} Çilingir</span></li>
          </>
        ) : (
          <li><span style={{ fontSize: 12, color: GD, fontWeight: 600 }}>{page.name} Çilingir</span></li>
        )}
      </ol>
    </nav>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────────────── */
function DistrictHero({ page }) {
  return (
    <section aria-label={`${page.name} çilingir hizmeti hero`} style={{
      position: 'relative', paddingTop: 64,
      minHeight: '560px', display: 'flex', alignItems: 'center',
      background: BG,
    }}>
      <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <source srcSet="/images/hero.webp" type="image/webp" />
        <img
          src="/images/10902595-E9CD-474F-BD7D-A076279C1A41.png"
          alt={`${page.name} acil çilingir hizmeti — Çilingirciniz`}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right center' }}
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
          7/24 ACİL ÇİLİNGİR
        </span>
        <h1 style={{
          fontSize: 'clamp(28px,8.5vw,48px)', fontWeight: 900, lineHeight: .9,
          marginBottom: 14, letterSpacing: '-.02em',
        }}>
          <span style={{ display: 'block', color: '#fff' }}>{page.name}</span>
          <span style={{
            display: 'block',
            background: `linear-gradient(90deg,${GD} 0%,${GL} 40%,#FFF5B0 55%,${GD} 100%)`,
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'shimmer 4s linear infinite',
          }}>Çilingir Hizmeti</span>
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.62)', lineHeight: 1.55, marginBottom: 20 }}>
          {page.name} bölgesinde ortalama{' '}
          <span style={{ color: '#E5951E', fontWeight: 700 }}>20-30 dk</span>{' '}
          içinde profesyonel çilingir.
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

/* ── Intro ──────────────────────────────────────────────────────────────────── */
function DistrictIntro({ page }) {
  const ctx = DISTRICT_CTX[page.districtName] || page.districtName;
  const text = page.content?.intro || (
    page.isNeighborhood
      ? `${ctx} ilçesinde yer alan ${page.name} mahallesinde kapıda kalmak artık sorun değil. Çilingirciniz olarak ${page.name} genelinde 7/24 acil kapı açma, kilit değişimi, çelik kapı sistemleri ve oto çilingir hizmetleri sunuyoruz. Ortalama 20-30 dakikada yanınızdayız.`
      : `${ctx} ilçesinde 7/24 acil çilingir hizmetine mi ihtiyacınız var? Çilingirciniz, ${page.name} genelinde kapı açma, kilit değişimi, çelik kapı sistemleri ve oto çilingir hizmetleri sunmaktadır. Tüm mahallelere ortalama 20-30 dakikada ulaşıyoruz.`
  );

  return (
    <section aria-label="hizmet tanıtımı" style={{ padding: '28px 20px 8px' }}>
      <p style={{
        fontSize: 13.5, color: 'rgba(255,255,255,.65)', lineHeight: 1.75,
        borderLeft: `3px solid ${GD}`, paddingLeft: 14,
      }}>
        {text}
      </p>
      {page.isNeighborhood && page.content?.landmark && (
        <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.42)', lineHeight: 1.6, marginTop: 10, paddingLeft: 17 }}>
          <MapPin size={11} color={GD} style={{ marginRight: 5, verticalAlign: 'middle' }} />
          <strong style={{ color: 'rgba(255,255,255,.6)' }}>Yakın nokta:</strong>{' '}
          {page.content.landmark}
          {page.content.transport && (
            <> &nbsp;·&nbsp; <strong style={{ color: 'rgba(255,255,255,.6)' }}>Ulaşım:</strong> {page.content.transport}</>
          )}
        </p>
      )}
    </section>
  );
}

/* ── Services list (district only) ─────────────────────────────────────────── */
function ServicesList({ services, name }) {
  return (
    <section aria-label={`${name} çilingir hizmetleri`} style={{ padding: '20px 20px 4px' }}>
      <SectionHeader eyebrow="HİZMETLERİMİZ" title={`${name}'de Sunduğumuz Hizmetler`} />
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {services.map((s, i) => (
          <li key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px', borderRadius: 10,
            background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)',
          }}>
            <CheckCircle size={14} color={GD} />
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,.78)' }}>{s}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── How it works ───────────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { Icon: Phone,         title: 'Bizi Arayın',         desc: '0542 694 69 20\'yi arayın veya WhatsApp\'tan yazın. Konumunuzu bildirin.' },
    { Icon: Zap,           title: 'Hızlı Yönlendirme',   desc: 'En yakın teknisyen anında yola çıkar. Tahmini varış süresini bildiririz.' },
    { Icon: CheckCircle,   title: 'Sorun Çözülür',        desc: 'Kapınız açılır veya kilit değiştirilir. Gizli ücret yoktur.' },
  ];
  return (
    <section aria-label="nasıl çalışır" style={{ padding: '24px 20px 8px' }}>
      <SectionHeader eyebrow="NASIL ÇALIŞIR" title="3 Adımda Çözüm" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {steps.map(({ Icon, title, desc }, i) => (
          <div key={i} style={{
            display: 'flex', gap: 14, alignItems: 'flex-start',
            padding: '14px', borderRadius: 12,
            background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: `rgba(212,175,55,.1)`, border: `1px solid rgba(212,175,55,.25)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={16} color={GD} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{title}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Local context (landmarks, transport, scenario) ────────────────────────── */
function LocalContext({ page }) {
  const c = page.content;
  return (
    <section aria-label="yerel bilgi" style={{ padding: '20px 20px 8px' }}>
      <SectionHeader
        eyebrow="BÖLGE BİLGİSİ"
        title={page.isNeighborhood ? `${page.name} Hakkında` : `${page.name} İlçesinde Hizmet`}
      />
      <div style={{
        padding: '16px', borderRadius: 12,
        background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        {c.landmarks && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <MapPin size={14} color={GD} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: GD, letterSpacing: '.1em', marginBottom: 3 }}>ÖNE ÇIKAN NOKTALAR</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.5 }}>{c.landmarks}</div>
            </div>
          </div>
        )}
        {c.transport && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Zap size={14} color={GD} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: GD, letterSpacing: '.1em', marginBottom: 3 }}>ULAŞIM</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.5 }}>{c.transport}</div>
            </div>
          </div>
        )}
        {c.scenario && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Shield size={14} color={GD} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: GD, letterSpacing: '.1em', marginBottom: 3 }}>ACİL DURUM</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.5 }}>{c.scenario}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Nearby areas ───────────────────────────────────────────────────────────── */
function NearbyAreas({ page }) {
  if (!page.nearby || page.nearby.length === 0) return null;
  const label   = page.isNeighborhood ? 'YAKIN MAHALLELER' : 'MAHALLE HİZMETLERİ';
  const title   = page.isNeighborhood ? `${page.districtName} Bölgesindeki Diğer Mahalleler` : `${page.name} Mahalleleri`;
  return (
    <section aria-label={label.toLowerCase()} style={{ padding: '20px 20px 8px' }}>
      <SectionHeader eyebrow={label} title={title} />
      {page.isNeighborhood && (
        <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.45)', marginBottom: 14, lineHeight: 1.5 }}>
          <a href={`/${page.districtPath}`} style={{ color: GD, fontWeight: 600 }}>
            {page.districtName} Çilingir
          </a>{' '}
          sayfasına dönerek ilçe genelinde tüm hizmetlerimizi inceleyebilirsiniz.
        </p>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {page.nearby.map((n, i) => (
          <a key={i} href={`/${n.path}`} className="pill" style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '8px 13px', borderRadius: 100,
            background: 'rgba(212,175,55,.06)', border: '1px solid rgba(212,175,55,.18)',
            fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,.76)',
          }}>
            <MapPin size={11} color={GD} />
            {n.name}
          </a>
        ))}
      </div>
    </section>
  );
}

/* ── Page-specific FAQ ──────────────────────────────────────────────────────── */
function PageFAQ({ faq, name }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section aria-label={`${name} sık sorulan sorular`} style={{ padding: '24px 20px 12px' }}>
      <SectionHeader eyebrow="SSS" title={`${name} Çilingir — Sık Sorulan Sorular`} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {faq.map(({ q, a }, i) => (
          <div key={i} style={{
            borderRadius: 12,
            background: 'rgba(255,255,255,.03)', border: `1px solid ${openIdx === i ? 'rgba(212,175,55,.35)' : 'rgba(255,255,255,.07)'}`,
            overflow: 'hidden', transition: 'border-color .2s',
          }}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              aria-expanded={openIdx === i}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 16px', background: 'none', border: 'none',
                fontSize: 13, fontWeight: 600, color: '#fff', textAlign: 'left', cursor: 'pointer',
                gap: 12,
              }}
            >
              <span>{q}</span>
              <Key size={14} color={GD} style={{
                flexShrink: 0,
                transform: openIdx === i ? 'rotate(90deg)' : 'none',
                transition: 'transform .2s',
              }} />
            </button>
            {openIdx === i && (
              <div style={{ padding: '0 16px 14px', fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.65 }}>
                {a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
