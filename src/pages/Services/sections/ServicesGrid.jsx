import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'video',
    label: 'Video Consult',
    badge: '24/7',
    color: '#166B4E',
    colorLight: '#E6F7F0',
    link: '/consult',
    tagline: 'Doctor on call, anywhere.',
    desc: 'Connect with verified specialists via HD video from your home. Get prescriptions, follow-up reminders, and your full consultation history — all in one place.',
    highlights: ['100+ verified specialists', 'Prescriptions auto-saved', 'Available round the clock'],
    steps: [
      { icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>, label: 'Pick Specialty', note: 'Choose from 15+ specialties' },
      { icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>, label: 'Start Video Call', note: 'HD video, no app needed' },
      { icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>, label: 'Get Prescription', note: 'Digital, shareable instantly' },
      { icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, label: 'Follow-up Synced', note: 'Auto-reminders set for you' },
    ],
    svg: <svg viewBox="0 0 64 64" fill="none" width="64" height="64"><rect x="6" y="10" width="44" height="32" rx="5" stroke="white" strokeWidth="2.5" fill="none"/><line x1="6" y1="36" x2="50" y2="36" stroke="white" strokeWidth="1.5" opacity=".5"/><path d="M20 48h24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/><path d="M32 42v6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/><circle cx="52" cy="14" r="7" fill="rgba(255,255,255,.15)" stroke="white" strokeWidth="1.5"/><path d="M50 14l1.5 1.5L55 11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    id: 'hospital',
    label: 'Hospital Visit',
    badge: 'Priority',
    color: '#4A2D8A',
    colorLight: '#F3E8FF',
    link: '/offline-consultation',
    tagline: 'Skip the queue, not the care.',
    desc: 'Book priority OPD appointments at partner hospitals and clinics. Walk in at your scheduled time — no waiting, no chaos. Your records travel with you.',
    highlights: ['Zero waiting time', '500+ partner hospitals', 'Digital records at reception'],
    steps: [
      { icon: <><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></>, label: 'Find Hospital', note: 'Search by location or specialty' },
      { icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>, label: 'Book Slot', note: 'Pick your preferred time' },
      { icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>, label: 'Priority Entry', note: 'Show digital booking ID' },
      { icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></>, label: 'Records Saved', note: 'Auto-synced to your dashboard' },
    ],
    svg: <svg viewBox="0 0 64 64" fill="none" width="64" height="64"><rect x="10" y="16" width="44" height="38" rx="4" stroke="white" strokeWidth="2.5" fill="none"/><path d="M32 10v6M26 13h12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/><circle cx="32" cy="34" r="7" stroke="white" strokeWidth="2" fill="none"/><path d="M29 34h6M32 31v6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    id: 'labonline',
    label: 'Online Lab Tests',
    badge: 'Home Pickup',
    color: '#9A7030',
    colorLight: '#FEF3C7',
    link: '/lab-tests',
    tagline: 'Test at home, results in the cloud.',
    desc: 'Book from 500+ diagnostic tests. A certified phlebotomist arrives at your doorstep for sample collection. Digital reports are delivered to your dashboard.',
    highlights: ['500+ tests available', 'Doorstep sample pickup', 'Reports in 24–48 hrs'],
    steps: [
      { icon: <><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10l4 4m-4-4v4m0 0H3m18 0v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7"/></>, label: 'Browse Tests', note: 'Search by name or condition' },
      { icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>, label: 'Schedule Pickup', note: 'Pick a slot that suits you' },
      { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>, label: 'Sample Collected', note: 'Certified technician visits' },
      { icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>, label: 'Digital Report', note: 'Shared with your doctor too' },
    ],
    svg: <svg viewBox="0 0 64 64" fill="none" width="64" height="64"><path d="M24 8v16L14 46c-1.5 4 1 8 5 8h22c4 0 6.5-4 5-8L36 24V8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><line x1="20" y1="8" x2="44" y2="8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/><circle cx="32" cy="38" r="4" fill="rgba(255,255,255,.3)"><animate attributeName="r" values="4;5.5;4" dur="1.8s" repeatCount="indefinite"/></circle></svg>,
  },
  {
    id: 'laboffline',
    label: 'Offline Lab Tests',
    badge: 'Walk-in',
    color: '#1E40AF',
    colorLight: '#DBEAFE',
    link: '/offline-lab-tests',
    tagline: 'Advanced diagnostics near you.',
    desc: 'Visit any partner diagnostic centre for full-spectrum testing — blood work, imaging, MRI, CT scans, and advanced screenings with NABL-accredited labs.',
    highlights: ['NABL-accredited labs', 'MRI, CT & imaging', 'Instant centre locator'],
    steps: [
      { icon: <><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></>, label: 'Find Centre', note: 'Nearest NABL lab near you' },
      { icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>, label: 'Walk In', note: 'No prior appointment needed' },
      { icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>, label: 'Get Tested', note: 'Full-spectrum diagnostics' },
      { icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></>, label: 'Reports Synced', note: 'Automatically on your dashboard' },
    ],
    svg: <svg viewBox="0 0 64 64" fill="none" width="64" height="64"><circle cx="28" cy="28" r="18" stroke="white" strokeWidth="2.5" fill="none"/><path d="M41 41L54 54" stroke="white" strokeWidth="4" strokeLinecap="round"/><circle cx="28" cy="28" r="8" fill="rgba(255,255,255,.2)"/><path d="M24 28h8M28 24v8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    id: 'nurse',
    label: 'Home Nursing',
    badge: 'Doorstep',
    color: '#0D9488',
    colorLight: '#CCFBF1',
    link: '/home-nurse',
    tagline: 'Expert care, at your doorstep.',
    desc: 'Certified nurses for post-operative care, elderly assistance, wound dressing, IV administration, and physiotherapy — all from the comfort of your home.',
    highlights: ['Certified & verified nurses', 'Post-op & elderly care', 'Daily progress tracking'],
    steps: [
      { icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></>, label: 'Submit Requirements', note: 'Describe care needs briefly' },
      { icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>, label: 'Nurse Assigned', note: 'Matched by specialisation' },
      { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></>, label: 'Home Visit', note: 'Arrives at scheduled time' },
      { icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, label: 'Ongoing Monitoring', note: 'Daily updates to family' },
    ],
    svg: <svg viewBox="0 0 64 64" fill="none" width="64" height="64"><path d="M32 54S10 38 10 24c0-8 6-14 14-14 4 0 7 2 8 5 1-3 4-5 8-5 8 0 14 6 14 14C54 38 32 54 32 54Z" stroke="white" strokeWidth="2.5" fill="none"/><path d="M28 30h8M32 26v8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    id: 'hms',
    label: 'HMS Solution',
    badge: 'B2B',
    color: '#4338CA',
    colorLight: '#E0E7FF',
    link: '/hms',
    tagline: 'One system for your entire hospital.',
    desc: 'A cloud-based hospital management system built for Indian healthcare — OPD/IPD, billing, lab, pharmacy, staff, and patient records in one elegant platform.',
    highlights: ['OPD, IPD & billing', 'Cloud-based, zero hardware', 'Custom setup for your team'],
    steps: [
      { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>, label: 'Onboard Team', note: 'Roles & access configured' },
      { icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>, label: 'Configure Modules', note: 'Built to your workflow' },
      { icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>, label: 'Go Live', note: 'Full training & support' },
      { icon: <><path d="M18 20V10M12 20V4M6 20v-6"/></>, label: 'Track & Scale', note: 'Real-time analytics dashboard' },
    ],
    svg: <svg viewBox="0 0 64 64" fill="none" width="64" height="64"><rect x="8" y="12" width="48" height="40" rx="5" stroke="white" strokeWidth="2.5" fill="none"/><path d="M8 24h48" stroke="white" strokeWidth="1.5" opacity=".5"/><path d="M16 34h10M16 42h14M42 34h6M42 40h4" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="46" cy="42" r="5" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,.15)"/></svg>,
  },
];

