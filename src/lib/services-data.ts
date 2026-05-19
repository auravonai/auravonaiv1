export type ProcessStep = { step: string; desc: string };

export type ServiceData = {
  id: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  technologies: string[];
  process: ProcessStep[];
  faq: { q: string; a: string }[];
  cta: string;
  accent: string;
};

export const servicesData: ServiceData[] = [
  {
    id: "web",
    title: "Web Development",
    headline: "Web Applications That Don't Break Under Pressure",
    description:
      "We build production-grade web apps with Next.js and React — from marketing sites that actually convert to complex SaaS platforms that handle real load. Performance and maintainability are built in from day one, not retrofitted after launch.",
    benefits: [
      "Structured for maintainability — not just speed-to-ship",
      "Performance-focused frontend with fast load times by default",
      "SEO foundations baked in — clean semantics, metadata, sitemap",
      "Mobile-first, responsive across devices and screen sizes",
      "TypeScript throughout for fewer production surprises",
      "API design you can confidently build on top of",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Vercel"],
    process: [
      { step: "Discovery", desc: "We understand your goals, users, and constraints before writing any code." },
      { step: "Architecture", desc: "Data model, routing, and system boundaries mapped out upfront — not improvised." },
      { step: "Development", desc: "Iterative sprints with working builds you can review, not just status updates." },
      { step: "QA", desc: "Cross-browser, cross-device, and load-tested before anything touches production." },
      { step: "Deployment", desc: "CI/CD pipelines, monitoring, and environment configuration handled." },
      { step: "Handover", desc: "Documentation and a knowledge transfer so your team understands what was built." },
    ],
    faq: [
      {
        q: "How long does a typical project take?",
        a: "A focused marketing site or landing page takes 1–2 weeks. A full SaaS platform or web app typically runs 6–14 weeks — scope and decision speed on your end are the biggest variables.",
      },
      {
        q: "Can you work on top of an existing codebase?",
        a: "Yes — we regularly join mid-project codebases, refactor legacy systems, and migrate between stacks. We'll give you an honest assessment before committing.",
      },
      {
        q: "Do you handle post-launch maintenance?",
        a: "Yes. We offer ongoing support for bugs, minor updates, and feature additions. You shouldn't have to find a new team every time something needs fixing.",
      },
    ],
    cta: "Discuss Your Web Project",
    accent: "violet",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    headline: "Mobile Apps That Feel Like They Belong on the Platform",
    description:
      "We build cross-platform iOS and Android apps with React Native and Flutter that don't feel like compromises. The goal is always a smooth, native-feeling experience — not just something that technically runs on both platforms.",
    benefits: [
      "Single codebase for iOS and Android — fewer things to maintain",
      "Smooth, native-feeling interactions — not webview wrappers",
      "Offline support, push notifications, and deep linking",
      "App Store and Play Store submission handled end-to-end",
      "Backend API integration from the start of development",
      "Crash reporting and analytics wired up before launch",
    ],
    technologies: ["React Native", "Flutter", "Expo", "Firebase", "Node.js", "Stripe", "OneSignal"],
    process: [
      { step: "Discovery", desc: "Platform choice, user flows, and technical constraints discussed upfront." },
      { step: "Wireframes", desc: "Low-fidelity screens to validate structure before any design investment." },
      { step: "Development", desc: "Feature by feature, with installable builds you can test on real devices." },
      { step: "Device Testing", desc: "Tested across iOS and Android versions — not just the simulator." },
      { step: "Store Submission", desc: "We handle provisioning, screenshots, metadata, and Apple/Google review." },
      { step: "Monitoring", desc: "Crash reporting and error tracking in place before the app goes live." },
    ],
    faq: [
      {
        q: "React Native or Flutter — which is right for us?",
        a: "Depends on your situation. React Native is a good fit if your team knows JavaScript or you're sharing code with a web app. Flutter tends to produce more consistent UI across platforms. We'll recommend based on your actual constraints, not preference.",
      },
      {
        q: "How long does mobile development take?",
        a: "A focused app with 4–6 screens and a backend typically takes 6–10 weeks. Apps with real-time features, payments, or multiple user roles usually run 3–5 months.",
      },
      {
        q: "What happens after the app is approved?",
        a: "We stay available for bug fixes, OS update compatibility, and new feature work. Mobile platforms update constantly — something will eventually need attention, and we'll be there.",
      },
    ],
    cta: "Plan Your Mobile App",
    accent: "blue",
  },
  {
    id: "ai",
    title: "AI Solutions",
    headline: "Practical AI That Solves Real Business Problems",
    description:
      "We build AI features that solve specific problems — not AI for the sake of having an AI story. That means chatbots trained on your actual data, workflows that replace real manual work, and LLM integrations that hold up in production.",
    benefits: [
      "RAG systems trained on your knowledge base, docs, or CRM data",
      "LLM integrations with OpenAI, Anthropic, or open-source models",
      "AI-powered internal search, summarization, and classification",
      "Support automation that handles routine queries reliably",
      "Document processing and data extraction pipelines",
      "Prompt engineering, evaluation, and reliability testing",
    ],
    technologies: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone", "Python", "FastAPI", "LlamaIndex"],
    process: [
      { step: "Use Case Analysis", desc: "We start with the problem you're solving, not what AI can theoretically do." },
      { step: "Data Assessment", desc: "What data you have, how it's structured, and how to make it usable." },
      { step: "Prototype", desc: "A working proof of concept you can interact with before committing to the full build." },
      { step: "Integration", desc: "Embedded into your product with proper error handling and fallback behavior." },
      { step: "Evaluation", desc: "Tested for accuracy, edge cases, and the ways AI systems fail in practice." },
      { step: "Deployment", desc: "Monitoring, logging, and API cost controls so you're not surprised later." },
    ],
    faq: [
      {
        q: "Can you build a chatbot trained on our company data?",
        a: "Yes — RAG systems are one of the most common things we build. Your data is indexed in a vector database you control. It doesn't need to leave your infrastructure.",
      },
      {
        q: "How do you handle AI accuracy and hallucinations?",
        a: "We build evaluation pipelines, test against real queries, and establish fallback behaviors before going live. AI shouldn't fail silently — users need to know when the system doesn't have a confident answer.",
      },
      {
        q: "Is our data sent to OpenAI?",
        a: "Only if you use the OpenAI API directly. We can also work with Azure OpenAI Service or locally-hosted models to keep data within your own infrastructure.",
      },
    ],
    cta: "Explore AI for Your Product",
    accent: "cyan",
  },
  {
    id: "custom",
    title: "Custom Software",
    headline: "Internal Tools That Make Your Team More Effective",
    description:
      "Off-the-shelf software rarely fits how your team actually works. We build custom dashboards, admin panels, and management systems that match your specific processes — and connect to the tools you already use.",
    benefits: [
      "Role-based access, permissions, and audit logging",
      "Real-time data views and reporting dashboards",
      "CRUD interfaces with validation, error states, and edge cases handled",
      "Integration with your existing CRM, ERP, or payment provider",
      "Workflow automation built directly into the tool",
      "Export, scheduled reports, and notification systems",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "MongoDB", "Prisma", "Docker", "AWS"],
    process: [
      { step: "Requirements", desc: "We document your workflows and edge cases thoroughly — messy logic is normal." },
      { step: "System Design", desc: "Data model, user roles, and integration points defined before any development." },
      { step: "Development", desc: "Regular builds your team can test with real data throughout the process." },
      { step: "Integration", desc: "Connected to your existing systems with thoroughly tested edge cases." },
      { step: "Handover", desc: "Admin access, documentation, and a walkthrough so your team can manage it." },
      { step: "Support", desc: "Available for changes as your process evolves — which it always does." },
    ],
    faq: [
      {
        q: "Can this integrate with our specific tool?",
        a: "Usually yes. We regularly integrate with CRMs, ERPs, payment providers, logistics APIs, and communication platforms. Share what you're using and we'll confirm before starting.",
      },
      {
        q: "We have complicated business logic — can you handle it?",
        a: "That's the whole point of custom software. Complex rules, exception handling, and business-specific edge cases are what we specialize in — off-the-shelf tools can't handle this.",
      },
      {
        q: "How do we know it will stay maintainable?",
        a: "We write typed code, document key decisions, and structure systems so any engineer can continue the work. You shouldn't need us indefinitely for basic changes.",
      },
    ],
    cta: "Talk About Your Workflow",
    accent: "emerald",
  },
  {
    id: "design",
    title: "UI/UX Design",
    headline: "Design That Serves the Product, Not Just the Portfolio",
    description:
      "Good design is about clarity — helping users do what they came to do without friction. We work from research through to polished UI, focused on usability and product outcomes rather than aesthetics alone.",
    benefits: [
      "User research and flow mapping before any visual work begins",
      "Information architecture that reduces confusion as products grow",
      "Wireframes for validation before high-fidelity design investment",
      "Component-based design systems that speed up development",
      "Conversion-oriented structure for landing pages and onboarding",
      "Clean, organized Figma handover your developers will thank you for",
    ],
    technologies: ["Figma", "Framer", "Storybook"],
    process: [
      { step: "Research", desc: "User goals, business goals, and where the current experience falls short." },
      { step: "User Flows", desc: "How users move through the product before we design individual screens." },
      { step: "Wireframes", desc: "Structure and logic validated before any visual polish is applied." },
      { step: "Visual Design", desc: "High-fidelity screens aligned with your brand and user expectations." },
      { step: "Prototype", desc: "Clickable Figma prototype for stakeholder review and user testing." },
      { step: "Dev Handover", desc: "Organized files with spacing, component notes, and interaction specs." },
    ],
    faq: [
      {
        q: "Do we get the Figma source files?",
        a: "Yes — fully organized files with components, variants, and design tokens. You own everything we produce.",
      },
      {
        q: "Can you work within our existing brand?",
        a: "Yes. We work within your brand guidelines or help establish one if you're starting fresh. We won't override your existing direction without discussion.",
      },
      {
        q: "Do you help with conversion optimization?",
        a: "Yes — page hierarchy, CTA placement, and onboarding flow are part of our design process when conversion is a stated goal.",
      },
    ],
    cta: "Review Your Product Design",
    accent: "pink",
  },
  {
    id: "automation",
    title: "Automation Systems",
    headline: "Automate the Repetitive Parts. Keep the Team Focused.",
    description:
      "Most teams waste hours each week on tasks that could be automated — data entry, follow-up emails, report generation, cross-system syncing. We find those bottlenecks and build automations that actually get used.",
    benefits: [
      "Workflow automation between your existing tools and platforms",
      "Lead capture and follow-up sequence automation",
      "Invoice generation and payment notification workflows",
      "CRM data sync, deduplication, and enrichment pipelines",
      "Scheduled reports delivered automatically to your team",
      "Custom webhook and API orchestration for non-standard integrations",
    ],
    technologies: ["n8n", "Make", "WhatsApp Business API", "SendGrid", "HubSpot", "Stripe"],
    process: [
      { step: "Process Audit", desc: "We map current manual workflows and find the highest-value automation targets." },
      { step: "Design", desc: "Automation logic designed with exception handling — what happens when things fail." },
      { step: "Build", desc: "Configured and tested in staging before touching your live data or accounts." },
      { step: "Testing", desc: "Edge cases, failure scenarios, and error notifications tested before go-live." },
      { step: "Monitoring", desc: "Alerts in place so broken automations don't silently cause downstream problems." },
      { step: "Documentation", desc: "Written runbook so your team can adjust automations without calling us." },
    ],
    faq: [
      {
        q: "Where do we start if we're new to automation?",
        a: "Most teams have 3–5 obvious automations that would save meaningful time each week. A short discovery call usually surfaces them quickly — no need to have it figured out first.",
      },
      {
        q: "Do you work with our existing tools?",
        a: "Yes. We integrate with HubSpot, Salesforce, Notion, Airtable, Slack, Google Workspace, Stripe, WhatsApp Business, and most tools that expose an API.",
      },
      {
        q: "What if an automation breaks?",
        a: "We build error alerts and monitoring from the start. You'll know when something fails before it causes problems downstream — not after.",
      },
    ],
    cta: "Map Your Automation Opportunities",
    accent: "orange",
  },
];
