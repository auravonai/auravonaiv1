import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesSection from "@/components/home/IndustriesSection";
import TechStack from "@/components/home/TechStack";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Auravon AI — Full-Service Digital Agency | SEO, Ads, Web & Ecommerce",
  description:
    "Auravon AI is a full-service digital agency serving businesses worldwide. SEO, Google Ads, Meta Ads, website development, ecommerce, social media management, content marketing, graphic design, and business consulting.",
  alternates: {
    canonical: "https://auravonai.com",
  },
  openGraph: {
    title: "Auravon AI — Full-Service Digital Agency | SEO, Ads, Web & Ecommerce",
    description:
      "Auravon AI is a full-service digital agency serving businesses worldwide. SEO, Google Ads, Meta Ads, website development, ecommerce, social media, content marketing, graphic design, and business consulting.",
    url: "https://auravonai.com",
  },
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Auravon AI offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Auravon AI is a full-service digital agency offering: Digital Marketing & SEO, Google Ads, Meta Ads, Website Development, Ecommerce Development, Social Media Management, Content Marketing, Graphic Design & Branding, and Business Consulting. We serve businesses in India, USA, UK, Australia, UAE, Canada, and worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "What is SEO and how long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO (Search Engine Optimization) is the process of improving your website's visibility on Google so it ranks higher for keywords your customers search for. SEO results typically take 3–6 months for meaningful organic traffic growth. However, some improvements — like technical SEO fixes and content optimization — can show results within weeks. A properly executed SEO strategy builds a compounding organic traffic asset that generates leads at low marginal cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do you manage Google Ads and Meta Ads campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Auravon AI manages Google Search Ads, Google Shopping Ads, Google Display Ads, Facebook Ads, and Instagram Ads. We handle campaign strategy, ad copy, audience targeting, bid management, and ongoing optimisation. All campaigns are tracked to actual leads and sales — not just clicks and impressions.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build a Shopify or WooCommerce store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and develop custom Shopify and WooCommerce stores — including theme customisation, payment gateway integration, product catalog setup, and conversion optimization. We also build custom ecommerce platforms for businesses with requirements that standard platforms can't meet.",
      },
    },
    {
      "@type": "Question",
      name: "Do you manage Amazon, Flipkart, and Meesho seller accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Ecommerce Account Management team handles Amazon seller central management, Flipkart seller management, and Meesho account management — including listing optimisation, sponsored ads management, inventory planning, and account health monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "What does social media management include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our social media management service includes: content strategy, content calendar, post copy and caption writing, graphic design for posts and stories, scheduling and publishing, community management (comments and DMs), and monthly performance reporting. We manage Instagram, Facebook, LinkedIn, and YouTube.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we serve clients in USA, UK, Australia, Canada, UAE, Singapore, Europe, and India. All our services — SEO, paid advertising, web development, content marketing, social media, and design — are available to businesses worldwide. Most client communication happens via WhatsApp, email, and video calls.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Auravon AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us via WhatsApp (+91 88140 12395), the contact form on our website, or email. We begin with a free consultation call to understand your business and goals — then provide a clear, scoped proposal within 24–48 hours. No pressure, no commitment required for the initial conversation.",
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
      <IndustriesSection />
      <TechStack />
      <ProjectShowcase />
      <ProcessSection />
      <Testimonials />
      <CTA />
    </>
  );
}
