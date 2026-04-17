import { useState, useEffect, useRef } from 'react';

const steps = [
  { num: 1, title: 'Book Consultation', desc: 'Choose a doctor, pick a date and time — done in under 60 seconds, from anywhere.', color: '#1A7A5A',
    icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
  { num: 2, title: 'Visit Your Doctor', desc: 'Meet in-clinic or via HD video call. Your full history is already visible to the doctor.', color: '#0D9488',
    icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
  { num: 3, title: 'Get Your Prescription', desc: 'Receive a digital prescription — saved to your profile. No paper, never lost.', color: '#166B4E',
    icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></> },
  { num: 4, title: 'Book Lab Tests', desc: 'Order tests directly from your prescription — home pickup or walk-in. Reports go straight to your doctor.', color: '#9A7030',
    icon: <><path d="M9 3H5a2 2 0 00-2 2v4h18V5a2 2 0 00-2-2h-4M15 3V1M9 3V1M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/></> },
  { num: 5, title: 'Receive Care', desc: 'Medicine delivery, home nursing, or in-hospital care — all coordinated in one place.', color: '#4A2D8A',
    icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
  { num: 6, title: 'Follow-up & Monitoring', desc: 'Smart reminders for review appointments, repeat tests, and refills. Arovita remembers so you don\'t have to.', color: '#1E40AF',
    icon: <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></> },
  { num: 7, title: 'Tracks Over Time', desc: 'Vitals, lab trends, and records build your health story — visible to you and your doctor.', color: '#4338CA',
    icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></> },
  { num: 8, title: 'Next Visit is Smarter', desc: 'Your full history flows into the next consultation. Every loop is faster and more personalised.', color: '#1A7A5A',
    icon: <><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></> },
];

const DURATION = 4000;

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setActive(i);
    timerRef.current = setInterval(() => setActive(a => (a + 1) % steps.length), DURATION);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setActive(a => (a + 1) % steps.length), DURATION);
    return () => clearInterval(timerRef.current);
  }, []);

  const s = steps[active];

  return (
    <section className="features" id="how-it-works">
      <div className="container">
        <div className="journey-header fu">
          <div className="sec-label">How Arovita Works</div>
          <h2 className="sec-title">Not a one-time visit. <em>A continuous care loop.</em></h2>
          <p className="journey-sub">Every step connects to the next — consultations, tests, treatment, follow-ups, all in one place.</p>
        </div>

        <div className="jss-layout fu d1">

          {/* LEFT — step list */}
          <div className="jss-list">
            {steps.map((st, i) => (
              <button key={i} className={`jss-item${i === active ? ' jss-active' : ''}`}
                style={i === active ? { borderColor: st.color, background: `${st.color}08` } : {}}
                onClick={() => goTo(i)}>
                <div className="jss-num" style={{ background: i === active ? st.color : 'var(--border)', color: i === active ? 'white' : 'var(--muted)' }}>
                  {i < active ? <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> : st.num}
                </div>
                <div className="jss-item-title" style={i === active ? { color: st.color } : {}}>{st.title}</div>
                {i < steps.length - 1 && <div className="jss-connector" style={{ background: i < active ? st.color : 'var(--border)', opacity: i < active ? .35 : 1 }}/>}
              </button>
            ))}
          </div>

          {/* RIGHT — detail card */}
          <div className="jss-card" style={{ borderColor: `${s.color}30`, background: `${s.color}06` }} key={active}>
            <div className="jss-card-icon" style={{ background: `${s.color}15`, border: `1.5px solid ${s.color}25` }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
            </div>
            <div className="jss-card-step" style={{ color: s.color }}>Step {s.num} of 8</div>
            <h3 className="jss-card-title">{s.title}</h3>
            <p className="jss-card-desc">{s.desc}</p>
            <div className="jss-card-progress">
              <div className="jss-prog-bar">
                {steps.map((_, i) => (
                  <div key={i} className="jss-prog-dot" style={{ background: i === active ? s.color : i < active ? `${s.color}50` : 'var(--border)' }} onClick={() => goTo(i)}/>
                ))}
              </div>
              <div className="jss-prog-hint" style={{ color: s.color }}>{active + 1} / 8</div>
            </div>
            <div className="jss-nav">
              <button className="jss-arrow" onClick={() => goTo((active - 1 + steps.length) % steps.length)} style={{ borderColor: `${s.color}30`, color: s.color }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="jss-arrow" onClick={() => goTo((active + 1) % steps.length)} style={{ borderColor: `${s.color}30`, color: s.color }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
