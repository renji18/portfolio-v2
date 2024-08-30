import React from "react"

const Tech = ({ tech }) => {
  return (
    <div
      id="tech"
      className="bg-lightBlack text-white py-[100px] lg:py-[70px] lg:pb-[120px] flex flex-col items-center"
    >
      <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3]">
        Backbone of Innovation
      </p>
      <p className="text-[16px] text-center md:w-[480px] leading-[1.7] px-[15px]">
        Utilizing <span className="font-[700]">state-of-the-art tools</span> to
        transform complex ideas into functional and scalable solutions.
      </p>
      <div className="pt-[80px] px-[15px] columns-1 lg:columns-2 xl:columns-3 gap-4">
        {tech &&
          tech?.map((t, indx_a) => (
            <div
              key={indx_a}
              className="mb-4 break-inside-avoid max-w-[300px] bg-lightWhite text-darkBlack shadow-boldShadow rounded-xl p-8"
            >
              <p className="text-center text-[22px] leading-tight font-medium tracking-wide">
                {t?.type}
              </p>
              <div className="flex flex-wrap mt-5 gap-6 lg:gap-6 items-center justify-center content-evenly">
                {t?.stack?.map((ts, indx_b) => (
                  <div
                    key={indx_b}
                    className="pt-6 px-6 pb-5 bg-white shadow-darkShadow rounded-sm flex"
                  >
                    <i
                      className={`${ts?.icon} scale-150 lg:scale-[2.5]`}
                      title={ts?.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Tech
