import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div className="text-darkBlack">
      <Navbar />
      <Hero />

      <Footer />
    </div>
  )
}

export default App
