"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Users, Search, FileText, Zap, GitBranch } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = ["All", "AI Solutions", "Web Development", "Mobile App", "SaaS Product", "Custom Software"];

const industries = [
  "SaaS Products",
  "E-Commerce",
  "HR & Operations",
  "Food & Beverage",
  "Finance & Reporting",
  "Field Services",
  "EdTech",
  "B2B Tools",
];

const workingStyle = [
  {
    icon: Search,
    title: "Start with the problem",
    desc: "Before any code, we understand what's actually broken, what's been tried, and what success looks like for your specific team.",
  },
  {
    icon: FileText,
    title: "Plan before we build",
    desc: "Data model, user flows, and integration points defined upfront. Architecture surprises mid-sprint are expensive for everyone.",
  },
  {
    icon: Zap,
    title: "Ship working software early",
    desc: "A working build in the first 1–2 weeks. You can test it, redirect it, and see that real progress is happening.",
  },
  {
    icon: GitBranch,
    title: "Hand over cleanly",
    desc: "Docs, codebase walkthrough, and admin access at the end. You should be able to extend what we built without us on speed dial.",
  },
];

type Highlight = { label: string; value: string };

type Project = {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  duration: string;
  teamSize: string;
  highlights: Highlight[];
  accentText: string;
  accentBg: string;
  accentBorder: string;
  dot: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "AI CRM Dashboard",
    category: "AI Solutions",
    description:
      "A B2B sales team was managing their entire pipeline through email threads and a shared spreadsheet. Every call had to be manually summarized, follow-ups were missed more often than not. We built them a focused CRM that connects to their calendar, auto-generates call notes with GPT-4, and keeps the deal board in one honest view.",
    problem: "Pipeline tracked in spreadsheets, no call summaries, deals slipping through the gaps.",
    solution: "CRM with AI call summaries, automatic follow-up scheduling, and a live deal board — built in 8 weeks.",
    technologies: ["Next.js", "OpenAI", "PostgreSQL", "Prisma"],
    duration: "8 weeks",
    teamSize: "3 engineers",
    highlights: [
      { label: "Time to ship", value: "8 weeks" },
      { label: "Call logging", value: "Automated" },
    ],
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/15",
    dot: "bg-violet-500",
    featured: true,
  },
  {
    title: "Business Analytics Dashboard",
    category: "SaaS Product",
    description:
      "A founder was opening six different tabs every morning — Stripe for revenue, HubSpot for leads, Google Analytics for traffic — just to understand how the previous day went. We built a single dashboard that pulls it all together and emails a formatted summary at 8am.",
    problem: "Business metrics scattered across 5+ tools with no unified view or daily summary.",
    solution: "Unified analytics dashboard with live data integrations and automated daily email digest.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    duration: "10 weeks",
    teamSize: "3 engineers",
    highlights: [
      { label: "Data integrations", value: "4 sources" },
      { label: "Daily digest", value: "Automated" },
    ],
    accentText: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/15",
    dot: "bg-blue-500",
  },
  {
    title: "AI Support Assistant",
    category: "AI Solutions",
    description:
      "A small SaaS team was answering the same product questions every day across web chat, WhatsApp, and email. Most answers already existed in their docs — users just couldn't find them. We built a chatbot trained on their knowledge base that handles routine queries and routes anything complex to a human.",
    problem: "Support team spending most of their day on questions already answered in the product docs.",
    solution: "RAG chatbot trained on product docs, deployed on web chat and WhatsApp Business.",
    technologies: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    duration: "6 weeks",
    teamSize: "2 engineers",
    highlights: [
      { label: "Channels deployed", value: "Web + WhatsApp" },
      { label: "Docs indexed", value: "200+" },
    ],
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/15",
    dot: "bg-cyan-500",
  },
  {
    title: "E-Commerce Rebuild",
    category: "Web Development",
    description:
      "A growing online store had outgrown Shopify — checkout couldn't be customized, the site was slow, and every third-party app added more loading time. We rebuilt the storefront in Next.js with edge caching, a custom checkout flow, and a lightweight admin panel their team can actually use.",
    problem: "Shopify store averaging 4-second load times with no way to customize the checkout experience.",
    solution: "Custom Next.js storefront with edge caching, Stripe checkout, and a lean admin panel.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Cloudflare"],
    duration: "10 weeks",
    teamSize: "3 engineers",
    highlights: [
      { label: "Load time", value: "Under 1s" },
      { label: "Fully custom", value: "Checkout + admin" },
    ],
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/15",
    dot: "bg-emerald-500",
  },
  {
    title: "HR Management System",
    category: "Custom Software",
    description:
      "An 80-person services company was running payroll from a spreadsheet, tracking leave through email, and doing compliance reporting manually every quarter. We replaced five separate spreadsheets with one internal tool — onboarding, leave requests, payroll summaries, and automated monthly reports.",
    problem: "Payroll, leave, and compliance managed across 5 separate spreadsheets with no audit trail.",
    solution: "Internal HR tool replacing manual spreadsheets — onboarding, leave, payroll, and reporting.",
    technologies: ["Next.js", "MongoDB", "Node.js", "SendGrid"],
    duration: "14 weeks",
    teamSize: "4 engineers",
    highlights: [
      { label: "Spreadsheets replaced", value: "5" },
      { label: "Monthly payroll", value: "Automated" },
    ],
    accentText: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/15",
    dot: "bg-orange-500",
  },
  {
    title: "Startup Landing Page",
    category: "Web Development",
    description:
      "A B2B SaaS founder needed a strong first impression for investor conversations and a product launch — their existing site was a placeholder with stock photos. We designed and built a focused landing page in 5 days with clear messaging, smooth animations, and a Calendly integration for booking demos.",
    problem: "Founder had a placeholder site while preparing for investor meetings and an imminent product launch.",
    solution: "Clean, fast landing page designed and shipped in 5 days with demo booking integration.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    duration: "5 days",
    teamSize: "2 engineers",
    highlights: [
      { label: "Time to launch", value: "5 days" },
      { label: "Demo booking", value: "Calendly integrated" },
    ],
    accentText: "text-pink-400",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/15",
    dot: "bg-pink-500",
  },
  {
    title: "Food Delivery App",
    category: "Mobile App",
    description:
      "A restaurant group was paying 25–30% commission to delivery aggregators on every order. They wanted to own the customer relationship and keep more margin. We built three apps: one for customers to order, one for drivers to manage pickups, and a dashboard for restaurant staff to handle incoming orders in real time.",
    problem: "Restaurant paying 25%+ in aggregator commissions with no control over the ordering experience.",
    solution: "Three-app system — customer ordering, driver tracking, and restaurant dashboard with real-time GPS.",
    technologies: ["React Native", "Socket.io", "PostgreSQL", "Google Maps API"],
    duration: "16 weeks",
    teamSize: "4 engineers",
    highlights: [
      { label: "Apps in system", value: "3" },
      { label: "Order tracking", value: "Real-time GPS" },
    ],
    accentText: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/15",
    dot: "bg-red-500",
  },
  {
    title: "Finance Reporting Tool",
    category: "Custom Software",
    description:
      "A finance team was manually copying numbers from their ERP and payment gateway into a spreadsheet every Friday afternoon to produce a weekly leadership report. We built a read-only dashboard that pulls from both systems automatically and delivers a formatted report every Friday morning.",
    problem: "Weekly financial reporting done manually — copy-pasting from 3 different systems into a spreadsheet.",
    solution: "Internal dashboard with live ERP and payment data, automated weekly report delivery.",
    technologies: ["Next.js", "PostgreSQL", "Python", "AWS"],
    duration: "8 weeks",
    teamSize: "2 engineers",
    highlights: [
      { label: "Systems integrated", value: "3" },
      { label: "Weekly reports", value: "Automated" },
    ],
    accentText: "text-indigo-400",
    accentBg: "bg-indigo-500/10",
    accentBorder: "border-indigo-500/15",
    dot: "bg-indigo-500",
  },
];

