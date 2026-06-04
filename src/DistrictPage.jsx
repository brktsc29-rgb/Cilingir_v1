import React, { useState, useEffect } from 'react';
import { Clock, Phone, MessageCircle, MapPin } from 'lucide-react';
import {
  CSS, TEL, TEL_DISPLAY, WA, GL, GD, BG, BASE_URL,
  Navbar, MobileMenu, TrustCards, Services, SocialProof, StickyBar, SectionHeader,
  setSEO,
} from './shared';

const DISTRICT_CTX = {
  'Beşiktaş': 'Avrupa yakasının prestijli ilçelerinden Beşiktaş',
  'Şişli': 'İstanbul’un iş ve eğlence merkezi Şişli',
  'Sarıyer': 'Boğaz kıyısındaki doğal güzellikte Sarıyer',
  'Kağıthane': 'Gelişen yapısıyla öne çıkan Kağıthane',
  'Eyüpsultan': 'Tarihi ve kültürel dokusuyla Eyüpsultan',
};

function getIntro(page) {
  const ctx = DISTRICT_CTX[page.districtName] || page.districtName;
  if (page.isNeighborhood) {
    return `${ctx} ilçesinde yer alan ${page.name} mahallesinde kapıda kalmak artık sorun değil. Taşcı Çilingir olarak ${page.name} genelinde 7/24 acil kapı açma, kilit değişimi, çelik kapı sistemleri ve oto çilingir hizmetleri sunuyoruz. Ortalama 20-30 dakikada yanınızdayız.`;
  }
  return `${ctx} ilçesinde 7/24 acil çilingir hizmetine mi ihtiyacınız var? Taşcı Çilingir, ${page.name} genelinde kapı açma, kilit değişimi, çelik kapı sistemleri ve oto çilingir hizmetleri sunmaktadır. Tüm mahallelere ortalama 20-30 dakikada ulaşıyoruz.`;
}

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
    setSEO({
      title: page.metaTitle,
      desc: page.metaDesc,
      url,
      lang: 'tr',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            'name': `Taşcı Çilingir - ${page.name}`,
            'description': page.metaDesc,
            'url': url,
            'telephone': '+905426946920',
            'image': `${BASE_URL}/images/hero.webp`,
            'priceRange': '₺₺',
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
              'opens': '00:00',
              'closes': '23:59',
            },
            'areaServed': { '@type': 'Place', 'name': `${page.name}, İstanbul` },
            'address': { '@type': 'PostalAddress', 'addressLocality': 'İstanbul', 'addressCountry': 'TR' },
            'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'bestRating': '5', 'reviewCount': '127' },
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': breadcrumbItems,
          },
        ],
      },
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
        <Navbar open={open} setOpen={setOpen} />
        {open && <MobileMenu onClose={() => setOpen(false)} />}
        <DistrictHero page={page} />
        <DistrictIntro page={page} />
        <TrustCards />
        <Services />
        <NearbyAreas page={page} />
        <SocialProof />
        <StickyBar />
      </div>
    </>
  );
}

function DistrictHero({ page }) {
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
          alt={`${page.name} çilingir hizmeti`}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right 20%', transform: 'scale(0.82)', transformOrigin: 'right 20%' }}
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

function DistrictIntro({ page }) {
  return (
    <section style={{ padding: '28px 20px 8px' }}>
      <p style={{
        fontSize: 13.5, color: 'rgba(255,255,255,.58)', lineHeight: 1.7,
        borderLeft: `3px solid ${GD}`, paddingLeft: 14,
      }}>
        {getIntro(page)}
      </p>
    </section>
  );
}

function NearbyAreas({ page }) {
  if (!page.nearby || page.nearby.length === 0) return null;
  return (
    <section style={{ padding: '0 20px 36px' }}>
      <SectionHeader
        eyebrow={page.isNeighborhood ? 'YAKIN BÖLGELER' : 'MAHALLE HİZMETLERİ'}
        title={page.isNeighborhood ? `${page.districtName} Bölgesi` : `${page.name} Mahalleleri`}
      />
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
