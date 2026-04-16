import { Link } from 'react-router-dom';

const ArrowSvg = () => <svg className="arr" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;

const services = [
  {
    title: 'Video-Consultation',
    desc: 'Video consultations with verified specialists from the comfort of your home.',
    badge: 'badge-green',
    badgeText: '24/7 Available',
    bg: 'linear-gradient(135deg,#166B4E,#22A374)',
    btnText: 'Book Consultation',
    link: '/consult',
    svg: <svg viewBox="0 0 52 52" fill="none"><rect x="4" y="8" width="36" height="28" rx="4" stroke="white" strokeWidth="2.2" fill="none" /><line x1="4" y1="32" x2="40" y2="32" stroke="white" strokeWidth="1.5" /><path d="M16 38h12" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
  },
  {
    title: 'Hospital Visits',
    desc: 'Book priority appointments and skip the queue at partner clinics',
    badge: 'badge-green',
    badgeText: 'Instant Booking',
    bg: 'linear-gradient(135deg,#4A2D8A,#9882C9)',
    btnText: 'Find Hospital',
    link: '/offline-consultation',
    svg: <svg viewBox="0 0 52 52" fill="none"><rect x="10" y="14" width="32" height="30" rx="3" stroke="white" strokeWidth="2.2" fill="none" /><path d="M26 8v6M22 11h8" stroke="white" strokeWidth="2.2" strokeLinecap="round" /><circle cx="26" cy="28" r="5" stroke="white" strokeWidth="2" fill="none" /><path d="M21 28h10M26 23v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
  },
  {
    title: 'Online Lab Tests',
    desc: 'Book lab tests online with doorstep sample collection and digital reports delivered to you.',
    badge: 'badge-blue',
    badgeText: 'Home Collection',
    bg: 'linear-gradient(135deg,#9A7030,#E8B84B)',
    btnText: 'Book Home Test',
    link: '/lab-tests',
    svg: <svg viewBox="0 0 52 52" fill="none"><path d="M20 6V18L12 38C11 41 13 44 16 44H36C39 44 41 41 40 38L32 18V6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /><line x1="17" y1="6" x2="35" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" /><circle cx="26" cy="30" r="3" fill="white" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" /></circle></svg>
  },
  {
    title: 'Offline Lab Tests',
    desc: 'Walk into a partner diagnostic centre for tests, imaging, and advanced screenings.',
    badge: 'badge-blue',
    badgeText: 'Center Visit',
    bg: 'linear-gradient(135deg,#1E40AF,#60A5FA)',
    btnText: 'Find Center',
    link: '/offline-lab-tests',
    svg: <svg viewBox="0 0 52 52" fill="none"><circle cx="22" cy="22" r="14" stroke="white" strokeWidth="2.5" fill="none" /><path d="M32 32L44 44" stroke="white" strokeWidth="4" strokeLinecap="round" /><circle cx="22" cy="22" r="6" fill="white" opacity="0.3" /></svg>
  },
  {
    title: 'Home Nursing',
    desc: 'Professional post-operative and elderly care by certified nurses',
    badge: 'badge-green',
    badgeText: 'Doorstep Care',
    bg: 'linear-gradient(135deg,#0D9488,#2DD4BF)',
    btnText: 'Request Nurse',
    link: '/home-nurse',
    svg: <svg viewBox="0 0 52 52" fill="none"><path d="M26 42S8 30 8 20C8 14 12 10 18 10C22 10 25 12 26 15C27 12 30 10 34 10C40 10 44 14 44 20C44 30 26 42 26 42Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M22 24h8M26 20v8" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
  },
  {
    title: 'HMS Solution',
    desc: 'Complete clinic management ecosystem for doctors and hospitals',
    badge: 'badge-active',
    badgeText: 'B2B Solution',
    bg: 'linear-gradient(135deg,#4338CA,#818CF8)',
    btnText: 'Explore HMS',
    link: '/hms',
    svg: <svg viewBox="0 0 52 52" fill="none"><rect x="8" y="10" width="36" height="32" rx="4" stroke="white" strokeWidth="2.2" fill="none" /><path d="M14 20h24M14 28h18M14 36h10" stroke="white" strokeWidth="2" strokeLinecap="round" /><circle cx="38" cy="36" r="4" stroke="white" strokeWidth="1.5" fill="none" /></svg>
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-sec">
      <div className="container">
        <div className="svc-grid-page">
          {services.map((s, i) => (
            <div className={`svc-card fu${i > 0 ? ` d${Math.min(i, 7)}` : ''}`} key={i}>
              <div className="svc-card-top" style={{ background: s.bg }}>{s.svg}</div>
              <div className="svc-card-body">
                <div className={`svc-badge ${s.badge}`}>{s.badgeText}</div>
                <div className="svc-card-title">{s.title}</div>
                <div className="svc-card-desc">{s.desc}</div>
                <Link to={s.link} className="svc-card-btn green">{s.btnText} <ArrowSvg /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}