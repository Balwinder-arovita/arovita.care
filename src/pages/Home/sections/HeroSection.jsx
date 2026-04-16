import hero1 from '../../../assets/hero1.jpg';
import hero2 from '../../../assets/hero2.jpg';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-mesh">
        <div className="mesh-orb mo1"></div>
        <div className="mesh-orb mo2"></div>
        <div className="mesh-orb mo3"></div>
      </div>
      <div className="hero-grid"></div>
      <div className="container hero-inner">
        {/* LEFT */}
        <div>
          <div className="hero-tag">
            <div className="htag-live"></div>
            One platform for continuous healthcare.
          </div>
          <h1 className="hero-h">
            <span className="line"><span className="word">One</span> <span className="word">platform</span></span>
            <span className="line"><span className="word">for</span> <span className="word"><em>continuous</em></span></span>
            <span className="line"><span className="word">healthcare.</span></span>
          </h1>
          <p className="hero-p">From booking a consultation to follow-ups, Arovita keeps every step of your healthcare journey connected.</p>
          <div className="hero-btns">
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-green">Explore Platform <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            {/* <a href="#" className="btn-outline" onClick={(e) => e.preventDefault()} style={{cursor:'default',opacity:.65}}>Download App — Coming Soon</a> */}
          </div>
          <div className="hero-trust">
            <div className="trust-avs">
              <div className="trust-av">A</div><div className="trust-av">R</div><div className="trust-av">V</div><div className="trust-av">T</div>
              <div className="trust-av" style={{background:'linear-gradient(135deg,var(--g),var(--gl))',color:'white',fontSize:'8px'}}>★</div>
            </div>
            <div>
              <div className="trust-stars">★★★★★</div>
              <div className="trust-text">Trusted by patients in Bengaluru</div>
            </div>
            <div className="trust-sep"></div>
            <div className="hero-certs">
              {/* <div style={{fontSize:'11px',color:'var(--muted)',fontWeight:600,letterSpacing:'.3px'}}>ABDM · ABHA · Bengaluru</div> */}
              <div style={{fontSize:'11px',color:'var(--hint)',marginTop:'2px'}}>Digital Health Platform</div>
            </div>
          </div>

          {/* Mobile hero stats */}
          <div className="hero-mobile-stats">
            <div className="hms-card">
              <div className="hms-ic" style={{background:'rgba(46,196,138,.1)'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1A7A5A" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div>
                <div className="hms-num" style={{fontSize:'14px',color:'var(--g)'}}>Consult</div>
                <div className="hms-lbl">Doctors Online</div>
              </div>
            </div>
            <div className="hms-card">
              <div className="hms-ic" style={{background:'rgba(192,154,82,.08)'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C09A52" strokeWidth="2" strokeLinecap="round"><path d="M6 2v6l-2 4a6 6 0 0012 0L14 8V2"/><path d="M6 2h8"/></svg>
              </div>
              <div>
                <div className="hms-num" style={{fontSize:'14px',color:'var(--gold)'}}>Lab Tests</div>
                <div className="hms-lbl">At Your Door</div>
              </div>
            </div>
            <div className="hms-card">
              <div className="hms-ic" style={{background:'rgba(26,122,90,.08)'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1A7A5A" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
              </div>
              <div>
                <div className="hms-num" style={{fontSize:'14px',color:'var(--g)'}}>In-Clinic</div>
                <div className="hms-lbl">Book Visits</div>
              </div>
            </div>
            <div className="hms-card">
              <div className="hms-ic" style={{background:'rgba(46,196,138,.08)'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2EC48A" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div className="hms-num" style={{fontSize:'14px',color:'var(--gl)'}}>Wellness</div>
                <div className="hms-lbl">Stay Healthy</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Photo illustration with leaves */}
        <div className="hero-right">
          <div className="hero-photo-wrap">
            {/* Organic border frame SVG */}
            <svg className="hero-frame-svg" viewBox="0 0 440 520" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M220 8 C320 8 400 20 416 60 C432 100 432 160 430 220 C428 280 432 340 420 390 C408 440 370 470 320 490 C270 510 170 510 120 490 C70 470 32 440 20 390 C8 340 12 280 10 220 C8 160 8 100 24 60 C40 20 120 8 220 8Z" 
                stroke="#1A7A5A" strokeWidth="2" fill="none" strokeLinecap="round" className="hero-frame-path"/>
              {/* Inner glow border */}
              <path d="M220 22 C310 22 384 32 398 66 C412 100 416 156 414 220 C412 284 416 332 406 380 C396 428 362 456 316 476 C270 496 170 496 124 476 C78 456 44 428 34 380 C24 332 28 284 26 220 C24 156 28 100 42 66 C56 32 130 22 220 22Z" 
                stroke="rgba(46,196,138,0.25)" strokeWidth="8" fill="rgba(232,248,240,0.3)" strokeLinecap="round"/>
              {/* Decorative dot at top */}
              <circle cx="220" cy="8" r="5" fill="#1A7A5A" className="hero-frame-dot"/>
            </svg>

            {/* Photo 1 — Female doctor (top-left) */}
            <div className="hero-photo hero-photo-1">
              <img src={hero1} alt="Healthcare professional providing teleconsultation" />
            </div>

            {/* Photo 2 — Male doctors (bottom-right) */}
            <div className="hero-photo hero-photo-2">
              <img src={hero2} alt="Medical team of doctors and nurses" />
            </div>

            {/* Decorative animated leaves */}
            <svg className="hero-leaf leaf-1" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 0 C45 20 55 45 30 80 C5 45 15 20 30 0Z" fill="rgba(46,196,138,0.18)" stroke="rgba(26,122,90,0.3)" strokeWidth="1"/>
              <path d="M30 10 L30 65" stroke="rgba(26,122,90,0.2)" strokeWidth="1"/>
            </svg>
            <svg className="hero-leaf leaf-2" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 0 C38 18 46 40 25 70 C4 40 12 18 25 0Z" fill="rgba(46,196,138,0.15)" stroke="rgba(26,122,90,0.25)" strokeWidth="1"/>
              <path d="M25 8 L25 56" stroke="rgba(26,122,90,0.18)" strokeWidth="1"/>
            </svg>
            <svg className="hero-leaf leaf-3" viewBox="0 0 45 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 0 C34 15 40 35 22 62 C4 35 10 15 22 0Z" fill="rgba(46,196,138,0.2)" stroke="rgba(26,122,90,0.3)" strokeWidth="1"/>
              <path d="M22 7 L22 50" stroke="rgba(26,122,90,0.2)" strokeWidth="1"/>
            </svg>
            <svg className="hero-leaf leaf-4" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0 C30 13 36 30 20 55 C4 30 10 13 20 0Z" fill="rgba(46,196,138,0.14)" stroke="rgba(26,122,90,0.22)" strokeWidth="1"/>
              <path d="M20 6 L20 44" stroke="rgba(26,122,90,0.16)" strokeWidth="1"/>
            </svg>
            <svg className="hero-leaf leaf-6" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0 C28 12 34 28 19 52 C4 28 10 12 19 0Z" fill="rgba(46,196,138,0.12)" stroke="rgba(26,122,90,0.2)" strokeWidth="1"/>
              <path d="M19 6 L19 42" stroke="rgba(26,122,90,0.14)" strokeWidth="1"/>
            </svg>

            {/* Floating info cards */}
            <div className="hfc hfc1">
              <div className="hfc-ic" style={{background:'rgba(46,196,138,.12)'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1A7A5A" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div>
                <div className="hfc-num" style={{fontSize:'13px',color:'var(--g)'}}>Video-Consult</div>
                <div className="hfc-lbl">Doctors Online</div>
              </div>
            </div>
            <div className="hfc hfc2">
              <div className="hfc-ic" style={{background:'rgba(192,154,82,.1)'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C09A52" strokeWidth="2" strokeLinecap="round"><path d="M6 2v6l-2 4a6 6 0 0012 0L14 8V2"/><path d="M6 2h8"/></svg>
              </div>
              <div>
                <div className="hfc-num" style={{fontSize:'13px',color:'var(--gold)'}}>Lab Tests</div>
                <div className="hfc-lbl">Doorstep Collection</div>
              </div>
            </div>
            <div className="hfc hfc3">
              <div className="hfc-ic" style={{background:'rgba(26,122,90,.1)'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1A7A5A" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
              </div>
              <div>
                <div className="hfc-num" style={{fontSize:'13px',color:'var(--g)'}}>In-Clinic</div>
                <div className="hfc-lbl">Book Visits</div>
              </div>
            </div>
            <div className="hfc hfc4">
              <div className="hfc-ic" style={{background:'rgba(46,196,138,.1)'}}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2EC48A" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div className="hfc-num" style={{fontSize:'13px',color:'var(--gl)'}}>Detailed</div>
                <div className="hfc-lbl">Digital Records</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
