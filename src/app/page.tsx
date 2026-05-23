import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TechStack from "@/components/home/TechStack";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Auravon AI — AI Development Company & Custom Software Studio",
  description:
    "Auravon AI builds custom software, AI systems, SaaS products, web apps, mobile apps, and automation for startups and businesses. Ship your idea in weeks, not months.",
  alternates: {
    canonical: "https://auravonai.com",
  },
  openGraph: {
    title: "Auravon AI — AI Development Company & Custom Software Studio",
    description:
      "Auravon AI builds custom software, AI systems, SaaS products, web apps, mobile apps, and automation for startups and businesses. Ship your idea in weeks, not months.",
    url: "https://auravonai.com",
  },
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an AI development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI development company builds software products and systems powered by artificial intelligence — including AI-powered SaaS platforms, chatbots trained on custom company data, workflow automation, and LLM integrations. Auravon AI specializes in practical AI that solves real business problems for startups and growing companies.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to hire an AI development agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused AI MVP — one core AI feature, user auth, and billing — typically costs $12,000–$25,000 with a specialist agency. Full AI-powered SaaS products range from $30,000–$80,000. Large agencies charge 30–60% more due to overhead. Auravon AI offers fixed-price projects so you know the full cost before we start.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a custom software product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused MVP typically takes 3–6 weeks. A full SaaS product with multiple features, user roles, and integrations takes 8–16 weeks. Speed depends on how tightly the scope is defined — we help founders narrow scope before starting to keep timelines short.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build AI chatbots and business automation systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Auravon AI builds RAG-based chatbots trained on your company data, AI-powered workflow automation, LLM integrations using OpenAI and Anthropic Claude, and custom AI pipelines. Every system is built to production standards with proper error handling, cost controls, and monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with early-stage startups and small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most of our clients are early-stage founders and small businesses building their first product. We are structured to move fast, scope tightly, and ship MVPs that validate the core value without overbuilding or running up unnecessary costs.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Auravon AI use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For web and SaaS: Next.js, React, TypeScript, Node.js, PostgreSQL, and Prisma. For mobile: React Native and Flutter. For AI systems: OpenAI, Anthropic Claude, LangChain, Pinecone, and FastAPI. For automation: n8n, Make, and WhatsApp Business API. We recommend the stack that fits your product and team.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a software agency and a software studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A traditional software agency is large, has significant overhead, and charges for time rather than outcomes. A software studio like Auravon AI is a small specialist team focused on shipping results. Studios are faster, more cost-effective, and more aligned with founder goals because there are no account managers or middlemen between you and the engineers.",
      },
    },
    {
      "@type": "Question",
      name: "Can Auravon AI build a SaaS product from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build SaaS products end to end — product scoping, architecture, frontend, backend, AI features, Stripe or Razorpay billing, user auth, and deployment. We have built multi-tenant SaaS platforms, AI-powered analytics dashboards, CRM systems, and HR management tools for startups.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <TechStack />
      <ProjectShowcase />
      <ProcessSection />
      <Testimonials />
      <CTA />
    </>
  );
}
