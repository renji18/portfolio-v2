import { impact } from "../data/impact";

const Impact = () => {
  return (
    <div
      id="impact"
      className="bg-lightWhite py-[100px] lg:py-[100px] flex flex-col items-center font-lora"
    >
      <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3]">
        Impact at a Glance
      </p>
      <p className="text-[16px] text-center md:w-[750px] leading-[1.7] px-[15px]">
        Over the last 4+ years, I've worked across SaaS, ERP, FinTech, community
        management, public safety, education, and research platforms—building
        products, leading teams, and solving complex engineering challenges.
      </p>

      <div className="pt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-14 lg:px-10 gap-4">
        {impact.map((c) => (
          <div
            key={c.title}
            className="bg-darkBlack rounded-3xl p-4 shadow-darkShadow border border-white/5 transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-4xl xl:text-5xl font-bold text-myBlue">
              {c.title}
            </p>

            <p className="mt-2 xl:mt-3 text-lg xl:text-xl font-semibold text-lightWhite">
              {c.subtitle}
            </p>

            <div className="w-16 h-[3px] bg-myBlue rounded-full my-3 xl:my-4" />

            <p className="text-gray-400 leading-relaxed text-sm xl:text-base">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
