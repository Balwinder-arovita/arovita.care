import '../../styles/careers.css';

const ArrowSvg = () => <svg className="arr" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

const values = [
  { title:'Mission-Driven', desc:'We are building healthcare infrastructure that impacts millions of lives across India.', icon:<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
  { title:'Innovation First', desc:'We believe in using cutting-edge technology to solve real healthcare challenges.', icon:<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> },
  { title:'Patient-Centric', desc:'Every decision we make is guided by what is best for patients and their care journey.', icon:<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78z"/></svg> },
  { title:'Collaborative', desc:'We work as one team across engineering, design, medical, and operations — no silos.', icon:<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { title:'Growth Mindset', desc:'We invest in our people with mentorship, learning budgets, and real ownership of projects.', icon:<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title:'Transparency', desc:'Open communication, honest feedback, and clear expectations at every level.', icon:<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> },
];

const perks = [
  { emoji:'🏥', title:'Health Insurance', desc:'Comprehensive medical coverage for you and your family' },
  { emoji:'🏠', title:'Fresher Friendly', desc:'Flexible work arrangements with hybrid options' },
  { emoji:'📚', title:'Everyday Learning', desc:'Continuous learning and development opportunities' },
  { emoji:'🏖️', title:'Employee Health', desc:'Health and wellness programs for our employees' },
  { emoji:'💰', title:'Competitive Pay', desc:'Market-leading compensation with equity options' },
  { emoji:'🎯', title:'Real Impact', desc:'Work on products that directly improve healthcare access' },
  { emoji:'🚀', title:'Fast Growth', desc:'Early-stage opportunity with rapid career advancement' },
  { emoji:'🤝', title:'Great Team', desc:'Work alongside talented people who care deeply about their craft' },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="career-hero">
        <div className="career-hero-mesh">
          <div className="mesh-orb mo1"></div>
          <div className="mesh-orb mo2"></div>
        </div>
        <div className="career-hero-grid"></div>
        <div className="container">
          <div className="career-hero-inner">
            <div className="sec-label fu">Join Our Team</div>
            <h1 className="career-hero-h fu d1">Build the Future of<br/><em>Healthcare</em></h1>
            <p className="career-hero-p fu d2">At Arovita, we're on a mission to make quality healthcare accessible, connected, and intelligent for every Indian.</p>
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <section className="career-status">
        <div className="container">
          <div className="status-card fu">
            <div className="status-ic">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            </div>
            <div className="status-title">We're Not Hiring Right Now</div>
            <p className="status-desc">We're currently building our core team internally and don't have open positions at the moment. But we're always looking for exceptional talent — drop us your resume and we'll reach out when the right role opens up.</p>
            {/* <a href="mailto:careers@arovita.care" className="status-cta">
              Send Your Resume
              <ArrowSvg/>
            </a> */}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="career-values">
        <div className="container">
          <div className="values-header">
            <div className="sec-label fu">What We Stand For</div>
            <h2 className="sec-title fu d1">Our <em>Values</em></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className={`value-card fu${i > 0 ? ` d${Math.min(i,5)}` : ''}`} key={i}>
                <div className="value-ic">{v.icon}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="career-perks">
        <div className="container">
          <div className="perks-header">
            <div className="sec-label fu">Why Arovita</div>
            <h2 className="sec-title fu d1">Perks & <em>Benefits</em></h2>
          </div>
          <div className="perks-grid">
            {perks.map((p, i) => (
              <div className={`perk-card fu${i > 0 ? ` d${Math.min(i,6)}` : ''}`} key={i}>
                <span className="perk-emoji">{p.emoji}</span>
                <div className="perk-title">{p.title}</div>
                <div className="perk-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      {/* <section className="career-join">
        <div className="container">
          <div className="join-inner">
            <div className="sec-label fu">Stay in the Loop</div>
            <h2 className="sec-title fu d1">Get <em>Notified</em></h2>
            <p className="join-desc">Leave your email and we'll notify you as soon as a position that matches your skills and experience opens up.</p>
            <div className="join-email fu d2">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--hint)" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <input type="email" placeholder="Enter your email address" readOnly/>
              <button>Notify Me</button>
            </div>
            <p className="join-note">No spam. We'll only email you about open roles.</p>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="career-cta">
        <div className="container">
          <div className="career-cta-inner fu">
            <h2 className="cta-h" style={{color:'white',fontFamily:"'Playfair Display',serif",fontSize:'32px',fontWeight:800,marginBottom:'14px'}}>Can't wait? Reach out directly</h2>
            <p className="cta-p" style={{color:'rgba(255,255,255,.7)',fontSize:'15px',lineHeight:1.7,maxWidth:'480px',margin:'0 auto 28px'}}>If you think you'd be a great fit at Arovita, we'd love to hear from you. Send us your story, portfolio, or resume.</p>
            <a href="mailto:support@arovita.care" className="btn-white" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'white',color:'var(--g)',padding:'15px 32px',borderRadius:'50px',fontWeight:700,fontSize:'14.5px',textDecoration:'none',transition:'all .25s'}}>
              Email Us
              <ArrowSvg/>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
