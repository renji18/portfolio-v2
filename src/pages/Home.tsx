import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Tech from "../components/TechStack";
import CaseStudies from "../components/CaseStudies";
import { useEffect } from "react";

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
      {/*Experience*/}
      {/*<Tech />*/}
      {/*Engineering Stories*/}
    </div>
  );
};

export default Home;
