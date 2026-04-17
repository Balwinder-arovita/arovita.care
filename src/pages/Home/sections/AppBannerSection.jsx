export default function AppBannerSection() {
  return (
    <section className="app-cta">
      <div className="app-cta-orb acorb1"></div>
      <div className="app-cta-orb acorb2"></div>
      <div className="container">
        <div className="app-cta-in fu">

          {/* Left */}
          <div className="app-cta-text">
            <div className="sec-label" style={{ color: 'var(--gl)' }}>Mobile App</div>
            <h2 className="app-cta-h">Your health, in your <em>pocket.</em></h2>
            <p className="app-cta-p">Book consultations, track prescriptions, monitor vitals, and stay connected with your care team — all from the Arovita app.</p>
            <div className="app-btns">
              <div className="app-btn-pill">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div>
                  <div style={{ fontSize: '9px', opacity: .7, lineHeight: 1 }}>Coming Soon on</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', lineHeight: 1.3 }}>App Store</div>
                </div>
              </div>
              <div className="app-btn-pill">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M3.18 23.76c.3.17.65.19.97.07l11.44-6.61-2.5-2.5-9.91 9zM.5 1.26C.19 1.6 0 2.1 0 2.73v18.54c0 .63.19 1.13.5 1.47l.08.07 10.39-10.39v-.24L.58 1.19.5 1.26zm16.85 11.28-2.61-1.5-2.85 2.85 2.85 2.84 2.63-1.52c.75-.43.75-1.13-.02-1.67zM4.15.24 15.6 6.85l-2.5 2.5-8.95-9.11z"/></svg>
                <div>
                  <div style={{ fontSize: '9px', opacity: .7, lineHeight: 1 }}>Coming Soon on</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', lineHeight: 1.3 }}>Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — mock phone UI */}
          <div className="app-cta-phone fu d2">
            <div className="acp-frame">
              <div className="acp-notch"></div>
              <div className="acp-screen">
                <div className="acp-top-bar">
                  <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--dark)' }}>Arovita</span>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--g)' }}></div>
                    <span style={{ fontSize: '9px', color: 'var(--g)', fontWeight: '700' }}>Live</span>
                  </div>
                </div>
                <div className="acp-greeting">Good morning 👋</div>
                <div className="acp-card acp-card-green">
                  <div style={{ fontSize: '10px', fontWeight: '700', opacity: .75, marginBottom: '4px' }}>Next Appointment</div>
                  <div style={{ fontSize: '13px', fontWeight: '800' }}>Dr. Priya Sharma</div>
                  <div style={{ fontSize: '10px', opacity: .7, marginTop: '2px' }}>Today · 4:30 PM · Video</div>
                </div>
                <div className="acp-row">
                  <div className="acp-tile">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    <div style={{ fontSize: '9px', fontWeight: '700', color: 'var(--dark)', marginTop: '4px' }}>Vitals</div>
                  </div>
                  <div className="acp-tile">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <div style={{ fontSize: '9px', fontWeight: '700', color: 'var(--dark)', marginTop: '4px' }}>Records</div>
                  </div>
                  <div className="acp-tile">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><path d="M9 3H5a2 2 0 00-2 2v4h18V5a2 2 0 00-2-2h-4M15 3V1M9 3V1"/></svg>
                    <div style={{ fontSize: '9px', fontWeight: '700', color: 'var(--dark)', marginTop: '4px' }}>Book</div>
                  </div>
                  <div className="acp-tile">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
                    <div style={{ fontSize: '9px', fontWeight: '700', color: 'var(--dark)', marginTop: '4px' }}>Alerts</div>
                  </div>
                </div>
                <div className="acp-card acp-card-light">
                  <div style={{ fontSize: '10px', color: 'var(--muted)', marginBottom: '6px', fontWeight: '600' }}>HRV · Last scan</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--dark)', fontFamily: "'Playfair Display',serif" }}>72 <span style={{ fontSize: '10px', fontWeight: '500', color: 'var(--muted)' }}>bpm</span></div>
                    <div style={{ flex: 1 }}>
                      <svg viewBox="0 0 80 24" fill="none" width="100%" height="24"><polyline points="0,12 12,12 18,4 24,20 30,4 36,20 42,12 56,12 80,12" stroke="var(--g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div style={{ fontSize: '9px', fontWeight: '700', color: 'var(--g)', background: 'var(--gp)', padding: '2px 7px', borderRadius: '20px' }}>Normal</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="acp-glow"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
