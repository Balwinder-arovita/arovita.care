export default function MissionSection() {
  return (
    <section className="mission">
      <div className="mission-orb morb1"></div>
      <div className="mission-orb morb2"></div>
      <svg className="mission-bg-svg" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="pgrid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0V50H0" fill="none" stroke="white" strokeWidth=".5"/></pattern></defs>
        <rect width="1440" height="600" fill="url(#pgrid)"/>
      </svg>
      <div className="container">
        <div className="mission-in">
          <div className="ecg-display sl-left">
            <div className="ecg-header">
              <div className="ecg-brand">Digital Health Records</div>
              <div className="ecg-live"><div className="ecg-live-dot"></div>LINKED</div>
            </div>
            <div className="ecg-screen">
              <svg className="ecg-line-svg" viewBox="0 0 420 60" fill="none">
                <line x1="0" y1="30" x2="420" y2="30" stroke="rgba(46,196,138,0.1)" strokeWidth=".5"/>
                <line x1="0" y1="15" x2="420" y2="15" stroke="rgba(46,196,138,0.07)" strokeWidth=".5"/>
                <line x1="0" y1="45" x2="420" y2="45" stroke="rgba(46,196,138,0.07)" strokeWidth=".5"/>
                <path className="ecg-animated" d="M0,30 L40,30 L55,30 L64,10 L72,50 L80,10 L88,50 L96,30 L116,30 L130,30 L140,18 L146,42 L152,18 L158,42 L164,30 L420,30" stroke="#2EC48A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="ecg-glow"></div>
            </div>
            <div className="ecg-metrics">
              <div className="ecg-m">
                <div className="ecg-m-val" style={{fontSize:'13px',lineHeight:'1.3'}}>Records</div>
                <div className="ecg-m-lbl">Linked Records</div>
                <div className="ecg-m-status normal">● Active</div>
              </div>
              <div className="ecg-m">
                <div className="ecg-m-val" style={{fontSize:'13px',lineHeight:'1.3'}}>Secure</div>
                <div className="ecg-m-lbl">Data Sharing</div>
                <div className="ecg-m-status normal">● Encrypted</div>
              </div>
              <div className="ecg-m">
                <div className="ecg-m-val" style={{fontSize:'13px',lineHeight:'1.3'}}>Unified</div>
                <div className="ecg-m-lbl">Health History</div>
                <div className="ecg-m-status normal">● Connected</div>
              </div>
            </div>
            <div style={{marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,.35)'}}>Interoperable across providers</div>
              <div className="play-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
            </div>
          </div>

          <div className="mission-content sl-right">
            <div className="sec-label" style={{color:'var(--gl)'}}>Health Management</div>
            <h2 className="mission-title">Unified <em>Healthcare Platform</em></h2>
            <p className="mission-desc">Arovita connects all your health records securely across doctors, labs, and home care services.</p>
            <div className="mission-pts">
              {['Connected health records','Secure data sharing','Unified health history','Seamless care coordination'].map((t,i) => (
                <div className="mp2" key={i}>
                  <div className="mp2-dot"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2EC48A" strokeWidth="2.2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  {t}
                </div>
              ))}
            </div>
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-green">Explore Your Health Records <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}
