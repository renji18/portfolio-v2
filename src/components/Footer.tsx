import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const Footer = () => {
  const icons = [
    {
      title: "LinkedIn",
      link: "YOUR_LINKEDIN",
      icon: <SlSocialLinkedin size={22} />,
    },
    {
      title: "GitHub",
      link: "YOUR_GITHUB",
      icon: <FaGithub size={22} />,
    },
    {
      title: "Email",
      link: "mailto:YOUR_EMAIL",
      icon: <HiOutlineMail size={24} />,
    },
    {
      title: "Resume",
      link: "/resume.pdf",
      icon: <CgFileDocument size={22} />,
    },
  ];

  return (
    <footer className="bg-lightBlack border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <p
            className="
              text-myBlue
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
            "
          >
            Let's Connect
          </p>

          <h2
            className="
              text-lightWhite
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              leading-tight
              max-w-[800px]
            "
          >
            Backend Engineer. Product Builder. Technical Lead.
          </h2>

          <p
            className="
              text-lightWhite/70
              max-w-[700px]
              mt-6
              text-lg
              leading-relaxed
            "
          >
            Currently working as a Technical Lead building SaaS products across
            automotive, lending, community management, and enterprise platforms.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="mailto:YOUR_EMAIL"
              className="
                bg-myBlue
                text-darkBlack
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:-translate-y-1
                transition-all
              "
            >
              Email Me
            </a>

            <a
              href="YOUR_LINKEDIN"
              target="_blank"
              rel="noreferrer"
              className="
                border
                border-white/10
                px-6
                py-3
                rounded-xl
                text-lightWhite
                font-semibold
                hover:border-myBlue
                transition-all
              "
            >
              LinkedIn
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            {icons.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                title={item.title}
                className="
                  text-lightWhite/70
                  hover:text-myBlue
                  hover:-translate-y-1
                  transition-all
                "
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div
            className="
              w-full
              h-px
              bg-white/10
              my-12
            "
          />

          <p className="text-lightWhite/40 text-sm">
            © {new Date().getFullYear()} Aadarsh Jha · Backend Engineer ·
            Technical Lead
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
