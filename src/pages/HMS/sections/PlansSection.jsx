import { Link } from 'react-router-dom';

const ArrowSvg = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const CheckSvg = () => <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>;

const plans = [
  { name:'Clinic', tagline:'For small clinics & solo practitioners', billing:'Custom pricing for your clinic size', featured:false,
    features:['Patient Management & EMR','Appointment & Scheduling','Basic Billing & Invoicing','Digital Health Records','Up to 5 staff users','Email & chat support'] },
  { name:'Hospital', tagline:'For medium hospitals & nursing homes', billing:'Tailored to your bed count & departments', featured:true,
    features:['Everything in Clinic, plus:','Ward & Bed Management','Pharmacy & Lab Modules','Insurance & TPA Billing','Telemedicine Integration','Unlimited staff users','Priority onboarding & support'] },
  { name:'Enterprise', tagline:'For large hospitals & multi-branch chains', billing:'Custom enterprise agreement', featured:false,
    features:['Everything in Hospital, plus:','Multi-branch management','AI analytics & forecasting','Custom API integrations','Dedicated account manager','SLA-backed 24/7 support'] },
];

export default function PlansSection() {
  return (
    <section className="plans" id="plans">
      <div className="container">
        <div style={{textAlign:'center'}} className="fu">
          <div className="sec-label">Pricing</div>
          <h2 className="sec-title">Simple Plans for <em>Every Hospital</em></h2>
          <p style={{fontSize:'15px',color:'var(--muted)',maxWidth:'480px',margin:'14px auto 0',lineHeight:'1.7'}}>All plans include full onboarding support. No hidden fees. Cancel anytime.</p>
        </div>
        <div className="plans-grid">
          {plans.map((p, i) => (
            <div className={`plan-card${p.featured ? ' featured' : ''} fu d${i+1}`} key={i}>
              {p.featured && <div className="plan-badge">Most Popular</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-tagline">{p.tagline}</div>
              <div className="plan-price">Contact <sub>us</sub></div>
              <div className="plan-billing">{p.billing}</div>
              <div className="plan-divider"></div>
              <div className="plan-features">
                {p.features.map((f, j) => (
                  <div className="pf" key={j}><div className="pf-ic"><CheckSvg/></div>{f}</div>
                ))}
              </div>
              {p.featured ? (
                <Link to="/contact" className="btn-outline-white">Get Quote <ArrowSvg/></Link>
              ) : (
                <Link to="/contact" className="btn-green">{i === 2 ? 'Contact Sales' : 'Get Quote'} <ArrowSvg/></Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
