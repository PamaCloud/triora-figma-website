import { AboutSection } from "@/components/about-section";
import { AcademySection } from "@/components/academy-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ProcessSection } from "@/components/process-section";
import { ProofSection } from "@/components/proof-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhyUsSection } from "@/components/why-us-section";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ProofSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyUsSection />
        <AcademySection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
