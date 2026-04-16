import React from 'react';
import '../../styles/consult.css';

const ArrowSvg = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="consult-hero">
                <div className="hero-mesh">
                    <div className="mesh-orb mo1"></div>
                    <div className="mesh-orb mo2"></div>
                </div>
                <div className="container">
                    <div className="hero-content fu">
                        <div className="sec-label">Contact Us</div>
                        <h1>How can we <em>help?</em></h1>
                        <p className="hero-sub" style={{ maxWidth: '600px', margin: '20px auto' }}>
                            Whether you are a patient seeking support, a provider looking to partner, or an organization interested in our ecosystem, we are here to listen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Channels - Grid */}
            <section className="hn-how-sec">
                <div className="container">
                    <div className="doc-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                        {/* General Support */}
                        <div className="doc-card fu d1" style={{ textAlign: 'left', padding: '40px' }}>
                            <div style={{ marginBottom: '20px', color: 'var(--g)' }}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>General Support</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                For questions about our platform, account help, or general inquiries.
                            </p>
                            <a href="mailto:support@arovita.care" className="spec-link" style={{ fontSize: '16px', fontWeight: '600' }}>
                                support@arovita.care <ArrowSvg />
                            </a>
                        </div>

                        {/* Partnerships */}
                        <div className="doc-card fu d2" style={{ textAlign: 'left', padding: '40px' }}>
                            <div style={{ marginBottom: '20px', color: '#4338CA' }}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Partner with Us</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                For hospitals, clinics, and diagnostic centers looking to join our connected ecosystem.
                            </p>
                            <a href="mailto:support@arovita.care" className="spec-link" style={{ color: '#4338CA', fontSize: '16px', fontWeight: '600' }}>
                                Partner with Arovita <ArrowSvg />
                            </a>
                        </div>

                        {/* Health Intelligence */}
                        <div className="doc-card fu d3" style={{ textAlign: 'left', padding: '40px' }}>
                            <div style={{ marginBottom: '20px', color: '#D97706' }}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Intelligence & Research</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                For research collaborations, health intelligence, and data partnerships.
                            </p>
                            <a href="mailto:support@arovita.care" className="spec-link" style={{ color: '#D97706', fontSize: '16px', fontWeight: '600' }}>
                                Reach out directly <ArrowSvg />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* Simple Form Block */}
            {/* <section className="faq" style={{ background: 'var(--bg-light)', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto' }} className="fu">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h2 className="sec-title">Send a <em>Message</em></h2>
                            <p style={{ color: 'var(--muted)', marginTop: '10px' }}>We typically respond within 24 hours.</p>
                        </div>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <input type="text" placeholder="Your Name" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '15px' }} />
                                <input type="email" placeholder="Your Email" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '15px' }} />
                            </div>
                            <input type="text" placeholder="Subject" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '15px' }} />
                            <textarea placeholder="How can we help?" rows="5" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '15px', resize: 'none' }}></textarea>
                            <button className="btn-green" style={{ width: '100%', padding: '18px', fontSize: '16px' }}>Send Message <ArrowSvg /></button>
                        </form>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="cta-banner">
                <div className="cta-orb corb1"></div>
                <div className="cta-orb corb2"></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="fu" style={{ textAlign: 'center' }}>
                        <h2 style={{ color: 'white' }}>Join our <em>Team.</em></h2>
                        <p style={{ marginTop: '15px', opacity: 0.9, maxWidth: '650px', margin: '15px auto 0', color: 'white' }}>
                            We are looking for people passionate about healthcare, technology, and impact.
                        </p>
                        {/* <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                            <a href="mailto:support@arovita.care" className="btn-white">
                                View Careers <ArrowSvg />
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}