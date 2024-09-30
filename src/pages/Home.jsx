import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import Projects from "../components/Works/Projects"
import Tech from "../components/Tech/Tech"
import About from "../components/About/About"
import Blogs from "../components/Blogs/Blogs"

const Home = ({ data }) => {

  return (
    <div id="home" className="text-darkBlack">
      <Navbar />
      <Hero
        company_data={data && data?.company_data}
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
