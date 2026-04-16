const ArrowSvg = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
const ChevronSvg = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>;

export default function HmsHero() {
  return (
    <section className="hms-hero" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
      <div className="hero-mesh">
        <div className="mesh-orb mo1"></div>
        <div className="mesh-orb mo2"></div>
        <div className="mesh-orb mo3"></div>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Force the inner wrapper to center all children */}
        <div className="hms-hero-in" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          <div className="hero-left fu" style={{ padding: '0', margin: '0', textAlign: 'center' }}>

            {/* 1. Badge */}
            <div className="hero-badge" style={{ margin: '0 auto 24px' }}>
              <div className="hero-badge-dot"></div>
              <span>Hospital Management System</span>
            </div>

            {/* 2. Heading */}
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>
              Run Your Hospital <em>Smarter,</em> Not Harder
            </h1>

            {/* 3. Sub-heading (Fixed Centering) */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--muted)',
              marginTop: '20px',
              lineHeight: '1.7',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '720px'
            }}>
              Arovita HMS is a comprehensive, cloud-based platform that unifies patient management, appointments, billing, lab, pharmacy, and staff operations — in one elegant system built for modern Indian healthcare.
            </p>

            {/* 4. Buttons */}
            <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '35px' }}>
              {/* <a href="mailto:hello@arovita.care" className="btn-green">Request a Demo <ArrowSvg /></a> */}
              <a href="#modules" className="btn-ghost">Explore Modules <ChevronSvg /></a>
            </div>

            {/* 5. Trust Row */}
            <div className="hero-trust-row" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '50px' }}>
              {['Secure Platform', 'Digital Records', 'Cloud Hosted', 'Role-Based Access'].map((tag, i) => (
                <div className="htag" key={i} style={{ margin: '0' }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    {i < 3 ? <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> : <><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></>}
                  </svg>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}