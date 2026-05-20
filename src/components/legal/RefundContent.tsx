import LegalPageLayout from "./LegalPageLayout";
import Link from "next/link";

const sections = [
  { id: "overview", title: "Policy Overview" },
  { id: "consultation", title: "Consultation Payments" },
  { id: "project-deposits", title: "Project Deposits" },
  { id: "eligibility", title: "Refund Eligibility" },
  { id: "cancellation-rules", title: "Project Cancellation" },
  { id: "subscription", title: "Subscription & Maintenance" },
  { id: "non-refundable", title: "Non-Refundable Conditions" },
  { id: "process", title: "Refund Process" },
  { id: "timelines", title: "Processing Timelines" },
  { id: "disputes", title: "Disputes" },
  { id: "contact", title: "Contact Us" },
];

export default function RefundContent() {
  return (
    <LegalPageLayout
      badge="Legal Document"
      title="Refund & Cancellation Policy"
      subtitle="Due to the digital and customized nature of our services, refunds are subject to project stage and work completed. Please read this policy carefully before making a payment."
      lastUpdated="May 14, 2026"
      sections={sections}
    >
      {/* Overview */}
      <section id="overview" className="legal-section">
        <h2>Policy Overview</h2>
        <p>
          Auravon AI provides custom software development, AI solutions, mobile applications,
          and related digital services. Because each project is individually scoped, designed,
          and engineered to client specifications, our refund policy reflects the investment of
          time, resources, and expertise applied at each stage of a project.
        </p>
        <div className="legal-highlight">
          <p>
            <strong>Core principle:</strong> Due to the digital and customized nature of our
            services, refunds are subject to the project stage reached and the volume of work
            completed at the time a cancellation or refund request is made. We handle all
            refund requests fairly and on a case-by-case basis.
          </p>
        </div>
        <p>
          This policy applies to all services offered by Auravon AI, including one-time project
          engagements, monthly retainer agreements, consultation sessions, and maintenance
          subscriptions. We encourage all clients to thoroughly review project proposals and
          ask questions before making any payment.
        </p>
      </section>

      {/* Consultation Payments */}
      <section id="consultation">
        <h2>Consultation Payments</h2>

        <h3>Free Initial Consultation</h3>
        <p>
          Our initial 30-minute discovery call is provided at <strong>no charge</strong>. No
          payment is required to speak with our team about your project requirements.
        </p>

        <h3>Extended / Paid Consultations</h3>
        <p>
          For clients who book extended paid consultation sessions (strategy workshops, technical
          architecture reviews, or advisory sessions), the following applies:
        </p>
        <ul>
          <li>
            <strong>Cancellation 48+ hours before the session</strong> — Full refund issued,
            minus any payment gateway processing fees (typically 2–3%).
          </li>
          <li>
            <strong>Cancellation 24–48 hours before the session</strong> — 50% refund of the
            consultation fee.
          </li>
          <li>
            <strong>Cancellation less than 24 hours before</strong> — No refund. The session
            fee is retained to compensate for the reserved time slot.
          </li>
          <li>
            <strong>No-show without notice</strong> — No refund. The full consultation fee is
            forfeited.
          </li>
          <li>
            <strong>Rescheduling</strong> — Free rescheduling is available with at least 24
            hours notice, subject to availability.
          </li>
        </ul>

        <h3>Consultation Credit</h3>
        <p>
          If you proceed with a full project after a paid consultation, the consultation fee may
          be applied as a credit toward the project cost at our discretion. This will be stated
          in the project proposal.
        </p>
      </section>

      {/* Project Deposits */}
      <section id="project-deposits">
        <h2>Project Deposits</h2>
        <p>
          A deposit is required to commence work on all client projects. The deposit amount is
          specified in the project proposal (typically <strong>50% of the total project cost</strong>).
        </p>

        <h3>What Your Deposit Covers</h3>
        <p>
          The deposit funds the following non-recoverable activities that begin immediately
          upon payment:
        </p>
        <ul>
          <li>Project discovery, requirements analysis, and documentation</li>
          <li>Technical architecture planning and technology selection</li>
          <li>Resource allocation and scheduling of engineering time</li>
          <li>Initial wireframing or design exploration</li>
          <li>Project management setup and onboarding</li>
          <li>Opportunity cost of reserved capacity for your project</li>
        </ul>

        <h3>Deposit Refund Conditions</h3>
        <ul>
          <li>
            <strong>Cancellation before discovery phase begins</strong> — If you cancel within
            48 hours of paying the deposit and before any project work has commenced, a full
            deposit refund is issued, minus payment gateway fees.
          </li>
          <li>
            <strong>Cancellation during or after discovery</strong> — If discovery, planning, or
            design work has begun, the deposit is non-refundable. A detailed account of work
            completed will be provided upon request.
          </li>
        </ul>
      </section>

      {/* Refund Eligibility */}
      <section id="eligibility">
        <h2>Refund Eligibility by Project Stage</h2>
        <p>
          The following table summarizes refund eligibility based on project stage at the time a
          cancellation is requested:
        </p>

        <div className="my-5 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#1e1e3f]">
                <th className="text-left py-3 pr-4 text-gray-300 font-semibold">Project Stage</th>
                <th className="text-left py-3 pr-4 text-gray-300 font-semibold">Refund Eligibility</th>
                <th className="text-left py-3 text-gray-300 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e1e3f]">
              {[
                {
                  stage: "Before any work begins",
                  eligibility: "Full refund",
                  detail: "Less payment gateway processing fees (2–3%)",
                },
                {
                  stage: "Discovery & Planning",
                  eligibility: "Partial refund",
                  detail: "Deposit retained; milestone payments refunded minus hours worked",
                },
                {
                  stage: "Design Phase",
                  eligibility: "Partial refund",
                  detail: "Design costs deducted; remaining milestone balance may be refunded",
                },
                {
                  stage: "Development (0–30%)",
                  eligibility: "Partial refund",
                  detail: "30–50% of stage payment retained to cover work completed",
                },
                {
                  stage: "Development (30–70%)",
                  eligibility: "No refund",
                  detail: "All payments for the stage are retained",
                },
                {
                  stage: "Development (70–100%)",
                  eligibility: "No refund",
                  detail: "Full stage payment retained; final payment still due",
                },
                {
                  stage: "Post-launch / Testing",
                  eligibility: "No refund",
                  detail: "All payments retained; project delivered as agreed",
                },
              ].map((row) => (
                <tr key={row.stage} className="text-gray-400">
                  <td className="py-3 pr-4 font-medium text-gray-200">{row.stage}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        row.eligibility.includes("Full")
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : row.eligibility.includes("Partial")
                          ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {row.eligibility}
                    </span>
                  </td>
                  <td className="py-3 text-xs">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Refund amounts for partially completed work are calculated based on time and resources
          invested, documented in our project management system, and communicated transparently
          to the client.
        </p>
      </section>

      {/* Project Cancellation */}
      <section id="cancellation-rules">
        <h2>Project Cancellation Rules</h2>

        <h3>How to Cancel</h3>
        <p>
          All cancellation requests must be submitted in writing via email to{" "}
          <a href="mailto:projects@auravonai.com">projects@auravonai.com</a>. The effective
          cancellation date is the date we acknowledge receipt of your written request.
        </p>

        <h3>Cancellation by Client</h3>
        <ul>
          <li>
            Written notice of cancellation must be sent to{" "}
            <a href="mailto:projects@auravonai.com">projects@auravonai.com</a>.
          </li>
          <li>
            Upon cancellation, Auravon AI will prepare a detailed summary of work completed
            and any outstanding charges.
          </li>
          <li>
            All work completed up to the cancellation date will be invoiced and must be paid
            before deliverables or work-in-progress files are transferred to the client.
          </li>
          <li>
            If the outstanding amount exceeds payments already made, the client will receive an
            invoice for the difference, payable within 14 days.
          </li>
          <li>
            If the outstanding amount is less than payments already made, the difference will be
            refunded within 10–15 business days, subject to these eligibility criteria.
          </li>
        </ul>

        <h3>Cancellation by Auravon AI</h3>
        <p>
          If Auravon AI terminates a project due to circumstances within our control (such as
          inability to deliver the agreed scope), we will provide:
        </p>
        <ul>
          <li>A full refund of any amounts paid that exceed the value of work delivered</li>
          <li>All work-in-progress files and assets produced to date</li>
          <li>A written handover document to assist the client in continuing with another provider</li>
        </ul>
        <p>
          If Auravon AI terminates a project due to client breach (non-payment, abusive conduct,
          or illegal requests), no refund will be issued.
        </p>

        <h3>Project Pause</h3>
        <p>
          Clients may request to pause an active project with written notice. Projects on pause
          for more than <strong>60 calendar days</strong> without a scheduled restart date may be
          considered cancelled, with any applicable refunds processed accordingly. Restarting a
          paused project after 60 days may require re-scoping and revised pricing.
        </p>
      </section>

      {/* Subscription & Maintenance */}
      <section id="subscription">
        <h2>Subscription &amp; Maintenance Plan Cancellations</h2>

        <h3>Monthly Maintenance Plans</h3>
        <p>
          Monthly maintenance and support plans operate on a rolling monthly basis. To cancel:
        </p>
        <ul>
          <li>
            Provide written notice at least <strong>15 days before</strong> your next billing
            date to cancel without being charged for the following month.
          </li>
          <li>
            Cancellations received less than 15 days before the billing date will be processed
            for the next billing cycle — no partial-month refunds are issued for maintenance plans.
          </li>
          <li>
            The final month of service will be delivered in full before the plan is cancelled.
          </li>
          <li>
            Any work committed to and started within the final month will be completed or
            handed over.
          </li>
        </ul>

        <h3>Annual / Long-Term Retainer Plans</h3>
        <p>
          For clients on annual retainer or long-term service agreements:
        </p>
        <ul>
          <li>
            Cancellation within the first <strong>30 days</strong> of an annual plan: Prorated
            refund for unused months, less a 10% early cancellation fee.
          </li>
          <li>
            Cancellation after 30 days: Refund for unused months calculated at the monthly
            equivalent rate, less a 15% early cancellation fee.
          </li>
          <li>
            No refund is available in the final 30 days of an annual plan term.
          </li>
        </ul>
      </section>

      {/* Non-Refundable Conditions */}
      <section id="non-refundable">
        <h2>Non-Refundable Conditions</h2>
        <p>
          The following are non-refundable under all circumstances:
        </p>
        <ul>
          <li>
            <strong>Completed and delivered work</strong> — Any project, phase, or deliverable
            that has been completed, approved, and/or deployed to production.
          </li>
          <li>
            <strong>Project deposits post-discovery</strong> — Once the discovery and planning
            phase has commenced, the initial deposit is non-refundable.
          </li>
          <li>
            <strong>Consultation fees (no-show)</strong> — Paid consultation sessions where the
            client does not attend without prior cancellation notice.
          </li>
          <li>
            <strong>Third-party costs</strong> — Any costs for domain names, hosting, licenses,
            APIs, or third-party services procured on behalf of the client are non-refundable.
          </li>
          <li>
            <strong>Approved design deliverables</strong> — Designs that the client has reviewed
            and approved in writing before proceeding to development.
          </li>
          <li>
            <strong>Payments due to client-caused delays</strong> — Milestone payments that
            became due because of client-side delays extending a project beyond its original timeline.
          </li>
          <li>
            <strong>Payments for non-payment terminations</strong> — Where a project is
            terminated due to the client failing to make scheduled payments.
          </li>
        </ul>
        <div className="legal-highlight">
          <p>
            We invest significant time in discovery, planning, and preparation before a single
            line of code is written. Our refund policy protects both the client and our team
            against the costs of this upfront investment.
          </p>
        </div>
      </section>

      {/* Refund Process */}
      <section id="process">
        <h2>How to Request a Refund</h2>
        <p>
          To initiate a refund or cancellation, follow these steps:
        </p>
        <ol>
          <li>
            <strong>Send a written request</strong> — Email{" "}
            <a href="mailto:projects@auravonai.com">projects@auravonai.com</a> with the subject
            line: <strong>&quot;Refund Request — [Your Name / Company]&quot;</strong>. Include
            your project name, payment date, amount, and reason for the refund request.
          </li>
          <li>
            <strong>Acknowledgement</strong> — We will acknowledge your request within{" "}
            <strong>2 business days</strong>.
          </li>
          <li>
            <strong>Review period</strong> — Our team will review the project status, work
            completed, and applicable policy within <strong>5 business days</strong>.
          </li>
          <li>
            <strong>Decision</strong> — We will communicate our decision in writing, including
            the refund amount (if applicable) and the calculation basis.
          </li>
          <li>
            <strong>Processing</strong> — Approved refunds are processed within the timelines
            stated below.
          </li>
        </ol>
      </section>

      {/* Timelines */}
      <section id="timelines">
        <h2>Refund Processing Timelines</h2>
        <p>
          Once a refund is approved and authorized, processing times are as follows:
        </p>
        <ul>
          <li>
            <strong>Razorpay payments (UPI, Cards)</strong> — Refunds are initiated within 5
            business days of approval. Funds typically appear in your account within{" "}
            <strong>5–7 business days</strong> from initiation, depending on your bank.
          </li>
          <li>
            <strong>Net banking payments</strong> — Processing takes <strong>7–10 business days</strong>
            {" "}from the date of refund initiation.
          </li>
          <li>
            <strong>Bank transfers (NEFT/RTGS)</strong> — Refunds are processed within{" "}
            <strong>5–7 business days</strong> after approval. Please provide your bank details
            when requesting a bank transfer refund.
          </li>
          <li>
            <strong>Credit/Debit cards</strong> — Refunds are sent to the original card within
            5 business days. Your bank may take an additional <strong>5–10 business days</strong>
            {" "}to credit the amount to your statement.
          </li>
        </ul>
        <p>
          Refunds will be made to the original payment method used. We do not issue refunds to
          a different payment method or bank account than the one used for the original payment
          without additional verification.
        </p>
      </section>

      {/* Disputes */}
      <section id="disputes">
        <h2>Disputes &amp; Escalations</h2>
        <p>
          If you believe a refund has been incorrectly denied or processed, you may escalate
          the matter by contacting us directly at{" "}
          <a href="mailto:contacts@auravonai.com">contacts@auravonai.com</a> with the subject
          line <strong>&quot;Refund Dispute — [Your Name]&quot;</strong>.
        </p>
        <p>
          Escalated disputes are reviewed by a senior member of our management team within
          <strong> 5 business days</strong>. We are committed to resolving all disputes fairly
          and transparently.
        </p>
        <p>
          If a dispute cannot be resolved through direct communication, you may raise a complaint
          with your payment provider (e.g., your bank or Razorpay). We cooperate fully with
          legitimate chargebacks where our refund policy would support the refund. Fraudulent
          chargebacks for services that have been delivered will be contested.
        </p>
        <p>
          For disputes that escalate to formal proceedings, the process outlined in our{" "}
          <Link href="/terms#disputes">Terms &amp; Conditions</Link> applies.
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          For refund requests, cancellation notices, or questions about this policy, please
          reach out through the following channels:
        </p>
        <div className="contact-box">
          <p>
            <strong>Refund Requests:</strong>{" "}
            <a href="mailto:projects@auravonai.com">projects@auravonai.com</a>
          </p>
          <p>
            <strong>Billing Support:</strong>{" "}
            <a href="mailto:support@auravonai.com">support@auravonai.com</a>
          </p>
          <p>
            <strong>Escalations:</strong>{" "}
            <a href="mailto:contacts@auravonai.com">contacts@auravonai.com</a>
          </p>
          <p>
            <strong>Contact Form:</strong>{" "}
            <Link href="/contact">auravonai.com/contact</Link>
          </p>
          <p>
            <strong>Response time:</strong> Within 2 business days for all refund-related
            communications.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
