import { Link } from 'react-router-dom';

const ArrowSvg = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

const features = [
  { icon:<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, title:'Comprehensive Health Records', desc:"All patient health records organized securely — doctors, labs, and home care services all connected in one unified platform." },
  { icon:<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>, title:'Telemedicine Built In', desc:'Integrated secure video consultations — your doctors can see patients in-clinic and remotely from the same platform.' },
  { icon:<><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></>, title:'AI Analytics & Reporting', desc:'Predictive analytics on bed occupancy, drug consumption, revenue forecasting, and clinical outcome trends.' },
  { icon:<><path d="M12 2l9 7-9 7-9-7z"/><path d="M3 9l9 7 9-7"/><path d="M3 15l9 7 9-7"/></>, title:'Multi-Branch Support', desc:'Manage multiple hospitals, clinics, or branches under a single account with consolidated reporting and central control.' },
];

const bars = [
  { label:'OPD', w:'88%', bg:'linear-gradient(90deg,var(--g),var(--gl))' },
  { label:'Lab', w:'92%', bg:'linear-gradient(90deg,#4A90D9,#93C5FD)' },
  { label:'Pharmacy', w:'76%', bg:'linear-gradient(90deg,#C09A52,#E8B84B)' },
  { label:'Billing', w:'95%', bg:'linear-gradient(90deg,#7B52D9,#A78BFA)' },
  { label:'Ward', w:'82%', bg:'linear-gradient(90deg,#4EAF9E,#2EC48A)' },
];

const chips = [
  { text:'✓ Secure', bg:'rgba(46,196,138,.1)', color:'var(--gl)', border:'rgba(46,196,138,.2)' },
  { text:'✓ ABHA', bg:'rgba(46,196,138,.1)', color:'var(--gl)', border:'rgba(46,196,138,.2)' },
  { text:'✓ HL7 FHIR', bg:'rgba(147,197,253,.1)', color:'#93C5FD', border:'rgba(147,197,253,.2)' },
  { text:'✓ ISO Certified', bg:'rgba(167,139,250,.1)', color:'#A78BFA', border:'rgba(167,139,250,.2)' },
  { text:'✓ GST Billing', bg:'rgba(232,184,75,.1)', color:'#E8B84B', border:'rgba(232,184,75,.2)' },
  { text:'✓ TPA Insurance', bg:'rgba(249,115,22,.1)', color:'#FCA5A5', border:'rgba(249,115,22,.15)' },
  { text:'✓ WhatsApp API', bg:'rgba(46,196,138,.1)', color:'var(--gl)', border:'rgba(46,196,138,.2)' },
  { text:'✓ Lab Devices', bg:'rgba(147,197,253,.1)', color:'#93C5FD', border:'rgba(147,197,253,.2)' },
];

const whyItems = [
  'Reduce administrative overhead significantly',
  'Eliminate billing errors & revenue leakage',
  'Improve patient satisfaction & throughput',
  'Full regulatory compliance — Secure, ISO Certified, GST',
  'Dedicated onboarding & 24/7 support team',
];

export default function DarkFeatures() {
  return (
    <section className="dark-features">
      <div className="df-orb1"></div>
      <div className="df-orb2"></div>
      <div className="container">
        <div className="df-grid">
          <div className="df-text sl-left">
            <div className="sec-label" style={{color:'var(--gl)'}}>Advanced Capabilities</div>
            <h2>Built for the <em>Demands</em> of Modern Healthcare</h2>
            <p>Beyond the basics — Arovita HMS includes intelligent features that help hospitals reduce errors, streamline compliance, and deliver better patient outcomes.</p>
            <div className="df-list">
              {features.map((f, i) => (
                <div className="df-item" key={i}>
                  <div className="df-ic"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--gl)" strokeWidth="2" strokeLinecap="round">{f.icon}</svg></div>
                  <div>
                    <div className="df-item-title">{f.title}</div>
                    <div className="df-item-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-green">Schedule a Demo <ArrowSvg/></Link>
          </div>

          <div className="df-visual sl-right">
            {/* Department Efficiency */}
            <div className="df-panel">
              <div className="df-panel-head">
                <div className="df-panel-title">Department Efficiency</div>
                <div style={{fontSize:'11px',color:'rgba(255,255,255,.35)'}}>This month</div>
              </div>
              <div className="df-bar-row">
                {bars.map((b, i) => (
                  <div className="df-bar" key={i}>
                    <div className="df-bar-label">{b.label}</div>
                    <div className="df-bar-track"><div className="df-bar-fill" style={{width:b.w, background:b.bg}}></div></div>
                    <div className="df-bar-val">{b.w}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="df-panel">
              <div className="df-panel-head">
                <div className="df-panel-title">Integrations & Compliance</div>
              </div>
              <div className="df-chip-row">
                {chips.map((c, i) => (
                  <div className="df-chip" key={i} style={{background:c.bg, color:c.color, borderColor:c.border}}>{c.text}</div>
                ))}
              </div>
            </div>

            {/* Why Choose */}
            <div className="df-panel">
              <div className="df-panel-head">
                <div className="df-panel-title">Why Hospitals Choose Arovita HMS</div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                {whyItems.map((item, i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--gl)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{fontSize:'12.5px',color:'rgba(255,255,255,.55)'}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
