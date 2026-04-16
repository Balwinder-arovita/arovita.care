import { Link } from 'react-router-dom';
import '../../styles/home.css';
import '../../styles/consult.css';

const ArrowSvg = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

export default function AboutUs() {
  return (
    <>

    {/* Our Story — visual + text from homepage AboutSection */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-in">
            <div className="about-imgs sl-left">
              <div className="ab-card abc1">
                <div className="ab-card-inner">
                  <svg viewBox="0 0 160 280" width="160" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 20 Q90 60 50 100 Q10 140 50 180 Q90 220 50 260" stroke="rgba(255,255,255,0.7)" strokeWidth="3" fill="none" strokeLinecap="round"><animate attributeName="stroke-dasharray" values="0 400;400 0" dur="2s" fill="freeze"/></path>
                    <path d="M110 20 Q70 60 110 100 Q150 140 110 180 Q70 220 110 260" stroke="rgba(255,255,255,0.7)" strokeWidth="3" fill="none" strokeLinecap="round"><animate attributeName="stroke-dasharray" values="0 400;400 0" dur="2s" begin=".3s" fill="freeze"/></path>
                    {[40,80,120,160,200,240].map((y,i) => (
                      <g key={i}>
                        <line x1="50" y1={y} x2="110" y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"><animate attributeName="opacity" values="0;1" dur=".5s" begin={`${0.6+i*0.1}s`} fill="freeze"/></line>
                        <circle cx="50" cy={y} r="5" fill="rgba(255,255,255,0.8)"/>
                        <circle cx="110" cy={y} r="5" fill="rgba(255,255,255,0.8)"/>
                      </g>
                    ))}
                    <circle cx="30" cy="30" r="3" fill="rgba(255,255,255,0.5)"><animate attributeName="cy" values="30;10;30" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/></circle>
                    <circle cx="140" cy="200" r="3" fill="rgba(255,255,255,0.5)"><animate attributeName="cy" values="200;220;200" dur="4s" repeatCount="indefinite"/></circle>
                  </svg>
                </div>
              </div>
              <div className="ab-card abc2">
                <div className="ab-card-inner">
                  <svg viewBox="0 0 200 200" width="190" height="190" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.2)" strokeWidth="10"/>
                    <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.8)" strokeWidth="10" strokeLinecap="round" strokeDasharray="502" strokeDashoffset="502" transform="rotate(-90 100 100)"><animate attributeName="stroke-dashoffset" values="502;100" dur="2.5s" fill="freeze"/></circle>
                    <circle cx="100" cy="100" r="56" stroke="rgba(255,255,255,0.12)" strokeWidth="8"/>
                    <circle cx="100" cy="100" r="56" stroke="rgba(255,255,255,0.5)" strokeWidth="8" strokeLinecap="round" strokeDasharray="352" strokeDashoffset="352" transform="rotate(-90 100 100)"><animate attributeName="stroke-dashoffset" values="352;70" dur="2.5s" begin=".3s" fill="freeze"/></circle>
                    <text x="100" y="95" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="22" fontWeight="bold" fontFamily="Georgia,serif">Secure</text>
                    <text x="100" y="115" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="sans-serif">Compliant</text>
                  </svg>
                </div>
              </div>
              <div className="ab-badge">
                <div className="ab-badge-num" style={{fontSize:'20px'}}>360°</div>
                <div className="ab-badge-lbl">Health ID<br/>Ready</div>
              </div>
              <div className="ab-ring">
                <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="48" cy="48" r="42" stroke="#E6F7F0" strokeWidth="10"/>
                  <circle cx="48" cy="48" r="42" stroke="#1A7A5A" strokeWidth="10" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="66" transform="rotate(-90 48 48)"/>
                  <text x="48" y="53" textAnchor="middle" fill="#1A7A5A" fontSize="14" fontWeight="bold" fontFamily="Georgia,serif">75%</text>
                </svg>
              </div>
            </div>

            <div className="about-text sl-right">
              <div className="sec-label">Who We Are</div>
              <h2 className="sec-title" style={{marginBottom:'20px'}}>Built for India's <em>Healthcare Reality</em></h2>
              <div className="about-stats">
                <div className="as2"><div className="as2-num" style={{fontSize:'18px'}}>Bengaluru</div><div className="as2-lbl">Currently Serving</div></div>
                <div className="as2"><div className="as2-num" style={{fontSize:'18px'}}>✓</div><div className="as2-lbl">Secure Platform</div></div>
                <div className="as2"><div className="as2-num" style={{fontSize:'18px'}}>360°</div><div className="as2-lbl">Health View</div></div>
              </div>
              <p className="about-desc">Arovita was born from a simple belief — that quality healthcare should never be a privilege. We've built a platform where world-class medical expertise meets the warmth of a family doctor, available every single moment of every day.</p>
              <p className="about-desc" style={{marginBottom:'28px'}}>From AI-powered health insights to secure digital records, we combine cutting-edge technology with genuine compassion to ensure every patient never has to face a health challenge alone.</p>
              <ul className="check-list">
                {[
                  'Unified digital health records accessible anytime, anywhere',
                  'Video and in-clinic consultations with verified specialists',
                  'Home lab sample collection with digital reports delivered fast',
                  'End-to-end data encryption and secure payment infrastructure'
                ].map((t,i) => (
                  <li key={i}>
                    <div className="check-ic"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1A7A5A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    {t}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="btn-green">Explore Our Services <ArrowSvg /></Link>
            </div>
          </div>
        </div>
      </section>  

      {/* Hero */}
      <section className="consult-hero">
        <div className="hero-mesh">
          <div className="mesh-orb mo1"></div>
          <div className="mesh-orb mo2"></div>
          <div className="mesh-orb mo3"></div>
        </div>
        <div className="container">
          <div className="hero-content fu">
            <div className="sec-label">Our Story</div>
            <h1>Transforming Healthcare for <em>Every Indian</em></h1>
            <p className="hero-sub" style={{ maxWidth: '680px', margin: '20px auto' }}>
              Arovita was born from a simple belief — that quality healthcare should never be a privilege.
              We combine world-class expertise with the warmth of a family doctor, available every single day.
            </p>
          </div>
        </div>
      </section>


      {/* Problem vs Solution */}
      <section className="hn-how-sec">
        <div className="container">
          <div className="hn-how-header">
            <div className="sec-label fu">The Problem We Solve</div>
            <h2 className="sec-title fu d1">From fragmented visits to <em>continuous care.</em></h2>
          </div>

          <div className="symptoms-grid" style={{ marginTop: '60px', alignItems: 'stretch' }}>
            <div className="symptoms-text sl-left" style={{ background: 'rgba(0,0,0,0.02)', padding: '40px', borderRadius: '24px' }}>
              <h3 style={{ color: '#ff4d4d', marginBottom: '25px', fontSize: '22px' }}>Fragmented Healthcare</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Consultations happen in isolation',
                  'Lab results are stored in different places',
                  'Follow-ups are missed',
                  'No continuity in care',
                  "Doctors don't see full patient history"
                ].map((t,i) => (
                  <li key={i} style={{ marginBottom: '16px', display: 'flex', gap: '12px', color: 'var(--muted)', fontSize: '15px' }}>
                    <span style={{ color: '#ff4d4d', fontWeight: 'bold' }}>✕</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="symptoms-text sl-right" style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
              <h3 style={{ color: 'var(--g)', marginBottom: '25px', fontSize: '22px' }}>Connected with Arovita</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'All services in one platform',
                  'Unified patient health records',
                  'Consultation to follow-up continuity',
                  'Data shared across providers',
                  'Continuous care journey'
                ].map((t,i) => (
                  <li key={i} style={{ marginBottom: '16px', display: 'flex', gap: '12px', fontSize: '15px' }}>
                    <span style={{ color: 'var(--g)', fontWeight: 'bold' }}>✓</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="specialties">
        <div className="container">
          <div className="hn-how-header" style={{ marginBottom: '50px' }}>
            <div className="sec-label fu">Our Foundation</div>
            <h2 className="sec-title fu d1">Built on values that <em>matter.</em></h2>
          </div>

          <div className="spec-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            <div className="spec-card fu d1" style={{ margin: '0' }}>
              <div className="spec-card-top" style={{ background: 'linear-gradient(135deg,#E6F7F0,#B8E8D0)' }}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--g)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div className="spec-card-body">
                <div className="spec-name">Patient First</div>
                <div className="spec-count">Every decision we make starts with what's best for the patient.</div>
              </div>
            </div>

            <div className="spec-card fu d2" style={{ margin: '0' }}>
              <div className="spec-card-top" style={{ background: 'linear-gradient(135deg,#E0E7FF,#A5B4FC)' }}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#4338CA" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <div className="spec-card-body">
                <div className="spec-name">Trust & Security</div>
                <div className="spec-count">Your health data is protected with end-to-end encryption and strict privacy standards.</div>
              </div>
            </div>

            <div className="spec-card fu d3" style={{ margin: '0' }}>
              <div className="spec-card-top" style={{ background: 'linear-gradient(135deg,#FEF3C7,#FCD34D)' }}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#D97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <div className="spec-card-body">
                <div className="spec-name">Accessibility</div>
                <div className="spec-count">Quality healthcare for everyone — regardless of where they are or what they can afford.</div>
              </div>
            </div>

            <div className="spec-card fu d4" style={{ margin: '0' }}>
              <div className="spec-card-top" style={{ background: 'linear-gradient(135deg,#FCE7F3,#F9A8D4)' }}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#BE185D" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div className="spec-card-body">
                <div className="spec-name">Continuous Innovation</div>
                <div className="spec-count">We constantly evolve our platform to deliver smarter, faster, better care.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-orb corb1"></div>
        <div className="cta-orb corb2"></div>
        <div className="container">
          <div className="fu" style={{ textAlign: 'center' }}>
            <h2>Continuous care, not <em>one-time visits.</em></h2>
            <p style={{ marginTop: '15px', opacity: 0.9, maxWidth: '650px', margin: '15px auto 0' }}>
              Join Arovita in transforming isolated medical visits into a seamless, connected care journey.
            </p>
            {/* <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-white">
                Get Started <ArrowSvg />
              </a>
              <Link to="/careers" className="btn-white" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.4)', color: 'white' }}>
                Join Our Team <ArrowSvg />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
