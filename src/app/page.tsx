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
  title: "Auravon AI — AI-Powered Software & Digital Product Studio",
  description:
    "Auravon AI builds scalable websites, SaaS products, AI-powered systems, mobile apps, and automation solutions for startups and businesses.",
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
