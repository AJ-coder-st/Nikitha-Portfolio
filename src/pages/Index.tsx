import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import FocusSection from "@/components/FocusSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-background"
    >
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection id="about" />
      <EducationSection />
      <ExpertiseSection />
      <FocusSection />
      <ProjectsSection />
      <CertificatesSection />
      <AboutSection id="about-2" />
      <ContactSection />

      <footer className="py-10 text-center border-t border-border/50">
        <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
          © 2025 Nikitha P
        </p>
      </footer>
    </motion.div>
  );
};

export default Index;
