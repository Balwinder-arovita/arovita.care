export default function FeaturesSection() {
  const steps = [
    { num: 1, title: 'Book Consultation', desc: 'User schedules in-clinic or video-consultation.' },
    { num: 2, title: 'Visit Doctor / Video-Consult', desc: 'Doctor evaluates symptoms and suggests next steps.' },
    { num: 3, title: 'Get Prescription', desc: 'Medication, tests, or care plan recommended.' },
    { num: 4, title: 'Book Lab Tests', desc: 'Diagnostics booked directly through Arovita.' },
    { num: 5, title: 'Receive Care', desc: 'Treatment, home care, or medication support delivered.' },
    { num: 6, title: 'Follow-up Triggered', desc: 'System reminds for review, repeat tests, or monitoring.' },
    { num: 7, title: 'Continuous Monitoring', desc: 'Vitals, records, and progress tracked over time.' },
    { num: 8, title: 'Next Consultation', desc: 'Data flows back to doctor for ongoing care. Then it loops again.' },
  ];

  return (
    <section className="features" id="how-it-works">
      <div className="container">
        <div style={{textAlign:'center'}} className="fu">
          <div className="sec-label">How Arovita Works</div>
          <h2 className="sec-title">Healthcare is not a one-time visit. <em>It's a continuous journey.</em></h2>
          <p style={{fontSize:'15px',color:'var(--muted)',maxWidth:'580px',margin:'14px auto 0',lineHeight:'1.7'}}>Arovita connects every step of care — from consultation to follow-ups — creating an ongoing healthcare loop instead of isolated visits.</p>
        </div>
        <div className="feat-grid2" style={{marginTop:'52px'}}>
          {steps.map((s, i) => (
            <div className={`feat-card2 fu d${(i % 3) + 1}`} key={i}>
              <div className="feat-ic2" style={{background:'rgba(26,122,90,.1)'}}>
                <span style={{fontFamily:"'Playfair Display',serif",fontSize:'20px',fontWeight:800,color:'var(--g)'}}>{s.num}</span>
              </div>
              <div className="feat-title2">{s.title}</div>
              <div className="feat-desc2">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