const ArrowSvg = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const CheckIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function ServicesGrid() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const [displayed, setDisplayed] = useState(0);

  // Touch handling — prevent browser back-swipe from triggering
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const panelRef = useRef(null);

  const switchTo = useCallback((i) => {
    if (i === active || animating) return;
    setDirection(i > active ? 1 : -1);
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(i);
      setActive(i);
      setAnimating(false);
    }, 300);
  }, [active, animating]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    // Only block horizontal swipes that are more horizontal than vertical
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
      e.preventDefault();
    }
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only act on clearly horizontal swipes (>50px, more horizontal than vertical)
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) switchTo((active + 1) % services.length);
      else switchTo((active - 1 + services.length) % services.length);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const svc = services[displayed];

  return (
    <section className="svc-showcase">
      <div className="container">
        <div className="svc-sc-header fu">
          <div className="sec-label">What We Offer</div>
          <h2 className="sec-title">Everything healthcare, <em>in one place.</em></h2>
        </div>

        {/* Tab Pills */}
        <div className="svc-tabs fu d1">
          {services.map((s, i) => (
            <button
              key={s.id}
              className={`svc-tab${active === i ? ' active' : ''}`}
              style={active === i ? { background: s.color, borderColor: s.color } : {}}
              onClick={() => switchTo(i)}
            >
              <span className="svc-tab-badge" style={{
                background: active === i ? 'rgba(255,255,255,.22)' : s.colorLight,
                color: active === i ? 'white' : s.color,
              }}>
                {s.badge}
              </span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="svc-progress-track">
          <div className="svc-progress-bar" style={{ width: `${((active + 1) / services.length) * 100}%`, background: svc.color }} />
        </div>

        {/* Main Panel */}
        <div
          ref={panelRef}
          className={`svc-panel${animating ? (direction > 0 ? ' slide-out-left' : ' slide-out-right') : ' slide-in'}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          {/* Left — visual */}
          <div className="svc-panel-visual" style={{ background: `linear-gradient(145deg, ${svc.color}f0, ${svc.color}a0)` }}>
            <div className="svc-panel-orb" />
            <div className="svc-panel-orb2" />
            <div className="svc-panel-icon">{svc.svg}</div>
            <div className="svc-panel-tagline">{svc.tagline}</div>
            <div className="svc-panel-desc">{svc.desc}</div>
            <div className="svc-panel-highlights">
              {svc.highlights.map((h, i) => (
                <div key={i} className="svc-highlight-row">
                  <span className="svc-highlight-dot" />
                  {h}
                </div>
              ))}
            </div>
            <Link to={svc.link} className="svc-panel-btn">
              Explore <ArrowSvg />
            </Link>
            <div className="svc-panel-counter">
              {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </div>
          </div>

          {/* Right — process steps */}
          <div className="svc-panel-steps">
            <div className="svc-ps-heading">
              <span className="svc-ps-label" style={{ color: svc.color }}>How it works</span>
              <span className="svc-ps-service-name" style={{ color: svc.color }}>{svc.label}</span>
            </div>
            <div className="svc-ps-list">
              {svc.steps.map((step, i) => (
                <div className="svc-ps-row" key={`${svc.id}-${i}`} style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="svc-ps-left">
                    <div className="svc-ps-num">{i + 1}</div>
                    {i < svc.steps.length - 1 && <div className="svc-ps-line" style={{ background: `${svc.color}22` }} />}
                  </div>
                  <div className="svc-ps-content">
                    <div className="svc-ps-icon" style={{ background: svc.colorLight, border: `1.5px solid ${svc.color}30` }}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={svc.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {step.icon}
                      </svg>
                    </div>
                    <div className="svc-ps-text">
                      <div className="svc-ps-label-text">{step.label}</div>
                      <div className="svc-ps-note">{step.note}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow nav */}
            <div className="svc-nav-arrows">
              <button className="svc-arrow" onClick={() => switchTo((active - 1 + services.length) % services.length)} style={{ borderColor: `${svc.color}40` }} disabled={animating}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={svc.color} strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
              <div className="svc-nav-dots">
                {services.map((_, i) => (
                  <button key={i} className="svc-dot" onClick={() => switchTo(i)}
                    style={{ background: i === active ? svc.color : `${svc.color}30`, transform: i === active ? 'scale(1.4)' : 'scale(1)' }}
                    disabled={animating}
                  />
                ))}
              </div>
              <button className="svc-arrow" onClick={() => switchTo((active + 1) % services.length)} style={{ borderColor: `${svc.color}40` }} disabled={animating}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={svc.color} strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
