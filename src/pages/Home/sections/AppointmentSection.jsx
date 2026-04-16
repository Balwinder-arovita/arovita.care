import { Link } from 'react-router-dom';

export default function AppointmentSection() {
  return (
    <section className="appt">
      <div className="appt-orb aorb1"></div>
      <div className="appt-orb aorb2"></div>
      <div className="container">
        <div className="appt-in">
          <div className="appt-text fu">
            <h2 className="appt-h">Connected care starts<br/>with one step.</h2>
            <p className="appt-p">Access consultations, diagnostics, and ongoing care — all in one connected platform.</p>
          </div>
          <div className="appt-actions fu d2">
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="btn-white">Explore Platform <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <Link to="/contact" className="btn-white-outline">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
