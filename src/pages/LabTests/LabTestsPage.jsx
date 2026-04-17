import React from 'react';
import '../../styles/lab-tests.css';
import '../../styles/home-nurse.css';
import AppBannerSection from '../Home/sections/AppBannerSection';

const ArrowSvg = () => <svg className="arr" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

const conditions = [
  { name: 'Diabetes Care', bg: 'linear-gradient(135deg,#FFF3E0,#FFE0B2)', color: '#E65100' },
  { name: 'Heart Health', bg: 'linear-gradient(135deg,#FFEBEE,#FFCDD2)', color: '#D32F2F' },
  { name: 'Thyroid Check', bg: 'linear-gradient(135deg,#F3E5F5,#E1BEE7)', color: '#7B1FA2' },
  { name: 'Liver Function', bg: 'linear-gradient(135deg,#FFF8E1,#FFECB3)', color: '#FF8F00' },
  { name: 'Kidney Health', bg: 'linear-gradient(135deg,#E0F2F1,#B2DFDB)', color: '#00796B' },
  { name: 'Vitamin Deficiency', bg: 'linear-gradient(135deg,#FFF3E0,#FFE0B2)', color: '#F57C00' },
  { name: "Women's Health", bg: 'linear-gradient(135deg,#FCE4EC,#F8BBD0)', color: '#C2185B' },
  { name: 'Allergy Testing', bg: 'linear-gradient(135deg,#E3F2FD,#BBDEFB)', color: '#1565C0' },
];

const ageGroups = [
  { range: '18-30', label: 'Young Adults', rec: 'Annual Basic', bg: 'linear-gradient(135deg,#E8F5E9,#C8E6C9)' },
  { range: '30-45', label: 'Adults', rec: 'Comprehensive', bg: 'linear-gradient(135deg,#FFF8E1,#FFECB3)' },
  { range: '45-60', label: 'Mid-Age', rec: 'Executive Check', bg: 'linear-gradient(135deg,#FCE4EC,#F8BBD0)' },
  { range: '60+', label: 'Seniors', rec: 'Full Body + Heart', bg: 'linear-gradient(135deg,#E3F2FD,#BBDEFB)' },
];

const whyItems = [
  { title: 'Encrypted Data', desc: 'All partner labs maintain strict data encryption protocols.' },
  { title: 'Home Collection', desc: 'Certified phlebotomists visit your home at your chosen time.' },
  { title: 'Quick Reports', desc: 'Get digital reports within 4-6 hours on your dashboard.' },
  { title: 'Best Prices', desc: 'Up to 60% off on all tests with transparent pricing.' },
];

export default function LabTestsPage() {
  return (
    <>
      {/* Hero */}
      <section className="lab-hero">
        <div className="lab-hero-mesh"><div className="lhm1"></div><div className="lhm2"></div></div>
        <div className="lab-hero-grid"></div>
        <div className="container">
          <div className="lab-hero-content">
            <div className="sec-label fu">Diagnostics & Wellness</div>
            <h1 className="lab-hero-h fu d1">Lab Tests &<br /><em>Health Packages</em></h1>
            <p className="lab-hero-p fu d2">500+ tests from NABL-accredited labs. Home collection available across 50+ cities.</p>

            <div className="popular-pills" style={{ marginTop: '30px', justifyContent: 'flex-start', color: 'white' }}>
              <span style={{ opacity: 0.8 }}>Top Facilities:</span>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">MRI/CT Scan</a>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">X-Ray Center</a>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Ultrasound</a>
              <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Pathology</a>
            </div>

            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: '40px', width: 'fit-content' }}>Locate Nearest Center <ArrowSvg /></a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="hn-how-sec">
        <div className="container">
          <div className="hn-how-header">
            <div className="sec-label fu">Simple Process</div>
            <h2 className="sec-title fu d1">How Lab Testing <em>Works</em></h2>
          </div>
          <div className="hn-how-steps">
            {[
              { title: 'Book Online', desc: 'Choose tests & schedule at your convenience' },
              { title: 'Sample Collection', desc: 'Certified phlebotomist visits your home' },
              { title: 'Lab Processing', desc: 'Cerified labs process your samples' },
              { title: 'Digital Reports', desc: 'Get reports online in 4-6 hours' },
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

      {/* Browse by Condition */}
      <section className="conditions">
        <div className="container">
          <div className="sec-header fu">
            <div className="sec-label">Browse by Condition</div>
            <h2 className="sec-title">Find Tests for Your <em>Health Needs</em></h2>
          </div>
          <div className="cond-grid">
            {conditions.map((c, i) => (
              <div className={`cond-card fu d${Math.min(i + 1, 8)}`} key={i}>
                <div className="cond-ic" style={{ background: c.bg }}>
                  <svg viewBox="0 0 40 40" width="32" height="32" fill="none"><circle cx="20" cy="20" r="12" stroke={c.color} strokeWidth="2" fill={`${c.color}11`} /><path d="M16 20h8M20 16v8" stroke={c.color} strokeWidth="2" strokeLinecap="round" /></svg>
                </div>
                <div className="cond-name">{c.name}</div>
                <div className="cond-count">Certified Partner Labs</div>
                <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="cond-link" style={{ textDecoration: 'none' }}>Book Now <ArrowSvg /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Group */}
      <section className="age-group">
        <div className="container">
          <div className="sec-header fu">
            <div className="sec-label">Age-Based Recommendations</div>
            <h2 className="sec-title">Tests by <em>Age Group</em></h2>
          </div>
          <div className="age-grid">
            {ageGroups.map((a, i) => (
              <div className={`age-card fu d${i + 1}`} key={i}>
                <div className="age-ic" style={{ background: a.bg }}>
                  <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><circle cx="20" cy="14" r="6" /><path d="M10 36c0-5.5 4.5-10 10-10s10 4.5 10 10" /></svg>
                </div>
                <div className="age-range">{a.range}</div>
                <div className="age-label">{a.label}</div>
                <div className="age-rec">{a.rec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppBannerSection />

      {/* Why Choose Labs */}
      <section className="why-labs">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px', position: 'relative', zIndex: 1 }}>
            <div className="sec-label fu" style={{ color: 'var(--gl)' }}>Why Choose Us</div>
            <h2 className="sec-title fu d1" style={{ color: 'white' }}>Why Arovita <em>Labs</em></h2>
          </div>
          <div className="why-grid">
            {whyItems.map((w, i) => (
              <div className="why-card fu" key={i}>
                <div className="why-ic"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#2EC48A" strokeWidth="2" strokeLinecap="round"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></div>
                <div className="why-title">{w.title}</div>
                <div className="why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta-banner">
        <div className="container">
          <div className="svc-cta-inner fu">
            <h2 className="cta-h">Book your health checkup today</h2>
            <p className="cta-p">500+ tests available with home collection. Get your results digitally within hours.</p>
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-white">Book Lab Test <ArrowSvg /></a>
          </div>
        </div>
      </section>
    </>
  );
}