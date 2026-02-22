import Navbar from "@/components/Navbar";
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
    <div className="min-h-screen bg-background">
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

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2025 Nikitha P. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
