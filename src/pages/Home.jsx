import React, { useEffect } from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import Projects from "../components/Works/Projects"
import Tech from "../components/Tech/Tech"
import About from "../components/About/About"
import { useLocation } from "react-router-dom"
import Blogs from "../components/Blogs/Blogs"

const Home = ({ data }) => {
  const location = useLocation()

  useEffect(() => {
    const family = location.pathname.split("/")[1]

    if (!family) return

    if (family === "lora") document.body.style.fontFamily = "Lora, sans-serif"
    else if (family === "montserrat")
      document.body.style.fontFamily = "Montserrat, sans-serif"
    else if (family === "playfair-display")
      document.body.style.fontFamily = "Playfair Display, sans-serif"
    else document.body.style.fontFamily = "Inter, sans-serif"

    return () => {
      document.body.style.fontFamily = ""
    }
  }, [location])

  return (
    <div id="home" className="text-darkBlack">
      <Navbar />
      <Hero
        logos={data && data?.company_logos}
        email={data && data?.socials?.email}
      />
      <About />
      <Tech tech={data && data?.tech} />
      <Projects projects={data && data?.projects} />
      <Blogs blogs={data && data?.blogs} />
      <Footer socials={data && data?.socials} />
    </div>
  )
}

export default Home
