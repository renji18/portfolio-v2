import React from "react"
import me from "../../assets/myself.png"
import { IoIosArrowRoundForward } from "react-icons/io"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly lg:justify-around lg:py-[70px] xl:justify-evenly">
      <div className="mt-16 lg:mt-0 md:w-[500px] lg:w-[550px]">
        <p className="text-[32px] md:text-[40px] lg:text-[48px] text-center lg:text-start pt-6 lg:pt-0 mb-[16px] md:mb-[20px] font-[700] leading-[1.3] text-darkBlack">
          Innovating with code, delivering success
        </p>
        <p className="text-lightBlack pb-1 leading-[1.6] text-center lg:text-start px-5 lg:px-0 lg:w-[80%]">
          Hello, my name is Aadarsh, a passionate developer committed to
          crafting top-notch projects.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center items-center lg:justify-start mt-10 md:mt-6 md:gap-5 text-[14px] leading-[1.2] font-[700]">
          <button className="bg-darkBlack shadow-darkShadow text-white w-[91%] md:w-fit md:px-[20px] rounded-[4px] py-[14px] myTransition hover:-translate-y-0.5">
            Arrange a Call
          </button>
          <button className="flex items-center justify-center text-darkBlack my-[14px] w-[91%] md:w-fit md:px-[20px] rounded-[4px] py-[9px] gap-0 hover:gap-1 transition-all duration-75 ease-in myTransition hover:-translate-y-0.5">
            <span>Send an Email</span>
            <span>
              <IoIosArrowRoundForward size={25} />
            </span>
          </button>
        </div>
      </div>
      <div className="h-[300px] mt-10 lg:mt-0 w-[300px] xl:h-[400px] xl:w-[400px] rounded-full p-[4px] flex items-center justify-center border-[5px] border-darkBlack shadow-lighShadow">
        <img
          className="h-full w-full shadow-darkShadow rounded-full border-[2px] border-darkBlack"
          src={me}
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
