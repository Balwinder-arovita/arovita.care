export default function StatsStrip() {
  const items = [
    { value: '6', label: 'Services on Platform' },
    { value: '3', label: 'Ways to Access Care' },
    { value: '1', label: 'Unified Health Record' },
    { value: '24/7', label: 'Booking Availability' },
  ];

  return (
    <section className="svc-stats-strip">
      <div className="container">
        <div className="svc-stats-grid">
          {items.map((item, i) => (
            <div className={`svc-stat-item fu${i > 0 ? ` d${i}` : ''}`} key={i}>
              <span className="svc-stat-num">{item.value}</span>
              <div className="svc-stat-lbl">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
