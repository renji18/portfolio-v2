import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const Footer = () => {
  const icons = [
    {
      // link: socials?.linkedin,
      title: "LinkedIn",
      icon: <SlSocialLinkedin size={23} />,
    },
    {
      // link: socials?.github,
      title: "Github",
      icon: <FaGithub size={23} />,
    },
    {
      // link: `mailto:${socials?.email}`,
      title: "Email",
      icon: <HiOutlineMail size={26} />,
    },
    {
      // link: socials?.resume,
      title: "Resume",
      icon: <CgFileDocument size={24} />,
    },
  ];

  return (
    <div className="xl:flex justify-center bg-lightBlack text-lightWhite border-t-[0.5px] border-t-lightWhite">
      <div className="xl:w-[1170px] py-[40px] lg:py-[30px] px-[15px] flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="Aadarsh Jha"
            className="h-7 w-7 lg:h-9 lg:w-9"
          />
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
              // href={i?.link || "#"}
              title={i?.title}
              className="myTransition hover:-translate-y-0.5"
            >
              {i?.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
