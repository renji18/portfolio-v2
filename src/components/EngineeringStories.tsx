import { IoIosArrowRoundForward } from "react-icons/io";
import { stories } from "../data/stories";
import { useNavigate } from "react-router-dom";

const StoryCard = ({ story }: { story: (typeof stories)[0] }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/engineering-story/${story.slug}`)}

      className="

        group

        block

        bg-lightBlack

        border

        border-white/5

        rounded-[24px]

        p-8

        shadow-darkShadow

        hover:shadow-boldShadow

        hover:border-myBlue/20

        hover:-translate-y-1

        transition-all

        duration-300

      "
    >
      <p
        className="

          text-myBlue

          text-xs

          uppercase

          tracking-[0.2em]

          font-semibold

        "
      >
        {story.category}
      </p>

      <h3
        className="

          text-lightWhite

          text-2xl

          font-bold

          mt-4

          leading-snug

        "
      >
        {story.title}
      </h3>

      <div
        className="

          h-[2px]

          w-16

          bg-myBlue

          mt-5

          rounded-full

        "
      />

      <p
        className="

          text-gray-400

          mt-5

          leading-relaxed

        "
      >
        {story.description}
      </p>

      <div
        className="

          flex

          items-center

          justify-between

          mt-8

        "
      >
        <span
          className="

            text-gray-500

            text-sm

          "
        >
          {story.readTime}
        </span>

        <span
          className="

            flex

            items-center

            gap-1

            text-myBlue

            font-medium

            group-hover:gap-2

            transition-all

          "
        >
          Read Story
          <IoIosArrowRoundForward size={24} />
        </span>
      </div>
    </div>
  );
};

const EngineeringStories = () => {
  return (
    <section
      id="engineering-stories"

      className="

bg-lightWhite

        py-32

      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p
            className="

              text-myBlue

              uppercase

              tracking-[0.25em]

              text-sm

              font-semibold

            "
          >
            Engineering Stories
          </p>

          <h2
            className="

              text-4xl

              lg:text-6xl

              font-bold

              mt-4

            "
          >
            Lessons From Production
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
            Behind every system is a collection of tradeoffs, failures,
            redesigns, debugging sessions, and architectural decisions. These
            stories capture some of the most interesting engineering challenges
            I've encountered while building production software.
          </p>
        </div>

        <div
          className="

            grid

            grid-cols-1

            md:grid-cols-2

            gap-8

          "
        >
          {stories.map((story) => (
            <StoryCard
              key={story.title}

              story={story}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringStories;
