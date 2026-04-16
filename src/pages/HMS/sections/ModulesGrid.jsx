const modules = [
  { theme:'mc-green', tag:'Patient', title:'Patient Management', desc:'Complete patient lifecycle — from registration and ABHA ID linking to admission, discharge, and transfer (ADT) with full medical history.',
    features:['Patient registration & ABHA ID integration','Medical history & EMR timeline','Admission, discharge & transfer (ADT)','Multi-visit health records'],
    icon:<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>, stroke:'rgba(11,92,58,0.9)' },
  { theme:'mc-blue', tag:'Scheduling', title:'Appointment & Scheduling', desc:'Intelligent scheduling engine for OPD, telemedicine, and in-clinic appointments with automated reminders and conflict resolution.',
    features:['Doctor availability & slot management','Online & walk-in booking','Automated SMS & WhatsApp reminders','Multi-department coordination'],
    icon:<><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></>, stroke:'rgba(18,64,122,0.9)' },
  { theme:'mc-purple', tag:'Staff', title:'Doctor & Staff Management', desc:'Full HR module covering doctor schedules, staff records, shift management, leave, and role-based access control across all departments.',
    features:['Doctor & nurse scheduling','Shift & duty management','Role-based access control (RBAC)','Attendance & leave tracking'],
    icon:<><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/><path d="M16 11l2 2 4-4"/></>, stroke:'rgba(74,45,138,0.9)' },
  { theme:'mc-amber', tag:'Finance', title:'Billing & Accounts', desc:'Automated invoice generation, insurance claim handling, TPA integration, and complete payment tracking — all in one place.',
    features:['Auto invoice generation','Insurance & TPA claim processing','Payment tracking & receipts','GST-compliant financial reports'],
    icon:<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>, stroke:'rgba(122,74,10,0.9)' },
  { theme:'mc-teal', tag:'Laboratory', title:'Laboratory Management', desc:'End-to-end lab workflow from test requests and sample tracking to device integration and digital report delivery to patients.',
    features:['Test requests & sample tracking','Lab device & analyser integration','Digital report generation & sharing','ABHA-linked result history'],
    icon:<><path d="M6 2v6l-2 4a6 6 0 0012 0L14 8V2"/><path d="M6 2h8"/><path d="M9 12h6"/></>, stroke:'rgba(11,74,64,0.9)' },
  { theme:'mc-green', tag:'Pharmacy', title:'Pharmacy Management', desc:'Real-time drug inventory control, prescription handling, expiry alerts, and vendor management — keeping your pharmacy running without gaps.',
    features:['Drug inventory & stock tracking','Prescription-linked dispensing','Expiry & reorder alerts','Vendor & purchase order management'],
    icon:<><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/></>, stroke:'rgba(11,92,58,0.9)' },
  { theme:'mc-blue', tag:'Wards', title:'Ward & Bed Management', desc:'Live bed availability tracking across wards, rooms, and ICUs — with one-click allocation, transfer, and discharge workflows.',
    features:['Real-time bed occupancy map','Ward, ICU & room allocation','Patient transfer management','Housekeeping & cleaning alerts'],
    icon:<><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></>, stroke:'rgba(18,64,122,0.9)' },
  { theme:'mc-rose', tag:'Supply Chain', title:'Inventory & Supply Chain', desc:'Track all medical supplies, equipment, and consumables with vendor management, automated purchase orders, and usage analytics.',
    features:['Medical supplies & equipment tracking','Automated purchase orders','Vendor management & pricing','Consumption analytics & forecasting'],
    icon:<><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>, stroke:'rgba(153,27,27,0.9)' },
  { theme:'mc-purple', tag:'Intelligence', title:'Analytics & EHR', desc:'AI-powered operational analytics, clinical dashboards, and a complete electronic health record system linked to the National Health Stack.',
    features:['Clinical & financial analytics dashboards','AI-based predictions & reports','Electronic health records system','Custom KPI & performance tracking'],
    icon:<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>, stroke:'rgba(74,45,138,0.9)' },
];

export default function ModulesGrid() {
  return (
    <section className="modules" id="modules">
      <div className="container">
        <div style={{textAlign:'center'}} className="fu">
          <div className="sec-label">Core Modules</div>
          <h2 className="sec-title">Everything Your Hospital <em>Needs</em></h2>
          <p style={{fontSize:'15px',color:'var(--muted)',maxWidth:'520px',margin:'14px auto 0',lineHeight:'1.7'}}>Nine deeply integrated modules, built for Indian hospitals, designed to work together seamlessly.</p>
        </div>
        <div className="modules-grid">
          {modules.map((m, i) => (
            <div className={`mod-card ${m.theme} fu d${(i % 3) + 1}`} key={i}>
              <div className="mod-ic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={m.stroke} strokeWidth="2" strokeLinecap="round">{m.icon}</svg></div>
              <div className="mod-tag">{m.tag}</div>
              <div className="mod-title">{m.title}</div>
              <div className="mod-desc">{m.desc}</div>
              <div className="mod-features">
                {m.features.map((f, j) => <div className="mf" key={j}>{f}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
