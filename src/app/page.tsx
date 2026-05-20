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
  title: "AI Development Company & Custom Software Studio | Auravon AI",
  description:
    "Auravon AI is an AI development company building custom software, SaaS products, web apps, mobile apps, and automation systems for startups and businesses. Ship faster with AI-first engineering.",
};

export default function HomePage() {
  return (
    <>
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
