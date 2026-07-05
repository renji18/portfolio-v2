import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleNav = () => {
    const next = !navOpen;
    setNavOpen(next);

    if (next) {
      setTimeout(() => setIsTransitioning(true), 150);
    } else {
      setIsTransitioning(false);
    }
  };

  const navLinks = [
    {
      title: "Case Studies",
      onClick: () => {
        if (location.pathname.includes("case-study")) {
          navigate("/");
        }

        handleNavigate("case-study");
        setNavOpen(false);
      },
    },
    {
      title: "Engineering Stories",
      onClick: () => {
        if (location.pathname.includes("case-study")) {
          navigate("/");
        }
        handleNavigate("engineering-story");
        setNavOpen(false);
      },
    },
    {
      title: "View Resume",
      onClick: () => {
        setNavOpen(false);
      },
    },
  ];

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const disableScroll = (e: Event) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    if (navOpen) {
      // window.addEventListener("scroll", disableScroll, { passive: false });
      window.addEventListener("wheel", disableScroll, { passive: false });
      window.addEventListener("touchmove", disableScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    };
  }, [navOpen]);

  return (
    <div
      className={`${
        navOpen
          ? "fixed top-0 overflow-hidden left-0 bottom-0 right-0"
          : "opacity-95 sticky shadow-lighShadow"
      } top-0 bg-white z-[5050] xl:flex justify-center py-[10px] px-[15px] transition-all duration-150 ease-linear`}
    >
      <div className="xl:w-[1170px]">
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img
              src="/assets/logo.png"
              alt="Aadarsh Jha"
              className="h-7 w-7 lg:h-9 lg:w-9"
            />
            <p className="text-lightBlack tracking-widest font-medium text-[15px]">
              AADARSH JHA
            </p>
          </div>
          <div
            onClick={toggleNav}
            className="lg:hidden p-[10px] rounded-full shadow-darkShadow"
          >
            {navOpen ? (
              <div>
                <IoClose size={22} />
              </div>
            ) : (
              <div>
                <HiOutlineMenu size={22} />
              </div>
            )}
          </div>
          <div className="hidden lg:flex items-center font-[700] text-[14px] gap-12">
            {navLinks?.map((nl) => (
              <div key={nl?.title}>
                <p
                  className="myTransition hover:-translate-y-0.5 cursor-pointer"
                  onClick={nl.onClick}
                >
                  {nl?.title}
                </p>
              </div>
            ))}

            <button
              // onClick={openCalendlyPopup}
              className="px-[20px] py-[10px] rounded-[4px] border-2 border-darkBlack shadow-darkShadow max-w-fit myTransition hover:-translate-y-0.5"
            >
              Contact
            </button>
          </div>
        </div>
        {navOpen && (
          <div
            className={`lg:hidden font-[700] text-[14px] mt-12 flex flex-col items-center gap-8 opacity-0 transition-opacity duration-100 ease-in ${
              isTransitioning ? "opacity-100" : ""
            }`}
          >
            {navLinks?.map((nl) => (
              <div key={nl.title}>
                <p
                  className="myTransition hover:-translate-y-0.5"
                  onClick={nl.onClick}
                >
                  {nl.title}
                </p>
              </div>
            ))}
            <button className="px-[20px] py-[12px] rounded-[4px] border-2 border-darkBlack shadow-darkShadow max-w-fit myTransition hover:-translate-y-0.5">
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
