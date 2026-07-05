import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudy from "./components/CaseStudy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EngineeringStory from "./components/EngineeringStory";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          <Route
            path="/engineering-story/:slug"
            element={<EngineeringStory />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
