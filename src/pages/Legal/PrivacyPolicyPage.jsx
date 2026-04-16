import '../../styles/legal.css';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-grid"></div>
        <div className="container">
          <div className="legal-hero-inner">
            <div className="sec-label fu">Legal</div>
            <h1 className="legal-hero-h fu d1">Privacy <em>Policy</em></h1>
            <p className="legal-hero-date fu d2">Effective Date: <strong>April 16, 2026</strong></p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-card">
            <h2>1. INTRODUCTION</h2>
            <p>This Privacy Policy describes in detail how Arovita Healthcare Private Limited ("arovita.care", "Company", "we", "our", or "us") collects, processes, uses, stores, and discloses personal data when you access or use our mobile application, website, and related healthcare services (collectively referred to as the "Platform").</p>
            <p>"arovita.care" operates as a technology intermediary and healthcare aggregation platform. The Platform enables users to discover, connect with, and access healthcare service providers such as doctors, diagnostic laboratories, and pharmacies. These services may be provided directly by independent healthcare professionals or through integrated third-party platforms and aggregators.</p>
            <p>By accessing or using the Platform, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.</p>

            <h2>2. SCOPE AND APPLICABILITY</h2>
            <p>This Privacy Policy applies to all users of the Platform, including individuals who register, browse, access, or use any healthcare-related services provided through "arovita.care". It governs the collection and processing of personal data in compliance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023 (DPDPA), and the Information Technology Act, 2000.</p>

            <h2>3. ROLE AS DATA FIDUCIARY</h2>
            <p>In accordance with the Digital Personal Data Protection Act, 2023, "arovita.care" acts as a Data Fiduciary with respect to the personal data it collects and processes through the Platform. As a Data Fiduciary, "arovita.care" determines the purpose and means of processing your personal data and is responsible for ensuring that such processing is conducted lawfully, fairly, and transparently.</p>
            <p>Certain third-party healthcare providers, diagnostic laboratories, pharmacies, and aggregators who process your data to fulfil services you have requested operate as independent Data Fiduciaries or Data Processors in their own right. "arovita.care's" responsibility is limited to the data it directly controls, and users are encouraged to review the privacy policies of such third-party providers.</p>

            <h2>4. CONSENT FRAMEWORK</h2>
            <h3>4.1 Basis for Processing</h3>
            <p>"arovita.care" processes your personal data only on the basis of your free, specific, informed, and unambiguous consent, as required under the DPDPA, 2023. Consent is obtained at the point of data collection through explicit in-app consent mechanisms (such as tick-boxes, toggle switches, or clear consent screens with affirmative action).</p>

            <h3>4.2 Consent for Health Data (Sensitive Personal Data)</h3>
            <p>Processing of health-related information (including medical history, symptoms, prescriptions, diagnostic reports, and consultation records) requires your separate and explicit consent. This consent is sought via a dedicated in-app consent screen prior to any health data being collected or shared with a healthcare provider. You will be clearly informed of:</p>
            <ul>
              <li><span className="legal-red">The specific health data being collected;</span></li>
              <li><span className="legal-red">The purpose for which it will be used;</span></li>
              <li><span className="legal-red">The identity of the healthcare provider(s) with whom it will be shared; and</span></li>
              <li><span className="legal-red">Your right to withdraw consent at any time.</span></li>
            </ul>

            <h3>4.3 Consent for ABDM (ABHA) Integration</h3>
            <p>Integration with the Ayushman Bharat Digital Mission (ABDM) ecosystem is strictly optional. If you choose to link your Ayushman Bharat Health Account (ABHA), "arovita.care" will seek your explicit, itemised consent through the official ABDM Consent Manager framework before accessing or fetching any linked health records. Specifically:</p>
            <ul>
              <li>Consent is requested separately for each health information request;</li>
              <li>Consent specifies the purpose, the health information types to be accessed, and the duration of access;</li>
              <li>No ABDM data is accessed, stored, or shared without your affirmative consent action within the ABDM framework; and</li>
              <li>You may revoke ABDM-linked consent at any time through the Platform or through the Health Information Management System (HIU) settings.</li>
            </ul>

            <h3>4.4 Consent for Sharing Data with Providers</h3>
            <p>Before your personal or health data is shared with any specific healthcare provider, diagnostic laboratory, pharmacy, or third-party aggregator for the first time, "arovita.care" will:</p>
            <ul>
              <li>Present you with a clear disclosure identifying the recipient and the nature of data being shared;</li>
              <li>Obtain your affirmative consent (not implied consent) before the share is executed; and</li>
              <li><span className="legal-red">Maintain a log of consents granted, accessible to you through your account settings.</span></li>
            </ul>
            <p>Data is not shared for purposes beyond those for which consent was obtained, unless required by law.</p>

            <h3>4.5 Withdrawal of Consent</h3>
            <p>You may withdraw any consent previously given at any time by:</p>
            <ul>
              <li><span className="legal-red">Navigating to Settings &gt; Privacy &amp; Consent &gt; Manage Consent in the Platform; or</span></li>
              <li>Submitting a written request to the Grievance Officer at the contact details specified in Section 12.</li>
            </ul>
            <p>Withdrawal of consent does not affect the lawfulness of processing carried out before such withdrawal. However, withdrawal may result in limited or no access to certain features of the Platform that depend on the consented data processing.</p>

            <h2>5. INFORMATION WE COLLECT AND WHY</h2>
            <h3>5.1 Personal Identity Information</h3>
            <p>When you create an account or use the Platform, we collect personal identity information such as your 'name',' age', 'gender', 'date of birth', and 'address'. This information is essential to uniquely identify you within the Platform and to create a structured health profile. Certain attributes such as age and gender are medically relevant and required by healthcare professionals for accurate consultation, diagnosis, and treatment. Maintaining accurate identity information also helps us comply with applicable medical record-keeping and legal requirements.</p>

            <h3>5.2 Contact Information</h3>
            <p>We collect your mobile number and, where applicable, your email address to establish and maintain communication with you. Your mobile number is primarily used for secure account authentication through One-Time Password (OTP) verification. Contact information is also used for appointment confirmations, reminders, prescription notifications, lab updates, and critical service alerts.</p>

            <h3>5.3 Health Information (Sensitive Personal Data)</h3>
            <p>We collect and process health-related information including medical history, symptoms, prescriptions, diagnostic reports, and consultation records. This is classified as Sensitive Personal Data (SPDI) under the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and as personal data warranting heightened protection under the DPDPA, 2023. This data is processed only with your explicit consent (see Section 4.2) and is handled with strict confidentiality and enhanced security measures.</p>

            <h3>5.4 ABDM (ABHA) Data Integration</h3>
            <p>If you voluntarily choose to link your ABHA, we may access linked health records strictly as per your itemised consent through the official ABDM consent framework. ABDM data is not accessed or shared without your affirmative consent action and is used solely to facilitate interoperability and continuity of care.</p>

            <h3>5.5 Technical and Device Information</h3>
            <p>We automatically collect certain technical information such as device identifier, IP address, operating system details, and usage logs to maintain the security, integrity, and performance of the Platform, detect fraud, and improve user experience.</p>

            <h3>5.6 Payment Information</h3>
            <p>We collect limited transactional information such as transaction identifiers, payment status, and payment method to process payments, generate invoices, and manage refunds. AROVITA does not store sensitive financial information such as full card numbers, CVV, or banking credentials. All payments are processed through secure, PCI-DSS compliant third-party payment gateways.</p>

            <h2>6. APP PERMISSIONS AND THEIR USAGE</h2>
            <p>The Platform may request access to the following device permissions. Each permission is requested transparently and used strictly for its stated purpose:</p>
            <ul>
              <li><strong>Camera:</strong> Video consultations, capture of medical documents, and camera-based health measurement features.</li>
              <li><strong>Microphone:</strong> Audio communication during live consultations only.</li>
              <li><strong>Location:</strong> Suggesting nearby healthcare providers and auto-filling location details. Used only while the app is active; not used for continuous background tracking.</li>
              <li><strong>Storage:</strong> Upload and secure sharing of medical records and reports with healthcare providers.</li>
              <li><strong>Notifications:</strong> Important service alerts, reminders, and updates.</li>
              <li><strong>Other permissions</strong> (Bluetooth, physical activity, flashlight): Used only for specific health-related features, always with clear user intent and control.</li>
            </ul>

            <h2>7. DATA SHARING AND THIRD-PARTY DISCLOSURE</h2>
            <h3>7.1 Sharing with Healthcare Providers</h3>
            <p>"arovita.care" shares your personal and health data with healthcare providers (doctors, diagnostic laboratories, pharmacies) solely to fulfil the specific service you have requested and only after obtaining your consent as described in Section 4.4.</p>
            <p>It is important to understand that doctor consultations and lab test bookings on the Platform are fulfilled by independent third-party healthcare providers and aggregators, not by "arovita.care" directly. When you book such services, your relevant data is shared with the responsible third-party provider. "arovita.care" does not control the operations, availability, pricing, or clinical outcomes of these services.</p>

            <h3>7.2 Responsibility Boundaries</h3>
            <p>arovita.care's responsibility for your data extends to the point at which data is transmitted to a third-party provider or aggregator pursuant to your consent. Once data is in the custody of a third-party provider, that provider is responsible for its processing under their own privacy policy and applicable law.</p>
            <p>arovita.care:</p>
            <ul>
              <li>Enters into data processing agreements with third-party providers and aggregators requiring them to maintain appropriate security and confidentiality standards;</li>
              <li>Does not permit third-party providers to use your data for purposes other than fulfilling the service you requested; and</li>
              <li>Cannot be held liable for the data handling practices of independent third-party providers once data has been lawfully transferred pursuant to your consent.</li>
            </ul>

            <h3>7.3 Legal Disclosure</h3>
            <p>We may disclose information if required by law, court order, regulatory authority, or to protect arovita.care's legal rights, safety, or the rights of others. We will, to the extent permitted by law, notify you of any such disclosure.</p>

            <h2>8. DATA STORAGE AND INFRASTRUCTURE</h2>
            <p>All personal data collected by arovita.care is stored exclusively on servers located within the territory of India. arovita.care does not transfer personal data outside India. In the event that cross-border data transfers become necessary in the future, arovita.care will update this Privacy Policy and obtain your prior consent where required under applicable law.</p>
            <p>arovita.care uses reputable, industry-standard cloud infrastructure providers who operate data centres within India. Data is stored in encrypted form both at rest and in transit, with access restricted on a need-to-know basis.</p>

            <h2>9. DATA RETENTION</h2>
            <p>We retain your personal and health data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy or as required by applicable laws. Medical records are retained for a minimum period as mandated by healthcare regulations (typically a minimum of three years from the date of the last consultation, or longer as required by specific regulatory frameworks). Account data may be retained until you request deletion. Upon receiving a valid deletion request, data is securely erased within 30 days, subject to legal retention obligations that may override deletion requests.</p>

            <h2>10. DATA SECURITY</h2>
            <p>Arovita.care implements industry-standard security measures including end-to-end encryption for <span className="legal-red">data in transit (TLS 1.2 or higher), AES-256 encryption for data at rest</span>, role-based access controls, regular security audits and vulnerability assessments, and multi-factor authentication for privileged access. While we strive to ensure the highest level of security, no system can be entirely immune to risks. Users are advised to keep their account credentials confidential and notify us immediately of any suspected unauthorised access.</p>

            <h2>11. DATA BREACH NOTIFICATION</h2>
            <p>In the event of a personal data breach that is likely to result in a risk to the rights and freedoms of affected individuals, arovita.care will:</p>
            <ul>
              <li>Notify the Data Protection Board of India (when constituted) within 72 hours of becoming aware of the breach, or within such period as prescribed under applicable law;</li>
              <li>Notify affected users without undue delay once the breach has been assessed and containment measures are in place, providing clear information about the nature of the breach, the data affected, likely consequences, and remedial actions taken or proposed;</li>
              <li>Maintain an internal breach register documenting the facts, effects, and remedial actions for all data breaches regardless of notification obligation; and</li>
              <li>Take immediate steps to contain, assess, and remediate any breach and implement measures to prevent recurrence.</li>
            </ul>
            <p>Users who suspect that their data has been compromised should contact the Grievance Officer immediately using the details in Section 12.</p>

            <h2>12. GRIEVANCE OFFICER</h2>
            <p>In accordance with the Information Technology Act, 2000 and the DPDPA, 2023, AROVITA has designated a Grievance Officer to address privacy-related complaints and queries. Contact details are as follows:</p>
            <table className="legal-table">
              <tbody>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>[TO BE DESIGNATED — Insert Full Name]</td>
                </tr>
                <tr>
                  <td><strong>Designation</strong></td>
                  <td>[TO BE DESIGNATED — e.g., Data Protection Officer / Chief Compliance Officer]</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td><a href="mailto:grievance@arovita.care">grievance@arovita.care</a></td>
                </tr>
                <tr>
                  <td><strong>Response SLA</strong></td>
                  <td>Acknowledgement within 48 hours; resolution within 30 days of receipt of grievance.</td>
                </tr>
                <tr>
                  <td><strong>Registered Address</strong></td>
                  <td>Arovita Healthcare Private Limited, [Registered Office Address], India.</td>
                </tr>
              </tbody>
            </table>
            <p><span className="legal-red">Complaints may also be submitted through the in-app "Raise a Grievance" feature under Settings &gt; Help &amp; Support.</span></p>

            <h2>13. YOUR RIGHTS AS A DATA PRINCIPAL</h2>
            <p>As a Data Principal under the DPDPA, 2023, you have the following rights with respect to your personal data:</p>

            <h3>13.1 Right to Access</h3>
            <p>You have the right to obtain a summary of the personal data arovita.care holds about you, including a description of the data, the purposes for which it is being processed, and the identities of third parties with whom it has been shared. To exercise this right, submit a request via Settings &gt; Privacy &amp; Consent &gt; Data Access Request, or contact the Grievance Officer. AROVITA will respond within 30 days.</p>

            <h3>13.2 Right to Correction and Erasure</h3>
            <p>You may request correction of inaccurate or incomplete personal data, or erasure of personal data where it is no longer necessary for the purpose for which it was collected or processed. Correction requests for basic profile data can be made directly through the Platform. Erasure requests should be submitted to the Grievance Officer. arovita.care will process verified erasure requests within 30 days, subject to legal retention obligations.</p>

            <h3>13.3 Right to Grievance Redressal</h3>
            <p>You have the right to have grievances relating to the processing of your personal data addressed by the Grievance Officer within the timelines specified in Section 12. If your grievance is not resolved to your satisfaction, you may escalate to the Data Protection Board of India (when constituted and operational) as provided under the DPDPA, 2023.</p>

            <h3>13.4 Right to Nominate</h3>
            <p>You may nominate an individual to exercise your rights under this Policy on your behalf in the event of your death or incapacity. Nomination requests can be submitted to the Grievance Officer.</p>

            <h3>13.5 Right to Withdraw Consent</h3>
            <p>As detailed in Section 4.5, you may withdraw any consent previously given at any time. Withdrawal will not affect the lawfulness of processing before withdrawal but may limit access to certain Platform features.</p>

            <h3>13.6 How to Exercise Your Rights</h3>
            <p>All requests to exercise rights under this Section must:</p>
            <ul>
              <li>Be submitted in writing (via email or in-app request form);</li>
              <li>Identify the specific right being exercised and the data concerned;</li>
              <li>Include sufficient information to verify your identity; and</li>
              <li>Be addressed to the Grievance Officer at grievance@arovita.care.</li>
            </ul>
            <p>arovita.care will acknowledge receipt within 48 hours and provide a substantive response or resolution within 30 days of the verified request.</p>

            <h2>14. MEDICAL DISCLAIMER</h2>
            <p>All medical consultations, diagnoses, prescriptions, treatment recommendations, and clinical decisions made through the Platform are rendered exclusively by independent, licensed healthcare professionals who are solely responsible for their clinical judgement and advice. arovita.care facilitates the connection between you and these professionals but does not supervise, endorse, or assume responsibility for the clinical decisions of any healthcare provider.</p>
            <p>Information, content, or materials available on the Platform are for general informational purposes only and should not be construed as medical advice. You should always seek the advice of a qualified healthcare professional regarding any medical condition, symptoms, or treatment. Never disregard professional medical advice or delay seeking it because of information obtained through the Platform.</p>
            <p>In case of a medical emergency, please contact emergency services immediately (call 112 or your local emergency number). The Platform is not designed for use in medical emergencies.</p>

            <h2>15. CHANGES TO THIS POLICY</h2>
            <p>arovita.care may update this Privacy Policy from time to time to reflect changes in law, regulatory requirements, or our business practices. When material changes are made, we will notify you through the Platform or via your registered contact details at least 15 days before the changes take effect. Continued use of the Platform after the effective date of a revised Policy constitutes your acceptance of the updated terms. You are encouraged to review this Policy periodically.</p>

            <h2>16. CONTACT US</h2>
            <p>For general privacy-related questions, concerns, or requests that do not rise to the level of a formal grievance, you may contact us at:</p>
            <div className="legal-contact">
              <p><strong>Email:</strong> <a href="mailto:support@arovita.care">support@arovita.care</a></p>
              <p>For formal grievances, please contact the Grievance Officer as specified in Section 12.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
