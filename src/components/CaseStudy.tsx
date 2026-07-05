import { useLocation } from "react-router-dom";
import { caseStudy } from "../data/caseStudy";
import { useEffect } from "react";
import resetScroll from "../utils/resetScroll";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-lightBlack rounded-[24px] p-6 lg:p-8 border border-white/5 shadow-darkShadow hover:shadow-boldShadow hover:border-myBlue/20 hover:-translate-y-1 transition-all duration-300">
      {children}
    </div>
  );
};

const CaseStudy = () => {
  const location = useLocation();

  const project = caseStudy.find(
    (c) => c.slug === location.pathname.split("/")[2],
  );

  // use effect to reset scroll
  useEffect(() => {
    resetScroll();
  }, [project]);

  if (!project) return null;

  return (
    <div className="bg-darkBlack min-h-screen text-lightWhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HERO */}
        <section className="pt-20 lg:pt-32 pb-16 lg:pb-24">
          <p className="text-myBlue uppercase tracking-[0.2em] text-xs lg:text-sm font-semibold">
            {project.category}
          </p>

          <h1 className="text-4xl lg:text-7xl font-bold mt-4 leading-tight">
            {project.name}
          </h1>

          <p className="text-gray-400 text-base lg:text-xl mt-6 lg:mt-8 max-w-4xl leading-relaxed">
            {project.tagline}
          </p>
        </section>

        {/* System Architecture */}
        <section className="pb-16 lg:pb-24">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
            System Architecture
          </h2>

          <p className="text-gray-400 mb-6 lg:mb-8 max-w-4xl leading-relaxed text-sm lg:text-base">
            High-level architecture showing how customer management, repair
            workflows, inventory operations, invoicing, payments, reporting, and
            external integrations work together within a unified ERP platform.
          </p>

          <div className="overflow-hidden rounded-[24px] border border-white/5 shadow-boldShadow">
            <img
              src={project.image}
              alt={`${project.name} Architecture`}
              className="w-full"
            />
          </div>
        </section>

        {/* METRICS */}
        <section className="pb-16 lg:pb-24">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {project.metrics.map((m) => (
              <div className="bg-lightBlack rounded-[24px] p-6 lg:p-8 border border-white/5 shadow-darkShadow text-center">
                <p className="text-myBlue text-4xl lg:text-6xl font-bold">
                  {m.value}
                </p>

                <div className="w-14 h-[3px] bg-myBlue mx-auto mt-3 lg:mt-4 rounded-full" />

                <p className="text-lightWhite lg:text-lg mt-3 lg:mt-4 font-semibold">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="pb-16 lg:pb-24">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
            Overview
          </h2>

          <p className="text-gray-400 lg:text-lg leading-relaxed max-w-5xl">
            {project.overview}
          </p>
        </section>

        {/* CHALLENGE */}
        <section className="pb-16 lg:pb-24">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
            The Challenge
          </h2>

          <Card>
            <p className="text-gray-400 lg:text-lg leading-relaxed">
              {project.challenge}
            </p>
          </Card>
        </section>

        {/* ARCHITECTURE */}
        <section className="pb-16 lg:pb-24">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
            Architecture & Key Decisions
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {project.architectureDecisions.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {item.title}
                </h3>

                <div className="w-16 h-[3px] bg-myBlue rounded-full my-3 lg:my-4" />

                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* ENGINEERING CHALLENGES */}
        <section className="pb-16 lg:pb-24">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
            Engineering Challenges
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {project.engineeringChallenges.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {item.title}
                </h3>

                <div className="w-16 h-[3px] bg-myBlue rounded-full my-3 lg:my-4" />

                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* RESULTS */}
        <section className="pb-16 lg:pb-24">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
            Results & Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.impact.map((item, index) => (
              <Card key={index}>
                <div className="flex gap-4">
                  <span className="text-myBlue text-xl">✓</span>

                  <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                    {item}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* LESSONS */}
        <section className="pb-16 lg:pb-24">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
            Lessons Learned
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.lessonsLearned.map((item, index) => (
              <Card key={index}>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  {item}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="pb-16 lg:pb-32">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {project.techStack.map((tech) => (
              <span className="px-4 py-2 rounded-full bg-lightBlack border border-myBlue/20 text-myBlue text-xs lg:text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
