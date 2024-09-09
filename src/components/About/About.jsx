import React from "react"

const About = () => {
  return (
    <div
      id="about"
      style={{ fontFamily: ["Lora", "sans-serif"] }}
      className="bg-lightWhite py-[100px] lg:py-[100px] flex flex-col items-center"
    >
      {/* <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] text-center leading-[1.3] text-darkBlack">
        Behind the Code
      </p> */}

      <div className="flex flex-col lg:flex-row lg:gap-20 xl:gap-36 justify-between px-10 md:px-36 lg:px-20 xl:px-0 max-w-[1170px]">
        <p className="text-xl md:text-2xl text-center lg:text-start lg:px-0 lg:text-3xl lg:w-1/2 leading-[1.5] md:leading-[1.5] lg:leading-[1.5] text-lightBlack">
          Every line of code tells a story. Here&apos;s mine—
          <span className="font-[700]">shaped by passion</span> and a commitment
          to excellence.
        </p>
        <div className="text-[13px] md:text-[15px] mt-10 lg:mt-0 space-y-3 lg:w-1/2 text-justify">
          <p>
            Ever since I wrote my first line of code, I&apos;ve been captivated
            by the endless possibilities of technology. Currently pursuing my{" "}
            <span className=" font-semibold text-darkBlack">
              B.Tech in Computer Science
            </span>
            , I&apos;ve transformed a simple curiosity into a passion for
            creating digital solutions that make a difference.
          </p>
          <p>
            What drives me is the challenge of turning complex problems into
            simple, user-friendly solutions. Whether it&apos;s{" "}
            <span className=" font-semibold text-darkBlack">
              designing intuitive interfaces
            </span>{" "}
            or{" "}
            <span className=" font-semibold text-darkBlack">
              optimizing backend systems
            </span>{" "}
            , I focus on quality and user experience in every project.
          </p>
          <p>
            Looking ahead, I&apos;m excited to explore emerging trends like{" "}
            <span className=" font-semibold text-darkBlack">
              AI and machine learning
            </span>
            , and to keep pushing the boundaries of what&apos;s possible in web
            development. Let&apos;s connect and turn your ideas into digital
            reality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
