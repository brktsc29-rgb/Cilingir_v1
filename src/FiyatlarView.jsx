import React, { useState, useEffect } from 'react';
import { Key, Car, Lock, Shield, Clock, Phone, ChevronRight } from 'lucide-react';
import {
  CSS, BG, GL, GD, TEL, TEL_DISPLAY, WA, BASE_URL,
  Navbar, MobileMenu, StickyBar, SectionHeader, setSEO,
} from './shared';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Çilingir Hizmetleri',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Çilingirciniz',
    telephone: '+905426946920',
    url: BASE_URL,
  },
  areaServed: ['Beşiktaş', 'Şişli', 'Sarıyer', 'Kağıthane', 'Eyüpsultan'],
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: { '@type': 'ContactPoint', telephone: '+905426946920', contactType: 'customer service' },
  },
};

const SERVICES = [
  {
    Icon: Key,
    title: 'Kapı Açma',
    desc: 'Ev, iş yeri veya bina giriş kapısı. Hasarsız açma öncelikli yaklaşım.',
    items: ['Standart silindir kilit', 'Çelik kapı açma', 'Kart sistemli kapı', 'Çoklu kilit sistemleri'],
    note: 'En sık talep edilen hizmetimiz.',
  },
  {
    Icon: Car,
    title: 'Oto Çilingir',
    desc: 'Araç kapısı açma ve oto kilit hizmetleri. Marka ve modele uygun ekipman.',
    items: ['Tüm marka araçlar', 'Elektrikli kilit sistemleri', 'Alarm tetiklemeden açma', 'Kontak anahtarı'],
    note: 'Araç marka/modelini önceden bildirin.',
  },
  {
    Icon: Lock,
    title: 'Kilit Değişimi',
    desc: 'Taşınma, anahtar kaybı veya güvenlik yükseltme için profesyonel kilit değişimi.',
    items: ['A/B sınıfı silindir kilitler', 'Anti-drill / anti-pick', 'Çift silindirli sistemler', 'Garantili ürünler'],
    note: 'Parça + işçilik dahil fiyat verilir.',
  },
  {
    Icon: Shield,
    title: 'Çelik Kapı Kilitleri',
    desc: 'Çelik kapı kilit sistemleri kurulumu ve yenileme.',
    items: ['Çok noktalı kilitleme', 'Yüksek güvenlik silindiri', 'Kasa güçlendirme', 'RC2/RC3 uyumlu'],
    note: 'Ücretsiz yerinde değerlendirme.',
  },
];

export default function FiyatlarView() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSEO({
      title: 'Çilingir Fiyatları İstanbul | Çilingirciniz',
      desc: 'İstanbul Avrupa Yakası çilingir hizmet fiyatları. Kapı açma, kilit değişimi, oto çilingir. Şeffaf fiyat garantisi, telefonda net bilgi.',
      url: `${BASE_URL}/fiyatlar`,
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

        <div style={{ paddingTop: 80, padding: '80px 20px 0' }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.22em', marginBottom: 8 }}>
              ÇİLİNGİR HİZMET FİYATLARI
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: '#fff', letterSpacing: '-.01em', marginBottom: 10, lineHeight: 1.2 }}>
              Şeffaf Fiyat,<br />Sürpriz Yok
            </h1>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.5)', lineHeight: 1.65, maxWidth: 440 }}>
              Fiyatlar işlem türü, saat ve lokasyona göre değişir.
              Kesin fiyat için telefonda bilgi veririz, kapı açılmadan önce anlaşırız.
            </p>
          </div>

          {/* Fiyat uyarısı */}
          <div style={{
            background: 'rgba(212,175,55,.07)', border: '1px solid rgba(212,175,55,.3)',
            borderRadius: 12, padding: '14px 16px', marginBottom: 28,
            display: 'flex', alignItems: 'flex-start', gap: 10,
          }}>
            <Clock size={15} color={GD} style={{ marginTop: 1, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: GL, marginBottom: 3 }}>
                Gece / Tatil Tarifesi
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', lineHeight: 1.5 }}>
                23:00 – 07:00 arası, hafta sonu ve resmi tatillerde ek tarife uygulanabilir.
                Telefonda önceden bildirilir.
              </div>
            </div>
          </div>

          {/* Hizmet kartları */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {SERVICES.map((svc, i) => (
              <ServiceCard key={i} {...svc} />
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.2)',
            borderRadius: 16, padding: '22px 18px', marginBottom: 8,
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: GD, letterSpacing: '.16em', marginBottom: 8 }}>
              NET FİYAT İÇİN ARAYIN
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', lineHeight: 1.55, marginBottom: 16 }}>
              Hangi hizmet gerektiğini ve konumunuzu söyleyin,
              size hemen kesin fiyat verelim.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href={TEL} style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                height: 48, borderRadius: 12, textDecoration: 'none',
                background: `linear-gradient(135deg,${GD},${GL})`,
                fontSize: 12.5, fontWeight: 800, color: '#000',
              }}>
                <Phone size={14} color="#000" strokeWidth={2.5} />
                {TEL_DISPLAY}
              </a>
              <a href={WA} style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                height: 48, borderRadius: 12, textDecoration: 'none',
                background: 'rgba(37,211,102,.1)', border: '1px solid rgba(37,211,102,.25)',
                fontSize: 12.5, fontWeight: 700, color: '#25D366',
              }}>
                WhatsApp
              </a>
            </div>
          </div>

          <a href="/" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
            padding: '12px', fontSize: 12, color: GD, textDecoration: 'none',
          }}>
            Ana Sayfaya Dön <ChevronRight size={13} color={GD} />
          </a>
        </div>
        <StickyBar />
      </div>
    </>
  );
}

function ServiceCard({ Icon, title, desc, items, note }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,175,55,.15)',
      borderRadius: 14, padding: '16px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: `linear-gradient(135deg,${GD},${GL})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={17} color="#000" strokeWidth={2.5} />
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>{title}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 1 }}>{desc}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontSize: 11, color: 'rgba(255,255,255,.6)',
            background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 100, padding: '3px 10px',
          }}>{item}</span>
        ))}
      </div>
      <div style={{
        fontSize: 11, color: GD, fontWeight: 600,
        borderTop: '1px solid rgba(212,175,55,.1)', paddingTop: 8,
      }}>
        {note}
      </div>
    </div>
  );
}
