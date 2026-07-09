import React, { useState, useEffect } from 'react';
import { Shield, Clock, Star, Users, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import {
  CSS, BG, GL, GD, BASE_URL, TEL, TEL_DISPLAY, WA,
  Navbar, MobileMenu, StickyBar, setSEO, gtagEvent,
} from './shared';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Locksmith'],
      '@id': `${BASE_URL}/#business`,
      name: 'Çilingirciniz',
      description: 'İstanbul Avrupa Yakası\'nda 7/24 acil çilingir hizmeti. 10+ yıl deneyim, şeffaf fiyatlandırma, hasarsız açma garantisi.',
      url: BASE_URL,
      telephone: '+905380590173',
      image: `${BASE_URL}/images/hero.png`,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      areaServed: [
        { '@type': 'City', name: 'İstanbul' },
        { '@type': 'AdministrativeArea', name: 'Beşiktaş' },
        { '@type': 'AdministrativeArea', name: 'Şişli' },
        { '@type': 'AdministrativeArea', name: 'Sarıyer' },
        { '@type': 'AdministrativeArea', name: 'Kağıthane' },
        { '@type': 'AdministrativeArea', name: 'Eyüpsultan' },
      ],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', bestRating: '5', reviewCount: '127' },
      address: { '@type': 'PostalAddress', addressLocality: 'İstanbul', addressCountry: 'TR' },
      foundingDate: '2014',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Hakkımızda', item: `${BASE_URL}/hakkimizda` },
      ],
    },
  ],
};

const VALUES = [
  {
    Icon: Clock,
    title: 'Hız Taahhüdü',
    text: 'İstanbul Avrupa Yakası genelinde ortalama 20-30 dakika içinde yerinizdeyiz. Araçlarımız ilçe bazında konumlandırılmıştır; bekleme süresi minimize edilmiştir.',
  },
  {
    Icon: Shield,
    title: 'Hasarsız Açma Garantisi',
    text: 'Profesyonel ekipmanlarla kilit açma işlemlerinin büyük çoğunluğunu kapıya ve kilide zarar vermeden tamamlıyoruz. Müdahale öncesi yöntemi ve olası riskleri açıkça bildiririz.',
  },
  {
    Icon: CheckCircle,
    title: 'Şeffaf Fiyatlandırma',
    text: 'Fiyatı kapıya gelmeden telefonda belirliyoruz. Teknisyen geldiğinde farklı bir rakam söylememiz mümkün değil. Tüm hizmetlerde faturalandırma yapıyoruz.',
  },
  {
    Icon: Users,
    title: 'Kimliği Doğrulanmış Ekip',
    text: 'Teknisyenlerimiz resmi kimlik bilgisi ile iş yapar. Kapıyı açmadan önce isim ve araç plaka bilgisini talep etmeniz, güvenliğiniz açısından hem hakkınız hem önerimizdir.',
  },
  {
    Icon: Star,
    title: 'Garantili İşçilik',
    text: 'Kilit değişimi dahil tüm montaj işlerimizde işçilik garantisi veriyoruz. Montaj kaynaklı bir sorun yaşarsanız ücretsiz tekrar müdahale yapıyoruz.',
  },
];

const MILESTONES = [
  { year: '2014', text: 'Beşiktaş\'tan başladık, ilk haftamızda 12 müdahale.' },
  { year: '2016', text: 'Şişli ve Sarıyer\'e genişledik, araç sayısını ikiye çıkardık.' },
  { year: '2019', text: 'Kağıthane ve Eyüpsultan bölgelerine hizmet vermeye başladık.' },
  { year: '2022', text: '1.000. iş tamamlandı. Mahalle bazlı 74 sayfa ile dijital altyapı kuruldu.' },
  { year: '2024', text: '4.9/5 müşteri puanı, 127 değerlendirme. 10. yılımızda hâlâ aynı ekip.' },
];

