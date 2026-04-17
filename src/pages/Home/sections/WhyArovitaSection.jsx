const XIcon = () => <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#C03A3A" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const CheckIcon = () => <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="var(--g)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;

export default function WhyArovitaSection() {
  const problems = ['Consultations happen in isolation','Lab results stored in different places','Follow-ups are missed','Multiple apps for different services','No continuity in care','Doctors don\'t see full patient history'];
  const solutions = ['All services in one platform','Unified patient health records','Consultation to follow-up continuity','Data shared across providers','Automated reminders and monitoring','Continuous care journey'];

  return (
    <section className="testimonials" id="why-arovita" style={{ padding: '60px 0' }}>
      <div className="container">
        {/* Header Section */}
        <div className="fu" style={{textAlign:'center', marginBottom:'40px'}}>
          <div className="sec-label">Why Arovita</div>
          <h2 className="sec-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
            Healthcare today is <em>fragmented.</em><br/>Care should be connected.
          </h2>
          <p style={{fontSize:'15px', color:'var(--muted)', maxWidth:'520px', margin:'18px auto 0', lineHeight:'1.76'}}>
            Patients move between consultations, tests, and treatments, but these steps rarely connect. Arovita brings everything into one unified healthcare journey.
          </p>
        </div>

        {/* Responsive Grid */}
        <div style={{
          display: 'grid',
          // Use auto-fit and minmax to handle responsiveness without media queries
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {/* Problem Card */}
          <div className="fu d1" style={{
            background: 'linear-gradient(145deg,#FFF5F5,#FFE8E8)',
            border: '1.5px solid rgba(220,80,80,.15)',
            borderRadius: '28px',
            padding: 'clamp(24px, 5vw, 36px)',
            boxShadow: '0 4px 28px rgba(220,80,80,.06)'
          }}>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'24px'}}>
              <div style={{width:'9px', height:'9px', background:'#E05555', borderRadius:'50%', boxShadow:'0 0 0 4px rgba(224,85,85,.18)'}}></div>
              <span style={{fontSize:'11px', fontWeight:700, color:'#C03A3A', letterSpacing:'1.2px', textTransform:'uppercase'}}>Today — Fragmented Healthcare</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:0}}>
              {problems.map((p, i) => (
                <div key={i} style={{display:'flex', alignItems:'center', gap:'14px', padding:'13px 0', borderBottom: i < problems.length - 1 ? '1px solid rgba(220,80,80,.1)' : 'none'}}>
                  <div style={{width:'30px', height:'30px', background:'rgba(220,80,80,.1)', border:'1px solid rgba(220,80,80,.18)', borderRadius:'9px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}><XIcon/></div>
                  <span style={{fontSize:'14px', color:'var(--ink2)', lineHeight:'1.4'}}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="fu d2" style={{
            background: 'linear-gradient(145deg,#E6F7F0,#C8EFE0)',
            border: '1.5px solid rgba(26,122,90,.18)',
            borderRadius: '28px',
            padding: 'clamp(24px, 5vw, 36px)',
            boxShadow: '0 4px 28px rgba(26,122,90,.08)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{position:'absolute', top:'-40px', right:'-40px', width:'160px', height:'160px', background:'radial-gradient(circle,rgba(46,196,138,.25),transparent 70%)', pointerEvents:'none'}}></div>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'24px'}}>
              <div style={{width:'9px', height:'9px', background:'var(--gl)', borderRadius:'50%', boxShadow:'0 0 0 4px rgba(46,196,138,.22)', animation:'live-pulse 1.8s ease-in-out infinite'}}></div>
              <span style={{fontSize:'11px', fontWeight:700, color:'var(--g)', letterSpacing:'1.2px', textTransform:'uppercase'}}>With arovita.care — Connected Healthcare</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:0}}>
              {solutions.map((s, i) => (
                <div key={i} style={{display:'flex', alignItems:'center', gap:'14px', padding:'13px 0', borderBottom: i < solutions.length - 1 ? '1px solid rgba(26,122,90,.1)' : 'none'}}>
                  <div style={{width:'30px', height:'30px', background:'rgba(26,122,90,.12)', border:'1px solid rgba(26,122,90,.22)', borderRadius:'9px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}><CheckIcon/></div>
                  <span style={{fontSize:'14px', color:'var(--ink2)', lineHeight:'1.4'}}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bridge Statement - Flex Wrap for Mobile */}
        <div className="fu d3" style={{
          background: 'linear-gradient(135deg,var(--dark2) 0%,#1a3a2a 100%)',
          borderRadius: '24px',
          padding: 'clamp(24px, 5vw, 40px)',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap', // Allows icon to stay above text on very small screens
          alignItems: 'center',
          gap: '24px',
          boxShadow: '0 18px 56px rgba(9,24,16,.13)'
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            background: 'linear-gradient(135deg,var(--g),var(--gl))',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 8px 24px rgba(46,196,138,.35)'
          }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
          </div>
          <div style={{ flex: '1', minWidth: '260px' }}>
            <div style={{fontSize:'11px', fontWeight:700, color:'var(--gl)', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'8px'}}>From fragmented visits to continuous care.</div>
            <div style={{fontSize:'16px', color:'rgba(255,255,255,.82)', fontWeight:400, lineHeight:'1.6'}}>
              arovita.care transforms isolated healthcare interactions into a continuous, connected care journey — where consultations lead to tests, tests lead to treatment, and treatment leads to ongoing monitoring.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}