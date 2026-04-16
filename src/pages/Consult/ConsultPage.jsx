import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/consult.css';
import '../../styles/home-nurse.css';

const ArrowSvg = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

const specialties = [
  { name: 'General Medicine', bg: 'linear-gradient(135deg,#E6F7F0,#B8E8D0)', stroke: '#1A7A5A', icon: <><circle cx="24" cy="12" r="6" /><path d="M24 18v18" /><path d="M18 30c0 3.3 2.7 6 6 6s6-2.7 6-6" /><circle cx="24" cy="38" r="2" fill="#1A7A5A" stroke="none" /></> },
  { name: 'Dermatology', bg: 'linear-gradient(135deg,#F3E8FF,#D8B4FE)', stroke: '#7C3AED', icon: <><ellipse cx="24" cy="24" rx="14" ry="18" /><path d="M10 24h28" /><path d="M14 16h20" /><path d="M14 32h20" /></> },
  { name: 'Cardiology', bg: 'linear-gradient(135deg,#FEE2E2,#FCA5A5)', stroke: '#DC2626', icon: <><path d="M24 42s-16-10.4-16-22c0-5.5 4.5-10 10-10 3.3 0 6.3 1.6 8 4.2a10.1 10.1 0 0 1 8-4.2c5.5 0 10 4.5 10 10 0 11.6-16 22-16 22h-4z" /></> },
  { name: 'Gynaecology', bg: 'linear-gradient(135deg,#FCE7F3,#F9A8D4)', stroke: '#DB2777', icon: <><circle cx="24" cy="18" r="10" /><path d="M24 28v14" /><path d="M18 36h12" /></> },
  { name: 'Paediatrics', bg: 'linear-gradient(135deg,#DBEAFE,#93C5FD)', stroke: '#2563EB', icon: <><circle cx="24" cy="14" r="8" /><path d="M16 38c0-4.4 3.6-8 8-8s8 3.6 8 8" /><circle cx="20" cy="13" r="1.5" fill="#2563EB" stroke="none" /><circle cx="28" cy="13" r="1.5" fill="#2563EB" stroke="none" /><path d="M21 17c1.2 1 3.6 1 4.8 0" /></> },
  { name: 'Orthopaedics', bg: 'linear-gradient(135deg,#CCFBF1,#5EEAD4)', stroke: '#0D9488', icon: <><path d="M18 8c-2 0-4 2-4 5s2 5 4 5h2v12h-2c-2 0-4 2-4 5s2 5 4 5" /><path d="M30 8c2 0 4 2 4 5s-2 5-4 5h-2v12h2c2 0 4 2 4 5s-2 5-4 5" /><path d="M20 18h8M20 30h8" /></> },
  { name: 'ENT', bg: 'linear-gradient(135deg,#FFEDD5,#FDBA74)', stroke: '#EA580C', icon: <><path d="M14 24c0-8 4-16 10-16s10 8 10 16" /><path d="M14 24c-2 0-4 2-4 4s2 4 4 4c1 0 2 2 2 4s2 4 4 4" /><path d="M34 24c2 4 0 8-2 10" /></> },
  { name: 'Psychiatry', bg: 'linear-gradient(135deg,#E0E7FF,#A5B4FC)', stroke: '#4338CA', icon: <><path d="M24 6c-8 0-14 6-14 14 0 6 3 10 8 13v7h12v-7c5-3 8-7 8-13 0-8-6-14-14-14z" /><path d="M20 25h8" /><path d="M24 21v8" /></> },
  { name: 'Ophthalmology', bg: 'linear-gradient(135deg,#CFFAFE,#67E8F9)', stroke: '#0891B2', icon: <><path d="M4 24s8-12 20-12 20 12 20 12-8 12-20 12S4 24 4 24z" /><circle cx="24" cy="24" r="6" /><circle cx="24" cy="24" r="2.5" fill="#0891B2" stroke="none" /></> },
  { name: 'Gastroenterology', bg: 'linear-gradient(135deg,#FEF3C7,#FCD34D)', stroke: '#D97706', icon: <><path d="M16 8c0 4-4 6-4 12s4 10 8 14c2 2 4 4 4 6" /><path d="M32 8c0 4 4 6 4 12s-4 10-8 14c-2 2-4 4-4 6" /><path d="M20 20h8" /><path d="M18 26h12" /></> },
  { name: 'Neurology', bg: 'linear-gradient(135deg,#EDE9FE,#C4B5FD)', stroke: '#7C3AED', icon: <><path d="M24 6c-8 0-14 6-14 14 0 6 3 10 8 13v7h12v-7c5-3 8-7 8-13 0-8-6-14-14-14z" /><path d="M16 22c2-2 5-2 8 0s6 2 8 0" /><path d="M16 28c2-2 5-2 8 0s6 2 8 0" /></> },
  { name: 'Pulmonology', bg: 'linear-gradient(135deg,#E0F2FE,#7DD3FC)', stroke: '#0284C7', icon: <><path d="M24 10v20" /><path d="M24 18c-6 0-12 4-12 12 0 4 3 8 8 8h4" /><path d="M24 18c6 0 12 4 12 12 0 4-3 8-8 8h-4" /><path d="M20 24c-3 1-5 4-5 7" /><path d="M28 24c3 1 5 4 5 7" /></> },
];

