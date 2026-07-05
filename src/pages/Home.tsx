import Hero from "../components/Hero";
import Impact from "../components/Impact";
import TechStack from "../components/TechStack";
import CaseStudies from "../components/CaseStudies";
import { useEffect } from "react";
import Experience from "../components/Experience";
import EngineeringStories from "../components/EngineeringStories";
import resetScroll from "../utils/resetScroll";

const Home = () => {
  // use effect to reset scroll
  useEffect(() => {
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
