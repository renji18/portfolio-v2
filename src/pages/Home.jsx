import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"

const Home = ({ data }) => {
  return (
    <div className="text-darkBlack">
      <Navbar />
      <Hero logos={data && data?.company_logos} />

      <Footer />
    </div>
  )
}

export default Home
