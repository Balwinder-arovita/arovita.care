import { useState } from 'react';
import '../../styles/home-nurse.css';
import AppBannerSection from '../Home/sections/AppBannerSection';

const ArrowSvg = () => <svg className="arr" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

const nursingServices = [
  { title:'Wound Care', desc:'Post-surgical wound dressing, suture removal, and infection prevention by trained professionals', bg:'linear-gradient(135deg,#1A7A5A,#2EC48A)',
    svg:<svg viewBox="0 0 56 56" fill="none"><rect x="12" y="16" width="32" height="24" rx="6" stroke="white" strokeWidth="2.2" fill="none"/><line x1="12" y1="28" x2="44" y2="28" stroke="white" strokeWidth="1.5"/><line x1="28" y1="24" x2="28" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="24" y1="28" x2="32" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
  { title:'Elderly Care', desc:'Companionship, medication management, mobility assistance, and daily living support', bg:'linear-gradient(135deg,#92400E,#D97706)',
    svg:<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="14" r="5" stroke="white" strokeWidth="2" fill="none"/><path d="M22 26C22 22.7 24.7 20 28 20C31.3 20 34 22.7 34 26V32" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/><path d="M28 32V44" stroke="white" strokeWidth="2.2" strokeLinecap="round"/><path d="M24 44H32" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
  { title:'Baby Care', desc:'Newborn care, feeding assistance, mother support, and infant health monitoring', bg:'linear-gradient(135deg,#BE185D,#F472B6)',
    svg:<svg viewBox="0 0 56 56" fill="none"><ellipse cx="28" cy="32" rx="14" ry="10" stroke="white" strokeWidth="2.2" fill="none"/><circle cx="28" cy="22" r="8" stroke="white" strokeWidth="2" fill="none"/><circle cx="24" cy="21" r="1.5" fill="white" opacity="0.7"/><circle cx="32" cy="21" r="1.5" fill="white" opacity="0.7"/></svg> },
  { title:'Injection & IV', desc:'Insulin, IV drips, injections administered at home by certified nurses', bg:'linear-gradient(135deg,#1E40AF,#3B82F6)',
    svg:<svg viewBox="0 0 56 56" fill="none"><path d="M36 8L44 16" stroke="white" strokeWidth="2.2" strokeLinecap="round"/><path d="M40 12L22 30L16 36L12 44L20 40L26 34L44 16" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> },
  { title:'Physiotherapy', desc:'Post-surgery rehab, pain management, mobility training by expert therapists', bg:'linear-gradient(135deg,#0D9488,#2DD4BF)',
    svg:<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="12" r="5" stroke="white" strokeWidth="2" fill="none"/><path d="M28 18V30" stroke="white" strokeWidth="2.2" strokeLinecap="round"/><path d="M20 24L28 22L36 24" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M28 30L22 42" stroke="white" strokeWidth="2.2" strokeLinecap="round"/><path d="M28 30L34 42" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg> },
  { title:'Post-Surgery Care', desc:'Complete post-operative care and monitoring with dedicated nursing support', bg:'linear-gradient(135deg,#6D28D9,#A78BFA)',
    svg:<svg viewBox="0 0 56 56" fill="none"><rect x="10" y="22" width="36" height="22" rx="4" stroke="white" strokeWidth="2.2" fill="none"/><path d="M18 22V16C18 14.9 18.9 14 20 14H36C37.1 14 38 14.9 38 16V22" stroke="white" strokeWidth="2" fill="none"/><line x1="28" y1="30" x2="28" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/><line x1="24" y1="34" x2="32" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
];

const trustItems = [
  { title:'Certified & Trained', desc:'All nurses hold valid certifications and undergo rigorous training programs',
    svg:<svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#1A7A5A" strokeWidth="2" fill="none"/><path d="M9 14l3 3 7-7" stroke="#2EC48A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> },
  { title:'Background Verified', desc:'Thorough background checks ensure your safety and peace of mind',
    svg:<svg viewBox="0 0 28 28" fill="none"><path d="M14 2L18 6H24V12L28 14L24 16V22H18L14 26L10 22H4V16L0 14L4 12V6H10L14 2Z" stroke="#1A7A5A" strokeWidth="1.5" fill="none"/><path d="M9 14l3 3 7-7" stroke="#2EC48A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> },
  { title:'24/7 Support', desc:'Round-the-clock customer support for any concerns or emergencies',
    svg:<svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#1A7A5A" strokeWidth="2" fill="none"/><path d="M14 6v8l5 3" stroke="#2EC48A" strokeWidth="2" strokeLinecap="round" fill="none"/></svg> },
  { title:'Affordable Rates', desc:'Transparent pricing with no hidden fees. Quality care that fits your budget',
    svg:<svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" stroke="#1A7A5A" strokeWidth="2" fill="none"/><path d="M14 10V14H18" stroke="#2EC48A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> },
];

const faqs = [
  { q:'Are nurses certified?', a:'Yes, all our nurses hold valid nursing certificates (GNM/BSc Nursing) and are registered with the Indian Nursing Council.' },
  { q:'What areas do you cover?', a:'We currently serve Bangalore only. Our home nursing services are available across the city for eligible service areas.' },
  { q:'Can I choose my nurse?', a:'We match you with the best-suited nurse based on your requirements. You can request a specific nurse for future bookings.' },
  { q:'What about emergencies?', a:'Our 24/7 support helpline is always available. Our nurses are trained to provide first response and coordinate with nearby hospitals.' },
];

export default function HomeNursePage() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <>
      {/* Hero */}
      <section className="hn-hero">
        <div className="hn-hero-mesh"><div className="mesh-orb mo1"></div><div className="mesh-orb mo2"></div><div className="mesh-orb mo3"></div></div>
        <div className="hn-hero-grid"></div>
        <div className="container">
          <div className="hn-hero-inner">
            <div className="sec-label fu">Professional Healthcare at Home</div>
            <h1 className="hn-hero-h fu d1">Home <em>Nursing</em> Care</h1>
            <p className="hn-hero-p fu d2">Professional healthcare at your doorstep. Trained nurses for post-surgical, elderly, and specialized care.</p>
            <div className="hn-hero-btns fu d3">
              <a href="https://my.arovita.care/" target="_blank" rel="noopener noreferrer" className="btn-green">Book a Nurse <ArrowSvg/></a>
              {/* <a href="tel:+911800AROVITA" className="btn-outline">Call Us <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="nurse-cats">
        <div className="container">
          <div className="nurse-cats-header">
            <div className="sec-label fu">Our Services</div>
            <h2 className="sec-title fu d1">Nursing <em>Service</em> Categories</h2>
          </div>
          <div className="nc-grid">
            {nursingServices.map((s, i) => (
              <div className={`nc-card fu${i > 0 ? ` d${i}` : ''}`} key={i}>
                <div className="nc-card-top" style={{background: s.bg}}>{s.svg}</div>
                <div className="nc-card-body">
                  <div className="nc-card-title">{s.title}</div>
                  <div className="nc-card-desc">{s.desc}</div>
                  <div className="nc-card-price nc-card-price-placeholder" aria-hidden="true"></div>
                  <a href="https://my.arovita.care/" target="_blank" rel="noopener noreferrer" className="nc-card-btn">Book Now <ArrowSvg/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="hn-how-sec">
        <div className="container">
          <div className="hn-how-header">
            <div className="sec-label fu">Simple Process</div>
            <h2 className="sec-title fu d1">How Home Nursing <em>Works</em></h2>
          </div>
          <div className="hn-how-steps">
            {['Choose Service','Select Date & Time','Nurse Assigned','Care at Home'].map((title, i) => (
              <div className={`hn-how-step fu${i > 0 ? ` d${i}` : ''}`} key={i}>
                <div className="hn-step-num">{i + 1}</div>
                <div className="hn-step-title">{title}</div>
                <div className="hn-step-desc">{['Select your required nursing service category','Pick a convenient date and time slot for the visit','A verified nurse is assigned and confirmed','Professional care delivered right at your doorstep'][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Nurses */}
      <section className="trust-sec">
        <div className="container">
          <div className="trust-header">
            <div className="sec-label fu">Our Promise</div>
            <h2 className="sec-title fu d1">Why Our <em>Nurses</em></h2>
          </div>
          <div className="trust-grid">
            {trustItems.map((t, i) => (
              <div className={`trust-card fu${i > 0 ? ` d${i}` : ''}`} key={i}>
                <div className="trust-ic">{t.svg}</div>
                <div className="trust-title">{t.title}</div>
                <div className="trust-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppBannerSection />

      {/* FAQ */}
      <section className="hn-faq-sec">
        <div className="container">
          <div className="hn-faq-header">
            <div className="sec-label fu">Common Questions</div>
            <h2 className="sec-title fu d1">Frequently <em>Asked</em></h2>
          </div>
          <div className="hn-faq-list">
            {faqs.map((f, i) => (
              <div className={`hn-faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <div className="hn-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}
                  <svg className="hn-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
                </div>
                <div className="hn-faq-a"><p className="hn-faq-a-text">{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta-banner">
        <div className="container">
          <div className="svc-cta-inner fu">
            <h2 className="cta-h">Professional care, right at your doorstep</h2>
            <p className="cta-p">Book a home nurse today and experience healthcare the way it should be — caring, convenient, and affordable.</p>
            <a href="https://my.arovita.care/" target="_blank" rel="noopener noreferrer" className="btn-white">Book a Nurse Now <ArrowSvg/></a>
          </div>
        </div>
      </section>
    </>
  );
}
