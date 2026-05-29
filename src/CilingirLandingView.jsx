import React, { useState } from 'react';
import { Clock, Phone, MessageCircle } from 'lucide-react';
import {
  CSS, TEL, TEL_DISPLAY, WA, GL, GD, BG,
  Navbar, MobileMenu, TrustCards, Services, Districts, SocialProof, StickyBar,
} from './shared';

export default function CilingirLandingView() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{CSS}</style>
      <div style={{
        background:BG,minHeight:'100vh',color:'#fff',
        fontFamily:'-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI","Helvetica Neue",sans-serif',
        overflowX:'hidden',paddingBottom:80,
      }}>
        <Navbar open={open} setOpen={setOpen}/>
        {open && <MobileMenu onClose={() => setOpen(false)}/>}
        <Hero/>
        <TrustCards/>
        <Services/>
        <Districts/>
        <SocialProof/>
        <StickyBar/>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section style={{
      position:'relative',paddingTop:64,
      minHeight:560,display:'flex',alignItems:'center',overflow:'hidden',
    }}>
      {/* Background image — key positioned right */}
      <div style={{
        position:'absolute',inset:0,
        backgroundImage:'url(/images/10902595-E9CD-474F-BD7D-A076279C1A41.png)',
        backgroundSize:'cover',
        backgroundPosition:'right center',
        backgroundRepeat:'no-repeat',
        zIndex:0,
      }}/>

      {/* Left→right overlay: text okunabilir, anahtar açık */}
      <div style={{
        position:'absolute',inset:0,zIndex:1,
        background:'linear-gradient(90deg,rgba(0,0,0,.93) 0%,rgba(0,0,0,.78) 28%,rgba(0,0,0,.18) 52%,transparent 70%)',
      }}/>

      {/* Alt fade */}
      <div style={{
        position:'absolute',bottom:0,left:0,right:0,height:160,zIndex:2,pointerEvents:'none',
        background:'linear-gradient(180deg,transparent 0%,rgba(0,0,0,.95) 100%)',
      }}/>

      {/* İçerik — sol %55 ile sınırlı, sağda anahtar görünür */}
      <div style={{
        position:'relative',zIndex:3,
        width:'clamp(200px, 55%, 340px)',
        padding:'28px 16px 48px 20px',
      }}>
        <div style={{marginBottom:16,animation:'fadeUp .55s ease both'}}>
          <span style={{
            display:'inline-flex',alignItems:'center',gap:7,
            background:'rgba(212,175,55,.07)',border:'1px solid rgba(212,175,55,.24)',
            borderRadius:100,padding:'7px 14px',
            fontSize:11,fontWeight:700,color:GD,letterSpacing:'.1em',
          }}>
            <Clock size={12} color={GD}/>
            7/24 ACİL ÇİLİNGİR
          </span>
        </div>

        <div style={{animation:'fadeUp .65s ease .1s both'}}>
          <h1 style={{
            fontSize:'clamp(34px,10vw,54px)',fontWeight:900,lineHeight:.9,
            marginBottom:16,letterSpacing:'-.02em',
          }}>
            <span style={{display:'block',color:'#fff'}}>Kapıda mı</span>
            <span style={{
              display:'block',
              background:`linear-gradient(90deg,${GD} 0%,${GL} 40%,#FFF5B0 55%,${GD} 100%)`,
              backgroundSize:'200% auto',
              WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',
              animation:'shimmer 4s linear infinite',
            }}>kaldınız?</span>
          </h1>

          <p style={{fontSize:13.5,color:'rgba(255,255,255,.6)',lineHeight:1.6,marginBottom:20}}>
            İstanbul genelinde ortalama{' '}
            <span style={{color:'#E5951E',fontWeight:700}}>20-30 dk</span>{' '}
            içinde profesyonel çözüm.
          </p>

          <a href={TEL} className="bp" style={{
            display:'flex',alignItems:'center',gap:12,
            padding:'0 14px',height:60,borderRadius:12,marginBottom:10,
            background:`linear-gradient(135deg,${GD} 0%,${GL} 50%,${GD} 100%)`,
            backgroundSize:'200% auto',
            boxShadow:'0 5px 22px rgba(212,175,55,.42),inset 0 1px 0 rgba(255,255,255,.25)',
          }}>
            <Phone size={17} color="#000" strokeWidth={2.5}/>
            <div>
              <div style={{fontSize:11.5,fontWeight:900,color:'rgba(0,0,0,.7)',letterSpacing:'.12em',lineHeight:1}}>HEMEN ARA</div>
              <div style={{fontSize:14.5,fontWeight:900,color:'#000',letterSpacing:'.02em'}}>{TEL_DISPLAY}</div>
            </div>
          </a>

          <a href={WA} className="bp" style={{
            display:'flex',alignItems:'center',gap:12,
            padding:'0 14px',height:60,borderRadius:12,
            background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',
          }}>
            <MessageCircle size={17} color="#25D366"/>
            <div>
              <div style={{fontSize:11.5,fontWeight:800,color:'#fff',letterSpacing:'.08em',lineHeight:1}}>WHATSAPP'TAN YAZ</div>
              <div style={{fontSize:11.5,color:'rgba(255,255,255,.42)',marginTop:2}}>Hızlı destek alın</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
