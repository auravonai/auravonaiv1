import LegalPageLayout from "./LegalPageLayout";
import Link from "next/link";

const sections = [
  { id: "agreement", title: "Agreement to Terms" },
  { id: "services", title: "Services & Scope" },
  { id: "project-process", title: "Project Process" },
  { id: "payment-terms", title: "Payment Terms" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "client-responsibilities", title: "Client Responsibilities" },
  { id: "timelines", title: "Project Timelines" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "modifications", title: "Service Modifications" },
  { id: "termination", title: "Termination" },
  { id: "disputes", title: "Dispute Resolution" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact Us" },
];

export default function TermsContent() {
  return (
    <LegalPageLayout
      badge="Legal Document"
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before engaging our services. All project discussions, timelines, and deliverables are finalized before development begins."
      lastUpdated="May 14, 2026"
      sections={sections}
    >
      {/* Agreement */}
      <section id="agreement" className="legal-section">
        <h2>Agreement to Terms</h2>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement
          between you (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) and{" "}
          <strong>Auravon AI</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          governing your use of our website at <strong>auravonai.com</strong> and all services
          provided by Auravon AI.
        </p>
        <div className="legal-highlight">
          <p>
            By engaging our services, making a payment, or signing a project proposal, you confirm
            that you have read, understood, and agree to be bound by these Terms. If you do not
            agree with any part of these Terms, do not proceed with our services.
          </p>
        </div>
        <p>
          These Terms apply to all service engagements including but not limited to: website
          development, mobile application development, AI solutions, SaaS development, UI/UX
          design, custom software development, and automation systems.
        </p>
      </section>

      {/* Services */}
      <section id="services">
        <h2>Services &amp; Scope</h2>
        <p>
          Auravon AI provides technology services including:
        </p>
        <ul>
          <li>Website and web application development</li>
          <li>Mobile application development (iOS and Android)</li>
          <li>AI and machine learning integration</li>
          <li>SaaS product development</li>
          <li>Custom software and dashboard development</li>
          <li>UI/UX design and prototyping</li>
          <li>Business automation and workflow systems</li>
          <li>Technical consulting and strategy</li>
          <li>Ongoing maintenance and support</li>
        </ul>

        <h3>Project Scope</h3>
        <p>
          Every project begins with a detailed scope of work document agreed upon by both parties.
          This document defines deliverables, features, technology stack, milestones, and
          acceptance criteria. Any work outside the agreed scope constitutes a change request and
          will be subject to additional scoping, timeline, and pricing discussions.
        </p>
        <p>
          Auravon AI reserves the right to decline any project request that conflicts with our
          technical capabilities, ethical standards, or availability.
        </p>
      </section>

      {/* Project Process */}
      <section id="project-process">
        <h2>Project Process</h2>
        <p>
          All projects follow a structured development process to ensure quality and alignment:
        </p>
        <ol>
          <li>
            <strong>Discovery Call</strong> — Free 30-minute consultation to understand your
            requirements, goals, and constraints.
          </li>
          <li>
            <strong>Proposal & Scope</strong> — We provide a detailed written proposal
            including scope of work, deliverables, timeline, and pricing within 3–5 business days.
          </li>
          <li>
            <strong>Agreement & Deposit</strong> — Upon client approval of the proposal, a
            project agreement is signed and the agreed deposit is paid to commence work.
          </li>
          <li>
            <strong>Design Phase</strong> — Wireframes and UI/UX designs are created and
            approved by the client before development begins.
          </li>
          <li>
            <strong>Development</strong> — Active development with regular progress updates
            and milestone reviews as agreed in the project plan.
          </li>
          <li>
            <strong>Testing & Review</strong> — Quality assurance testing followed by a client
            review period for feedback and revisions.
          </li>
          <li>
            <strong>Delivery & Launch</strong> — Final delivery, production deployment, and
            project handover including documentation and training where applicable.
          </li>
        </ol>
        <div className="legal-highlight">
          <p>
            All project discussions, timelines, and deliverables are finalized and mutually
            agreed upon in writing before development begins. No development work commences
            without a signed project agreement and cleared deposit.
          </p>
        </div>
      </section>

      {/* Payment Terms */}
      <section id="payment-terms">
        <h2>Payment Terms</h2>

        <h3>Payment Schedule</h3>
        <p>
          Unless otherwise agreed in writing, the following payment structure applies:
        </p>
        <ul>
          <li>
            <strong>50% deposit</strong> — Due before project commencement. Development does not
            begin until the deposit is received and cleared.
          </li>
          <li>
            <strong>25% milestone payment</strong> — Due upon delivery of design mockups or
            completion of 50% of development, as specified in the project proposal.
          </li>
          <li>
            <strong>25% final payment</strong> — Due upon project completion and before final
            delivery or production deployment.
          </li>
        </ul>

        <h3>Payment Methods</h3>
        <p>
          We accept payments via <strong>Razorpay</strong>, which supports UPI, credit/debit
          cards, net banking, and EMI options. Bank transfers may be arranged for enterprise
          projects. All prices are quoted in Indian Rupees (INR) unless otherwise specified.
        </p>

        <h3>Late Payments</h3>
        <p>
          Invoices are due within <strong>7 calendar days</strong> of the invoice date. Overdue
          payments will attract interest at 1.5% per month on the outstanding balance. Auravon AI
          reserves the right to pause work on any project where payments are overdue by more than
          14 days, without liability for any resulting delays.
        </p>

        <h3>Taxes</h3>
        <p>
          All prices exclude applicable taxes. GST (Goods and Services Tax) will be applied to
          all invoices as required under Indian tax law. International clients are responsible for
          any taxes applicable in their jurisdiction.
        </p>

        <h3>Currency & Pricing</h3>
        <p>
          Project quotes are valid for <strong>30 days</strong> from the date of issue. After
          this period, prices may be subject to revision. For international clients, exchange rate
          fluctuations are the responsibility of the client, and payment is due in the currency
          stated on the invoice.
        </p>
      </section>

      {/* Intellectual Property */}
      <section id="intellectual-property">
        <h2>Intellectual Property</h2>

        <h3>Client Ownership</h3>
        <p>
          Upon receipt of full and final payment for the project, Auravon AI assigns all rights,
          title, and interest in the custom deliverables to the client. This includes source code,
          design assets, and documentation created specifically for the client&apos;s project.
        </p>

        <h3>Auravon AI Retained Rights</h3>
        <p>
          Auravon AI retains ownership of:
        </p>
        <ul>
          <li>
            <strong>Pre-existing IP</strong> — Any tools, frameworks, libraries, templates, or
            methodologies developed by Auravon AI prior to or independently of the client project.
          </li>
          <li>
            <strong>Open-source components</strong> — Third-party open-source libraries included
            in the project are governed by their respective licenses.
          </li>
          <li>
            <strong>Generic code patterns</strong> — Standard architectural patterns,
            utility functions, and boilerplate code that are not specific to the client&apos;s
            business logic.
          </li>
        </ul>

        <h3>Portfolio Rights</h3>
        <p>
          Unless a confidentiality agreement explicitly prohibits it, Auravon AI reserves the
          right to display completed work in our portfolio, case studies, and marketing materials.
          We will never disclose confidential business information or code in doing so.
        </p>

        <h3>Client Warranties</h3>
        <p>
          You warrant that any materials, content, logos, or assets you provide to us do not
          infringe on the intellectual property rights of any third party. You accept full
          responsibility and indemnify Auravon AI against any claims arising from the use of
          client-provided materials.
        </p>
      </section>

      {/* Client Responsibilities */}
      <section id="client-responsibilities">
        <h2>Client Responsibilities</h2>
        <p>
          For projects to proceed smoothly and on schedule, clients are expected to:
        </p>
        <ul>
          <li>
            Provide clear, timely, and complete project requirements and feedback within agreed
            review periods (typically 5 business days per review cycle).
          </li>
          <li>
            Supply all required content, assets, credentials, and access permissions needed for
            development as and when requested.
          </li>
          <li>
            Designate a single point of contact with authority to make project decisions on behalf
            of the client organization.
          </li>
          <li>
            Make payments in accordance with the agreed payment schedule.
          </li>
          <li>
            Participate in scheduled review meetings and milestone approvals.
          </li>
          <li>
            Report defects or issues within the post-launch support period.
          </li>
          <li>
            Ensure that the project brief and any client-provided specifications are accurate and
            complete before development commences.
          </li>
        </ul>
        <p>
          Delays caused by the client — including delayed feedback, missing assets, or late
          approvals — may result in revised timelines and potentially additional charges if they
          require rescheduling of development resources.
        </p>
      </section>

      {/* Timelines */}
      <section id="timelines">
        <h2>Project Timelines</h2>
        <p>
          Project timelines are estimates based on the agreed scope at the time of the proposal.
          Timelines are subject to:
        </p>
        <ul>
          <li>
            <strong>Scope changes</strong> — Any change to the agreed scope will result in a
            revised timeline communicated in writing before proceeding.
          </li>
          <li>
            <strong>Client delays</strong> — Delays in receiving client feedback, content, or
            approvals will extend the project timeline accordingly.
          </li>
          <li>
            <strong>Force majeure</strong> — Events beyond our reasonable control including
            natural disasters, power outages, or internet infrastructure failures.
          </li>
        </ul>
        <p>
          All timeline commitments are made in good faith. Auravon AI is not liable for damages
          arising from project delays unless caused by our direct negligence and agreed in writing
          as guaranteed deadlines.
        </p>
      </section>

      {/* Confidentiality */}
      <section id="confidentiality">
        <h2>Confidentiality</h2>
        <p>
          Both parties agree to keep confidential all information shared during the course of the
          project that is not publicly available, including but not limited to: business plans,
          technical specifications, financial information, trade secrets, and client data.
        </p>
        <p>
          This obligation of confidentiality survives the termination of our engagement for a
          period of <strong>3 years</strong>. We will not disclose confidential information to
          third parties without your prior written consent, except where required by law or
          regulation.
        </p>
        <p>
          For projects requiring additional confidentiality protections, a separate
          Non-Disclosure Agreement (NDA) can be executed upon request prior to the discovery call.
        </p>
      </section>

      {/* Liability */}
      <section id="liability">
        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law:
        </p>
        <ul>
          <li>
            Auravon AI&apos;s total liability for any claim arising from our services shall not
            exceed the total fees paid by the client for the specific project giving rise to the
            claim.
          </li>
          <li>
            We are not liable for any indirect, incidental, special, consequential, or punitive
            damages, including but not limited to: loss of profits, loss of data, business
            interruption, or loss of goodwill.
          </li>
          <li>
            We are not liable for issues arising from third-party services, APIs, hosting
            providers, or infrastructure that are outside our direct control.
          </li>
          <li>
            We are not responsible for damages resulting from client-provided content or
            specifications that prove to be inaccurate or infringe on third-party rights.
          </li>
          <li>
            We are not liable for security vulnerabilities in third-party packages or dependencies
            that were not known at the time of development.
          </li>
        </ul>
        <div className="legal-highlight">
          <p>
            Nothing in these Terms limits our liability for fraud, fraudulent misrepresentation,
            death or personal injury caused by our negligence, or any other liability that cannot
            be excluded by applicable law.
          </p>
        </div>
      </section>

      {/* Modifications */}
      <section id="modifications">
        <h2>Service Modifications</h2>

        <h3>Change Requests</h3>
        <p>
          Any change to the agreed scope of work must be submitted in writing. We will evaluate
          the change and provide a revised quote and timeline estimate within 3 business days.
          No additional work will commence until the change request is approved in writing and
          any additional fees are agreed upon.
        </p>

        <h3>Revisions</h3>
        <p>
          Each project includes a defined number of revision rounds as specified in the project
          proposal (typically 2–3 revision rounds per phase). Additional revision rounds beyond
          those included will be charged at our current hourly consulting rate, communicated at
          the time of the request.
        </p>

        <h3>Terms Modifications</h3>
        <p>
          Auravon AI reserves the right to modify these Terms at any time. Updated Terms will be
          posted on this page with a revised &quot;Last Updated&quot; date. Continued use of our
          services after such changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      {/* Termination */}
      <section id="termination">
        <h2>Termination</h2>

        <h3>Termination by Client</h3>
        <p>
          You may terminate a project engagement at any time by providing written notice. Upon
          termination:
        </p>
        <ul>
          <li>
            All work completed to date will be invoiced at the agreed project rate on a
            proportional basis.
          </li>
          <li>
            The deposit is non-refundable as it covers discovery, planning, and resource
            allocation costs.
          </li>
          <li>
            Work-in-progress will be delivered in its current state upon receipt of outstanding
            payment.
          </li>
          <li>
            Intellectual property rights for partially completed work remain with Auravon AI until
            full payment is received.
          </li>
        </ul>

        <h3>Termination by Auravon AI</h3>
        <p>
          We reserve the right to terminate an engagement immediately and without prior notice if:
        </p>
        <ul>
          <li>The client fails to make payment after 14 days past the due date</li>
          <li>The client requests work that is illegal, unethical, or violates these Terms</li>
          <li>The client engages in abusive, threatening, or harassing conduct toward our team</li>
          <li>
            Continued performance would require Auravon AI to violate applicable laws or
            regulations
          </li>
        </ul>
        <p>
          In the event of termination by Auravon AI without cause, we will refund the deposit
          less any work completed. In the event of termination due to client breach, no refund
          will be issued.
        </p>
      </section>

      {/* Disputes */}
      <section id="disputes">
        <h2>Dispute Resolution</h2>
        <p>
          In the event of a dispute arising from these Terms or our services, both parties agree
          to first attempt to resolve the matter through good-faith negotiation within{" "}
          <strong>30 days</strong> of the dispute arising.
        </p>
        <p>
          If informal resolution is not achieved, the parties agree to submit the dispute to
          mediation before initiating formal legal proceedings. The mediator shall be mutually
          agreed upon by both parties.
        </p>
        <p>
          Legal proceedings, if necessary, shall be conducted in the courts of jurisdiction
          specified under Governing Law below.
        </p>
      </section>

      {/* Governing Law */}
      <section id="governing-law">
        <h2>Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of India.
          Any disputes arising under or in connection with these Terms shall be subject to the
          exclusive jurisdiction of the courts of India.
        </p>
        <p>
          For international clients, these Terms still apply in their entirety. Any matters
          not covered by Indian law that are specific to your jurisdiction remain your
          responsibility to communicate and agree upon in a project-specific addendum.
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          For questions about these Terms, project agreements, or to request modifications,
          please contact us:
        </p>
        <div className="contact-box">
          <p>
            <strong>Business Inquiries:</strong>{" "}
            <a href="mailto:contacts@auravonai.com">contacts@auravonai.com</a>
          </p>
          <p>
            <strong>Project Discussions:</strong>{" "}
            <a href="mailto:projects@auravonai.com">projects@auravonai.com</a>
          </p>
          <p>
            <strong>Support:</strong>{" "}
            <a href="mailto:support@auravonai.com">support@auravonai.com</a>
          </p>
          <p>
            <strong>Contact Form:</strong>{" "}
            <Link href="/contact">auravonai.com/contact</Link>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
