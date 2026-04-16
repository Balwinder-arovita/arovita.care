export default function HowItWorks() {
  const steps = [
    { icon:<><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></>, title:'Sign Up', desc:'Create your free account in under 60 seconds with just your phone number' },
    { icon:<><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>, title:'Choose Service', desc:'Browse our range of services — consult, lab tests, nursing & more' },
    { icon:<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>, title:'Get Care', desc:'Receive world-class healthcare from the comfort of your home' },
  ];

  return (
    <section className="how-sec">
      <div className="container">
        <div className="how-header">
          <div className="sec-label fu">Getting Started</div>
          <h2 className="sec-title fu d1">How It <em>Works</em></h2>
        </div>
        <div className="how-steps">
          {steps.map((s, i) => (
            <div className={`how-step fu${i > 0 ? ` d${i}` : ''}`} key={i}>
              <div className="how-step-num"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">{s.icon}</svg></div>
              <div className="how-step-title">{s.title}</div>
              <div className="how-step-desc">{s.desc}</div>
              {i < 2 && <div className="step-connector" style={{display:'block'}}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
