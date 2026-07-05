import { experiences } from "../data/experience";

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof experiences)[0];
}) => {
  return (
    <div
      className="

        relative

        bg-lightBlack

        rounded-[24px]

        border border-white/5

        p-8

        shadow-darkShadow

        hover:shadow-boldShadow

        hover:border-myBlue/20

        transition-all

        duration-300

      "
    >
      <p className="text-myBlue text-sm font-semibold tracking-wider uppercase">
        {experience.period}
      </p>

      <h3 className="text-lightWhite text-2xl font-bold mt-3">
        {experience.role}
      </h3>

      <p className="text-gray-400 mt-1 font-medium">{experience.company}</p>

      <div className="w-16 h-[3px] bg-myBlue rounded-full mt-5" />

      <p className="text-gray-400 leading-relaxed mt-5">
        {experience.highlight}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {experience.achievements.map((achievement) => (
          <span
            key={achievement}

            className="

              px-3

              py-2

              rounded-full

              bg-darkBlack

              border

              border-myBlue/20

              text-myBlue

              text-sm

            "
          >
            {achievement}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"

      className="

        bg-lightWhite

        py-32

      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-myBlue uppercase tracking-[0.25em] text-sm font-semibold">
            Experience
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold mt-4">
            Career Journey
          </h2>

          <p
            className="

              max-w-3xl

              mx-auto

              mt-6

              text-gray-400

              text-lg

              leading-relaxed

            "
          >
            From student developer building side projects in college to leading
            engineering efforts across multiple SaaS products, enterprise
            platforms, and public-sector systems.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}

              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
