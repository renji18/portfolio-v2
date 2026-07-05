import Hero from "../components/Hero";
import Impact from "../components/Impact";
import TechStack from "../components/TechStack";
import CaseStudies from "../components/CaseStudies";
import { useEffect } from "react";
import Experience from "../components/Experience";
import EngineeringStories from "../components/EngineeringStories";

const Home = () => {
  // use effect to get reset scroll
  useEffect(() => {
    function resetScroll() {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = "smooth";
      const scrollableContainer = document.querySelector("#home");
      if (scrollableContainer) scrollableContainer.scrollTop = 0;
    }
    resetScroll();
  }, []);

  return (
    <div id="home" className="text-darkBlack">
      <Hero />
      <Impact />
      <CaseStudies />
      <Experience />
      <TechStack />
      <EngineeringStories />
    </div>
  );
};

export default Home;
