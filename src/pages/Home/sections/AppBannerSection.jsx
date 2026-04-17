import advertImg from '../../../assets/advert.png';

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
            <div className="app-coming-soon">
              <div className="app-cs-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--gl)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--gl)', textTransform: 'uppercase', letterSpacing: '1px' }}>Coming Soon</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.55)', marginTop: '2px' }}>Available on iOS & Android</div>
              </div>
            </div>
          </div>

          {/* Right — real app screenshot */}
          <div className="app-cta-phone fu d2">
            <img
              src={advertImg}
              alt="Arovita app preview"
              className="app-advert-img"
            />
            <div className="acp-glow"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
