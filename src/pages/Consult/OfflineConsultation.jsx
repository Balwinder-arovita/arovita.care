import { useState } from 'react';
import '../../styles/consult.css';
import '../../styles/home-nurse.css';
import AppBannerSection from '../Home/sections/AppBannerSection';

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

const faqs = [
    { q: 'What are the benefits of booking through the platform?', a: 'Booking through Arovita ensures priority access, zero waiting time in queues, and all your prescriptions are automatically synced to your digital dashboard.' },
    { q: 'Can I cancel my hospital appointment?', a: 'Yes, you can cancel or reschedule your visit up to 4 hours before the scheduled time directly from the "My Care" section.' },
    { q: 'Do I need to carry physical documents?', a: 'No, all your past records and current booking details are available in your Arovita app. You can simply show your digital booking ID at the reception.' },
    { q: 'Is there an extra charge for platform booking?', a: 'No, we do not charge any extra convenience fee for hospital visits. You only pay the standard consultation fee.' },
];

export default function OfflineConsultation() {
    const [openFaq, setOpenFaq] = useState(-1);

    return (
        <>
            {/* HERO */}
            <section className="consult-hero">
                <div className="hero-mesh">
                    <div className="mesh-orb mo1"></div>
                    <div className="mesh-orb mo2"></div>
                    <div className="mesh-orb mo3" style={{ background: 'rgba(107, 82, 217, 0.3)' }}></div>
                </div>
                <div className="container">
                    <div className="hero-content fu">
                        <h1>Clinic & <em>Hospital Visits</em></h1>
                        <p className="hero-sub">Book priority appointments with top specialists at our partner medical centers.</p>

                        <div className="popular-pills" style={{ marginTop: '30px', justifyContent: 'center' }}>
                            <span style={{ color: 'var(--muted)' }}>Top Clinics:</span>
                            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">General Clinic</a>
                            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Skin Center</a>
                            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Heart Hospital</a>
                            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pill">Child Care</a>
                        </div>
                        <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: '40px' }}>Book In-Person Visit <ArrowSvg /></a>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="hn-how-sec">
                <div className="container">
                    <div className="hn-how-header">
                        <div className="sec-label fu">The Flow</div>
                        <h2 className="sec-title fu d1">Four Simple <em>Steps</em></h2>
                    </div>
                    <div className="hn-how-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        {[
                            { title: 'Select Specialty', desc: 'Choose the medical department you wish to visit' },
                            { title: 'Select Clinic', desc: 'Choose a partner hospital or clinic near your location' },
                            { title: 'Secure Payment', desc: 'Confirm your slot with a secure digital payment' },
                            { title: 'Visit Facility', desc: 'Walk in at your scheduled time and get priority care' },
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

            {/* SPECIALTIES */}
            <section className="specialties">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '30px' }} className="fu">
                        <div className="sec-label">Specialties</div>
                        <h2 className="sec-title">In-Person <em>Consultations</em></h2>
                    </div>
                    <div className="spec-grid">
                        {specialties.map((s, i) => (
                            <div className={`spec-card fu d${(i % 4) + 1}`} key={i}>
                                <div className="spec-card-top" style={{ background: s.bg }}>
                                    <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke={s.stroke} strokeWidth="2.5" strokeLinecap="round">{s.icon}</svg>
                                </div>
                                <div className="spec-card-body">
                                    <div className="spec-name">{s.name}</div>
                                    <div className="spec-count">Partner Facilities Available</div>
                                    <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="spec-link">Book Visit <ArrowSvg /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONSULTATION MODE - CENTERED */}
            <section className="consult-types">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '30px' }} className="fu">
                        <div className="sec-label">In-Person Mode</div>
                        <h2 className="sec-title">Clinic <em>Experience</em></h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="ct-card fu d1" style={{ maxWidth: '450px', width: '100%' }}>
                            <div className="ct-icon">
                                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round">
                                    <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7M4 21V4a2 2 0 012-2h12a2 2 0 012 2v17" />
                                </svg>
                            </div>
                            <div className="ct-title">In-Clinic Visit</div>
                            <div className="ct-desc">Visit our top-rated partner clinics for physical examinations and hands-on care. Priority booking ensures no waiting time.</div>
                            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: '20px' }}>Book Appointment <ArrowSvg /></a>
                        </div>
                    </div>
                </div>
            </section>

            <AppBannerSection />

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
                        <h2>Prefer an In-person visit?</h2>
                        <p>Book your slot now and experience zero-waiting healthcare at our partner centers.</p>
                        <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ marginTop: '20px' }}>Book Hospital Slot <ArrowSvg /></a>
                    </div>
                </div>
            </section>
        </>
    );
}