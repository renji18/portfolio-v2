import React, { useState } from "react"
import { IoIosArrowRoundForward } from "react-icons/io"

const Projects = ({ projects }) => {
  const [showMultipleLinks, setShowMultipleLinks] = useState(false)

  return (
    <div
      id="works"
      className="bg-lightWhite py-[100px] lg:py-[80px] lg:pb-[150px] flex flex-col items-center"
    >
      <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3] text-darkBlack">
        Featured Work
      </p>
      <p className="text-[16px] text-center md:w-[480px] leading-[1.7] text-lightBlack px-[15px]">
        Turning ideas into digital reality since 2021, delivering{" "}
        <span className="font-[700]">result-driven</span> success through
        innovative solutions.
      </p>
      <div className="flex flex-col gap-[150px] md:gap-[250px] pt-[150px] px-[15px] lg:w-full lg:items-center">
        {projects &&
          projects?.map((p, indx) => (
            <div
              key={indx}
              className="md:max-w-[550px] lg:max-w-[950px] xl:max-w-[1250px] lg:flex lg:gap-4 lg:w-full lg:justify-evenly lg:items-center"
            >
              <div className="px-[10px] lg:px-0 lg:max-w-[500px] xl:max-w-[550px] flex justify-center items-center">
                <img
                  src={p?.image}
                  alt="cover_image"
                  className="hidden xl:block object-contain rounded-[10px] shadow-boldShadow"
                />
                <img
                  src={p?.imageSmall}
                  alt="cover_image"
                  className="xl:hidden object-contain rounded-[10px] shadow-boldShadow"
                />
              </div>
              <div className="lg:max-w-[400px]">
                <p className="text-center lg:text-start mt-[40px] lg:mt-0 mb-[15px] lg:mb-[10px] xl:mb-[15px] text-darkBlack text-[20px] md:text-[23.2px] lg:text-[26px] xl:text-[29px] font-[700] leading-[1.3] lg:leading-[1.2] xl:leading-[1.3]">
                  {p?.name}
                </p>
                <div className="text-center lg:text-start leading-[1.6] lg:leading-[1.5] xl:leading-[1.6] text-[14px] xl:text-[15px] text-lightBlack space-y-2 lg:space-y-1">
                  {p?.desc?.split("#")?.map((pd, indx) => (
                    <p key={indx}>{pd}</p>
                  ))}
                </div>
                <div className="flex mt-4 lg:mt-6 gap-6 lg:gap-8 justify-center lg:justify-start">
                  {p?.skills?.split(",")?.map((ps, indx) => (
                    <i
                      className={`${ps} scale-150 lg:scale-[1.8]`}
                      title={ps?.split("-")[1]}
                      key={indx}
                    />
                  ))}
                </div>
                <div className="flex flex-col md:flex-row md:justify-center items-center lg:justify-start mt-5 lg:mt-7 md:gap-5 lg:gap-7 xl:gap-9 text-[14px] leading-[1.2] font-[700]">
                  <button className="bg-darkBlack shadow-darkShadow text-white w-[90%] md:w-fit rounded-[4px] myTransition hover:-translate-y-0.5">
                    <a
                      href={p?.link}
                      target="_blank"
                      rel="noreferrer"
                      className="block py-[14px] md:px-[20px] "
                    >
                      Live Demo
                    </a>
                  </button>
                  <div>
                    {p?.repo?.split(",")?.length > 1 ? (
                      <>
                        {!showMultipleLinks ? (
                          <button
                            key={indx}
                            onClick={() =>
                              setShowMultipleLinks(!showMultipleLinks)
                            }
                            className={`flex items-center my-[10px] lg:my-0 justify-center text-darkBlack w-full md:w-fit md:px-[20px] lg:px-[10px] rounded-[4px] py-[9px] gap-0 hover:gap-1 transition-all duration-100 ease-in myTransition hover:-translate-y-0.5`}
                          >
                            <span>Visit Source Codes</span>
                            <span>
                              <IoIosArrowRoundForward size={25} />
                            </span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            {p?.repo?.split(",")?.map((pr, indx) => (
                              <a
                                key={indx}
                                href={pr}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center my-[10px] lg:my-0 justify-center text-darkBlack w-[90%] md:w-fit md:px-[20px] lg:px-[10px] rounded-[4px] py-[9px] gap-0 hover:gap-1 transition-all duration-100 ease-in myTransition hover:-translate-y-0.5"
                              >
                                <span>
                                  {indx === 0 ? "Front End" : "Back End"}
                                </span>
                                <span>
                                  <IoIosArrowRoundForward size={25} />
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        className={`text-darkBlack w-full md:w-fit md:px-[20px] lg:px-[10px] rounded-[4px] py-[9px]`}
                      >
                        <a
                          href={p?.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-0 hover:gap-1 transition-all duration-100 ease-in myTransition hover:-translate-y-0.5"
                        >
                          <span>Visit Source Code</span>
                          <span>
                            <IoIosArrowRoundForward size={25} />
                          </span>
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Projects
