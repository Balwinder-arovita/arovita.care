import { Link } from 'react-router-dom';

const CheckSvg = ({color = '#1A7A5A'}) => <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={color} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;

export default function EcosystemSection() {
  return (
    <section className="pricing" id="ecosystem">
      <div className="container">
        <div style={{textAlign:'center'}} className="fu">
          <div className="sec-label">Ecosystem</div>
          <h2 className="sec-title">A connected ecosystem for <em>continuous healthcare.</em></h2>
          <p style={{fontSize:'15px',color:'var(--muted)',maxWidth:'520px',margin:'14px auto 0',lineHeight:'1.7'}}>Arovita brings care services, providers, and health data together to enable seamless and continuous care.</p>
        </div>
        <div className="price-grid2" style={{marginTop:'52px'}}>
          {/* Block 1: Care Experience */}
          <div className="pc fu d1">
            <div className="feat-ic2" style={{marginBottom:'20px',background:'var(--gp)'}}><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1A7A5A" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
            <div className="pc-name" style={{fontFamily:"'Playfair Display',serif",fontSize:'20px'}}>Care Experience</div>
            <div className="pc-desc" style={{marginTop:'12px',fontSize:'14px',lineHeight:'1.7'}}>Access consultations, diagnostics, pharmacy, and follow-up care in one connected experience.</div>
            <div className="pc-sep"></div>
            <ul className="pc-feats">
              {['In-clinic & video-consultations','Lab diagnostics & pharmacy','Follow-up & monitoring','Rewards for staying healthy'].map((f,i) => (
                <li key={i}><div className="pf-dot"><CheckSvg/></div>{f}</li>
              ))}
            </ul>
            <a href="https://my.arovita.care" target="_blank" rel="noopener noreferrer" className="pc-btn">Explore Platform</a>
          </div>

          {/* Block 2: Provider Platform */}
          <div className="pc fu d2" style={{background:'linear-gradient(145deg,#D4C4ED,#9882C9)',borderColor:'rgba(152,130,201,.3)',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:'-30px',right:'-30px',width:'130px',height:'130px',background:'radial-gradient(circle,rgba(255,255,255,.22),transparent 70%)',pointerEvents:'none'}}></div>
            <div style={{position:'absolute',bottom:'-20px',left:'-20px',width:'100px',height:'100px',background:'radial-gradient(circle,rgba(107,82,217,.25),transparent 70%)',pointerEvents:'none'}}></div>
            <div className="feat-ic2" style={{marginBottom:'20px',background:'rgba(255,255,255,.25)',border:'1px solid rgba(255,255,255,.3)'}}><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#4A2D8A" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
            <div className="pc-name" style={{fontFamily:"'Playfair Display',serif",fontSize:'20px',color:'#2A1060',textTransform:'none',letterSpacing:0}}>Provider Platform</div>
            <div className="pc-desc" style={{marginTop:'12px',fontSize:'14px',lineHeight:'1.7',color:'rgba(42,16,96,.65)'}}>Hospitals and clinics manage workflows, patients, and care delivery through a unified system.</div>
            <div className="pc-sep" style={{background:'rgba(74,45,138,.15)'}}></div>
            <ul className="pc-feats">
              {['OPD & IPD workflow management','Modular & configurable setup','Works for clinics to hospitals','Connected patient ecosystem','Arovita adapts to your workflow'].map((f,i) => (
                <li key={i}><div className="pf-dot" style={{background:'rgba(255,255,255,.35)'}}><CheckSvg color="#4A2D8A"/></div><span style={{color:'#2A1060'}}>{f}</span></li>
              ))}
            </ul>
            <Link to="/contact" className="pc-btn" style={{background:'rgba(255,255,255,.9)',color:'#4A2D8A',borderColor:'transparent'}}>Partner with Arovita</Link>
          </div>

          {/* Block 3: Health Intelligence */}
          <div className="pc fu d3">
            <div className="feat-ic2" style={{marginBottom:'20px',background:'var(--gp)'}}><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1A7A5A" strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
            <div className="pc-name" style={{fontFamily:"'Playfair Display',serif",fontSize:'20px'}}>Health Intelligence</div>
            <div className="pc-desc" style={{marginTop:'12px',fontSize:'14px',lineHeight:'1.7'}}>Structured health data enables insights, reminders, and continuous care coordination.</div>
            <div className="pc-sep"></div>
            <ul className="pc-feats">
              {['Connected patient journeys','Unified care coordination','Continuous care insights','Preventive & population health'].map((f,i) => (
                <li key={i}><div className="pf-dot"><CheckSvg/></div>{f}</li>
              ))}
            </ul>
            <Link to="/contact" className="pc-btn">Explore Collaboration</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
