import { useLocation } from "react-router-dom";
import { story } from "../data/stories";

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className="
        bg-lightBlack
        border border-white/5
        rounded-[24px]
        p-8
        shadow-darkShadow
      "
    >
      <h2 className="text-2xl font-bold text-lightWhite mb-6">{title}</h2>

      {children}
    </section>
  );
};

const BulletList = ({ items }: { items: string[] }) => {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="
            flex
            gap-4
            text-gray-400
            leading-relaxed
          "
        >
          <span className="text-myBlue mt-1">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const EngineeringStory = () => {
  const location = useLocation();

  const s = story.find(
    (c) => c.slug === location.pathname.split("/")[2],
  );

  if (!s) {
    return (
      <div className="bg-darkBlack min-h-screen flex justify-center items-center text-lightWhite">
        Story not found
      </div>
    );
  }

  return (
    <div className="bg-darkBlack min-h-screen text-lightWhite">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        {/* Hero */}

        <section className="mb-20">
          <p
            className="
              text-myBlue
              uppercase
              tracking-[0.2em]
              text-sm
              font-semibold
            "
          >
            {s.category}
          </p>

          <h1
            className="
              text-4xl
              lg:text-6xl
              font-bold
              mt-4
              leading-tight
            "
          >
            {s.title}
          </h1>

          <p
            className="
              text-gray-400
              text-lg
              mt-6
              max-w-4xl
              leading-relaxed
            "
          >
            {s.tagline}
          </p>

          <div
            className="
              mt-8
              inline-flex
              px-4
              py-2
              rounded-full
              border
              border-myBlue/20
              text-myBlue
            "
          >
            {s.readTime}
          </div>
        </section>

        {/* Problem */}

        <div className="space-y-8">
          <SectionCard title="The Problem">
            <p className="text-gray-400 leading-relaxed">
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
