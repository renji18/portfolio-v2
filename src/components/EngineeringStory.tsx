import { useLocation } from "react-router-dom";
import { story } from "../data/stories";
import { useEffect } from "react";
import resetScroll from "../utils/resetScroll";

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="bg-lightBlack rounded-[24px] p-6 lg:p-8 border border-white/5 shadow-darkShadow hover:shadow-boldShadow hover:border-myBlue/20 hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl lg:text-2xl font-bold text-lightWhite mb-4 lg:mb-6">
        {title}
      </h2>

      {children}
    </section>
  );
};

const BulletList = ({ items }: { items: string[] }) => {
  return (
    <ul className="space-y-3 lg:space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-gray-400 leading-relaxed items-center text-sm lg:text-base">
          <span className="text-myBlue">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const EngineeringStory = () => {
  const location = useLocation();

  const s = story.find((c) => c.slug === location.pathname.split("/")[2]);

  // use effect to reset scroll
  useEffect(() => {
    resetScroll();
  }, [s]);

  if (!s) return null;

  return (
    <div className="bg-darkBlack min-h-screen text-lightWhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {/* Hero */}
        <section className="pt-20 lg:pt-32 pb-16 lg:pb-24">
          <p className="text-myBlue uppercase tracking-[0.2em] text-xs lg:text-sm font-semibold">
            {s.category}
          </p>

          <h1 className="text-4xl lg:text-7xl font-bold mt-4 leading-tight">
            {s.title}
          </h1>

          <p className="text-gray-400 text-base lg:text-xl mt-6 lg:mt-8 max-w-4xl leading-relaxed">
            {s.tagline}
          </p>

          <div className="mt-6 lg:mt-8 text-sm lg:text-base inline-flex px-4 py-2 rounded-full border border-myBlue/20 text-myBlue">
            {s.readTime}
          </div>
        </section>

        {/* Problem */}
        <div className="space-y-8">
          <SectionCard title="The Problem">
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              {s.problem}
            </p>
          </SectionCard>

          <SectionCard title="Why It Was Difficult">
            <BulletList items={s.whyHard} />
          </SectionCard>

          <SectionCard title="Solution & Architecture">
            <BulletList items={s.solution} />
          </SectionCard>

          <SectionCard title="Results">
            <BulletList items={s.result} />
          </SectionCard>

          <SectionCard title="Lessons Learned">
            <BulletList items={s.lessons} />
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default EngineeringStory;
