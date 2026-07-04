import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { caseStudies } from "../data/caseStudy";

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <div
      id="case-study"
      className="bg-lightBlack text-white py-[100px] lg:py-[80px] lg:pb-[150px] flex flex-col items-center"
    >
      <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3]">
        Featured Case Studies
      </p>
      <p className="text-[16px] text-center md:w-[480px] leading-[1.7] px-[15px]">
        A closer look at the systems, architectures, and engineering decisions
        behind products I've designed and built across SaaS, ERP, FinTech, and
        public-sector domains.
      </p>

      <div className="pt-[80px] grid grid-cols-2 px-20 gap-6">
        {caseStudies?.map((c) => (
          <div
            key={c.title}
            className="rounded-3xl bg-lightWhite text-darkBlack p-6 border border-white/10 hover:-translate-y-1 transition-all flex flex-col justify-between gap-4"
          >
            <div>
              <p className="text-myBlue text-sm font-semibold">{c.category}</p>

              <h3 className="text-3xl font-bold mt-2">{c.title}</h3>
            </div>

            <div>
              <p className="text-gray-500 leading-relaxed max-h-full">
                {c.description}
              </p>
              <div className="flex gap-3 mt-6">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 rounded-full bg-darkBlack text-myBlue text-sm"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="flex items-center gap-2 text-myBlue font-semibold"
              onClick={() => navigate(`/case-study/${c.slug}`)}
            >
              View Case Study
              <IoIosArrowRoundForward size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
