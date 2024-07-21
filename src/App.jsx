import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
