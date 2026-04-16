const whyCards = [
  { title:'24/7 Availability', desc:'Access healthcare any time of day. Book consultations, tests, or nursing care whenever you need it.', icon:<><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></> },
  { title:'Verified Providers', desc:'Every doctor and service provider on the platform goes through a credential verification process before onboarding.', icon:<><path d="M9 12l2 2 4-4"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></> },
  { title:'Unified Health Records', desc:'All your prescriptions, reports, and consultation history stored in one secure place, accessible anytime.', icon:<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15h6"/></> },
  { title:'Secure Payments', desc:'All transactions are protected with bank-grade encryption. UPI, cards, and net banking supported.', icon:<><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></> },
  { title:'One Platform', desc:'Consult, book lab tests, order home nursing — all from a single app without switching between services.', icon:<><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></> },
  { title:'Transparent Pricing', desc:'No hidden charges. You see the full cost before booking — what you see is what you pay.', icon:<><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/><circle cx="12" cy="12" r="5"/></> },
];

export default function WhyArovita() {
  return (
    <section className="why-sec">
      <div className="why-orb wo1"></div><div className="why-orb wo2"></div>
      <div className="container">
        <div className="why-header">
          <div className="sec-label fu">Why Choose Us</div>
          <h2 className="sec-title fu d1">Why <em>Arovita</em></h2>
        </div>
        <div className="why-grid">
          {whyCards.map((c, i) => (
            <div className={`why-card fu${i > 0 ? ` d${i}` : ''}`} key={i}>
              <div className="why-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2EC48A" strokeWidth="2" strokeLinecap="round">{c.icon}</svg></div>
              <div className="why-title">{c.title}</div>
              <div className="why-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
