const ArrowSvg = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

export default function CtaBanner() {
  return (
    <section className="svc-cta-banner">
      <div className="cta-orb co1"></div><div className="cta-orb co2"></div>
      <div className="container">
        <div className="svc-cta-inner fu">
          <h2 className="cta-h">Start your health journey today</h2>
          <p className="cta-p">Experience connected, continuous care — all your health services in one platform, starting in Bengaluru.</p>
          <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-white">Get Started <ArrowSvg/></a>
        </div>
      </div>
    </section>
  );
}
