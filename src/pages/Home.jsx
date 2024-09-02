import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import Projects from "../components/Works/Projects"
import Tech from "../components/Tech/Tech"
import About from "../components/About/About"

const Home = ({ data }) => {
  return (
    <div className="text-darkBlack">
      <Navbar />
      <Hero
        logos={data && data?.company_logos}
        email={data && data?.socials?.email}
      />
      <About />
      <Tech tech={data && data?.tech} />
      <Projects projects={data && data?.projects} />
      <Footer socials={data && data?.socials} />
    </div>
  )
}

export default Home
