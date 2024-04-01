import React, { useEffect, useState } from "react"
import Hero from "./components/Hero/Hero"
import Loader from "./components/Loader/Loader"

const App = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (showLoader) return
    document.querySelector("#loader").classList.remove("opacity-100")
    document.querySelector("#loader").classList.add("opacity-0")
    document.querySelector("#main").classList.remove("opacity-0")
    document.querySelector("#main").classList.add("z-10")
  }, [showLoader])

  return (
    <>
      <div
        id="main"
        className="px-40 transition-all delay-150 opacity-0 ease-linear duration-500 relative pt-12 selection:bg-yellow-300"
      >
        <Hero />
      </div>
      <Loader />
    </>
  )
}

export default App