export default function HakkimizdaView() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSEO({
      title: 'Hakkımızda | Çilingirciniz — İstanbul 7/24 Acil Çilingir',
      desc: '2014\'ten beri İstanbul Avrupa Yakası\'nda 7/24 acil çilingir hizmeti. 10+ yıl deneyim, şeffaf fiyat, hasarsız açma garantisi. Kimliği doğrulanmış ekip.',
      url: `${BASE_URL}/hakkimizda`,
      lang: 'tr',
      schema: SCHEMA,
    });
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div style={{
        background: BG, minHeight: '100vh', color: '#fff',
        fontFamily: '-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI","Helvetica Neue",sans-serif',
        overflowX: 'hidden', paddingBottom: 100,
      }}>
        <Navbar open={open} setOpen={setOpen} />
        {open && <MobileMenu onClose={() => setOpen(false)} />}

        {/* Hero */}
        <div style={{ paddingTop: 80, padding: '96px 20px 40px' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 10 }}>
              HAKKIMIZDA
            </div>
            <h1 style={{
              fontSize: 'clamp(26px,7vw,40px)', fontWeight: 900,
              lineHeight: 1.15, letterSpacing: '-.025em', color: '#fff', marginBottom: 18,
            }}>
              10 Yıldır Kapınızın<br />
              <span style={{ color: GL }}>Yanındayız</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,.65)', marginBottom: 28 }}>
              Çilingirciniz, 2014 yılında İstanbul Avrupa Yakası'nda kurulmuş bir acil çilingir ve kilit servisidir.
              Başlangıçtan bu yana değişmeyen tek şey vardır: kapıda kalan ya da kilidi arızalanan her müşteriye
              aynı günde, şeffaf fiyatla ve hasara yol açmadan çözüm üretmek.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href={TEL} onClick={() => gtagEvent('phone_click')} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 20px', borderRadius: 12,
                background: `linear-gradient(135deg,${GD},${GL})`,
                fontSize: 13, fontWeight: 800, color: '#000', textDecoration: 'none',
              }}>
                <Phone size={15} color="#000" strokeWidth={2.5} />
                {TEL_DISPLAY}
              </a>
              <a href={WA} onClick={() => gtagEvent('whatsapp_click')} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 20px', borderRadius: 12,
                background: 'rgba(255,255,255,.06)', border: '1px solid rgba(37,211,102,.25)',
                fontSize: 13, fontWeight: 700, color: '#25D366', textDecoration: 'none',
              }}>
                <MessageCircle size={15} color="#25D366" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ padding: '0 20px 48px' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12,
              padding: '20px', borderRadius: 16,
              background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.14)',
            }}>
              {[
                { val: '10+', label: 'Yıl Deneyim' },
                { val: '1.000+', label: 'Tamamlanan İş' },
                { val: '4.9/5', label: 'Müşteri Puanı' },
              ].map(({ val, label }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(20px,5vw,28px)', fontWeight: 900, color: GL, lineHeight: 1.1 }}>{val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ padding: '0 20px 48px' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 6 }}>
              ÇALIŞMA İLKELERİMİZ
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.01em', marginBottom: 24 }}>
              Her iş aynı standartta tamamlanır
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {VALUES.map(({ Icon, title, text }) => (
                <div key={title} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: '18px', borderRadius: 14,
                  background: 'rgba(255,255,255,.03)', border: '1px solid rgba(212,175,55,.1)',
                }}>
                  <div style={{
                    flexShrink: 0, width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(212,175,55,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={17} color={GL} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 5 }}>{title}</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'rgba(255,255,255,.58)', margin: 0 }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story / Timeline */}
        <div style={{ padding: '0 20px 48px' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 6 }}>
              HİKAYEMİZ
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.01em', marginBottom: 24 }}>
              Nereden nereye
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {MILESTONES.map(({ year, text }, i) => (
                <div key={year} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(212,175,55,.12)', border: `2px solid ${GD}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 800, color: GL,
                    }}>{year.slice(2)}</div>
                    {i < MILESTONES.length - 1 && (
                      <div style={{ width: 1, flexGrow: 1, minHeight: 24, background: 'rgba(212,175,55,.2)', margin: '4px 0' }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < MILESTONES.length - 1 ? 20 : 0, paddingTop: 7 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: GD, marginBottom: 4 }}>{year}</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'rgba(255,255,255,.6)', margin: 0 }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage */}
        <div style={{ padding: '0 20px 48px' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 6 }}>
              HİZMET BÖLGELERİ
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.01em', marginBottom: 16 }}>
              İstanbul Avrupa Yakası — 5 ilçe, 74 mahalle
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                { name: 'Beşiktaş Çilingir', path: 'besiktas-cilingir' },
                { name: 'Şişli Çilingir', path: 'sisli-cilingir' },
                { name: 'Sarıyer Çilingir', path: 'sariyer-cilingir' },
                { name: 'Kağıthane Çilingir', path: 'kagithane-cilingir' },
                { name: 'Eyüpsultan Çilingir', path: 'eyupsultan-cilingir' },
              ].map(d => (
                <a key={d.path} href={`/${d.path}`} className="pill" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 14px', borderRadius: 100,
                  background: 'rgba(212,175,55,.06)', border: '1px solid rgba(212,175,55,.18)',
                  fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.76)',
                  textDecoration: 'none',
                }}>
                  {d.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '0 20px 16px' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{
              padding: '28px 24px', borderRadius: 18,
              background: 'rgba(212,175,55,.07)', border: '1px solid rgba(212,175,55,.2)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.18em', marginBottom: 10 }}>
                7/24 ACİL HİZMET
              </div>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 20 }}>
                Kapıda mı kaldınız?<br />
                <span style={{ color: 'rgba(255,255,255,.6)', fontWeight: 400, fontSize: 14 }}>
                  Telefonda fiyat alın, 20-30 dakikada yanınızdayız.
                </span>
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <a href={TEL} onClick={() => gtagEvent('phone_click')} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 22px', borderRadius: 12,
                  background: `linear-gradient(135deg,${GD},${GL})`,
                  fontSize: 14, fontWeight: 800, color: '#000', textDecoration: 'none',
                }}>
                  <Phone size={15} color="#000" strokeWidth={2.5} />
                  Hemen Ara
                </a>
                <a href={WA} onClick={() => gtagEvent('whatsapp_click')} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 22px', borderRadius: 12,
                  background: 'rgba(255,255,255,.06)', border: '1px solid rgba(37,211,102,.25)',
                  fontSize: 14, fontWeight: 700, color: '#25D366', textDecoration: 'none',
                }}>
                  <MessageCircle size={15} color="#25D366" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <StickyBar />
      </div>
    </>
  );
}
