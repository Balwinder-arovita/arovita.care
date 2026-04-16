export default function StatsSection() {
  const stats = [
    { num: 'Consult', label: 'Doctors Online', desc: 'Video & in-clinic, all in one app' },
    { num: 'Lab Tests', label: 'At Your Doorstep', desc: 'Sample collection from home' },
    { num: '100%', label: 'Encrypted', desc: 'Secure digital health records' },
    { num: 'Bengaluru', label: 'Currently Serving', desc: 'More cities coming soon' },
  ];

  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className={`stat-item fu${i > 0 ? ` d${i}` : ''}`} key={i}>
              <span className="stat-num" style={{fontSize:'28px',letterSpacing:'-0.5px'}}>{s.num}</span>
              <div className="stat-lbl">{s.label}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
