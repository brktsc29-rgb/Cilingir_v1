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
      <div style={{
        position:'absolute',inset:0,
        backgroundImage:'url(/images/10902595-E9CD-474F-BD7D-A076279C1A41.png)',
        backgroundSize:'cover',backgroundPosition:'center right',backgroundRepeat:'no-repeat',
        zIndex:0,
      }}/>
      <div style={{
        position:'absolute',inset:0,zIndex:1,
        background:'linear-gradient(90deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.78) 35%,rgba(0,0,0,.35) 70%,transparent 100%)',
      }}/>
      <div style={{
        position:'absolute',bottom:0,left:0,right:0,height:160,zIndex:2,pointerEvents:'none',
        background:'linear-gradient(180deg,transparent 0%,rgba(0,0,0,.95) 100%)',
      }}/>

      <div style={{position:'relative',zIndex:3,width:'100%',maxWidth:380,padding:'28px 20px 48px'}}>
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
            fontSize:'clamp(38px,11vw,54px)',fontWeight:900,lineHeight:.9,
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

          <p style={{fontSize:14,color:'rgba(255,255,255,.6)',lineHeight:1.65,marginBottom:22,maxWidth:260}}>
            İstanbul'un birçok noktasında ortalama{' '}
            <span style={{color:'#E5951E',fontWeight:700}}>20-30 dakika</span>{' '}
            içinde profesyonel çözüm.
          </p>

          <a href={TEL} className="bp" style={{
            display:'flex',alignItems:'center',gap:14,
            padding:'0 18px',height:60,borderRadius:12,marginBottom:10,
            background:`linear-gradient(135deg,${GD} 0%,${GL} 50%,${GD} 100%)`,
            backgroundSize:'200% auto',
            boxShadow:'0 5px 22px rgba(212,175,55,.42),inset 0 1px 0 rgba(255,255,255,.25)',
            maxWidth:290,
          }}>
            <Phone size={18} color="#000" strokeWidth={2.5}/>
            <div>
              <div style={{fontSize:12.5,fontWeight:900,color:'rgba(0,0,0,.7)',letterSpacing:'.12em',lineHeight:1}}>HEMEN ARA</div>
              <div style={{fontSize:16,fontWeight:900,color:'#000',letterSpacing:'.04em'}}>{TEL_DISPLAY}</div>
            </div>
          </a>

          <a href={WA} className="bp" style={{
            display:'flex',alignItems:'center',gap:14,
            padding:'0 18px',height:60,borderRadius:12,
            background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',
            maxWidth:290,
          }}>
            <MessageCircle size={18} color="#25D366"/>
            <div>
              <div style={{fontSize:12.5,fontWeight:800,color:'#fff',letterSpacing:'.08em',lineHeight:1}}>WHATSAPP'TAN YAZ</div>
              <div style={{fontSize:12,color:'rgba(255,255,255,.42)',marginTop:2}}>Hızlı destek alın</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
