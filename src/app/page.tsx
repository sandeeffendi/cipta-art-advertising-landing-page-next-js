import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Services from "@/components/services";
import WhyUs from "@/components/whyUs";
import Testimonial from "@/components/testimonials";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
      <Testimonial />
      <WhyUs />
      <Experience />
      <ContactSection />
      <FooterSection />
    </>
  );
}