function DashboardMockup({ accentText, accentBg, accentBorder, dot }: {
  accentText: string; accentBg: string; accentBorder: string; dot: string;
}) {
  return (
    <div className={`rounded-xl border ${accentBorder} bg-[#0a0a1a] overflow-hidden h-full min-h-[260px]`}>
      {/* Window chrome */}
      <div className="px-4 py-3 border-b border-white/[0.06] flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 h-5 rounded bg-white/[0.04] border border-white/[0.04] flex items-center px-2 gap-1.5">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <div className="h-1 bg-white/[0.06] rounded flex-1" />
        </div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Metric row */}
        <div className="grid grid-cols-3 gap-2">
          {([["12", "Open deals"], ["87%", "Response rate"], ["4.2d", "Avg. close"]] as const).map(([val, lbl]) => (
            <div key={lbl} className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2.5">
              <div className={`text-sm font-bold leading-none ${accentText}`}>{val}</div>
              <div className="text-[9px] text-[#48486a] mt-1 leading-tight">{lbl}</div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-3">
          <div className="text-[9px] text-[#48486a] mb-2">Pipeline · last 7 days</div>
          <div className="flex items-end gap-1 h-12">
            {[35, 55, 42, 68, 58, 80, 65].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm ${accentBg}`}
                style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }}
              />
            ))}
          </div>
        </div>
        {/* Deal rows */}
        {([["Enterprise lead", "Proposal sent"], ["Agency partner", "In review"], ["Series A startup", "Contract"]] as const).map(([name, status]) => (
          <div key={name} className="flex items-center gap-2 py-0.5">
            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot} opacity-70`} />
            <div className="text-[10px] text-[#8888a8] flex-1 truncate">{name}</div>
            <div className={`text-[9px] font-medium shrink-0 ${accentText} opacity-80`}>{status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const { accentText, accentBg, accentBorder, dot } = project;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="md:col-span-2 rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-8 hover:border-white/[0.12] transition-colors duration-200"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-[11px] font-medium ${accentText} ${accentBg} ${accentBorder}`}>
              {project.category}
            </span>
            <span className={`text-[11px] font-semibold ${accentText} opacity-70`}>Featured project</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">{project.title}</h2>
          <p className="text-[14px] text-[#8888a8] leading-relaxed mb-5">{project.description}</p>

          {/* Problem / Solution */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-red-400 mb-0.5">Problem</div>
                <p className="text-[13px] text-[#8888a8] leading-relaxed">{project.problem}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400 mb-0.5">Solution</div>
                <p className="text-[13px] text-[#8888a8] leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.highlights.map(({ label, value }) => (
              <div key={label} className={`px-3 py-2 rounded-xl ${accentBg} border ${accentBorder}`}>
                <div className={`text-sm font-bold ${accentText}`}>{value}</div>
                <div className="text-[10px] text-[#48486a] mt-0.5">{label}</div>
              </div>
            ))}
            <div className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-sm font-bold text-white">{project.duration}</div>
              <div className="text-[10px] text-[#48486a] mt-0.5">Timeline</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-sm font-bold text-white">{project.teamSize}</div>
              <div className="text-[10px] text-[#48486a] mt-0.5">Team</div>
            </div>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-[11px] text-[#8888a8] bg-[#0d0d1e] border border-white/[0.06] rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: visual mockup */}
        <div className="hidden lg:block">
          <DashboardMockup accentText={accentText} accentBg={accentBg} accentBorder={accentBorder} dot={dot} />
        </div>
      </div>
    </motion.article>
  );
}

function RegularCard({ project, delay }: { project: Project; delay: number }) {
  const { accentText, accentBg, accentBorder, dot } = project;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay }}
      className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] transition-colors duration-200 flex flex-col"
    >
      {/* Category + visual accent */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className={`inline-flex px-2.5 py-1 rounded-lg border text-[11px] font-medium ${accentText} ${accentBg} ${accentBorder}`}>
          {project.category}
        </span>
        {/* Abstract visual accent */}
        <div className={`w-10 h-10 rounded-xl ${accentBg} border ${accentBorder} flex items-center justify-center shrink-0`}>
          <span className={`text-lg font-black ${accentText} opacity-40`}>{project.title.charAt(0)}</span>
        </div>
      </div>

      <h2 className="text-[17px] font-bold text-white leading-snug mb-2">{project.title}</h2>
      <p className="text-[13px] text-[#8888a8] leading-relaxed mb-4 flex-1">{project.description}</p>

      {/* Problem → Solution (inline, low-density) */}
      <div className="rounded-xl bg-[#0d0d1e] border border-white/[0.05] p-4 mb-4 space-y-2.5">
        <div className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1" />
          <p className="text-[12px] text-[#8888a8] leading-relaxed">{project.problem}</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1" />
          <p className="text-[12px] text-[#8888a8] leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Highlights + meta */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {project.highlights.map(({ label, value }) => (
          <div key={label} className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${accentBg} border ${accentBorder}`}>
            <div className={`text-[11px] font-bold ${accentText}`}>{value}</div>
            <div className="text-[10px] text-[#48486a]">{label}</div>
          </div>
        ))}
        <div className="flex items-center gap-1.5 text-[11px] text-[#48486a]">
          <Clock className="w-3 h-3" />
          {project.duration}
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#48486a]">
          <Users className="w-3 h-3" />
          {project.teamSize}
        </div>
      </div>

      {/* Tech tags — capped at 4 */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="px-2.5 py-1 text-[11px] text-[#8888a8] bg-[#0d0d1e] border border-white/[0.06] rounded-lg">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredProject = projects.find((p) => p.featured);
  const showFeatured = activeCategory === "All" && featuredProject;

  const regularProjects =
    activeCategory === "All"
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">

      {/* ── Hero ── */}
      <div className="border-b border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-label">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Software We&apos;ve{" "}
              <span className="gradient-text">Designed & Shipped</span>
            </h1>
            <p className="text-[#8888a8] text-lg max-w-2xl mx-auto leading-relaxed">
              A selection of web apps, mobile products, AI integrations, and internal tools built for founders and engineering teams.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="sticky top-16 z-30 bg-[#05050f]/90 backdrop-blur-xl border-b border-white/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white"
                    : "bg-[#090918] border border-white/[0.07] text-[#8888a8] hover:text-white hover:border-white/[0.12]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatePresence mode="popLayout">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Featured full-width card */}
              {showFeatured && featuredProject && (
                <FeaturedCard key={featuredProject.title} project={featuredProject} />
              )}

              {/* Regular cards */}
              {regularProjects.map((project, i) => (
                <RegularCard key={project.title} project={project} delay={i * 0.07} />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Industries band ── */}
      <section className="border-y border-white/[0.06] bg-[#090918]/60 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row items-center gap-6 flex-wrap justify-between">
            <p className="text-[13px] text-[#48486a] uppercase tracking-widest font-semibold shrink-0">
              Industries
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 flex-1">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-3 py-1.5 rounded-lg bg-[#05050f] border border-white/[0.07] text-[12px] text-[#8888a8]"
                >
                  {ind}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How We Approach{" "}
              <span className="gradient-text">Every Project</span>
            </h2>
            <p className="text-[#8888a8] text-base max-w-xl mx-auto leading-relaxed">
              The same core workflow applies whether we&apos;re building a 5-day landing page or a 16-week mobile system.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workingStyle.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6"
              >
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-4.5 h-4.5 text-violet-400" style={{ width: "1.125rem", height: "1.125rem" }} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-1">
                  Step {i + 1}
                </div>
                <h3 className="text-[14px] font-semibold text-white mb-2">{title}</h3>
                <p className="text-[13px] text-[#8888a8] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-[#8888a8]">
              Available for new projects · We reply within a day
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Building Something?{" "}
            <span className="gradient-text">Let&apos;s Talk.</span>
          </h2>
          <p className="text-[#8888a8] mb-8 leading-relaxed">
            Whether you have a detailed spec or just an idea — share what you&apos;re working on and we&apos;ll have an honest conversation about what it takes to build it right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
