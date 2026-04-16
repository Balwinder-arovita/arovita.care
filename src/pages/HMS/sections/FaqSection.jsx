import { useState } from 'react';

const faqs = [
  { q:'Is Arovita HMS cloud-based or installed on-premise?', a:'Arovita HMS is primarily cloud-hosted, meaning no hardware investment and automatic updates. We also support hybrid or on-premise deployments for larger hospitals with specific data residency requirements. All options are discussed during your onboarding consultation.' },
  { q:'How long does implementation take?', a:'For small clinics, setup is typically complete within a week. For medium hospitals, expect 2–4 weeks. Enterprise implementations with multiple branches and custom integrations may take 4–8 weeks. We provide a detailed timeline upfront with zero surprises.' },
  { q:'Can we migrate data from our existing HMS?', a:'Yes. Our team handles data migration from most existing HMS platforms. Patient records, billing history, inventory data, and staff information can all be imported securely. We validate data integrity at every stage before go-live.' },
  { q:'Is the system secure and compliant?', a:"Absolutely. Arovita HMS features end-to-end encryption, ISO certification, and secure cloud infrastructure. Patient data is encrypted both in transit and at rest with role-based access controls ensuring confidentiality." },
  { q:'What kind of support do you provide after go-live?', a:"All plans include ongoing email and chat support. Hospital and Enterprise plans include priority response and dedicated account managers. We also provide regular system updates, new feature rollouts, and proactive monitoring — so you're never left alone." },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <section className="hms-faq">
      <div className="container">
        <div style={{textAlign:'center'}} className="fu">
          <div className="sec-label">FAQ</div>
          <h2 className="sec-title">Common <em>Questions</em></h2>
        </div>
        <div className="hms-faq-list">
          {faqs.map((f, i) => (
            <div className={`hms-faq-item${openFaq === i ? ' open' : ''}`} key={i}>
              <div className="hms-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <span>{f.q}</span>
                <div className="hms-faq-toggle"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--g)" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg></div>
              </div>
              <div className="hms-faq-a"><div className="hms-faq-a-inner">{f.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
