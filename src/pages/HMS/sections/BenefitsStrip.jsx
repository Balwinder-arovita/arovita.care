export default function BenefitsStrip() {
  const benefits = [
    { icon:<><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></>, title:'Paperless Operations', desc:'Eliminate paper files. Everything from patient records to prescriptions goes digital.' },
    { icon:<><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>, title:'Real-Time Visibility', desc:'Live dashboards for beds, OT, pharmacy, lab, and billing — from any device, anywhere.' },
    { icon:<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, title:'Secure & Compliant', desc:'End-to-end encrypted, ISO certified, secure cloud infrastructure. Your data stays safe.' },
    { icon:<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, title:'AI-Powered Analytics', desc:'Smart reports and forecasts help you make better clinical and operational decisions.' },
  ];

  return (
    <section className="benefits-strip">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div className={`bfx fu d${i+1}`} key={i}>
              <div className="bfx-ic"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round">{b.icon}</svg></div>
              <div><div className="bfx-title">{b.title}</div><div className="bfx-desc">{b.desc}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
