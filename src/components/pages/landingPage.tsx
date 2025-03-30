import HeroSection from "../features/landingPage/hero";
import ProjectSection from "../features/landingPage/projects";
import TechStackSection from "../features/landingPage/techStack";
import ContactSection from "../features/landingPage/contact";
import WorkExperienceSection from "../features/landingPage/work";

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
