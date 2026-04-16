export default function TickerSection() {
  const items = [
    'Online Doctor Consultations', 'Doorstep Lab Collection', 'Digital Health Records · Secure',
    'Digital Health Records', 'Wellness Programmes', 'Secure Video Consultations',
    'In-Clinic Appointment Booking', 'Serving Bengaluru', 'AI-Powered Health Insights',
    'Encrypted & Secure Platform'
  ];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <div className="t-item" key={i}><div className="t-sep"></div>{item}</div>
        ))}
      </div>
    </div>
  );
}
