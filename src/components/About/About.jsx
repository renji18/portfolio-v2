import React from "react"

const About = () => {
  return (
    <div
      id="about"
      className="bg-lightWhite py-[100px] lg:py-[80px] lg:pb-[150px] flex flex-col items-center"
    >
      <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3] text-darkBlack">
        Behind the Code
      </p>
      <p className="text-[16px] text-center md:w-[480px] leading-[1.7] text-lightBlack px-[15px]">
        Every line of code tells a story. Here&apos;s mine—
        <span className="font-[700]">shaped by passion</span> and a commitment
        to excellence.
      </p>
      <div className="flex flex-col gap-[150px] md:gap-[250px] pt-[150px] px-[15px] lg:w-full lg:items-center"></div>
    </div>
  )
}

export default About