const doctors = [
  { init: 'PS', name: 'Dr. Priya Sharma', spec: 'Cardiologist', exp: '15 years experience', rating: '4.9', stars: '★★★★★', lang: 'English, Hindi, Punjabi', bg: 'linear-gradient(135deg,#DC2626,#F87171)' },
  { init: 'AM', name: 'Dr. Arjun Mehta', spec: 'Dermatologist', exp: '12 years experience', rating: '4.8', stars: '★★★★★', lang: 'English, Hindi, Marathi', bg: 'linear-gradient(135deg,#7C3AED,#A78BFA)' },
  { init: 'SK', name: 'Dr. Sneha Kapoor', spec: 'Gynaecologist', exp: '18 years experience', rating: '4.9', stars: '★★★★★', lang: 'English, Hindi, Gujarati', bg: 'linear-gradient(135deg,#DB2777,#F472B6)' },
  { init: 'RI', name: 'Dr. Rajesh Iyer', spec: 'General Medicine', exp: '20 years experience', rating: '4.7', stars: '★★★★☆', lang: 'English, Hindi, Tamil', bg: 'linear-gradient(135deg,#1A7A5A,#2EC48A)' },
];

const faqs = [
  { q: 'How long is a consultation?', a: 'A typical consultation lasts 15–30 minutes depending on the complexity of your concern.' },
  { q: 'Can I get a prescription?', a: 'Yes, our doctors issue digital prescriptions immediately after your consultation via email and app.' },
  { q: 'What if I need a follow-up?', a: 'Follow-up consultations within 7 days are free with the same doctor through the "My Care" section.' },
  { q: 'Is my data secure?', a: 'Absolutely. We follow strict privacy standards and all video calls are encrypted end-to-end.' },
];

export default function ConsultPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <>
      {/* HERO - Search options removed */}
      <section className="consult-hero">
        <div className="hero-mesh">
          <div className="mesh-orb mo1"></div>
          <div className="mesh-orb mo2"></div>
          <div className="mesh-orb mo3"></div>
        </div>
        <div className="container">
          <div className="hero-content fu">
            <h1>Expert <em>Consultations</em></h1>
            <p className="hero-sub">Connect with verified specialists instantly via secure video calls.</p>

            <div className="popular-pills" style={{ marginTop: '30px', justifyContent: 'center' }}>
              <span style={{ color: 'var(--muted)' }}>Specialties:</span>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Physician</a>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Dermatology</a>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Cardiology</a>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Gynaecology</a>
            </div>
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: '40px' }}>Start Consultation Now <ArrowSvg /></a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - 4 Steps */}
      <section className="hn-how-sec">
        <div className="container">
          <div className="hn-how-header">
            <div className="sec-label fu">Process</div>
            <h2 className="sec-title fu d1">Four Simple <em>Steps</em></h2>
          </div>
          <div className="hn-how-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Choose Specialty', desc: 'Select from our range of medical specialties' },
              { title: 'Select Doctor', desc: 'Pick a doctor and a time slot that suits you' },
              { title: 'Secure Payment', desc: 'Complete your booking with safe digital payment' },
              { title: 'Start Video Call', desc: 'Connect with your doctor from anywhere' },
            ].map((s, i) => (
              <div className={`hn-how-step fu${i > 0 ? ` d${i}` : ''}`} key={i}>
                <div className="hn-step-num">{i + 1}</div>
                <div className="hn-step-title">{s.title}</div>
                <div className="hn-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES - Random counts removed */}
      <section className="specialties">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }} className="fu">
            <div className="sec-label">Specialties</div>
            <h2 className="sec-title">Consult a <em>Specialist</em></h2>
          </div>
          <div className="spec-grid">
            {specialties.map((s, i) => (
              <div className={`spec-card fu d${(i % 4) + 1}`} key={i}>
                <div className="spec-card-top" style={{ background: s.bg }}>
                  <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke={s.stroke} strokeWidth="2.5" strokeLinecap="round">{s.icon}</svg>
                </div>
                <div className="spec-card-body">
                  <div className="spec-name">{s.name}</div>
                  <div className="spec-count">Verified Professional</div>
                  <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="spec-link">Consult Now <ArrowSvg /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP DOCTORS */}
      {/* <section className="doctors">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }} className="fu">
            <div className="sec-label">Our Doctors</div>
            <h2 className="sec-title">Verified <em>Experts</em></h2>
          </div>
          <div className="doc-grid">
            {doctors.map((d, i) => (
              <div className={`doc-card fu d${i + 1}`} key={i}>
                <div className="doc-avatar" style={{ background: d.bg }}>{d.init}</div>
                <div className="doc-name">{d.name}</div>
                <div className="doc-spec">{d.spec}</div>
                <div className="doc-exp">{d.exp}</div>
                <div className="doc-rating">
                  <span className="doc-stars">{d.stars}</span>
                  <span className="doc-rating-num">{d.rating}</span>
                </div>
                <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: '15px' }}>Book Video Call</a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CONSULTATION MODE - Centered single card */}
      <section className="consult-types">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }} className="fu">
            <div className="sec-label">Booking Mode</div>
            <h2 className="sec-title">Secure Video <em>Calls</em></h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="ct-card fu d1" style={{ maxWidth: '450px', width: '100%' }}>
              <div className="ct-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round">
                  <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <div className="ct-title">Video Consultation</div>
              <div className="ct-desc">Consult privately with top doctors via our secure encrypted video platform. High quality audio and video support.</div>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: '20px' }}>Book Session <ArrowSvg /></a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <div className="faq-toggle"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--g)" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg></div>
                </div>
                <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <div className="fu">
            <h2>Ready to start your journey?</h2>
            <p>Experience seamless healthcare consultations on our platform.</p>
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ marginTop: '20px' }}>Go to Platform <ArrowSvg /></a>
          </div>
        </div>
      </section>
    </>
  );
}