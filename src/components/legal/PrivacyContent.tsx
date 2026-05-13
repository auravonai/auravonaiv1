import LegalPageLayout from "./LegalPageLayout";
import Link from "next/link";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "information-collected", title: "Information We Collect" },
  { id: "contact-form-data", title: "Contact Form Data" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "analytics", title: "Analytics" },
  { id: "third-party", title: "Third-Party Integrations" },
  { id: "data-protection", title: "Data Protection" },
  { id: "email-communication", title: "Email Communication" },
  { id: "user-rights", title: "Your Rights" },
  { id: "security", title: "Security Measures" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Policy Changes" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyContent() {
  return (
    <LegalPageLayout
      badge="Legal Document"
      title="Privacy Policy"
      subtitle="Auravon AI respects user privacy and protects all customer information. This policy explains how we collect, use, and safeguard your data."
      lastUpdated="May 14, 2025"
      sections={sections}
    >
      {/* Overview */}
      <section id="overview" className="legal-section">
        <h2>Overview</h2>
        <p>
          Auravon AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website{" "}
          <strong>auravonai.com</strong> and provides software development, AI solutions, and related
          digital services. This Privacy Policy describes how we collect, use, disclose, and
          safeguard your information when you visit our website or engage our services.
        </p>
        <div className="legal-highlight">
          <p>
            <strong>Our commitment:</strong> We do not sell, trade, or rent your personal
            information to third parties. Your data is used solely to deliver and improve our
            services to you.
          </p>
        </div>
        <p>
          By using our website or services, you agree to the collection and use of information in
          accordance with this policy. If you disagree with any part of this policy, please
          discontinue use of our website.
        </p>
      </section>

      {/* Information Collected */}
      <section id="information-collected">
        <h2>Information We Collect</h2>
        <p>We collect information in the following categories:</p>

        <h3>Information You Provide Directly</h3>
        <ul>
          <li>
            <strong>Contact information</strong> — name, email address, phone number, and company
            name submitted via our contact form or consultation booking.
          </li>
          <li>
            <strong>Project details</strong> — descriptions, requirements, budget ranges, and
            timelines you share when requesting a project quote or brief.
          </li>
          <li>
            <strong>Payment information</strong> — when you make a payment via Razorpay, billing
            details are processed directly by Razorpay. We do not store card numbers or banking
            credentials on our servers.
          </li>
          <li>
            <strong>Communications</strong> — emails, messages, and feedback you send us through
            any channel including WhatsApp, email, or our contact form.
          </li>
        </ul>

        <h3>Information Collected Automatically</h3>
        <ul>
          <li>
            <strong>Device and browser data</strong> — IP address, browser type and version,
            operating system, and device identifiers.
          </li>
          <li>
            <strong>Usage data</strong> — pages visited, time spent on pages, referral sources,
            click patterns, and navigation paths.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — session data, preferences, and
            anonymous analytics identifiers (see Cookies section below).
          </li>
        </ul>

        <h3>Information From Third Parties</h3>
        <ul>
          <li>
            Analytics platforms (Google Analytics) may provide aggregated demographic and interest
            data about our website visitors.
          </li>
          <li>
            If you connect via social media or OAuth services, we may receive basic profile
            information as permitted by those platforms.
          </li>
        </ul>
      </section>

      {/* Contact Form Data */}
      <section id="contact-form-data">
        <h2>Contact Form Data</h2>
        <p>
          When you submit our contact or project inquiry form, we collect your name, email
          address, phone number, company name, project type, budget range, and project description.
          This information is used exclusively to:
        </p>
        <ul>
          <li>Respond to your inquiry and provide a project assessment or quote</li>
          <li>Schedule consultation calls or meetings</li>
          <li>Communicate project details, timelines, and deliverables</li>
          <li>Send invoices or payment requests related to agreed services</li>
          <li>Follow up on submitted proposals (maximum 2 follow-up communications)</li>
        </ul>
        <p>
          Contact form submissions are stored securely in our CRM system and are retained for a
          period of <strong>24 months</strong> from the date of submission, or for the duration of
          an ongoing client relationship, whichever is longer. You may request deletion of your
          data at any time by contacting us.
        </p>
        <div className="legal-highlight">
          <p>
            We will never add you to a marketing mailing list without your explicit opt-in consent.
          </p>
        </div>
      </section>

      {/* Cookies */}
      <section id="cookies">
        <h2>Cookies &amp; Tracking Technologies</h2>
        <p>
          Our website uses cookies — small text files stored on your device — to enhance your
          browsing experience and understand how visitors interact with our site.
        </p>

        <h3>Types of Cookies We Use</h3>
        <ul>
          <li>
            <strong>Essential cookies</strong> — Required for the website to function. These
            cannot be disabled. They include session management and security tokens.
          </li>
          <li>
            <strong>Analytics cookies</strong> — Set by Google Analytics to collect anonymous
            usage data such as page views, session duration, and traffic sources. No personally
            identifiable information is collected through these cookies.
          </li>
          <li>
            <strong>Preference cookies</strong> — Remember your settings and preferences to
            improve your experience on return visits.
          </li>
          <li>
            <strong>Marketing cookies</strong> — We may use cookies from advertising platforms
            (e.g., Google Ads) if we run paid campaigns. These track ad interactions in aggregate.
          </li>
        </ul>

        <h3>Managing Cookies</h3>
        <p>
          You can control and delete cookies through your browser settings. Most browsers allow
          you to block or delete cookies. Note that disabling cookies may affect the functionality
          of some parts of our website.
        </p>
        <p>
          You can opt out of Google Analytics tracking at any time using the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
      </section>

      {/* Analytics */}
      <section id="analytics">
        <h2>Analytics</h2>
        <p>
          We use <strong>Google Analytics 4</strong> to understand how visitors use our website.
          This service collects anonymous data including:
        </p>
        <ul>
          <li>Number of visitors and sessions</li>
          <li>Pages viewed and navigation paths</li>
          <li>Time spent on each page</li>
          <li>Geographic region (country/city level, not precise location)</li>
          <li>Device type, browser, and operating system</li>
          <li>Referral sources (search engines, direct, social media)</li>
        </ul>
        <p>
          All analytics data is aggregated and anonymized. We have enabled IP anonymization in our
          Google Analytics configuration, meaning full IP addresses are never stored by Google.
          Analytics data is used to improve our website content, design, and user experience.
        </p>
        <p>
          We may also use <strong>Vercel Analytics</strong> for performance monitoring of page
          load times and Core Web Vitals. This data is aggregated and does not identify
          individual users.
        </p>
      </section>

      {/* Third-party integrations */}
      <section id="third-party">
        <h2>Third-Party Integrations</h2>
        <p>
          Our website and services integrate with the following third-party platforms. Each has
          its own privacy policy governing their data practices:
        </p>

        <h3>Payment Processing — Razorpay</h3>
        <p>
          All payments are processed by <strong>Razorpay</strong>, a PCI-DSS compliant payment
          gateway. When you make a payment, you are submitting your financial information directly
          to Razorpay. We receive only a payment confirmation and transaction ID. We never
          store credit/debit card numbers, CVV codes, or banking credentials.{" "}
          <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">
            Razorpay Privacy Policy →
          </a>
        </p>

        <h3>Scheduling — Calendly</h3>
        <p>
          If you book a consultation via Calendly, your name, email, and selected time slot are
          collected by Calendly. We use this information to prepare for and conduct the meeting.{" "}
          <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">
            Calendly Privacy Policy →
          </a>
        </p>

        <h3>Messaging — WhatsApp Business</h3>
        <p>
          When you contact us via WhatsApp, your messages are processed by Meta (WhatsApp). We
          store conversation records for project communication purposes and delete them after
          24 months or project completion.
        </p>

        <h3>Communication — Email (Google Workspace)</h3>
        <p>
          Business emails are managed via Google Workspace. All email communications are
          encrypted in transit. We retain email correspondence for the duration of the client
          relationship plus 12 months.
        </p>

        <h3>Hosting — Vercel</h3>
        <p>
          Our website is hosted on Vercel. Server logs, including IP addresses and request data,
          may be retained by Vercel according to their own data retention policies.
        </p>
      </section>

      {/* Data Protection */}
      <section id="data-protection">
        <h2>Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction:
        </p>
        <ul>
          <li>All data transmitted to and from our website is encrypted using TLS 1.3 (HTTPS)</li>
          <li>
            Databases storing personal information are access-controlled with role-based
            permissions and encrypted at rest
          </li>
          <li>Payment data is handled exclusively by Razorpay (PCI-DSS Level 1 compliant)</li>
          <li>Employee access to personal data is limited to those who require it to perform their role</li>
          <li>
            We conduct periodic reviews of our data handling practices and update our security
            measures in response to emerging threats
          </li>
          <li>
            In the event of a data breach that affects your personal information, we will notify
            affected individuals within 72 hours of becoming aware of the breach
          </li>
        </ul>
        <div className="legal-highlight">
          <p>
            While we take all reasonable steps to protect your data, no method of transmission
            over the Internet or electronic storage is 100% secure. We cannot guarantee absolute
            security, but we will promptly notify you of any breach affecting your data.
          </p>
        </div>
      </section>

      {/* Email Communication */}
      <section id="email-communication">
        <h2>Email Communication Policy</h2>
        <p>
          We use email to communicate with you in the following contexts:
        </p>
        <ul>
          <li>
            <strong>Transactional emails</strong> — Responding to contact form submissions,
            sending project proposals, invoices, payment confirmations, and project updates.
            These emails cannot be opted out of as they are essential to service delivery.
          </li>
          <li>
            <strong>Project communication</strong> — Ongoing emails related to active projects,
            deliverable reviews, and client feedback loops.
          </li>
          <li>
            <strong>Newsletter / Marketing emails</strong> — Only sent if you explicitly
            subscribe via our blog newsletter opt-in. Every marketing email includes a
            one-click unsubscribe link.
          </li>
        </ul>
        <p>
          We do not purchase email lists or send unsolicited bulk email. You can opt out of
          non-essential communications at any time by emailing{" "}
          <a href="mailto:support@auravonai.com">support@auravonai.com</a> with the subject line
          &quot;Unsubscribe&quot; or by clicking the unsubscribe link in any marketing email.
        </p>
      </section>

      {/* User Rights */}
      <section id="user-rights">
        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have the following rights regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>Right to Access</strong> — Request a copy of the personal information we hold
            about you.
          </li>
          <li>
            <strong>Right to Rectification</strong> — Request correction of inaccurate or
            incomplete personal information.
          </li>
          <li>
            <strong>Right to Erasure</strong> — Request deletion of your personal data, subject
            to our legal obligations to retain certain records.
          </li>
          <li>
            <strong>Right to Restriction</strong> — Request that we restrict processing of your
            personal data under certain circumstances.
          </li>
          <li>
            <strong>Right to Data Portability</strong> — Request your data in a structured,
            machine-readable format.
          </li>
          <li>
            <strong>Right to Object</strong> — Object to the processing of your personal data for
            direct marketing purposes at any time.
          </li>
          <li>
            <strong>Right to Withdraw Consent</strong> — Where processing is based on your
            consent, you may withdraw that consent at any time without affecting the lawfulness
            of prior processing.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:support@auravonai.com">support@auravonai.com</a>. We will respond to
          your request within <strong>30 days</strong>. In some cases, we may need to verify your
          identity before processing your request.
        </p>
      </section>

      {/* Security */}
      <section id="security">
        <h2>Security Measures</h2>
        <p>
          We maintain industry-standard security practices to protect your information:
        </p>
        <ul>
          <li>HTTPS encryption enforced across all pages and API endpoints</li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>Secure environment variable management — no secrets committed to version control</li>
          <li>Database access restricted by IP whitelisting and strong authentication</li>
          <li>Third-party integrations audited for security compliance</li>
          <li>Regular data backups with encryption at rest</li>
          <li>Employee security training and access controls</li>
        </ul>
      </section>

      {/* Children */}
      <section id="children">
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are intended for businesses and professional individuals aged 18 and over.
          We do not knowingly collect personal information from children under 13. If you believe
          we have inadvertently collected information from a child, please contact us immediately
          at <a href="mailto:support@auravonai.com">support@auravonai.com</a> and we will delete
          such information promptly.
        </p>
      </section>

      {/* Changes */}
      <section id="changes">
        <h2>Policy Changes</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, legal requirements, or other factors. When we make material changes, we will:
        </p>
        <ul>
          <li>Update the &quot;Last updated&quot; date at the top of this page</li>
          <li>
            Notify active clients via email at least 14 days before the changes take effect
          </li>
          <li>Post a notice on our website for significant updates</li>
        </ul>
        <p>
          Your continued use of our website or services after any changes constitutes acceptance
          of the updated Privacy Policy. We encourage you to review this page periodically.
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or our data
          practices, please contact us through any of the following channels:
        </p>
        <div className="contact-box">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@auravonai.com">support@auravonai.com</a>
          </p>
          <p>
            <strong>Projects:</strong>{" "}
            <a href="mailto:projects@auravonai.com">projects@auravonai.com</a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <Link href="/contact">auravonai.com/contact</Link>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/918814012395" target="_blank" rel="noopener noreferrer">
              +91 88140 12395
            </a>
          </p>
        </div>
        <p>
          We aim to respond to all privacy-related inquiries within <strong>5 business days</strong>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
