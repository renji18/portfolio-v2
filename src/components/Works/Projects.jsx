import React from "react"
import { IoIosArrowRoundForward } from "react-icons/io"

const Projects = ({ projects }) => {
  return (
    <div className="bg-lightWhite py-[50px] lg:py-[80px] lg:pb-[150px] flex flex-col items-center">
      <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3] text-darkBlack">
        Featured Work
      </p>
      <p className="text-[16px] text-center md:w-[480px] leading-[1.7] text-lightBlack px-[15px]">
        Turning ideas into digital reality since 2020, delivering{" "}
        <span className="font-[700]">result-driven</span> success through
        innovative solutions.
      </p>
      <div className="flex flex-col gap-[150px] md:gap-[200px] pt-[150px] px-[15px] lg:w-full lg:items-center">
        {projects &&
          projects?.map((p, indx) => (
            <div
              key={indx}
              className="md:max-w-[550px] lg:max-w-[950px] xl:max-w-[1250px] lg:flex lg:gap-4 lg:w-full lg:justify-between lg:items-center"
            >
              <div className="px-[10px] lg:px-0 lg:max-w-[500px] xl:max-w-[700px] flex justify-center items-center">
                <img
                  src={p?.image}
                  alt="cover_image"
                  className="object-contain rounded-[10px] shadow-boldShadow"
                />
              </div>
              <div className="lg:max-w-[400px]">
                <p className="mt-[40px] lg:mt-0 mb-[15px] lg:mb-[10px] xl:mb-[15px] text-darkBlack text-[20px] md:text-[23.2px] lg:text-[26px] xl:text-[29px] font-[700] leading-[1.3] lg:leading-[1.2] xl:leading-[1.3]">
                  {p?.name}
                </p>
                <div className="leading-[1.6] lg:leading-[1.5] xl:leading-[1.6] text-[14px] xl:text-[15px] text-lightBlack space-y-2 lg:space-y-1">
                  {p?.desc?.split(",")?.map((pd, indx) => (
                    <p key={indx}>{pd}</p>
                  ))}
                </div>
                <div className="flex gap-4 mt-10 md:mt-4 lg:mt-6 md:gap-5 lg:gap-8">
                  {p?.skills?.split(",")?.map((ps, indx) => (
                    <i
                      className={`${ps} scale-150 lg:scale-[2]`}
                      title={ps?.split("-")[1]}
                      key={indx}
                    />
                  ))}
                </div>
                <div className="flex flex-col md:flex-row md:justify-center items-center lg:justify-start mt-10 md:mt-6 md:gap-5 lg:mt-4 text-[14px] leading-[1.2] font-[700]">
                  <button className="bg-darkBlack shadow-darkShadow text-white w-[90%] md:w-fit md:px-[20px] rounded-[4px] py-[14px] myTransition hover:-translate-y-0.5">
                    Live Demo
                  </button>
                  <button className="flex items-center justify-center text-darkBlack my-[14px] w-[90%] md:w-fit md:px-[20px] lg:px-[10px] rounded-[4px] py-[9px] gap-0 hover:gap-1 transition-all duration-100 ease-in myTransition hover:-translate-y-0.5">
                    <span>Visit Source Code</span>
                    <span>
                      <IoIosArrowRoundForward size={25} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Projects
