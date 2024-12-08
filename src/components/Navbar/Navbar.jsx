import React, { useEffect, useState } from "react"
import { HiOutlineMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (navOpen) {
      setTimeout(() => setIsTransitioning(true), 150)
    } else {
      setIsTransitioning(false)
    }
  }, [navOpen])

  const navLinks = [
    { title: "About", link: "about" },
    { title: "Works", link: "works" },
    { title: "Blog", link: "blogs" },
  ]

  const handleNavigate = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const disableScroll = (e) => {
      e.preventDefault()
    }

    if (navOpen) {
      window.addEventListener("scroll", disableScroll, { passive: false })
      window.addEventListener("wheel", disableScroll, { passive: false })
      window.addEventListener("touchmove", disableScroll, { passive: false })
    } else {
      window.removeEventListener("scroll", disableScroll, { passive: false })
      window.removeEventListener("wheel", disableScroll, { passive: false })
      window.removeEventListener("touchmove", disableScroll, { passive: false })
    }

    return () => {
      window.removeEventListener("scroll", disableScroll, { passive: false })
      window.removeEventListener("wheel", disableScroll, { passive: false })
      window.removeEventListener("touchmove", disableScroll, { passive: false })
    }
  }, [navOpen])

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
              const element = document.getElementById("home")
              element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <img src={logo} alt="Aadarsh Jha" className="h-7 w-7 lg:h-9 lg:w-9" />
            {/* <p className="text-lightBlack tracking-widest font-medium text-[20px] font-serif">A</p> */}
            <p className="text-lightBlack tracking-widest font-medium text-[15px]">
              AADARSH JHA
            </p>
          </div>
          <div
            onClick={() => setNavOpen(!navOpen)}
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
              <div key={nl?.link}>
                <p
                  className="myTransition hover:-translate-y-0.5 cursor-pointer"
                  onClick={() => handleNavigate(nl?.link)}
                >
                  {nl?.title}
                </p>
              </div>
            ))}
            <button className="px-[20px] py-[10px] rounded-[4px] border-2 border-darkBlack shadow-darkShadow max-w-fit myTransition hover:-translate-y-0.5">
              Arrange a Call
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
              <div key={nl?.link}>
                <p
                  className="myTransition hover:-translate-y-0.5"
                  onClick={() => {
                    handleNavigate(nl?.link)
                    setNavOpen(false)
                  }}
                >
                  {nl?.title}
                </p>
              </div>
            ))}
            <button className="px-[20px] py-[12px] rounded-[4px] border-2 border-darkBlack shadow-darkShadow max-w-fit myTransition hover:-translate-y-0.5">
              Arrange a Call
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
