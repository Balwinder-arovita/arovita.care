import '../../styles/legal.css';

export default function RefundPolicyPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-grid"></div>
        <div className="container">
          <div className="legal-hero-inner">
            <div className="sec-label fu">Legal</div>
            <h1 className="legal-hero-h fu d1">Cancellation & <em>Refund Policy</em></h1>
            <p className="legal-hero-date fu d2">Effective Date: <strong>August 20, 2025</strong></p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-card">
            <p>This Cancellation & Refund Policy explains how Arovita Healthcare Private Limited ("Arovita", "we", "us", or "our") handles cancellations, rescheduling, and refunds for appointments and services booked through our mobile applications, websites, and services.</p>

            <h2>1. Appointment Cancellation & Rescheduling</h2>
            <ul>
              <li><strong>User-initiated:</strong> You may cancel or reschedule your appointment through the app or by contacting support up to 2 hours before the scheduled time.</li>
              <li><strong>Late cancellations / No-shows:</strong> Cancelling within 2 hours of the appointment or failing to attend will be considered a no-show. Such payments are non-refundable.</li>
              <li><strong>Provider-initiated:</strong> If a doctor, clinician, or partner cancels the appointment, you may opt for a free reschedule or a full refund.</li>
            </ul>

            <h2>2. Lab Tests & Diagnostics</h2>
            <ul>
              <li>Free cancellation is allowed up to 12 hours before sample collection.</li>
              <li>Cancellations within 12 hours of the slot may incur logistics or visit charges.</li>
              <li>If the partner lab cancels or is unable to fulfill the service, you will receive a full refund or a free re-booking.</li>
            </ul>

            <h2>3. Digital & Telehealth Services</h2>
            <ul>
              <li>Completed services (e.g., teleconsultations already delivered, downloadable reports) are non-refundable unless a verified service failure occurs.</li>
              <li>If a technical issue on our side prevents delivery, you may choose a free re-attempt or a refund.</li>
            </ul>

            <h2>4. Refund Eligibility</h2>
            <ul>
              <li>Service cancelled by Arovita or our partner</li>
              <li>Duplicate payment detected</li>
              <li>Payment made but service not delivered, and no reschedule accepted</li>
              <li>Verified service quality or fulfillment issue (documentation may be required)</li>
            </ul>

            <h2>5. Non-Refundable Cases</h2>
            <ul>
              <li>No-shows and late cancellations</li>
              <li>Convenience or platform fees (if applicable)</li>
              <li>Portions of services already utilized</li>
              <li>Third-party charges that are non-recoverable</li>
            </ul>

            <h2>6. Refund Method & Timelines</h2>
            <p>Approved refunds are processed to the original payment method (UPI, card, net-banking, wallet, etc.). Depending on your bank or payment provider, it usually takes 5–7 business days for the refund to reflect in your account. Some issuers may take longer. We will notify you once the refund is processed on our side.</p>

            <h2>7. How to Request a Refund</h2>
            <p>You can initiate a cancellation or refund request through the app (Appointment details → "Cancel" or "Request Refund") or by contacting our support team with your booking ID, payment reference, and reason.</p>
            <div className="legal-contact" style={{marginTop:'16px',marginBottom:'16px'}}>
              <p><strong>Email:</strong> <a href="mailto:support@arovita.care">support@arovita.care</a></p>
              <p><strong>Website:</strong> <a href="https://arovita.care" target="_blank" rel="noopener noreferrer">arovita.care</a></p>
            </div>

            <h2>8. Chargebacks</h2>
            <p>If you raise a chargeback with your payment provider, please notify us as well. We will provide relevant records to the provider. Parallel refunds will not be processed while a chargeback is under review.</p>

            <h2>9. Special Circumstances</h2>
            <ul>
              <li><strong>Force Majeure:</strong> Delays or cancellations due to events beyond our control may be rescheduled or refunded at our discretion.</li>
              <li><strong>Multiple Payment Methods:</strong> If multiple payment methods were used, refunds may be split accordingly.</li>
            </ul>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this policy periodically. Changes will be posted in the app and on our website, and the effective date will be updated accordingly.</p>

            <h2>11. Contact Us</h2>
            <p>If you have questions about this policy, contact us at:</p>
            <div className="legal-contact">
              <p><strong>Email:</strong> <a href="mailto:support@arovita.care">support@arovita.care</a></p>
              <p><strong>Address:</strong> Second Floor, No.07/3, 15/1, 185/2, 185/A, KOKARYA, Business Synergy Center, Nagananda Commercial Complex, 18th Main Road, AKR Global Solutions, Jayanagar, Bengaluru, Bengaluru Urban, Karnataka, 560041</p>
              <p><strong>Website:</strong> <a href="https://arovita.care" target="_blank" rel="noopener noreferrer">arovita.care</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
