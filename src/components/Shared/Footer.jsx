import { Link } from 'react-router-dom';
import logoPoppinsWhite from '../../assets/logoPoppins-white.svg';
import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src={logoPoppinsWhite} alt="Arovita" width="36" height="36" />
              <span className="footer-brand">Aro<span>vita</span></span>
            </div>
            <p className="footer-desc">Building a connected ecosystem for continuous healthcare — across services, providers, and health data.</p>
            <div className="footer-social">
              <a href="mailto:support@arovita.care" className="fsb" aria-label="Email">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/arovita-care/" target="_blank" rel="noopener noreferrer" className="fsb" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-h">Services</div>
            <ul className="footer-links">
              <li><Link to="/consult">Video-Consultation</Link></li>
              <li><Link to="/offline-consultation">Hospital Visits</Link></li>
              <li><Link to="/lab-tests">Online Lab Tests</Link></li>
              <li><Link to="/offline-lab-tests">Offline Lab Tests</Link></li>
              <li><Link to="/home-nurse">Home Nurse</Link></li>
              <li><Link to="/hms">Hospital Management</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-h">Company</div>
            <ul className="footer-links">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="footer-h" style={{marginTop:'24px'}}>Legal</div>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-h">Get in Touch</div>
            <ul className="footer-links">
              <li><a href="mailto:support@arovita.care">support@arovita.care</a></li>
              {/* <li><a href="https://arovita.care" target="_blank" rel="noopener noreferrer">arovita.care</a></li> */}
            </ul>
            <div className="footer-h" style={{marginTop:'24px'}}>Location</div>
            <ul className="footer-links">
              <li><span style={{fontSize:'13px',lineHeight:1.7,color:'rgba(255,255,255,.72)'}}>Jayanagar, Bengaluru,<br/>Karnataka, India — 560041</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© {new Date().getFullYear()} Arovita Healthcare. All rights reserved.</div>
          <ul className="footer-links2">
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
