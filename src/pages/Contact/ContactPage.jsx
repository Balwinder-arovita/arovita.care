import React from 'react';
import '../../styles/consult.css';
import '../../styles/contact.css';

const ArrowSvg = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

export default function ContactPage() {
    return (
        <div className="contact-page">
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
                        <p className="hero-sub fu d2" style={{ maxWidth: '520px', margin: '0 auto 0', fontSize: '15px' }}>
                            Every message reaches a real person on our team — we typically respond within 24 hours.
                        </p>
                        <div className="contact-hero-note fu d3">
                            <div className="contact-hero-note-item"><div className="contact-hero-note-dot"/><span>General Support</span></div>
                            <div className="contact-hero-note-item"><div className="contact-hero-note-dot"/><span>Partnerships</span></div>
                            <div className="contact-hero-note-item"><div className="contact-hero-note-dot"/><span>Research & Intelligence</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Channels - Grid */}
            <section className="hn-how-sec">
                <div className="container">
                    <div className="doc-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                        {/* General Support */}
                        <a href="mailto:support@arovita.care" className="doc-card fu d1" style={{ textAlign: 'left', padding: '40px', textDecoration: 'none', display: 'block', cursor: 'pointer', border: '1.5px solid #d0d5dd' }}>
                            <div style={{ marginBottom: '20px', color: 'var(--g)' }}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--dark)' }}>General Support</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                For questions about our platform, account help, or general inquiries.
                            </p>
                            <span className="spec-link" style={{ fontSize: '14px', fontWeight: '600' }}>
                                Write to us <ArrowSvg />
                            </span>
                        </a>

                        {/* Partnerships */}
                        <a href="mailto:support@arovita.care?subject=Partnership%20Enquiry" className="doc-card fu d2" style={{ textAlign: 'left', padding: '40px', textDecoration: 'none', display: 'block', cursor: 'pointer', border: '1.5px solid #d0d5dd' }}>
                            <div style={{ marginBottom: '20px', color: '#4338CA' }}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--dark)' }}>Partner with Us</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                For hospitals, clinics, and diagnostic centers looking to join our connected ecosystem.
                            </p>
                            <span className="spec-link" style={{ color: '#4338CA', fontSize: '14px', fontWeight: '600' }}>
                                Write to us <ArrowSvg />
                            </span>
                        </a>

                        {/* Health Intelligence */}
                        <a href="mailto:support@arovita.care?subject=Research%20Collaboration" className="doc-card fu d3" style={{ textAlign: 'left', padding: '40px', textDecoration: 'none', display: 'block', cursor: 'pointer', border: '1.5px solid #d0d5dd' }}>
                            <div style={{ marginBottom: '20px', color: '#D97706' }}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                            </div>
                            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--dark)' }}>Intelligence & Research</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                For research collaborations, health intelligence, and data partnerships.
                            </p>
                            <span className="spec-link" style={{ color: '#D97706', fontSize: '14px', fontWeight: '600' }}>
                                Write to us <ArrowSvg />
                            </span>
                        </a>

                    </div>

                    {/* Email strip */}
                    <div className="fu d3" style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '22px 36px', background: 'var(--gp)', border: '1.5px solid #b6c9b8', borderRadius: '18px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--gp)', border: '1px solid rgba(26,122,90,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>Email us directly</div>
                                <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--dark)', letterSpacing: '.2px' }}>support@arovita.care</div>
                            </div>
                        </div>
                        <div style={{ width: '1px', height: '36px', background: 'var(--border)', flexShrink: 0 }} className="contact-divider" />
                        <div style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: '1.6', maxWidth: '340px' }}>
                            All enquiries — support, partnerships, and research — reach our team at this address.
                        </div>
                        <a href="mailto:support@arovita.care" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 22px', background: 'var(--g)', color: 'white', borderRadius: '50px', fontSize: '13.5px', fontWeight: '700', textDecoration: 'none', flexShrink: 0, transition: 'all .25s' }}>
                            Open Mail <ArrowSvg />
                        </a>
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
        </div>
    );
}