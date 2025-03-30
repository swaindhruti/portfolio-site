import HeroSection from "../features/HeroSection/hero";
import ProjectSection from "../features/HeroSection/projects";
import TechStackSection from "../features/HeroSection/techStack";
import ContactSection from "../features/HeroSection/contact";
import WorkExperienceSection from "../features/HeroSection/work";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <WorkExperienceSection />
      <TechStackSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;
