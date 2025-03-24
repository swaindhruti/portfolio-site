import HeroSection from "../features/HeroSection/hero";
import ProjectSection from "../features/HeroSection/projects";
import TechStackSection from "../features/HeroSection/techStack";
import ContactSection from "../features/HeroSection/contact";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <TechStackSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
