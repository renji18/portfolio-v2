import React from "react"
import { IoIosArrowRoundForward } from "react-icons/io"
import { HiOutlineMail } from "react-icons/hi"
// import { FaXTwitter } from "react-icons/fa6"
import { SlSocialLinkedin } from "react-icons/sl"
import { FaGithub } from "react-icons/fa"
import { CgFileDocument } from "react-icons/cg"
import logo from "../../assets/logo.png"

const Footer = ({ socials }) => {
  const icons = [
    {
      link: socials?.linkedin,
      title: "LinkedIn",
      icon: <SlSocialLinkedin size={23} />,
    },
    { link: socials?.github, title: "Github", icon: <FaGithub size={23} /> },
    {
      link: `mailto:${socials?.email}`,
      title: "Email",
      icon: <HiOutlineMail size={26} />,
    },
    {
      link: socials?.resume,
      title: "Resume",
      icon: <CgFileDocument size={24} />,
    },
  ]

  return (
    <div className="bg-lightBlack text-white">
      <div className="md:flex justify-center border-b-[0.5px] border-b-lightWhite">
        <div className="md:w-[520px] pb-[70px] pt-[50px] px-[15px]">
          <p className="text-[24px] md:text-[27.2px] lg:text-[32px] my-[12px] font-[700] leading-[1.3] text-center">
            Transforming ideas into digital excellence
          </p>
          <p className="leading-[1.6] mb-[50px] text-center">
            Arrange a free session with me to explore how we can take your
            project to new heights.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center items-center mt-6 md:gap-5 text-[14px] leading-[1.2] font-[700]">
            <button className="bg-lightWhite text-lightBlack w-full md:w-fit md:px-[20px] rounded-[4px] py-[14px] myTransition hover:-translate-y-0.5">
              Arrange a Call
            </button>
            <button className="flex items-center justify-center text-lightWhite my-[14px] w-full md:w-fit md:px-[20px] rounded-[4px] py-[9px] gap-0 hover:gap-1 transition-all duration-100 ease-in myTransition hover:-translate-y-0.5">
              <a
                target="_blank"
                rel="noreferrer"
                href={`mailto:${socials?.email}`}
              >
                Send an Email
              </a>
              <span>
                <IoIosArrowRoundForward size={25} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="xl:flex justify-center text-lightWhite">
        <div className="xl:w-[1170px] py-[40px] lg:py-[30px] px-[15px] flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Aadarsh Jha" className="h-7 w-7 lg:h-9 lg:w-9" />
            <p className="md:translate-y-3 leading-[1.6] mb-[20px]">
              Developed by Aadarsh Jha
            </p>
          </div>
          <div className="flex items-center gap-4">
            {icons?.map((i, idx) => (
              <a
                key={idx}
                target="_blank"
                rel="noreferrer"
                href={i?.link || "#"}
                title={i?.title}
                className="myTransition hover:-translate-y-0.5"
              >
                {i?.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
