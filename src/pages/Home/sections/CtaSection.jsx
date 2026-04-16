export default function CtaSection() {
  return (
    <section className="app-cta" id="get-started">
      <div className="app-cta-orb ao1"></div>
      <div className="app-cta-orb ao2"></div>
      <div className="container">
        <div className="app-cta-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '36px' }}>
          <div className="app-cta-text sl-left" style={{ maxWidth: '620px' }}>
            <div className="sec-label">Get Started</div>
            <h2 className="app-cta-h">Start your connected <em>healthcare journey.</em></h2>
            <p className="app-cta-p">Access our unified ecosystem designed for patients and providers to work together seamlessly.</p>

            <div className="app-btns" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="app-dl-btn" style={{ background: 'var(--g)', border: 'none' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div className="app-dl-btn-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Open Platform</div>
                  <div className="app-dl-btn-main" style={{ color: 'white' }}>Explore Platform</div>
                </div>
              </a>
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)', marginTop: '24px', lineHeight: '1.7' }}>
              Join thousands of users already managing their health records and consultations in one secure place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}