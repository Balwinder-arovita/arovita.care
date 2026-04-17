import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';
import logoPoppins from '../../assets/logoPoppins.svg';
import '../../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrollY > 60 ? ' sc' : ''}`}>
        <div className="nav-pill">
          <Link to="/" className="nav-logo">
            <div className="logo-svg-wrap">
              <img src={logoPoppins} alt="Arovita" />
            </div>
            <span className="nav-brand">arovita.care</span>
          </Link>

          <div className="nav-links">
            <Link to="/" className={`nav-a${isActive('/') ? ' active' : ''}`}>Home</Link>
            <Link to="/services" className={`nav-a${isActive('/services') ? ' active' : ''}`}>Services</Link>
            <Link to="/about-us" className={`nav-a${isActive('/about-us') ? ' active' : ''}`}>About Us</Link>
            <Link to="/careers" className={`nav-a${isActive('/careers') ? ' active' : ''}`}>Careers</Link>
            <Link to="/contact" className={`nav-a${isActive('/contact') ? ' active' : ''}`}>Contact</Link>
          </div>

          <div className="nav-right">
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="nav-cta-btn">Login / Sign up</a>
          </div>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}></div>
        <div className="mobile-menu-panel">
          <div className="mm-label">Navigation</div>
          <Link to="/" className="mm-link">
            <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
            Home
          </Link>
          <Link to="/services" className="mm-link">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Services
          </Link>
          <Link to="/about-us" className="mm-link">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            About Us
          </Link>
          <Link to="/careers" className="mm-link">
            <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
            Careers
          </Link>
          <Link to="/contact" className="mm-link">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact
          </Link>

          <div className="mm-sep"></div>
          <div className="mm-cta">
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="nav-cta-btn" style={{display:'flex',justifyContent:'center',borderRadius:'12px'}}>Login / Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
}
