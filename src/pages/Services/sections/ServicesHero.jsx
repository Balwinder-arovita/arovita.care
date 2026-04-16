export default function ServicesHero() {
  return (
    <section className="svc-hero">
      <div className="svc-hero-mesh"><div className="mesh-orb mo1"></div><div className="mesh-orb mo2"></div><div className="mesh-orb mo3"></div></div>
      <div className="svc-hero-grid"></div>
      <div className="container">
        <div className="svc-hero-inner">
          <div className="sec-label fu">Our Healthcare Services</div>
          <h1 className="svc-hero-h fu d1">Our <em>Services</em></h1>
          <p className="svc-hero-p fu d2">Comprehensive healthcare solutions designed around your needs</p>
          <div className="ecg-deco fu d3">
            <svg viewBox="0 0 200 40" fill="none" width="200" height="40"><path className="ecg-deco-line" d="M0 20 L30 20 L40 20 L50 8 L55 32 L60 4 L65 36 L70 20 L80 20 L100 20 L110 20 L120 8 L125 32 L130 4 L135 36 L140 20 L150 20 L200 20" stroke="var(--g)" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
