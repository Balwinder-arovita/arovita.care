import { Link } from 'react-router-dom';

const ArrowSvg = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

export default function CtaBanner() {
  return (
    <section className="hms-cta-banner">
      <div className="cta-orb corb1"></div>
      <div className="cta-orb corb2"></div>
      <div className="container">
        <div className="fu">
          <h2>Ready to modernise<br/>your <em style={{fontStyle:'italic',color:'rgba(255,255,255,.9)'}}>hospital?</em></h2>
          <p>Talk to our team and get a personalised demo of Arovita HMS — built for the way Indian hospitals work.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-white">Request a Free Demo <ArrowSvg/></Link>
            <Link to="/contact" className="btn-ghost" style={{borderColor:'rgba(255,255,255,.3)',color:'rgba(255,255,255,.85)'}}>Talk to Sales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
