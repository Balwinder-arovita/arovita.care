import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-in">
          <div className="about-imgs sl-left">
            <div className="ab-card abc1">
              <div className="ab-card-inner">
                <svg viewBox="0 0 160 280" width="160" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 20 Q90 60 50 100 Q10 140 50 180 Q90 220 50 260" stroke="rgba(255,255,255,0.7)" strokeWidth="3" fill="none" strokeLinecap="round"><animate attributeName="stroke-dasharray" values="0 400;400 0" dur="2s" fill="freeze"/></path>
                  <path d="M110 20 Q70 60 110 100 Q150 140 110 180 Q70 220 110 260" stroke="rgba(255,255,255,0.7)" strokeWidth="3" fill="none" strokeLinecap="round"><animate attributeName="stroke-dasharray" values="0 400;400 0" dur="2s" begin=".3s" fill="freeze"/></path>
                  {[40,80,120,160,200,240].map((y,i) => (
                    <g key={i}>
                      <line x1="50" y1={y} x2="110" y2={y} stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"><animate attributeName="opacity" values="0;1" dur=".5s" begin={`${0.6+i*0.1}s`} fill="freeze"/></line>
                      <circle cx="50" cy={y} r="5" fill="rgba(255,255,255,0.8)"/>
                      <circle cx="110" cy={y} r="5" fill="rgba(255,255,255,0.8)"/>
                    </g>
                  ))}
                  <circle cx="30" cy="30" r="3" fill="rgba(255,255,255,0.5)"><animate attributeName="cy" values="30;10;30" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/></circle>
                  <circle cx="140" cy="200" r="3" fill="rgba(255,255,255,0.5)"><animate attributeName="cy" values="200;220;200" dur="4s" repeatCount="indefinite"/></circle>
                </svg>
              </div>
            </div>
            <div className="ab-card abc2">
              <div className="ab-card-inner">
                <svg viewBox="0 0 200 200" width="190" height="190" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.2)" strokeWidth="10"/>
                  <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.8)" strokeWidth="10" strokeLinecap="round" strokeDasharray="502" strokeDashoffset="502" transform="rotate(-90 100 100)"><animate attributeName="stroke-dashoffset" values="502;100" dur="2.5s" fill="freeze"/></circle>
                  <circle cx="100" cy="100" r="56" stroke="rgba(255,255,255,0.12)" strokeWidth="8"/>
                  <circle cx="100" cy="100" r="56" stroke="rgba(255,255,255,0.5)" strokeWidth="8" strokeLinecap="round" strokeDasharray="352" strokeDashoffset="352" transform="rotate(-90 100 100)"><animate attributeName="stroke-dashoffset" values="352;70" dur="2.5s" begin=".3s" fill="freeze"/></circle>
                  <text x="100" y="95" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="22" fontWeight="bold" fontFamily="Georgia,serif">Secure</text>
                  <text x="100" y="115" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="sans-serif">Compliant</text>
                </svg>
              </div>
            </div>
            <div className="ab-badge">
              <div className="ab-badge-num" style={{fontSize:'20px'}}>360°</div>
              <div className="ab-badge-lbl">Health ID<br/>Ready</div>
            </div>
            <div className="ab-ring">
              <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="42" stroke="#E6F7F0" strokeWidth="10"/>
                <circle cx="48" cy="48" r="42" stroke="#1A7A5A" strokeWidth="10" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="66" transform="rotate(-90 48 48)"/>
                <text x="48" y="53" textAnchor="middle" fill="#1A7A5A" fontSize="14" fontWeight="bold" fontFamily="Georgia,serif">75%</text>
              </svg>
            </div>
          </div>

          <div className="about-text sl-right">
            <div className="sec-label">Our Story</div>
            <h2 className="sec-title" style={{marginBottom:'20px'}}>Transforming Healthcare for <em>Every Indian</em></h2>
            <div className="about-stats">
              <div className="as2"><div className="as2-num" style={{fontSize:'18px'}}>Bengaluru</div><div className="as2-lbl">Currently Serving</div></div>
              <div className="as2"><div className="as2-num" style={{fontSize:'18px'}}>✓</div><div className="as2-lbl">Secure Platform</div></div>
              <div className="as2"><div className="as2-num" style={{fontSize:'18px'}}>360°</div><div className="as2-lbl">Health View</div></div>
            </div>
            <p className="about-desc">Arovita was born from a simple belief — that quality healthcare should never be a privilege. We've built a platform where world-class medical expertise meets the warmth of a family doctor, available every single moment of every day.</p>
            <p className="about-desc" style={{marginBottom:'28px'}}>From AI-powered health insights to secure digital records, we combine cutting-edge technology with genuine compassion to ensure every patient never has to face a health challenge alone.</p>
            <ul className="check-list">
              {['Unified digital health records accessible anytime, anywhere','Video and in-clinic consultations with verified specialists','Home lab sample collection with digital reports delivered fast','End-to-end data encryption and secure payment infrastructure'].map((t,i) => (
                <li key={i}><div className="check-ic"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1A7A5A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>{t}</li>
              ))}
            </ul>
            <Link to="/about-us" className="btn-green">Learn Our Story <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
