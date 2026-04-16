export default function HowItWorks() {
  const steps = [
    { title:'Discovery Call', desc:"We understand your hospital's workflows, size, departments, and specific requirements in a free consultation." },
    { title:'Custom Setup', desc:"We configure Arovita HMS to match your hospital's structure — departments, roles, billing codes, and integrations." },
    { title:'Staff Training', desc:'Hands-on training for your entire team — doctors, nurses, billing staff, and admins — with role-specific guides.' },
    { title:'Go Live & Support', desc:'We stay with you on launch day and beyond with dedicated support, monitoring, and continuous improvements.' },
  ];

  return (
    <section className="hn-how-sec">
      <div className="container">
        <div className="hn-how-header">
          <div className="sec-label fu">Implementation</div>
          <h2 className="sec-title fu d1">Up & Running in <em>Four Steps</em></h2>
          <p style={{fontSize:'15px',color:'var(--muted)',maxWidth:'480px',margin:'14px auto 0',lineHeight:'1.7'}}>We handle every step of the onboarding so your team can focus on patient care, not software setup.</p>
        </div>
        <div className="hn-how-steps">
          {steps.map((s, i) => (
            <div className={`hn-how-step fu${i > 0 ? ` d${i}` : ''}`} key={i}>
              <div className="hn-step-num">{i + 1}</div>
              <div className="hn-step-title">{s.title}</div>
              <div className="hn-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
