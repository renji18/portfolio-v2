import { useState } from "react";
import me from "../assets/myself.png";
import hoveredMe from "../assets/hoveredMe.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HtmlTooltip } from "../utils/MyTooltips";
import { company_data } from "../data/companyData";

const getPlacement = (placement: number) => {
  switch (placement) {
    case 0:
      return "left";
    case 1:
      return "top";
    case 2:
      return "right";
    default:
      return "bottom";
  }
};

const Hero = () => {
  const [hovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-evenly lg:justify-around pb-[70px] lg:py-[80px] xl:justify-evenly">
        <div className="mt-16 lg:mt-0 md:w-[500px] lg:w-[550px]">
          <p className="text-[32px] md:text-[40px] lg:text-[48px] text-center lg:text-start pt-6 lg:pt-0 mb-[16px] md:mb-[20px] font-[700] leading-[1.3] text-darkBlack">
            Backend Engineer & Technical Lead
          </p>
          <p className="text-lightBlack pb-1 leading-[1.6] text-center lg:text-start px-5 lg:px-0 lg:w-[80%]">
            Building SaaS Platforms, ERP Systems, FinTech Workflows & Community
            Products
          </p>
          <p className="text-lightBlack pb-1 leading-[1.6] text-center lg:text-start px-5 lg:px-0 lg:w-[80%]">
            4+ years building software systems across automotive ERP, lending,
            community management, healthcare analytics, education, and
            public-sector platforms.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center items-center lg:justify-start mt-10 md:mt-6 md:gap-5 text-[14px] leading-[1.2] font-[700]">
            <button className="bg-darkBlack shadow-darkShadow text-white w-[91%] md:w-fit md:px-[20px] rounded-[4px] py-[14px] myTransition hover:-translate-y-0.5">
              View Resume
            </button>
            <div className="flex items-center justify-center text-darkBlack my-[14px] w-[91%] md:w-fit md:px-[20px] rounded-[4px] py-[9px] gap-0 hover:gap-1 transition-all duration-100 ease-in myTransition hover:-translate-y-0.5">
              <p>View Case Studies</p>
              <span>
                <IoIosArrowRoundForward size={25} />
              </span>
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="h-[270px] mt-10 lg:mt-0 w-[270px] xl:h-[370px] xl:w-[370px] rounded-full p-[4px] flex items-center justify-center border-[5px] border-darkBlack shadow-lighShadow overflow-hidden"
        >
          <div className="relative flex justify-center items-center rounded-full h-full w-full border-[2px] border-darkBlack">
            <img
              className={`h-full w-full absolute shadow-darkShadow ${
                hovering ? "opacity-0" : "opacity-100"
              } transition-all duration-300 ease-linear z-10`}
              src={me}
              alt="Aadarsh Jha"
              loading="eager"
            />
            <img
              className={`h-full w-full absolute shadow-darkShadow z-0`}
              src={hoveredMe}
              alt="Aadarsh Jha"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-y-6 gap-x-8 md:gap-x-14 pb-[70px] px-10 xl:px-60">
        {company_data.map((cd, index) => (
          <HtmlTooltip
            placement={getPlacement(index)}
            title={
              <>
                <p className="text-center">{cd.name}</p>
                <p className="text-center">{cd.role}</p>
                <p className="text-center">{cd.domain}</p>
              </>
            }
            key={index}
          >
            <img
              loading="eager"
              src={cd?.file}
              alt={cd?.name}
              className={`max-h-[40px] lg:max-h-[50px] w-[200px] object-contain grayscale ${
                index !== 0 ? "opacity-[0.6]" : ""
              } hover:opacity-100 hover:grayscale-0 scale-110 transition-all duration-200 ease-linear`}
            />
          </HtmlTooltip>
        ))}
      </div>
    </>
  );
};

export default Hero;
