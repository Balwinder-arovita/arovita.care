import { Link } from 'react-router-dom';

const ArrowSvg = () => <svg className="arr" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="svc-header fu">
          <div>
            <div className="sec-label">Services</div>
            <h2 className="sec-title">Healthcare services, connected in <em>one platform.</em></h2>
            <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '520px', marginTop: '10px', lineHeight: '1.7' }}>Access consultations, diagnostics, and professional care — all designed to work together.</p>
          </div>
        </div>

        <div className="svc-grid">

          {/* Card 1: Tele-Consultation (Online) */}
          <div className="svc-card2 fu d1">
            <div className="svc-img2" style={{ background: 'linear-gradient(145deg,#B8E8D0,#4FAF82)' }}>
              <div className="svc-tag2" style={{ color: '#0B5C3A', background: 'rgba(255,255,255,0.85)' }}>Online · Secure</div>
              <svg className="svc-animated-svg" viewBox="0 0 120 120" fill="none">
                <rect x="14" y="20" width="92" height="62" rx="8" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
                <rect x="22" y="28" width="76" height="46" rx="4" fill="rgba(255,255,255,0.15)" />
                <path d="M26 51 L36 51 L40 41 L45 61 L50 44 L55 58 L59 51 L98 51" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" strokeLinecap="round">
                  <animate attributeName="stroke-dasharray" values="0 200;200 0;200 0;0 200" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-dashoffset" values="200;0;-200;-400" dur="3s" repeatCount="indefinite" />
                </path>
                <circle cx="60" cy="24" r="3" fill="rgba(255,255,255,0.5)"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" /></circle>
              </svg>
            </div>
            <div className="svc-body2">
              <div className="svc-title2">Video-Consultation</div>
              <div className="svc-desc2">Consult doctors remotely through secure video calls.</div>
              <Link to="/consult" className="svc-link2" style={{ background: 'rgba(26,122,90,.08)', color: '#1A7A5A' }}>Start Consultation <ArrowSvg /></Link>
            </div>
          </div>

          {/* Card 2: Clinic/Hospital Visit (In-Clinic) */}
          <div className="svc-card2 fu d2">
            <div className="svc-img2" style={{ background: 'linear-gradient(145deg,#D4C4ED,#9882C9)' }}>
              <div className="svc-tag2" style={{ color: '#4A2D8A', background: 'rgba(255,255,255,0.85)' }}>In-Clinic</div>
              <svg className="svc-animated-svg" viewBox="0 0 120 120" fill="none">
                <rect x="18" y="48" width="84" height="58" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" />
                <path d="M12 48 L60 16 L108 48" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinejoin="round" />
                <rect x="48" y="28" width="24" height="8" rx="4" fill="rgba(255,255,255,0.8)" />
                <rect x="56" y="20" width="8" height="24" rx="4" fill="rgba(255,255,255,0.8)" />
                <rect x="46" y="80" width="28" height="26" rx="3" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
                <circle cx="60" cy="10" r="4" fill="rgba(255,255,255,0.8)"><animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" /></circle>
              </svg>
            </div>
            <div className="svc-body2">
              <div className="svc-title2">Hospital Visits</div>
              <div className="svc-desc2">Book appointments with partner hospitals and clinics.</div>
              <Link to="/offline-consultation" className="svc-link2" style={{ background: 'rgba(107,82,217,.08)', color: '#6B52D9' }}>Book Appointment <ArrowSvg /></Link>
            </div>
          </div>

          {/* Card 3: Online Lab Tests (Diagnostics) */}
          <div className="svc-card2 fu d3">
            <div className="svc-img2" style={{ background: 'linear-gradient(145deg,#EDD8C4,#C99A6E)' }}>
              <div className="svc-tag2" style={{ color: '#7A3E0A', background: 'rgba(255,255,255,0.85)' }}>Diagnostics</div>
              <svg className="svc-animated-svg" viewBox="0 0 120 120" fill="none">
                <rect x="42" y="16" width="22" height="54" rx="11" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" />
                <rect x="44" y="50" width="18" height="20" rx="0" fill="rgba(255,255,255,0.4)"><animate attributeName="height" values="20;28;20" dur="3s" repeatCount="indefinite" /><animate attributeName="y" values="50;42;50" dur="3s" repeatCount="indefinite" /></rect>
                <path d="M80 38 L86 44 L98 32" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><animate attributeName="stroke-dasharray" values="0 40;40 0" dur="1.5s" repeatCount="indefinite" /></path>
                <circle cx="53" cy="54" r="2.5" fill="rgba(255,255,255,0.6)"><animate attributeName="cy" values="68;50;68" dur="2s" repeatCount="indefinite" /></circle>
              </svg>
            </div>
            <div className="svc-body2">
              <div className="svc-title2">Online Lab Tests</div>
              <div className="svc-desc2">Book diagnostic tests with doorstep sample collection.</div>
              <Link to="/lab-tests" className="svc-link2" style={{ background: 'rgba(217,123,10,.08)', color: '#D97B0A' }}>Book Test <ArrowSvg /></Link>
            </div>
          </div>

          {/* Card 4: Offline Lab Tests (Diagnostic Center) */}
          <div className="svc-card2 fu d1">
            <div className="svc-img2" style={{ background: 'linear-gradient(145deg,#C4D8ED,#6E9AC9)' }}>
              <div className="svc-tag2" style={{ color: '#12407A', background: 'rgba(255,255,255,0.85)' }}>Visit Center</div>
              <svg className="svc-animated-svg" viewBox="0 0 120 120" fill="none">
                <circle cx="66" cy="50" r="14" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
                <circle cx="66" cy="50" r="6" fill="rgba(255,255,255,0.3)"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" /></circle>
                <path d="M30 72 L90 72" stroke="rgba(255,255,255,0.6)" strokeWidth="4" strokeLinecap="round" />
                <path d="M84 24 Q88 29 84 34 Q80 39 84 44" stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <rect x="30" y="18" width="16" height="18" rx="3" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.65)" strokeWidth="2" transform="rotate(-18 38 27)" />
              </svg>
            </div>
            <div className="svc-body2">
              <div className="svc-title2">Offline Lab Tests</div>
              <div className="svc-desc2">Visit our partner diagnostic centers for complex screenings.</div>
              <Link to="/offline-lab-tests" className="svc-link2" style={{ background: 'rgba(26,111,212,.06)', color: '#1A6FD4' }}>Find Center <ArrowSvg /></Link>
            </div>
          </div>

          {/* Card 5: Home Nurse (Care Programs) */}
          <div className="svc-card2 fu d2">
            <div className="svc-img2" style={{ background: 'linear-gradient(145deg,#E8D8F0,#B882C9)' }}>
              <div className="svc-tag2" style={{ color: '#5B0D8A', background: 'rgba(255,255,255,0.85)' }}>Home Care</div>
              <svg className="svc-animated-svg" viewBox="0 0 120 120" fill="none">
                <path d="M60 98 Q20 70 20 46 A22 22 0 0 1 60 36 A22 22 0 0 1 100 46 Q100 70 60 98Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5">
                  <animate attributeName="d" values="M60 98 Q20 70 20 46 A22 22 0 0 1 60 36 A22 22 0 0 1 100 46 Q100 70 60 98Z;M60 95 Q18 67 18 44 A24 24 0 0 1 60 33 A24 24 0 0 1 102 44 Q102 67 60 95Z;M60 98 Q20 70 20 46 A22 22 0 0 1 60 36 A22 22 0 0 1 100 46 Q100 70 60 98Z" dur="1.2s" repeatCount="indefinite" />
                </path>
                <path d="M34 58 L40 58 L44 50 L48 66 L52 54 L56 60 L60 58 L86 58" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" strokeLinecap="round">
                  <animate attributeName="stroke-dasharray" values="0 100;100 0;100 0" dur="1.2s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <div className="svc-body2">
              <div className="svc-title2">Home Nurse</div>
              <div className="svc-desc2">Professional nursing care and assistance at your doorstep.</div>
              <Link to="/home-nurse" className="svc-link2" style={{ background: 'rgba(184,82,201,.06)', color: '#8B2FA8' }}>Request Nurse <ArrowSvg /></Link>
            </div>
          </div>

          {/* Card 6: Hospital Management System (HMS) */}
          <div className="svc-card2 fu d3">
            <div className="svc-img2" style={{ background: 'linear-gradient(145deg,#C4D8ED,#4A7AB5)' }}>
              <div className="svc-tag2" style={{ color: '#0D2A50', background: 'rgba(255,255,255,0.85)' }}>For Hospitals</div>
              <svg className="svc-animated-svg" viewBox="0 0 120 120" fill="none">
                <rect x="14" y="28" width="92" height="72" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
                <circle cx="26" cy="37" r="4" fill="rgba(255,255,255,0.7)"><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" /></circle>
                <rect x="24" y="56" width="28" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
                <rect x="24" y="56" width="20" height="6" rx="3" fill="rgba(255,255,255,0.7)"><animate attributeName="width" values="20;28;20" dur="2.5s" repeatCount="indefinite" /></rect>
                <path d="M70 72 L76 66 L82 74 L88 62 L94 68" stroke="rgba(255,255,255,0.85)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><animate attributeName="stroke-dasharray" values="0 80;80 0;80 0" dur="2s" repeatCount="indefinite" /></path>
              </svg>
            </div>
            <div className="svc-body2">
              <div className="svc-title2">Hospital Management</div>
              <div className="svc-desc2">Digital solutions for hospital operations and patient care.</div>
              <Link to="/hms" className="svc-link2" style={{ background: 'rgba(74,122,181,.1)', color: '#2A5FA8' }}>Explore HMS <ArrowSvg /></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}