import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState("Work")

  const [isScrolled, setIsScrolled] = useState(false)

  const tabs = [
    { title: "Work", route: "/" },
    { title: "About", route: "/about" },
    { title: "Play", route: "/play" },
    { title: "Notes", route: "/notes" },
    { title: "Contact", route: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const screenHeight = window.innerHeight
      const threshold = screenHeight * 0.2

      if (scrollPosition > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-5 w-screen flex justify-center">
      <div
        className="h-[3.5rem] px-3 rounded-full transition-all duration-150 ease-linear flex items-center justify-evenly"
        style={{
          background: isScrolled && "hsla(45, 17%, 95%, .8)",
          backdropFilter: isScrolled && "blur(20px) saturate(1.7)",
        }}
      >
        {tabs?.map((t) => (
          <div
            key={t?.title}
            onClick={() => {
              setTab(t?.title)
              navigate(t?.route)
            }}
            className={`${
              tab === t?.title ? "bg-[hsla(0,0%,100%,.5)]" : ""
            } text-lightGreenish cursor-pointer rounded-full px-5 py-1 text-lg font-medium`}
          >
            <p className="w-[62px] text-center">{t?.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
