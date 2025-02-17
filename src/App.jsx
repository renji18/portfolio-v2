import React, { useEffect, useState } from "react"
import { handleGetPortfolioData } from "./firebase"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null)

  // use effect to get portfolio data
  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0)
      document.documentElement.style.scrollBehavior = "smooth"
      const scrollableContainer = document.querySelector("#home")
      if (scrollableContainer) scrollableContainer.scrollTop = 0

      const response = await handleGetPortfolioData()
      setPortfolioData(response)
    }
    fetchData()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={portfolioData} />} />
          <Route path="/admin" element={<Admin data={portfolioData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
